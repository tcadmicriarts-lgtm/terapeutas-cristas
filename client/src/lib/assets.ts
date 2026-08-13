const STORAGE_PROXY_ORIGIN = "https://teracristas-fsnv789j.manus.space";

/**
 * Usa os caminhos retornados pelo armazenamento do projeto por meio do proxy
 * público, permitindo que a mesma imagem seja exibida no Manus e no Vercel.
 */
export function getProjectAssetUrl(storagePath: string): string {
  return new URL(storagePath, STORAGE_PROXY_ORIGIN).toString();
}
