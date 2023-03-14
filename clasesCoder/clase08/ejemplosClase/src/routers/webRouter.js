import { Router } from "express";

export const webRouter = Router();

webRouter.use((req, res, next) => {
  console.log("pasa por el web Router");
  next()
})

webRouter.get("/personas", (req, res) => { res.send("<h1>PErsonas</h1>"); });
webRouter.get("/ventas", (req, res) => { res.send("<h1>Ventas</h1>"); });
