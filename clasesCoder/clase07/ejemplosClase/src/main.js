//api rest

//esta es la forma para montar servidor a mano
import http from "http"

//create server recibe una funciòn 
const server = http.createServer((peticion, respuesta) => {
  console.log(peticion.method)
  console.log(peticion.url)
  respuesta.end()
})

server.listen(8080)//esto pone a escuchar el servidor