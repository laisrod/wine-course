import { defineField, defineType } from 'sanity'

export const feedback = defineType({
  name: 'feedback',
  title: 'Feedbacks',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Nome', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'role', title: 'Descrição (ex: Enthusiast, Course participant)', type: 'string' }),
    defineField({ name: 'quote', title: 'Depoimento', type: 'text', rows: 5, validation: (r) => r.required() }),
    defineField({ name: 'order', title: 'Ordem de exibição (1, 2, 3...)', type: 'number' }),
  ],
  orderings: [
    { title: 'Ordem de exibição', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] },
  ],
  preview: {
    select: { title: 'name', subtitle: 'role' },
  },
})
