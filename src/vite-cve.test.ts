import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, test } from "vitest";

describe("vite CVE GHSA-587h-7wmj-h5pm", () => {
  test("locks vite to the patched version 8.3.3", () => {
    const lockfile = JSON.parse(
      readFileSync(join(process.cwd(), "package-lock.json"), "utf8"),
    );
    const vite = lockfile.packages["node_modules/vite"];
    expect(vite).toBeDefined();
    expect(vite.version).toBe("8.3.3");
  });
});
