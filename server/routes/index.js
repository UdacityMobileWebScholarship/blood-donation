import { Router } from 'express';
const router = new Router();

import posts from './posts';

const routes = {
  posts,
};

router.use('/posts', routes.posts);

export default router;
