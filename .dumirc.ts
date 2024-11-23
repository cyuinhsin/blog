import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  base: '/blog/',
  publicPath: '/blog/',
  themeConfig: {
    name: 'blog',
  },
});
