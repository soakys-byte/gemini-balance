import { mkdir, copyFile } from 'node:fs/promises';
import { createRequire } from 'node:module';
import { dirname, join } from 'node:path';
const require = createRequire(import.meta.url);
const threePkg = require.resolve('three-globe/package.json');
const base = dirname(threePkg);
await mkdir('dist/assets', { recursive: true });
for (const name of ['earth-night.jpg','earth-topology.png']) {
  await copyFile(join(base,'example','img',name), join('dist','assets',name));
}
console.log('Copied local globe textures');