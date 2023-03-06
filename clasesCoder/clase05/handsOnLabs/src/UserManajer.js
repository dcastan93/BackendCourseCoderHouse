import { User } from "./User.js" 
import fs from "fs/promises"
import crypto from "crypto"

//salt es un codigo secreto para encriptar las contraseñas
const salt = crypto.randomBytes(128).toString("base64")

function encriptar(sinEncriptar){
  const encriptado = crypto.createHmac("sha256", salt).update(sinEncriptar).digest("hex")
  return encriptado
}

export class UserManager {
  constructor(ruta){
    this.ruta = ruta
    this.users = []
    console.log(this.ruta)
  }
  async read(){
    const json = await fs.readFile(this.ruta, "utf-8")
    this.users = JSON.parse(json)
  }
  async save(){
    const nuevoJson = JSON.stringify(this.users, null, 2)
    await fs.writeFile(this.ruta, nuevoJson)
  }
  async crearUsuarios({nombre, apellido, userName, password}) {
    await this.read()
    const user = new User({nombre, apellido, userName, password: encriptar(password)})
    this.users.push(user)
    await this.save()
    return user
  }
  async login({userName, password}){
    await this.read()
    const user = this.users.find(u => u.userName === userName)
    console.log(user)
    const encriptada = encriptar(password)
    console.log(encriptada)
    if (encriptada !== user.password){
      throw new Error("credenciales invalidas")
    } else{
      return user
    }
  }
}