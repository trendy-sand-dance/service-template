import fastify, { FastifyInstance } from 'fastify';
import { routes } from './routes/routes.js'

const ADDRESS : string = process.env.LISTEN_ADDRESS ? process.env.LISTEN_ADDRESS : '0.0.0.0';
const PORT : number = process.env.LISTEN_PORT ? parseInt(process.env.LISTEN_PORT, 10) : 3000;

export const app: FastifyInstance = fastify({
	logger: true
});

app.register(routes);

async function startServer()
{
	try
	{
		await app.listen({ port: PORT, host: ADDRESS });
	  	console.log(`Server listening at host: ${ADDRESS} port: ${PORT}`);
	}
	catch (err)
	{
	  app.log.error(err);
	  process.exit(1);
	}
}

startServer();
