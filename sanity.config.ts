import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'

import { schemaTypes } from './src/shared/sanity/schemas'
import { dataset, projectId } from './src/shared/sanity/env'

export default defineConfig({
  name: 'default',
  title: 'Portfolio',
  projectId,
  dataset,
  plugins: [structureTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
})
