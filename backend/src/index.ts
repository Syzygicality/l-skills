import Fastify from 'fastify'

const server = Fastify({
  logger: true
})

server.get('/ping', async () => {
  return { status: 'PONG' }
})

const start = async () => {
  try {
    await server.listen({ port: 3000, host: '0.0.0.0' })
  } catch (err) {
    server.log.error(err)
    process.exit(1)
  }
}

void start()
