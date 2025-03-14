import Fastify from 'fastify';
import {routes} from './routes/routes';

const ADDRESS = process.env.LISTEN_ADDRESS || '127.0.0.1';
const PORT = process.env.LISTEN_PORT || '3000';

const fastify = Fastify();

// Registering routes from routes.js
fastify.register(routes);

fastify.listen({ host: ADDRESS, port: parseInt(PORT, 10) }, (err, address) => {
	console.log(`PORT : ${PORT}`)
	console.log(`ADDRESS : ${ADDRESS}`)

	if (err)
	{
		console.error(err)
		process.exit(1)
	}
  console.log(`Server listening at ${address}`)
});
