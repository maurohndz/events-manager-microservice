import { ENV_API } from '@Config/environment';
import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes';

// App express
const app = express();
//
app.set('env', ENV_API.ENVIRONMENT);

// Config
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use(`/api/${ENV_API.VERSION}`, routes);

app.listen(ENV_API.PORT, () => {
  console.log(
    `Backend App is running at ${ENV_API.HOST}:${ENV_API.PORT}/api/${
      ENV_API.VERSION
    } in ${app.get('env')} mode`
  );
});