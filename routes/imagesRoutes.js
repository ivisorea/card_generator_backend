import { Router } from 'express';
import { getAllImages, getImageById } from '../controllers/images.js';

const imagesRouter = Router();

imagesRouter.route('/').get(getAllImages);

imagesRouter.route('/:id').get(getImageById);


    export default imagesRouter;
