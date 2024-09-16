import { defineConfig } from "umi";
import AutoImport from "unplugin-auto-import/vite"
import { defaultRoutes } from './src/routes'

import path from "path";

const pathSrc = path.resolve(__dirname, "src");

export default defineConfig({
  routes: defaultRoutes,
  plugins: ['@umijs/plugins/dist/antd', '@umijs/plugins/dist/tailwindcss',],
  antd: {},
  tailwindcss: {},
  npmClient: 'pnpm',
  vite: {
    plugins: [
      AutoImport({ imports: ['react',], dts: path.resolve(pathSrc, "types", "auto-imports.d.ts"), }),
    ],
  }

});
