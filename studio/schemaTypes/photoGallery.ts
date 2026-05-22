import { defineField, defineType } from 'sanity'

export const photoGallery = defineType({
  name: 'photoGallery',
  title: 'Galerias de Fotos',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Título da galeria', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'description', title: 'Descrição', type: 'text', rows: 2 }),
    defineField({ name: 'order', title: 'Ordem de exibição (1, 2, 3...)', type: 'number' }),
    defineField({
      name: 'photos',
      title: 'Fotos',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            defineField({
              name: 'alt',
              title: 'Descrição da foto (para acessibilidade)',
              type: 'string',
            }),
          ],
        },
      ],
    }),
  ],
  orderings: [
    { title: 'Ordem de exibição', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] },
  ],
  preview: {
    select: { title: 'title', subtitle: 'description', media: 'photos.0' },
  },
})
