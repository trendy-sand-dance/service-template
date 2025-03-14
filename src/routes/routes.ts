export async function routes (fastify, options) {
	fastify.get('/', async (request, reply) => 
		{
			return "yo ik ben timo";
		});
}
