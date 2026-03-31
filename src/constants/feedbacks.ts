export interface FeedbackItem {
  name: string
  role: string
  quote: string
}

export const FEEDBACKS: FeedbackItem[] = [
  {
    name: 'Minne van Santen',
    role: 'Enthusiast',
    quote:
      'Had an awesome wine tasting with Simona! Really like Simona’s style. She has very deep knowledge and she brings it on a very personal and flexible way. + she can do it in 3+ languages and always has a big smile on her face!',
  },
  {
    name: 'Carla V.',
    role: 'Lover of food tasting',
    quote:
      "The wine pairing aspect has changed my dinners. Today I choose wines with confidence and can better explain what I'm tasting.",
  },
  {
    name: 'Rafael S.',
    role: 'Enthusiast',
    quote:
      'The curation of the Lanzarote feature was excellent. Clear content, beautiful visuals, and a premium experience from start to finish.',
  },
  {
    name: 'Beatriz L.',
    role: 'Course participant',
    quote:
      'The tasting feedback was very insightful. I learned to perceive aroma, texture, and finish with much greater clarity.',
  },
  {
    name: 'Marcos T.',
    role: 'Beginner collector',
    quote:
      'The teaching method is modern and direct. In a short time, I was able to put together my wine selection with much better choices.',
  },
]

