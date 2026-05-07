export type NewsItemData = {
  title: string | null
  text: string
  image: string
  link: string | null
}

export type NewsDocData<TImage = unknown> = {
  _id: string
  title: string | null
  excerpt: string | null
  image: TImage | null
  link: string | null
  order: number | null
  publishedAt: string | null
}

export const NEWS_QUERY = `*[_type == "news"] | order(coalesce(order, 999) asc, publishedAt desc) {
  _id,
  title,
  excerpt,
  image,
  link,
  order,
  publishedAt
}`

export const FALLBACK_NEWS: NewsItemData[] = [
  {
    title: null,
    image: 'https://www.figma.com/api/mcp/asset/137b7e85-9b18-456f-8748-0dee5f88c783',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    link: null,
  },
  {
    title: null,
    image: 'https://www.figma.com/api/mcp/asset/0efa4f7b-a5f0-4228-a524-c4db6ae1b760',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    link: null,
  },
  {
    title: null,
    image: 'https://www.figma.com/api/mcp/asset/908ef34f-64db-41d0-8a9e-68b29d32d913',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    link: null,
  },
]

export function resolveNews<TImage>(
  docs: NewsDocData<TImage>[] | null | undefined,
  imageToUrl: (image: TImage) => string
): NewsItemData[] {
  const published = (docs ?? []).filter((doc) => doc.image || doc.excerpt)

  if (published.length === 0) {
    return FALLBACK_NEWS
  }

  return published.map((doc, index) => {
    const fallback = FALLBACK_NEWS[index] ?? FALLBACK_NEWS[0]

    return {
      title: doc.title,
      text: doc.excerpt ?? fallback.text,
      image: doc.image ? imageToUrl(doc.image) : fallback.image,
      link: doc.link,
    }
  })
}
