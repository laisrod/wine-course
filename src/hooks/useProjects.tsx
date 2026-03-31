import type { ProjectData } from '../types'
import palevaImg from '../assets/images/paleva.png'
import brazilianCinemaImg from '../assets/images/brazilian-cinema.jpg'
import roseShopImg from '../assets/images/rose-shop.jpg'
import constellationImg from '../assets/images/constellation.png'
import jokesAppImg from '../assets/images/jokes-app.jpg'
import budgetsAppImg from '../assets/images/budgets-app.jpg'


const PROJECTS: ProjectData[] = [
  {
    title: 'Modulo 1: Fundamentos da Degustacao',
    year: '2026',
    description:
      'Introducao ao metodo de degustacao, leitura visual, analise olfativa e avaliacao de sabor. Ideal para quem quer ganhar repertorio e seguranca desde a primeira taca.',
    techs: [
      'Aula Ao Vivo',
      'Material de Apoio',
      'Pratica Sensorial',
      'Exercicios Guiados',
    ],
    repoUrl: '#skills',
    demoUrl: '#contact',
    imageUrl: palevaImg,
    imageAlt: 'Taca de vinho em degustacao',
    featured: true,
  },
  {
    title: 'Modulo 2: Harmonizacao sem Complicacao',
    year: '2025',
    description:
      'Combinacoes de vinhos com pratos do dia a dia, tecnicas para equilibrar sabores e guia pratico para criar harmonizacoes de forma intuitiva.',
    techs: [
      'Food Pairing',
      'Estudo de Estilos',
      'Aplicacao Pratica',
      'Guia de Compras',
    ],
    repoUrl: '#skills',
    demoUrl: '#contact',
    imageUrl: brazilianCinemaImg,
    imageAlt: 'Mesa posta para harmonizacao de vinhos',
    featured: false,
  },
  {
    title: 'Modulo 3: Regioes e Rotulos',
    year: '2026',
    description:
      'Panorama de regioes essenciais com foco especial em Lanzarote, Ilhas Canarias. Entenda terroir, tipicidade e como escolher rotulos com mais criterio.',
    techs: [
      'Lanzarote',
      'Origem e Terroir',
      'Leitura de Rotulo',
      'Curadoria',
    ],
    repoUrl: '#skills',
    demoUrl: '#contact',
    imageUrl: roseShopImg,
    imageAlt: 'Rotulos de vinho de diferentes regioes',
    featured: false,
  },
  {
    title: 'Degustacoes Tematicas',
    year: '2025',
    description:
      'Encontros dedicados a estilos, uvas e safras. Cada aula propoe comparacoes orientadas para aprimorar percepcao e memoria sensorial.',
    techs: [
      'Degustacao Vertical',
      'Comparativo de Uvas',
      'Aulas Praticas',
      'Comunidade',
    ],
    repoUrl: '#projects',
    demoUrl: '#contact',
    imageUrl: constellationImg,
    imageAlt: 'Aula de degustacao de vinhos',
    featured: false,
  },
  {
    title: 'Conteudo Digital Exclusivo',
    year: '2025',
    description:
      'Biblioteca de fotos, videos curtos, recomendacoes e resumos para revisar cada tema no seu ritmo, com linguagem clara e foco pratico.',
    techs: [
      'Videos',
      'Guias Rapidos',
      'Checklist de Degustacao',
      'Recomendacoes',
    ],
    repoUrl: '#projects',
    demoUrl: '#contact',
    imageUrl: jokesAppImg,
    imageAlt: 'Conteudo digital sobre vinhos',
    featured: false,
  },
  {
    title: 'Eventos e Experiencias',
    year: '2025',
    description:
      'Agenda de encontros, degustacoes especiais e indicacoes de rotulos para diferentes ocasioes, sempre com o olhar curador da Simona.',
    techs: [
      'Eventos',
      'Recomendacoes',
      'Networking',
      'Acompanhamento',
    ],
    repoUrl: '#projects',
    demoUrl: '#contact',
    imageUrl: budgetsAppImg,
    imageAlt: 'Evento de vinhos com degustacao',
    featured: false,
  },
]

export function useProjects() {
  return { projects: PROJECTS }
}
