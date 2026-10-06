// Optimitza les fotos en compilar (no toca les originals del repositori).
// Per a cada JPG de public/fotos genera, només dins de dist/:
//   - dist/fotos/...   mateixa ruta, redimensionada (màx. 1800 px) i comprimida
//   - dist/fotos-t/... mateixa ruta, miniatura (màx. 900 px) per a targetes i galeries
// Així només cal continuar deixant les fotos originals a public/fotos.
// Si alguna foto falla, es manté l'original: la compilació mai s'atura per això.
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const EXT = /\.jpe?g$/i;

async function walk(dir) {
  const out = [];
  for (const e of await fs.readdir(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...(await walk(p)));
    else if (EXT.test(e.name)) out.push(p);
  }
  return out;
}

export default function optimitzaFotos({ gran = 1800, mini = 900 } = {}) {
  return {
    name: 'optimitza-fotos',
    hooks: {
      'astro:build:done': async ({ dir, logger }) => {
        try {
          const root = fileURLToPath(dir);
          const src = path.join(root, 'fotos');
          const dst = path.join(root, 'fotos-t');
          let files;
          try { files = await walk(src); } catch { return; }
          let ok = 0, fail = 0, abans = 0, despres = 0;
          const cua = [...files];
          const treballador = async () => {
            while (cua.length) {
              const f = cua.pop();
              try {
                const buf = await fs.readFile(f);
                abans += buf.length;
                const base = sharp(buf, { failOn: 'none' }).rotate();
                const gros = await base.clone()
                  .resize({ width: gran, height: gran, fit: 'inside', withoutEnlargement: true })
                  .jpeg({ quality: 76, progressive: true, mozjpeg: true }).toBuffer();
                const petit = await base.clone()
                  .resize({ width: mini, height: mini, fit: 'inside', withoutEnlargement: true })
                  .jpeg({ quality: 72, progressive: true, mozjpeg: true }).toBuffer();
                const sortida = path.join(dst, path.relative(src, f));
                await fs.mkdir(path.dirname(sortida), { recursive: true });
                const finalGran = gros.length < buf.length ? gros : buf;
                await fs.writeFile(f, finalGran);
                await fs.writeFile(sortida, petit.length < finalGran.length ? petit : finalGran);
                despres += finalGran.length;
                ok++;
              } catch (e) {
                fail++;
                logger.warn(`No s'ha pogut optimitzar ${path.relative(src, f)}: ${e.message}`);
              }
            }
          };
          await Promise.all(Array.from({ length: 4 }, treballador));
          logger.info(`Fotos optimitzades: ${ok} (errors: ${fail}). ${(abans / 1048576).toFixed(0)} MB -> ${(despres / 1048576).toFixed(0)} MB.`);
        } catch (e) {
          logger.warn(`Optimització de fotos omesa: ${e.message}`);
        }
      }
    }
  };
}
