import { Request, Response } from "express";
import Appoint from "../models/Appoint";

export async function deleteAppointController(req: Request, res: Response) {
  const appointId = req.params.appointId;
  const appoint = await Appoint.findByIdAndDelete(appointId);
  res.json(appoint);
}
