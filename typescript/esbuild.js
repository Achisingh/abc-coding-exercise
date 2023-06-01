/* eslint-disable no-console */
const { build } = require('esbuild');

console.log('Starting build.');
build({
    entryPoints: ['src/index.ts', 'src/server.ts'],
    bundle: true,
    sourcemap: process.env.NODE_ENV === 'dev',
    platform: 'node',
    target: 'node14',
    outdir: 'dist',
    external: ['aws-sdk'],
    format: 'cjs',
    minify: process.env.NODE_ENV === 'dev'
})
    .then(() => {
        console.log('Build complete.');
    })
    .catch((e) => {
        console.error('Build failed.');
        console.error(e);
        process.exit(1);
    });
