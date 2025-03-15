import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import websocketController from '../controllers/websocket.controller.js';

export async function routes(fastify: FastifyInstance) {
  fastify.get('/ws-game', { websocket: true }, websocketController);
  fastify.get('/', async function(request: FastifyRequest, reply: FastifyReply) {
    reply.send({ message: 'HM from the Fastify backend', method: request.method });
  });
};
