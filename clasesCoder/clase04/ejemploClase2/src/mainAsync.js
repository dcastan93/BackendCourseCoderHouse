import fs from "fs/promises"
const ruta = "./static/agenda.txt"
let agenda

function contameUnCuento() {
  console.log("Erase una vez...... truz")
}
async function cargarAgenda() {
  const json = await fs.readFile(ruta, "utf-8")
  agenda = JSON.parse(json)
}
function mostrarAgenda() {
  console.log(agenda);
}
function agregarContacto(contacto) {
  agenda.push(contacto)
}
async function guardarAgenda() {
  const json = JSON.stringify(agenda, null, 2)
  await fs.writeFile(ruta, json)
}
async function eliminarEvidencia() {
  await fs.rm(ruta)
}
async function operarConLaAgenda() {
  await cargarAgenda()
  mostrarAgenda()
  agregarContacto({ "andres": "6413" })
  guardarAgenda()
  mostrarAgenda()
}

operarConLaAgenda()
contameUnCuento()