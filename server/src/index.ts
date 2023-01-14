import { config } from "dotenv";
config();

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { getAppointsController } from "./controllers/getAppointsController";
import { createAppointController } from "./controllers/createAppointController";
import { deleteAppointController } from "./controllers/deleteAppointController";
import { getAppointController } from "./controllers/getAppointController";
import { createCardForDeckController } from "./controllers/createCardForDeckController";
import { deleteCardOnDeckController } from "./controllers/deleteCardOnDeckController";

const PORT = 5000;

const app = express();

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());

app.get("/appoints", getAppointsController);
app.post("/appoints", createAppointController);
app.delete("/appoints/:appointId", deleteAppointController);
app.get("/appoint/:appointId", getAppointController);
app.post("/decks/:deckId/cards", createCardForDeckController);
app.delete("/decks/:deckId/cards/:index", deleteCardOnDeckController);

mongoose.connect("mongodb://localhost:27017/appointPoint"!).then(() => {
  console.log(`listening on port ${PORT}`);
  app.listen(PORT);
});
