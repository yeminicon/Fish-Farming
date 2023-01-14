import { Request, Response } from "express";
import Appoint from "../models/Appoint";

export async function getAppointController(req: Request, res: Response) {
  const { appointId } = req.params;
  const appoint = await Appoint.findById(appointId);
  res.json(appoint);
}
