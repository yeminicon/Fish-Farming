import { Request, Response } from "express";
import Appoint from "../models/Appoint";

export async function getAppointsController(req: Request, res: Response) {
  const appoints = await Appoint.find();
  res.json(appoints);
}
