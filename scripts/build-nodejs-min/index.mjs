import { build as esbuild } from "esbuild";
import { execa } from "execa";
import { readFileSync, rmdirSync } from "fs";
import { join } from "path";

const { stdout: listResponse } = await execa("yarn", [
  "-s",
  "lerna",
  "list",
  "--json",
  "--no-private",
  "--loglevel=quiet",
]);

const pkgs = JSON.parse(listResponse);
for (const { name, location } of pkgs) {
  console.log(`building ${name}`);
  const manifest = JSON.parse(readFileSync(join(location, "package.json"), "utf-8"));
  const outdir = join(location, "dist-node-cjs-min");
  rmdirSync(outdir, { force: true, recursive: true });
  await esbuild({
    entryPoints: [join(location, "src", "index.ts")],
    outdir,
    bundle: true,
    minify: true,
    platform: "node",
    minify: true,
    target: "node12",
    sourcemap: "inline",
    sourcesContent: false,
    external: [...Object.keys(manifest.dependencies || []), ...Object.keys(manifest.peerDependencies || [])],
  });
}
