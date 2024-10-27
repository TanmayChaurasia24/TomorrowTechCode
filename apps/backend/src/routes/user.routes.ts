// /src/routes/userRoutes.ts
import { Hono } from 'hono';
import { signup, signin, fetch_detail } from '../controllers/user.controller';

const userRoutes = new Hono<{
    Bindings: {
      DATABASE_URL: string;  
      JWT_SECRET: string;
    };
  }>();

userRoutes.get('/detail',fetch_detail)
userRoutes.post('/signup', signup);
userRoutes.post('/signin', signin);

export default userRoutes;
