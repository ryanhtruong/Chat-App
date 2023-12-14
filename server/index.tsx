import Express, { Request, Response } from 'express';
import * as db from './database.js';
import cors from 'cors';

const app = Express();
const port = 3000;

// setup CORS to allow for cross-origin requests
app.use(cors());

app.use(Express.json());

// function to check if server is running
app.get('/', async (req: Request, res: Response) => {
    res.send('Server is running');
});

// function to get all messages from the database
app.get('/messages/', async (req: Request, res: Response) => {
  db.getAllMessages().then((result) => {
    res.send(result[0]);
  });
});

// function to get a message from the database
app.get('/messages/:id', async (req: Request, res: Response) => {
  const id = req.params.id;
  db.getMessage(id).then((result) => {
    res.send(result[0]);
  });
});

// function to delete a message from the database
app.delete('/messages/:id', async (req: Request, res: Response) => {
  const id = req.params.id;
  db.deleteMessage(id).then((result) => {
    res.send(result[0]);
  });
});

// function to add a message to the database
app.post('/messages/', async (req: Request, res: Response) => {
  const name = req.body.name;
  const message = req.body.message;6
  db.createMessage(name, message).then((result) => {
    res.send(result[0]);
  });
});

app.listen(port, () => {
    console.log(`Server is running at localhost:${port}`);
});