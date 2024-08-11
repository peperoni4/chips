import { Server, Socket } from 'socket.io';

abstract class AbstractHandler {
    protected io: Server;
    // TODO: add db connection

    public constructor(io: Server) {
        this.io = io;
    }

    public abstract handleConnection(socket: Socket): void;
}

export { AbstractHandler };
