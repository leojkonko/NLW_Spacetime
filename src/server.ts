import fastify from "fastify"

const app = fastify()

app.get('/hello', () => {
    return " hello "
    //reply.send({ message: 'Hello, Fastify with TypeScript!' });
  }); 

app.listen({ 
    port: 3333,
}).then(() => {
    console.log('sucesso')
})    