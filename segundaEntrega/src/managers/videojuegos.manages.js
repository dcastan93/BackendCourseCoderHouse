import mongoose from "mongoose"

const schemaVideojuegos = mongoose.Schema({
  nombre: { type: String, require: true },
  genero: { type: String, require: true },
  plataforma: { type: String, require: true }
}, { versionKey: false })

class VideojuegosManager {
  
  constructor() {
    this.videojuegosDb = mongoose.model("videojuegos", schemaVideojuegos)
  }

  async guardar(datosVJ) {
    const vjGuardado = await this.videojuegosDb.create(datosVJ)
    return vjGuardado
  }

  async obtenerTodos() {
    const vjs = await this.videojuegosDb.find().lean()
    return vjs
  }

  async obtenerPorId(id) {
    const vj = await this.videojuegosDb.findById(id).lean()
    return vj
  }
}

export const videojuegosManager = new VideojuegosManager()