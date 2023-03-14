import express from "express"
import { Server as SocketIOServer} from "socket.io"

const app = express()



const httpServer = app.listen(8080)
//lo mismo que me devuelve el http.createServer

const io = new SocketIOServer(httpServer) //el io necesita un medio de transporte que será el http

io.on("connection", socket => {})
