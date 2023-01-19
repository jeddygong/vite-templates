import { defineConfig } from 'tsup';

export default defineConfig((options) => ({
  splitting: false,
  sourcemap: false,
  entry: options.entry || ['./src/index.ts'],
  dts: options.dts || true,
  format: options.format || ['esm', 'cjs'],
  watch: options.watch || false,
  clean: true,
  minify: !options.watch,
  platform: 'node',
}));
