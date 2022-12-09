import express from 'express';
import router from './routes/index.js';
import { noRouteHandler, genericErrorHandler } from './handlers.js';

const PORT = 8000;

const app = express();

app.use('/', router);
app.use(genericErrorHandler);
app.use(noRouteHandler);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
});