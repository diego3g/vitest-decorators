import { defineConfig } from 'vitest/config'
import { esbuildDecorators } from 'esbuild-decorators'

export default defineConfig({
  optimizeDeps: {
    esbuildOptions: {
      plugins: [
        esbuildDecorators(),
      ]
    }
  }
})