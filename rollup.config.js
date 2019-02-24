import resolve from 'rollup-plugin-node-resolve';
import sourceMaps from 'rollup-plugin-sourcemaps';
import postcss from 'rollup-plugin-postcss';
import typescript from 'rollup-plugin-typescript2';
import external from 'rollup-plugin-peer-deps-external';
import autoprefixer from 'autoprefixer';
import pkg from './package.json';

export default {
  input: pkg.source,
  output: [
    {
      file: pkg.module,
      format: 'esm',
      sourcemap: true
    }
  ],
  plugins: [
    external(),
    postcss({
      modules: true,
      sourceMap: true,
      plugins: [
        autoprefixer()
      ]
    }),
    resolve(),
    typescript(),
    sourceMaps()
  ]
};
