import { Router, urlencoded } from 'express';
import express from 'express';
import { config } from 'dotenv';
import './source/models/__loaddatabase.js';
import methodOverride from 'method-override';
'
import { mainPage, detailPage, addPage, add, setDone, remove } from './source/controllers/todos.js';

config();

const port = process.env.PORT || 8000;

const router = Router();

router.use(urlencoded({ extended: true }));
router.use(methodOverride('_method'));


const app = express();


app.set('view engine', 'ejs');
app.set('views', './source/templates');

app.locals.appTitle = process.env.APP_TITLE || 'Express';

app.use(router);

router.get('/', mainPage);
router.get('/:id', detailPage);

router.get('/add', addPage);
router.post('/add', add);

router.put('/:id', setDone);
router.delete('/:id', remove);


app.listen(port);