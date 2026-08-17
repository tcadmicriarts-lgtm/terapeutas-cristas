const STORAGE_PROXY_ORIGIN = "https://teracristas-fsnv789j.manus.space";

/**
 * Usa os caminhos retornados pelo armazenamento do projeto por meio do proxy
 * público, permitindo que a mesma imagem seja exibida no Manus e no Vercel.
 */
export function getProjectAssetUrl(storagePath: string): string {
  return new URL(storagePath, STORAGE_PROXY_ORIGIN).toString();
}

export const projectAssets = {
  posGraduacao: getProjectAssetUrl("/manus-storage/pos-graduacao-antiga_240a46cc.png"),
  devocional5DiasCover: getProjectAssetUrl("/manus-storage/devocional-5-dias-capa-01_670c84ba.png"),
} as const;
