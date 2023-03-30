//para usar soxket del lado del cliente se debe instalar un cdm, se usa la misma libreria en claso
//de que se tenga control del cliente y el servidor
const serverSocket = io('http://localhost:8080/realtimeproducts')


/*const btnEnviar = document.querySelector('#btnEnviar')

if (btnEnviar) {
  btnEnviar.addEventListener(
    'click', 
    evento => {
      const inputAutor = document.querySelector("#inputAutor")
      const inputMensaje = document.querySelector("#inputMensaje")
      if(inputAutor && inputMensaje){
        const autor = inputAutor.value
        const mensaje = inputMensaje.value
        serverSocket.emit('mensajeDelCliente', {autor, mensaje})
      }
      
    })
}*/


serverSocket.on("mensajito", datosAdjuntos => {
  console.log(datosAdjuntos)
})