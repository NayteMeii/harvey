export type ServiceItemData = {
  number: string
  title: string
  description: string
  image: string
}

export type ServiceDocData<TImage = unknown> = {
  _id: string
  title: string | null
  description: string | null
  image: TImage | null
  order: number | null
}

export const SERVICES_QUERY = `*[_type == "service"] | order(order asc) { _id, title, description, image, order }`

export const FALLBACK_SERVICES: ServiceItemData[] = [
  {
    number: '1',
    title: 'Brand Discovery',
    description:
      'Placeholder description of this service. Explain the value you provide and the outcomes clients can expect. Keep it to two or three sentences.',
    image: 'https://www.figma.com/api/mcp/asset/8a76528a-46ef-43cf-bccb-e24e13b1a026',
  },
  {
    number: '2',
    title: 'Web Design & Dev',
    description:
      'Placeholder description of this service. Explain the value you provide and the outcomes clients can expect. Keep it to two or three sentences.',
    image: 'https://www.figma.com/api/mcp/asset/7b569c09-7e90-4a51-9bfc-9b47b0ede0fe',
  },
  {
    number: '3',
    title: 'Marketing',
    description:
      'Placeholder description of this service. Explain the value you provide and the outcomes clients can expect. Keep it to two or three sentences.',
    image: 'https://www.figma.com/api/mcp/asset/3a3eeb5c-5af8-449e-84bf-20e1013d9b77',
  },
  {
    number: '4',
    title: 'Photography',
    description:
      'Placeholder description of this service. Explain the value you provide and the outcomes clients can expect. Keep it to two or three sentences.',
    image: 'https://www.figma.com/api/mcp/asset/45eb3295-a439-4150-b936-b68c5ae8c8d2',
  },
]

export function resolveServices<TImage>(
  docs: ServiceDocData<TImage>[] | null | undefined,
  imageToUrl: (image: TImage) => string
): ServiceItemData[] {
  const publishedServices = (docs ?? []).filter((doc) => doc.title)

  if (publishedServices.length === 0) {
    return FALLBACK_SERVICES
  }

  return publishedServices.map((doc, index) => {
    const fallback = FALLBACK_SERVICES[index] ?? FALLBACK_SERVICES[0]

    return {
      number: String(index + 1),
      title: doc.title ?? fallback.title,
      description: doc.description ?? fallback.description,
      image: doc.image ? imageToUrl(doc.image) : fallback.image,
    }
  })
}
