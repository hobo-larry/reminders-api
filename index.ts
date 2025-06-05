import express from 'express';
import remindersRouter from './routers/reminders';
const app = express();


app.use(express.json()); // Middleware to parse JSON bodies
app.get('/', (req, res) => {
  res.send('Hello, World!');
});
app.use('/reminders', remindersRouter);



app.listen(8000, () => {
  console.log('Server is running on port 8000');
});