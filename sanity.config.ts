import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { codeInput } from '@sanity/code-input'
import { schemaTypes } from './sanity/schemas'

export default defineConfig({
  projectId: 'dlw4tt0k',
  dataset: 'production',
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
