import { Router } from "express";
import { postVideojuegosController } from "../controllers/vieojuegos.post.controller.js";

export const routerApi = Router();

routerApi.post("/videojuegos", postVideojuegosController);
