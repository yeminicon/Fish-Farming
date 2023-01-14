import { Request, Response } from "express";
import Appoint from "../models/Appoint";

export async function createAppointController(req: Request, res: Response) {
  const newAppoint = new Appoint({
    title: req.body.title,
  name: req.body.name,
  date: req.body.date,
  address:req.body.address,
  phone: req.body.phone,
  });
  const createdAppoint = await newAppoint.save();
  res.json(createdAppoint);
}
