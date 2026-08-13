import { describe, expect, it } from "vitest";
import { readFileSync, readdirSync } from "node:fs";
import { resolve } from "node:path";
import { getProjectAssetUrl } from "./assets";

describe("getProjectAssetUrl", () => {
  it("mantém o caminho de armazenamento e usa o proxy público do projeto", () => {
    expect(getProjectAssetUrl("/manus-storage/logo-tc-oficial_eb38ea52.png")).toBe(
      "https://teracristas-fsnv789j.manus.space/manus-storage/logo-tc-oficial_eb38ea52.png"
    );
  });

  it("não deixa referências locais de imagens nos componentes públicos", () => {
    const componentsPath = resolve(process.cwd(), "client/src/components");
    const componentSources = readdirSync(componentsPath)
      .filter(file => file.endsWith(".tsx"))
      .map(file => readFileSync(resolve(componentsPath, file), "utf8"));

    expect(componentSources.join("\n")).not.toMatch(/src=["']\/(?:manus-storage|images)\//);
  });
});
