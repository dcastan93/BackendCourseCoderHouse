import express, { Router } from "express";
import { personasRouter } from "./personasRouter.js";
import { routerVentas } from "./routerVentas.js";

export const apiRouter = Router();

apiRouter.use((req, res, next) => {
  console.log("pasa por api Router");
  next()
})

apiRouter.use(express.json())
apiRouter.use(express.urlencoded({extends: true}))

apiRouter.use("/personas", personasRouter)
apiRouter.use("/ventas", routerVentas)
