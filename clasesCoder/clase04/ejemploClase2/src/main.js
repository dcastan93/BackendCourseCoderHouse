import fs from "fs"
const ruta = "./static/agenda.txt"
let agenda

function contameUnCuento(){
  console.log("Erase una vez...... truz")
}
function cargarAgenda() {
  const json = fs.readFileSync(ruta, "utf-8")
  agenda = JSON.parse(json)
}
function mostrarAgenda() {
  console.log(agenda);
}
function agregarContacto(contacto) {
  agenda.push(contacto)
}
function guardarAgenda() {
  const json = JSON.stringify(agenda, null, 2)
  fs.writeFileSync(ruta, json)
}
function eliminarEvidencia() {
  fs.rmSync(ruta)
}
function operarConLaAgenda() {
  cargarAgenda()
  mostrarAgenda()
  agregarContacto({ "andres": "6413" })
  guardarAgenda()
  mostrarAgenda()
}
operarConLaAgenda()
contameUnCuento()


//setTimeout(eliminarEvidencia, 5000)