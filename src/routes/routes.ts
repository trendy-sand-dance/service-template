import { app } from '../server.js';
import { FastifyInstance } from 'fastify';

export async function routes (app : FastifyInstance, options)
{
	app.get('/', async (request, reply) => 
	{
		reply.send({hello: "world"});
	});
}
