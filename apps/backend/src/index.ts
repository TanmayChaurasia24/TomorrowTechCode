// /src/app.ts
import { Hono } from 'hono';
import userRoutes from './routes/user.routes';
import blogsRoutes from './routes/blog.route';
import { cors } from 'hono/cors';

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;  
    JWT_SECRET: string;
  };
}>();

app.use('/*',cors());
app.route('/api/user', userRoutes);
app.route('/api/b',blogsRoutes)

export default app;

