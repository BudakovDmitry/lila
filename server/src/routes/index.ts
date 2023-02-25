import { Application } from 'express';
import usersRouter from './api/usersRouter.js';


class AppRouter {
  constructor(private app: Application) {}
    init() {
      this.app.get('/', (_req, res) => {
        res.send('API Running');
      });
      this.app.use('/api/users', usersRouter);
    }
}

export default AppRouter;
