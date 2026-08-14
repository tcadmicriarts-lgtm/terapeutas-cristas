const STORAGE_PROXY_ORIGIN = "https://teracristas-fsnv789j.manus.space";
const storagePath = "/manus-storage/guia-5-dias-silenciar-ansiedade_587d0f06.pdf";

export const leadMagnet = {
  title: "5 Dias para Silenciar a Ansiedade e Ouvir a Voz de Deus",
  description: "Um devocional gratuito para mulheres que desejam silenciar a ansiedade e ouvir a voz de Deus.",
  url: new URL(storagePath, STORAGE_PROXY_ORIGIN).toString(),
} as const;
