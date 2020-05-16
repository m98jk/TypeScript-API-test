import express, { Application, Request, Response, NextFunction } from 'express';

const app: Application = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Hello from EXPRESS');
});

app.listen(5000, () => {
  console.log('SERVER RUNNING');
});
