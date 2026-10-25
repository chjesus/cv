import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'

import { schemaTypes } from './src/shared/sanity/schemas'

export default defineConfig({
  name: 'default',
  title: 'Portfolio',
  projectId: 'd1c9n3s6',
  dataset: 'production',
  plugins: [structureTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
})
