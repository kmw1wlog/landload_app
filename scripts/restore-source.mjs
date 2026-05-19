import { existsSync, readdirSync, readFileSync, unlinkSync, writeFileSync } from "node:fs";
import { spawnSync } from "node:child_process";
import path from "node:path";

const cwd = process.cwd();
const archivePath = path.join(cwd, "app-source.tgz");
const chunkFiles = readdirSync(cwd)
  .filter((name) => /^app-source\.tgz\.b64\.part-\d+$/.test(name))
  .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
const requiredPaths = [
  "app/onboarding/page.tsx",
  "src/store/useAppStore.ts",
  "prisma/schema.prisma",
  "scripts/check-public-apis.ts"
].map((item) => path.join(cwd, item));

if (!existsSync(archivePath) && chunkFiles.length === 0) {
  process.exit(0);
}

const needsRestore =
  process.env.FORCE_RESTORE_SOURCE === "true" ||
  requiredPaths.some((target) => !existsSync(target));

if (!needsRestore) {
  process.exit(0);
}

if (!existsSync(archivePath) && chunkFiles.length > 0) {
  const base64 = chunkFiles
    .map((name) => readFileSync(path.join(cwd, name), "utf8").trim())
    .join("");

  writeFileSync(archivePath, Buffer.from(base64, "base64"));
}

const result = spawnSync("tar", ["-xzf", archivePath, "-C", cwd], {
  stdio: "inherit"
});

if (result.status !== 0) {
  process.exit(result.status ?? 1);
}

if (chunkFiles.length > 0 && existsSync(archivePath)) {
  unlinkSync(archivePath);
}
