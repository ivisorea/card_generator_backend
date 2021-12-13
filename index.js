import express from 'express';
import imagesRouter from './routes/imagesRoutes.js';
import messageRoutes from './routes/messageRoutes.js';

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use('/images', imagesRouter)
app.use('/messages', messageRoutes)
app.use('*', (req, res) => res.send('API is working'));

app.listen(port, () => console.log(`Server is running at http://localhost:${port}`));