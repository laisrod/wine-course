import { defineField, defineType } from 'sanity'

export const event = defineType({
  name: 'event',
  title: 'Eventos',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Nome do evento', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'date', title: 'Data', type: 'date', options: { dateFormat: 'DD/MM/YYYY' }, validation: (r) => r.required() }),
    defineField({ name: 'time', title: 'Horário (ex: 19h00)', type: 'string' }),
    defineField({ name: 'location', title: 'Local', type: 'string' }),
    defineField({ name: 'description', title: 'Descrição', type: 'text', rows: 3 }),
    defineField({ name: 'link', title: 'Link de inscrição (opcional)', type: 'url' }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Disponível', value: 'available' },
          { title: 'Esgotado', value: 'sold-out' },
          { title: 'Cancelado', value: 'cancelled' },
        ],
        layout: 'radio',
      },
      initialValue: 'available',
    }),
  ],
  orderings: [
    { title: 'Data (mais próximo)', name: 'dateAsc', by: [{ field: 'date', direction: 'asc' }] },
  ],
  preview: {
    select: { title: 'title', subtitle: 'date' },
  },
})
