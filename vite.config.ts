import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig(({ command }) => {
  const isServe = command === 'serve';
  
  return {
    plugins: [react()],
    root: isServe ? '.' : undefined,
    build: isServe ? undefined : {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'FlipCount',
      fileName: (format) => `flip-count.${format}.js`,
      formats: ['es', 'cjs', 'umd']
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    },
      sourcemap: true,
      emptyOutDir: true
    }
  };
});