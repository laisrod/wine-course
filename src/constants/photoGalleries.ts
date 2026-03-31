import galery1Img1 from '../assets/images/galery1/Screenshot from 2026-03-06 15-02-53.png'
import galery1Img2 from '../assets/images/galery1/Screenshot from 2026-03-06 15-03-08.png'
import galery1Img3 from '../assets/images/galery1/Screenshot from 2026-03-06 15-03-13.png'
import galery1Img4 from '../assets/images/galery1/Screenshot from 2026-03-06 15-03-17.png'
import galery1Img5 from '../assets/images/galery1/Screenshot from 2026-03-06 15-03-22.png'
import galery2Img1 from '../assets/images/galery2/Screenshot from 2026-03-06 15-13-12.png'
import galery2Img2 from '../assets/images/galery2/Screenshot from 2026-03-06 15-13-16.png'
import galery2Img3 from '../assets/images/galery2/Screenshot from 2026-03-06 15-13-20.png'
import galery2Img4 from '../assets/images/galery2/Screenshot from 2026-03-06 15-13-24.png'
import galery2Img5 from '../assets/images/galery2/Screenshot from 2026-03-06 15-13-27.png'
import galery3Img1 from '../assets/images/galery3/Screenshot from 2026-03-06 15-15-47.png'
import galery3Img2 from '../assets/images/galery3/Screenshot from 2026-03-06 15-20-21.png'
import galery3Img3 from '../assets/images/galery3/Screenshot from 2026-03-06 15-20-25.png'
import galery3Img4 from '../assets/images/galery3/Screenshot from 2026-03-06 15-20-30.png'
import galery3Img5 from '../assets/images/galery3/Screenshot from 2026-03-06 15-20-35.png'
import galery3Img6 from '../assets/images/galery3/Screenshot from 2026-03-06 15-20-38.png'
import galery4Img1 from '../assets/images/galery4/Screenshot from 2026-03-20 09-04-02 (1).jpeg'
import galery4Img3 from '../assets/images/galery4/Screenshot from 2026-03-20 09-06-33.jpeg'
import galery4Img4 from '../assets/images/galery4/Screenshot from 2026-03-06 15-23-43.png'
import galery4Img5 from '../assets/images/galery4/Screenshot from 2026-03-06 15-23-49.png'
import galery4Img6 from '../assets/images/galery4/Screenshot from 2026-03-06 15-24-03.png'
import galery4Img7 from '../assets/images/galery4/Screenshot from 2026-03-31 05-33-58.png'

export interface PhotoGallery {
  title: string
  description: string
  photos: { src: string; alt: string }[]
}

export const PHOTO_GALLERIES: PhotoGallery[] = [
  {
    title: 'Abruzzo wine tasting',
    description: 'Montepulciano, Pecorino grape varieties only 10 minutes far away from Adriatic coast.',
    photos: [
      { src: galery1Img1, alt: 'Foto da galeria 1 - degustacao 1' },
      { src: galery1Img2, alt: 'Foto da galeria 1 - degustacao 2' },
      { src: galery1Img3, alt: 'Foto da galeria 1 - degustacao 3' },
      { src: galery1Img4, alt: 'Foto da galeria 1 - degustacao 4' },
      { src: galery1Img5, alt: 'Foto da galeria 1 - degustacao 5' },
    ],
  },
  {
    title: 'Sudtirol wine tasting',
    description: 'Gewurtraminer, Sauvignon Blanc, Lagrein grape varieties surrounded by Dolomites mountains.',
    photos: [
      { src: galery2Img1, alt: 'Foto da galeria 2 - aula 1' },
      { src: galery2Img2, alt: 'Foto da galeria 2 - aula 2' },
      { src: galery2Img3, alt: 'Foto da galeria 2 - aula 3' },
      { src: galery2Img4, alt: 'Foto da galeria 2 - aula 4' },
      { src: galery2Img5, alt: 'Foto da galeria 2 - aula 5' },
    ],
  },
  {
    title: 'Catalunya wine tasting',
    description: 'Cava, Garnatxa, Syrah at their best.',
    photos: [
      { src: galery3Img1, alt: 'Foto da galeria 3 - eventos 1' },
      { src: galery3Img2, alt: 'Foto da galeria 3 - eventos 2' },
      { src: galery3Img3, alt: 'Foto da galeria 3 - eventos 3' },
      { src: galery3Img4, alt: 'Foto da galeria 3 - eventos 4' },
      { src: galery3Img5, alt: 'Foto da galeria 3 - eventos 5' },
      { src: galery3Img6, alt: 'Foto da galeria 3 - eventos 6' },
    ],
  },
  {
    title: 'Wine tastings at home',
    description: 'Vertical wine tasting with same grape variety in different regions of the world.',
    photos: [
      { src: galery4Img1, alt: 'Foto da galeria 4 - recomendacoes 1' },
      { src: galery4Img3, alt: 'Foto da galeria 4 - recomendacoes 2' },
      { src: galery4Img4, alt: 'Foto da galeria 4 - recomendacoes 3' },
      { src: galery4Img5, alt: 'Foto da galeria 4 - recomendacoes 4' },
      { src: galery4Img6, alt: 'Foto da galeria 4 - recomendacoes 5' },
      { src: galery4Img7, alt: 'Foto da galeria 4 - recomendacoes 6' },
    ],
  },
]

