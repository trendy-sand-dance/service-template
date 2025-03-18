import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';

export async function routes(fastify: FastifyInstance) {
  fastify.get('/', async function(request: FastifyRequest, reply: FastifyReply) {
    return reply.sendFile('index.html');
  });

  fastify.get('/login', async function(request: FastifyRequest, reply: FastifyReply) {
    return reply.sendFile('login.html');
  });

  fastify.get('/register', async function(request: FastifyRequest, reply: FastifyReply) {
    return reply.sendFile('register.html');
  });

  fastify.get('/dashboard/:username', async function(request: FastifyRequest, reply: FastifyReply) {

    const { username } = request.params as { username: string };

    console.log("Username: ", username);
    console.log("request.params: ", request.params);

    const response = await fetch(`http://10.11.3.10:8000/dash/${username}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    });

    const responseData = await response.json() as { email: string };

    return reply.viewAsync("dashboard.ejs", { username: username, email: JSON.stringify(responseData.email) });

  });

  fastify.post('/login-user', async function(request: FastifyRequest, reply: FastifyReply) {
    try {
      const { username, password } = request.body as { username: string, password: string };

      console.log("request.body: ", request.body);

      const dataPackage = JSON.stringify({ username, password });

      console.log("dataPackage: ", dataPackage);
      const response = await fetch('http://10.11.3.10:8000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(request.body)
      });

      // const responseData = await response.json();

      return reply.redirect(`/dashboard/${username}`);
    } catch (error) {
      request.log.error(error);
      return reply.code(500).send({ error: 'Internal Server Error' });
    }

  });

  fastify.post('/register-user', async function(request: FastifyRequest, reply: FastifyReply) {
    try {
      const { username, password, email } = request.body as { username: string, password: string, email: string };

      console.log("request.body: ", request.body);

      const dataPackage = JSON.stringify({ username, password, email });

      console.log("dataPackage: ", dataPackage);
      const response = await fetch('http://10.11.3.10:8000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(request.body)
      });

      const responseData = await response.json();

      // return responseData;
      return reply.sendFile("index.html");

    } catch (error) {
      request.log.error(error);
      return reply.code(500).send({ error: 'Internal Server Error' });
    }

  });
};
