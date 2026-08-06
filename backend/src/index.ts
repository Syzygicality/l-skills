import Fastify from 'fastify';
import registerRoutes from '@src/routes';

const app = Fastify({
  logger: true
});

void app.register(registerRoutes);

const start = async () => {
  try {
    await app.listen({ port: 3000, host: '0.0.0.0' });
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

void start();
