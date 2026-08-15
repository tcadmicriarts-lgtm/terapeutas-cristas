const MANUS_API_ORIGIN = "https://teracristas-fsnv789j.manus.space";

/**
 * A versão Vercel é estática; por isso, os procedimentos tRPC públicos usam o
 * backend publicado pelo projeto Manus, que concentra Supabase e Resend.
 */
export function getTrpcEndpoint(hostname: string = window.location.hostname): string {
  if (hostname === "terapeutas-cristas.vercel.app") {
    return new URL("/api/trpc", MANUS_API_ORIGIN).toString();
  }

  return "/api/trpc";
}
