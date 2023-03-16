const serverSocket = io('http://localhost:8080/')

const btnPresioname = document.querySelector('#btnPresioname')

if (btnPresioname) {
    btnPresioname.addEventListener(
        'click',
        evento => {
            serverSocket.emit('mensajeDelCliente', { datos: [1, 2, 3] })
        }
    )
}

serverSocket.on('mensajito', datosAdjuntos => {
    console.log(datosAdjuntos)
})

serverSocket.on('alerta', datosAdjuntos => {
    alert(datosAdjuntos)
})