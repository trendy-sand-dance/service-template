import { FastifyRequest } from 'fastify';
import { WebSocket } from '@fastify/websocket';

export default async function websocketController(socket: WebSocket, req: FastifyRequest) {
  console.log("New connection: ", req.id);

  socket.on('message', message => {
    console.log("Received message!\nData: ");
    const data: string = JSON.stringify(message);
    console.log(data);
  });

  socket.on('close', message => {
    console.log("Websocket closed!\nData: ");
    const data: string = JSON.stringify(message);
    console.log(data);
  });
};
