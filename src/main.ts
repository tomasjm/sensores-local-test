import express, { Application, Request, Response } from 'express';
import chalk from 'chalk';
import morgan from 'morgan';
import cors from 'cors';

const LISTEN_PORT: number = 3000;
const app: Application = express();

// middlewares
app.use(express.json());
app.use(cors());

const morganMiddleware = morgan(function (tokens, req, res) {
    return [
      chalk.green.bold("[" + tokens.method(req, res) + "]"),
      chalk.red.bold(tokens.status(req, res)),
      chalk.white("( route: " + tokens.url(req, res) + " )"),
      chalk.yellow(tokens["response-time"](req, res) + " ms")
    ].join(" ");
  });

app.use(morganMiddleware);




app.get('/', function(req: Request, res: Response) {
    res.send('Servidor funcionando');
});
app.post('/dato',(req: Request, res: Response) => {
    console.log(req);
    console.log(req.body);
    res.send({
        response: true,
        body: req.body
    });
});

app.listen(LISTEN_PORT, function () {
    console.log(`Servidor corriendo en el puerto ${LISTEN_PORT}`);
});
  