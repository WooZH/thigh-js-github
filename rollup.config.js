import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import babel from '@rollup/plugin-babel';
import json from '@rollup/plugin-json';
import builtins from 'rollup-plugin-node-builtins';
import nodePolyfills from 'rollup-plugin-node-polyfills';
import { terser } from 'rollup-plugin-terser';

import pkg from './package.json';

const isExternalModule = (() => {
    const deps = new Set(Object.keys(pkg.dependencies ?? {}));
    return (id) => deps.has(id);
})();

const formats = ['cjs', 'esm', 'umd'];

export default {
    external: isExternalModule,
    input: 'src/index.ts',
    output: formats.map((format) => ({
        file: `dist/index.${format}.js`,
        // dir: `dist/${format}`,
        format,
        name: 'Thigh',
        sourcemap: true,
    })),

    plugins: [
        nodeResolve(),
        typescript(),
        commonjs(),
        builtins(),
        babel({ exclude: 'node_modules/**', babelHelpers: 'bundled' }),
        json({ compact: true }),
        nodePolyfills(),
        terser(),
    ],
};
