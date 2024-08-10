import express from 'express';
import { registerRoutes } from './api/api';

const app = express();

const port = 5252;

app.use(registerRoutes());

app.listen(port, () => {
    console.log(`Started server on port ${port}`);
});
