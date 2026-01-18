// Store pending rebuild request
let pendingRebuild: NodeJS.Timeout | null = null;
const DEBOUNCE_MS = 30_000; // 30 seconds

/**
 * Triggers a frontend rebuild via GitHub Actions workflow_dispatch.
 * Debounces multiple rapid changes to prevent excessive rebuilds.
 */
export async function triggerFrontendRebuild(
  collection: string,
  operation: string
): Promise<void> {
  const token = process.env.GITHUB_TOKEN;
  const owner = process.env.GITHUB_OWNER;
  const repo = process.env.GITHUB_REPO;

  if (!token || !owner || !repo) {
    console.log('[Rebuild] Skipping - GitHub credentials not configured');
    return;
  }

  // Clear any pending rebuild
  if (pendingRebuild) {
    clearTimeout(pendingRebuild);
    console.log(`[Rebuild] Debouncing: ${collection} ${operation}`);
  }

  // Schedule rebuild after debounce period
  pendingRebuild = setTimeout(async () => {
    pendingRebuild = null;

    try {
      const response = await fetch(
        `https://api.github.com/repos/${owner}/${repo}/actions/workflows/deploy.yml/dispatches`,
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/vnd.github.v3+json',
          },
          body: JSON.stringify({ ref: 'main' }),
        }
      );

      if (response.ok || response.status === 204) {
        console.log(`[Rebuild] Triggered for ${collection} ${operation}`);
      } else {
        const errorText = await response.text();
        console.error(`[Rebuild] Failed (${response.status}): ${errorText}`);
      }
    } catch (error) {
      console.error('[Rebuild] Error:', error);
    }
  }, DEBOUNCE_MS);

  console.log(`[Rebuild] Scheduled for ${collection} ${operation} (in ${DEBOUNCE_MS / 1000}s)`);
}
