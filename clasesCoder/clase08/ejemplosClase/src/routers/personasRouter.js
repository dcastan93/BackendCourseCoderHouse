import { Router } from "express";

export const personasRouter = Router();
personasRouter.get("/", (req, res, next) => {
  console.log("pasa por el get a personas")
  next()},(req, res) => { res.json([]); });
personasRouter.post("/", (req, res) => { res.json(); });
personasRouter.put("/", (req, res) => { res.json(); });
personasRouter.delete("/", (req, res) => { res.json(); });
