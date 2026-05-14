import express from 'express';
import routes from './routes.js';
import cors from 'cors';

const app = express();
const port = 3000;
// Use 'localhost' for development and '0.0.0.0' for production to allow external access
const host = process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0';

app.use(cors({
  origin: [
    'https://notesapp-v1.dicodingacademy.com'
  ]
}));

app.use(express.json());
app.use('/', routes);

// Change 'http' to 'https' below if you enable HTTPS in the future
app.listen(port, host, () => {
  console.log(`Server is running at http://${host}:${port}`);
});