import { defineConfig } from 'vitest/config'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    coverage: {
      exclude: ['build/**'],
    },
    environmentMatchGlobs: [['src/http/controllers/**', 'prisma']],
  },
})
