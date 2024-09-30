import { type SchemaTypeDefinition } from 'sanity'

import {blockContentType} from './blockContentType'
import {categoryType} from './categoryType'
import {postType} from './postType'
import {authorType} from './authorType'
import blog from '../schemas/blog'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, categoryType, blog , postType, authorType],
}
