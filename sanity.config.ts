import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { codeInput } from '@sanity/code-input'
import { schemaTypes } from './sanity/schemas'

export default defineConfig({
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
  dataset: import.meta.env.PUBLIC_SANITY_DATASET,
  title: 'Rohail Khan Shinwari Website',
  basePath: '/studio',
  plugins: [
    structureTool(),
    visionTool(),
    codeInput(),
  ],
  schema: {
    types: schemaTypes,
  },
})
