import { videojuegosManager } from "../managers/videojuegos.manages.js";

export async function postVideojuegosController(req, res, next) {
  const datosVJ = req.body;
  const result = await videojuegosManager.guardar(datosVJ);
  req["io"].sockets.emit("videojuegos", await videojuegosManager.obtenerTodos())
  res.json(result);
}
