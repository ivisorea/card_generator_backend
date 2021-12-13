import express from 'express';
import cors from "cors";
import imagesRouter from './routes/imagesRoutes.js';
import messageRoutes from './routes/messageRoutes.js';

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());
app.use('/images', imagesRouter)
app.use('/messages', messageRoutes)
app.use('*', (req, res) => res.send(
    `<h1>API</h1> <br/> 
    <h2>Endpoints</h2>
    <ul>
        <li>To get all the images <a href="https://cardgeneratordiwali.herokuapp.com/images">https://cardgeneratordiwali.herokuapp.com/images</a></li>
        <li>To get all messages <a href="https://cardgeneratordiwali.herokuapp.com/messages">https://cardgeneratordiwali.herokuapp.com/messages</a></li>
        <li>To get the images by id <b>https://cardgeneratordiwali.herokuapp.com/images/:id</b></li>
        <li>To get the messages by id <b>https://cardgeneratordiwali.herokuapp.com/messages/:id</b></li>
    </ul>`
))


app.listen(port, () => console.log(`Server is running at http://localhost:${port}`));