//ejemplos manejo de archivos
import fs from "fs"
const rutaRelativa = "../timers/timers.js"
console.log(fs.readFileSync(rutaRelativa, "utf-8"));
