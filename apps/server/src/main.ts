import express from 'express';
import { registerRoutes } from './api/api';
import { createServer } from 'node:http';
import { Server, Socket } from 'socket.io';
import { MessageHandler } from './socket/handlers/handlers';

const port = 5252;

const app = express();

app.use(registerRoutes());

const server = createServer(app);

const io = new Server(server);

io.on('connection', (socket: Socket) => {
    console.log(`client ${socket.id} connected`);

    new MessageHandler(io).handleConnection(socket);

    socket.on('disconnect', () => {
        console.log(`client ${socket.id} disconnected`);
    });
});

server.listen(port, () => {
    console.log(`Started server on port ${port}`);
});
