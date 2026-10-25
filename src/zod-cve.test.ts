import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, test } from "vitest";

describe("zod CVE GHSA-mrhx-c7xc-m3w5", () => {
  test("locks zod to the patched version 4.6.6", () => {
    const lockfile = JSON.parse(
      readFileSync(join(process.cwd(), "package-lock.json"), "utf8"),
    );
    const zod = lockfile.packages["node_modules/zod"];
    expect(zod).toBeDefined();
    expect(zod.version).toBe("4.6.6");
  });
});
