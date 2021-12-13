import { Router } from 'express';
import { getAllImages, getImage } from '../controllers/images.js';

const imagesRouter = Router();

imagesRouter.route('/').get(getAllImages);

imagesRouter.route('/:id').get(getImage);


    export default imagesRouter;
