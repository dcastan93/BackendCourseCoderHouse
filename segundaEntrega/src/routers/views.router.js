import { Router } from "express"; 
import { videojuegosManager } from "../managers/videojuegos.manages.js";

export const routerVistas = Router();

routerVistas.get("/", (req, res, next) => {
  res.redirect("/videojuegos");
});
routerVistas.get("/videojuegos", async (req, res, next) => {
  const videojuegos = await videojuegosManager.obtenerTodos()
  console.log(videojuegos)
    res.render("videojuegos", { 
      pageTitle: "Videojuegos",
      hayVideojuegos: videojuegos.length > 0,
      videojuegos
    });
});
