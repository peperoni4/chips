import { Socket } from 'socket.io';
import { AbstractHandler } from '../abstract/abstract.handler';

const messages: string[] = [];

class MessageHandler extends AbstractHandler {
    public handleConnection(socket: Socket) {
        socket.on('message:get', this.getMessages.bind(this));
        socket.on('message:send', this.sendMessage.bind(this));
    }

    private sendMessage(message: string) {
        messages.push(message);
        this.io.emit('message:receive', message);
    }

    private getMessages() {
        this.io.emit('message:updateAll', messages);
    }
}

export { MessageHandler };
