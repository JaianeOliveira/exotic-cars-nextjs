import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

import car from "types/car";

const dataDirectory = path.join(process.cwd(), "data", "db.json");

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    const { slug } = req.query;
    const fileContent = fs.readFileSync(dataDirectory, "utf-8");
    const data = JSON.parse(fileContent).cars;
    const selectedCar: car = data.find((car: car) => car.slug === slug);
    if (!selectedCar) res.status(404).json({ message: "Carro não encontrado" });
    return res.status(200).json(selectedCar);
  }
  return res.status(404).json({ message: "Solicitação inválida" });
}
