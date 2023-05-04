console.log("hola mundo")
const fnPlantilla  = Handlebars.compile("<p>{{contenido}}</p>")
const holder = document.querySelector("#contenidos")
if (holder){
  holder.innerHTML = fnPlantilla({ contenido: "hola mundo" })
}