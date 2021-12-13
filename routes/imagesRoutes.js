import { Router } from 'express';

const imagesRouter = Router();

imagesRouter.route('/').get((req, res) => {
    res.json({
        images: 'Images',
    });
    });

imagesRouter.route('/:id').get((req, res) => {
    res.json({
        images: 'Images',
        id: req.params.id,
    });
    });


    export default imagesRouter;
