const serverSocket = io('http://localhost:8080/')


serverSocket.on('mensajito', datosAdjuntos => {
    console.log(datosAdjuntos)
})

serverSocket.on('alerta', datosAdjuntos => {
    alert(datosAdjuntos)
})