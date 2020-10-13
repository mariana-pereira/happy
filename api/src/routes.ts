import express from 'express';
import multer from 'multer';

import uploadConfig from './config/upload';

import OrphanageController from './controllers/OrphanageController';

const routes = express.Router();
const upload = multer(uploadConfig);

routes.get('/orphanages', OrphanageController.index);
routes.post('/orphanages', upload.array('images'), OrphanageController.store);
routes.get('/orphanages/:id', OrphanageController.show);

export default routes;
