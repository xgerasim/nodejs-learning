import { Router } from 'express';
import express from 'express';
import { config } from 'dotenv';
import './source/models/__loaddatabase.js';
import { mainPage, detailPage } from './source/controllers/todos.js';

config();

const port = process.env.PORT || 8000;

const router = Router();
const app = express();

app.set('view engine', 'ejs');
app.set('views', './source/templates');

app.use(router);

router.get('/', mainPage);
router.get('/:id', detailPage);



app.listen(port);