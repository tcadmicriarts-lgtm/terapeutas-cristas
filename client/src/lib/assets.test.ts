import { describe, expect, it } from "vitest";
import { getProjectAssetUrl } from "./assets";

describe("getProjectAssetUrl", () => {
  it("mantém o caminho de armazenamento e usa o proxy público do projeto", () => {
    expect(getProjectAssetUrl("/manus-storage/logo-tc-oficial_eb38ea52.png")).toBe(
      "https://teracristas-fsnv789j.manus.space/manus-storage/logo-tc-oficial_eb38ea52.png"
    );
  });
});
