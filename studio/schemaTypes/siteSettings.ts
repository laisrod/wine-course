import { defineField, defineType } from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({ name: 'heroTitle', title: 'Hero — Frase principal', type: 'string' }),
    defineField({ name: 'heroName', title: 'Hero — Nome', type: 'string' }),
    defineField({ name: 'heroSubtitle', title: 'Hero — Subtítulo (ex: Wine Lover with WSET L3)', type: 'string' }),
    defineField({ name: 'heroInstagram', title: 'Hero — Instagram (ex: @winewithsimo)', type: 'string' }),
    defineField({ name: 'aboutParagraph1', title: 'Sobre — Parágrafo 1', type: 'text', rows: 4 }),
    defineField({ name: 'aboutParagraph2', title: 'Sobre — Parágrafo 2', type: 'text', rows: 4 }),
    defineField({ name: 'skillsParagraph1', title: 'O que você vai aprender — Parágrafo 1', type: 'text', rows: 6 }),
    defineField({ name: 'skillsParagraph2', title: 'O que você vai aprender — Parágrafo 2', type: 'text', rows: 3 }),
    defineField({ name: 'contactTitle', title: 'Contato — Título', type: 'string' }),
    defineField({ name: 'contactText', title: 'Contato — Texto de descrição', type: 'text', rows: 3 }),
  ],
  preview: {
    prepare: () => ({ title: 'Configurações do Site' }),
  },
})
