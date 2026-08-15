import type { RequestHandler } from "express";

const VERCEL_PRODUCTION_ORIGIN = "https://terapeutas-cristas.vercel.app";

/** Permite que a versão estática Vercel acesse somente a API deste projeto. */
export const allowVercelProductionCors: RequestHandler = (req, res, next) => {
  const origin = req.headers.origin;
  const isVercelProduction = origin === VERCEL_PRODUCTION_ORIGIN;

  if (isVercelProduction) {
    res.setHeader("Access-Control-Allow-Origin", VERCEL_PRODUCTION_ORIGIN);
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.setHeader("Vary", "Origin");

    if (req.method === "OPTIONS") {
      res.status(204).end();
      return;
    }
  }

  next();
};
