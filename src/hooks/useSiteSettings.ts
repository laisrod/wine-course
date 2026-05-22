import { useState, useEffect } from 'react'
import { sanityClient } from '../lib/sanity'

export interface SiteSettings {
  heroTitle: string
  heroName: string
  heroSubtitle: string
  heroInstagram: string
  aboutParagraph1: string
  aboutParagraph2: string
  skillsParagraph1: string
  skillsParagraph2: string
  contactTitle: string
  contactText: string
}

const DEFAULTS: SiteSettings = {
  heroTitle: 'Sharing my passion for wine and inspiring my friends',
  heroName: 'Simona',
  heroSubtitle: 'Wine Lover with WSET L3',
  heroInstagram: '@winewithsimo',
  aboutParagraph1:
    'I am certified with merit in WSET Level and I share my passion for wine in an accessible and elegant way. As a digital content creator, I transform technical topics into practical experiences for those who want to learn wine tasting with confidence and enjoyment.',
  aboutParagraph2:
    'I also love creating personalized wine tastings, thoughtfully designed according to the level of experience and interests of each group, so that every tasting becomes both educational and enjoyable. 🍷',
  skillsParagraph1:
    "I share tasting techniques, food-pairing tips, and practical criteria to help you choose wines with more confidence in everyday situations—whether for a dinner at home, a gift, or building a small personal wine collection. The course combines essential theory and guided practice to help you develop your palate in a structured way. I guide you through how to analyze a wine's appearance, aromas, and flavor using a clear method, so you can better identify different styles and levels of quality.",
  skillsParagraph2:
    'My goal is for you to finish the course feeling confident to taste, talk about, and choose each bottle more thoughtfully. 🍷',
  contactTitle: 'Subscription and Contact',
  contactText:
    "Would you like to participate in Simona's tastings or have questions about the classes? Send us a message and receive further information, pricing, and details of the complete program.",
}

export function useSiteSettings() {
  const [settings, setSettings] = useState<SiteSettings>(DEFAULTS)

  useEffect(() => {
    sanityClient
      .fetch<SiteSettings>(`*[_type == "siteSettings"][0]`)
      .then((data) => {
        if (data) setSettings({ ...DEFAULTS, ...data })
      })
      .catch(() => {})
  }, [])

  return settings
}
