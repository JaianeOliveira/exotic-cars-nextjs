// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

const dataDirectory = path.join(process.cwd(), "data", "db.json");

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    const fileContent = fs.readFileSync(dataDirectory, "utf-8");
    return res.status(200).json(JSON.parse(fileContent).cars);
  }
  return res.status(404).json({ message: "Solicitação Inválida" });
}
