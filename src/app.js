import express from 'express';
import 'babel-polyfill';
import './database/db';
import env from './env';
import routes from './routes';
import bodyParser from 'body-parser'
import authenticated from './middlewares/authenticated';

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/users', authenticated);

routes(app);

app.listen(env.Api_port, () => {
    console.log(`Api listening on port ${env.Api_port}!`);
});