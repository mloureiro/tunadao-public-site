import { CollectionConfig } from 'payload';

export const ContactSubmissions: CollectionConfig = {
  slug: 'contact-submissions',
  admin: {
    useAsTitle: 'subject',
    group: 'Admin',
    description: 'Mensagens recebidas pelo formulário de contacto',
    defaultColumns: ['name', 'email', 'subject', 'status', 'createdAt'],
  },
  access: {
    // Only authenticated users can view submissions
    read: ({ req: { user } }) => Boolean(user),
    // Public can create (submit form)
    create: () => true,
    // Only admins can update/delete
    update: ({ req: { user } }) => user?.role === 'admin',
    delete: ({ req: { user } }) => user?.role === 'admin',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      type: 'email',
      required: true,
    },
    {
      name: 'subject',
      type: 'text',
      required: true,
    },
    {
      name: 'message',
      type: 'textarea',
      required: true,
    },
    {
      name: 'status',
      type: 'select',
      required: true,
      defaultValue: 'new',
      options: [
        { label: 'Nova', value: 'new' },
        { label: 'Lida', value: 'read' },
        { label: 'Respondida', value: 'replied' },
        { label: 'Arquivada', value: 'archived' },
      ],
      access: {
        create: () => false, // Can't set status on creation
      },
    },
    {
      name: 'notes',
      type: 'textarea',
      admin: {
        description: 'Notas internas sobre este contacto',
      },
      access: {
        create: () => false,
      },
    },
    // Honeypot field for spam protection
    {
      name: 'honeypot',
      type: 'text',
      admin: {
        hidden: true,
      },
      hooks: {
        beforeValidate: [
          ({ value }) => {
            // If honeypot has a value, it's likely spam
            if (value) {
              throw new Error('Spam detected');
            }
            return value;
          },
        ],
      },
    },
  ],
  hooks: {
    afterChange: [
      async ({ doc, operation, req }) => {
        // Send email notification on new submission
        if (operation === 'create' && req.payload.email) {
          try {
            await req.payload.sendEmail({
              to: process.env.CONTACT_EMAIL || 'tunadao@gmail.com',
              subject: `Novo contacto: ${doc.subject}`,
              html: `
                <h2>Novo contacto recebido</h2>
                <p><strong>Nome:</strong> ${doc.name}</p>
                <p><strong>Email:</strong> ${doc.email}</p>
                <p><strong>Assunto:</strong> ${doc.subject}</p>
                <p><strong>Mensagem:</strong></p>
                <p>${doc.message.replace(/\n/g, '<br>')}</p>
              `,
            });
          } catch (error) {
            console.error('Failed to send contact notification email:', error);
          }
        }
        return doc;
      },
    ],
  },
  timestamps: true,
};
