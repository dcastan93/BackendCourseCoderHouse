import { UserManager } from "./UserManajer.js";

const um = new UserManager("./database/usuarios.json")
const user = await um.crearUsuarios({
  nombre: "Diego",
  apellido: "Castaneda",
  userName: "dcastan93",
  password: "123456"
})
console.log(user)

const loggUser = await um.login({
  userName: "dcastan93",
  password: "123456"
})

console.log(loggUser)