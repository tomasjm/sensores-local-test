import express, { Application, Request, Response } from 'express';

const app: Application = express();
const LISTEN_PORT: number = 3000;

app.get('/', function(req: Request, res: Response) {
    res.send('Servidor funciondo');
});
app.post('/dato',(req: Request, res: Response) => {
    console.log(req);
    const body: any = req.body;
    res.send({
        response: true,
        body
    });
});

app.listen(LISTEN_PORT, function () {
    console.log(`Servidor corriendo en el puerto ${LISTEN_PORT}`);
});
  