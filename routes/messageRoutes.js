import {Router} from 'express';
import { getMessageById } from '../controllers/messages.js';
import { getAllMessages } from '../controllers/messages.js';

const messageRoutes = Router();

messageRoutes.route('/').get(getAllMessages);

messageRoutes.route('/:id').get(getMessageById);


    export default messageRoutes;