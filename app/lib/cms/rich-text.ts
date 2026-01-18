/**
 * Rich Text Converter - Convert PayloadCMS Lexical format to HTML
 */

import type { CMSRichText, CMSRichTextNode } from './types';

// Text format flags (Lexical uses bitmasks)
const IS_BOLD = 1;
const IS_ITALIC = 2;
const IS_STRIKETHROUGH = 4;
const IS_UNDERLINE = 8;
const IS_CODE = 16;
const IS_SUBSCRIPT = 32;
const IS_SUPERSCRIPT = 64;

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function formatText(text: string, format: number): string {
  let result = escapeHtml(text);

  if (format & IS_CODE) {
    result = `<code>${result}</code>`;
  }
  if (format & IS_BOLD) {
    result = `<strong>${result}</strong>`;
  }
  if (format & IS_ITALIC) {
    result = `<em>${result}</em>`;
  }
  if (format & IS_UNDERLINE) {
    result = `<u>${result}</u>`;
  }
  if (format & IS_STRIKETHROUGH) {
    result = `<s>${result}</s>`;
  }
  if (format & IS_SUBSCRIPT) {
    result = `<sub>${result}</sub>`;
  }
  if (format & IS_SUPERSCRIPT) {
    result = `<sup>${result}</sup>`;
  }

  return result;
}

function renderNode(node: CMSRichTextNode): string {
  switch (node.type) {
    case 'text':
      if (node.text !== undefined) {
        return formatText(node.text, node.format || 0);
      }
      return '';

    case 'linebreak':
      return '<br />';

    case 'paragraph': {
      const pContent = node.children?.map(renderNode).join('') || '';
      return `<p>${pContent}</p>`;
    }

    case 'heading': {
      const hContent = node.children?.map(renderNode).join('') || '';
      const tag = node.tag || 'h2';
      return `<${tag}>${hContent}</${tag}>`;
    }

    case 'list': {
      const listContent = node.children?.map(renderNode).join('') || '';
      const listTag = node.listType === 'number' ? 'ol' : 'ul';
      return `<${listTag}>${listContent}</${listTag}>`;
    }

    case 'listitem': {
      const liContent = node.children?.map(renderNode).join('') || '';
      return `<li>${liContent}</li>`;
    }

    case 'link': {
      const linkContent = node.children?.map(renderNode).join('') || '';
      const url = node.url || '#';
      const target = node.target ? ` target="${node.target}"` : '';
      const rel = node.rel ? ` rel="${node.rel}"` : '';
      return `<a href="${escapeHtml(url)}"${target}${rel}>${linkContent}</a>`;
    }

    case 'quote': {
      const quoteContent = node.children?.map(renderNode).join('') || '';
      return `<blockquote>${quoteContent}</blockquote>`;
    }

    case 'code': {
      const codeContent = node.children?.map(renderNode).join('') || '';
      return `<pre><code>${codeContent}</code></pre>`;
    }

    case 'horizontalrule':
      return '<hr />';

    case 'upload': {
      // Handle uploaded images
      // @ts-expect-error - value contains media data
      const media = node.value;
      if (media?.url) {
        const alt = media.alt || '';
        return `<img src="${escapeHtml(media.url)}" alt="${escapeHtml(alt)}" />`;
      }
      return '';
    }

    default:
      // For unknown node types, try to render children
      if (node.children) {
        return node.children.map(renderNode).join('');
      }
      return '';
  }
}

/**
 * Convert PayloadCMS Lexical rich text to HTML string
 */
export function richTextToHtml(richText: CMSRichText | null | undefined): string {
  if (!richText?.root?.children) {
    return '';
  }

  return richText.root.children.map(renderNode).join('');
}

/**
 * Convert PayloadCMS Lexical rich text to plain text (strip HTML)
 */
export function richTextToPlainText(richText: CMSRichText | null | undefined): string {
  if (!richText?.root?.children) {
    return '';
  }

  function extractText(node: CMSRichTextNode): string {
    if (node.type === 'text' && node.text !== undefined) {
      return node.text;
    }

    if (node.type === 'linebreak') {
      return '\n';
    }

    if (node.children) {
      return node.children.map(extractText).join('');
    }

    return '';
  }

  return richText.root.children
    .map(extractText)
    .join('\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

/**
 * Estimate reading time from rich text content
 */
export function estimateReadingTime(richText: CMSRichText | null | undefined): number {
  const text = richTextToPlainText(richText);
  const wordCount = text.split(/\s+/).filter(Boolean).length;
  const wordsPerMinute = 200;
  return Math.max(1, Math.ceil(wordCount / wordsPerMinute));
}
