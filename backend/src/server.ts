import Fastify, { FastifyInstance } from 'fastify';
import { routes } from './routes/routes.js'
import pluginWebsocket from '@fastify/websocket';

const ADDRESS: string = process.env.LISTEN_ADDRESS ? process.env.LISTEN_ADDRESS : '0.0.0.0';
const PORT: number = process.env.LISTEN_PORT ? parseInt(process.env.LISTEN_PORT, 10) : 3000;

const fastify: FastifyInstance = Fastify({
  logger: true
});

fastify.register(pluginWebsocket);

fastify.register(routes);

async function startServer() {
  try {
    await fastify.listen({ port: PORT, host: ADDRESS });
    console.log(`Server listening at host: ${ADDRESS} port: ${PORT}`);
  }
  catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
}

startServer();
