import { config } from 'dotenv';
config();

import express from 'express';
import { env } from './config';

const app = express();

app.listen(env.PORT, () => {
  console.log(`Server listening at port ${env.PORT}`);
});
