import type { IconMap, SocialLink, Site } from '@/types'
import { Inspect } from 'lucide-react'

export const SITE: Site = {
  title: '0541-magazine',
  description:
    '0541 Magazine adalah media musik yang hadir untuk mengangkat cerita, talenta, dan karya dari berbagai penjuru',
  href: 'https://0541.tinystudioo.com',
  author: 'difaananda40',
  locale: 'en-US',
  featuredPostCount: 2,
  postsPerPage: 3,
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/blog',
    label: 'blog',
  },
  {
    href: '/authors',
    label: 'authors',
  },
  {
    href: '/about',
    label: 'about',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://instagram.com/0541magazine',
    label: 'Instagram',
  },
  {
    href: 'mailto:0541magazine@gmail.com',
    label: 'Email',
  },
  {
    href: '/rss.xml',
    label: 'RSS',
  },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  Instagram: 'lucide:instagram',
  LinkedIn: 'lucide:linkedin',
  Twitter: 'lucide:twitter',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
}
