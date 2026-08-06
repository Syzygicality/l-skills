import { FastifyInstance } from 'fastify';
import BackboardWrapper from '@src/backboard';

export default function registerRoutes(app: FastifyInstance) {
  const backboard = new BackboardWrapper();

  app.get('/health', async () => {
    return { status: 'PONG' };
  });
}
