export type UTMParameters = Partial<{
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_term: string;
  utm_content: string;
}>;

const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"] as const;
const MAX_UTM_LENGTH = 255;

export function captureUtmParameters(search: string): UTMParameters {
  const query = new URLSearchParams(search);
  return UTM_KEYS.reduce<UTMParameters>((parameters, key) => {
    const value = query.get(key)?.trim().slice(0, MAX_UTM_LENGTH);
    if (value) parameters[key] = value;
    return parameters;
  }, {});
}

export function withUtmParameters<T extends Record<string, unknown>>(
  lead: T,
  parameters: UTMParameters
): T & UTMParameters {
  return { ...lead, ...parameters };
}
