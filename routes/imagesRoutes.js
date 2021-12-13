import { Router } from 'express';

const imagesRouter = Router();

imagesRouter.route('/').get((req, res) => {
    res.json({
        images: 'Images',
    });
    });

    export default imagesRouter;
