import {Router} from 'express';

const messageRoutes = Router();

messageRoutes.route('/').get((req, res) => {
    res.json({
        message: 'message',
    });
    });

messageRoutes.route('/:id').get((req, res) => {
    res.json({
        message: 'message',
    });
    });
    

    export default messageRoutes;