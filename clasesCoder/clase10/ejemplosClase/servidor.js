import express from "express"
import { Server as SocketIOServer} from "socket.io"

const app = express()
app.use(express.static("./public"))
const httpServer = app.listen(8080)
//lo mismo que me devuelve el http.createServer

const io = new SocketIOServer(httpServer) //el io necesita un medio de transporte que será el http


io.on("connection", clientSocket => {
  console.log(`nuevo cliente conectado! socket id #${clientSocket.id}`)
    clientSocket.emit('mensajito', { hola: 'mundo' })
    clientSocket.emit('alerta', 'holaaaa que onda!')
    clientSocket.on('mensajeDelCliente', datosAdjuntos => {
        console.log(`#${clientSocket.id} dice:`)
        console.log(datosAdjuntos)
    })
}) //esto le envia el mensaje al otro lado, peroaun no se contruye el otro lado


