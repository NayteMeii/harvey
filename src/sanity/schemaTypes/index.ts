import { type SchemaTypeDefinition } from 'sanity'
import { newsType } from './newsType'
import { portfolioType } from './portfolioType'
import { serviceType } from './serviceType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [portfolioType, serviceType, newsType],
}
