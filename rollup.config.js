import resolve from 'rollup-plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import postcssModules from 'postcss-modules';
import scss from 'rollup-plugin-scss';
import typescript from 'rollup-plugin-typescript';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';

const cssExportMap = {};
const extensions = ['.ts', '.tsx'];

export default {
  input: 'src/index.tsx',
  output: {
    file: 'dist/bundle.js',
    format: 'cjs'
  },
  external: [
    'react',
    'react-dom'
  ],
  plugins: [
    resolve({
      extensions,
      jsnext: true,
      // module: true
    }),
    scss(),
    postcss({
      plugins: [
        postcssModules({
          getJSON (id, exportTokens) {
            cssExportMap[id] = exportTokens;
          }
        })
      ],
      getExportNamed: false,
      getExport (id) {
        return cssExportMap[id];
      },
      extract: 'dist/styles.css'
    }),
    commonjs(),
    // typescript()
    babel({
      extensions,
      exclude: 'node_modules/**'
    })
  ]
}