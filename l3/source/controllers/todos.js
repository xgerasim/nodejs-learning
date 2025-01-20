import { getList, getItem } from '../models/todos.js';

function mainPage(req, res) {
    const list = getList();
    res.render('main', {
        todos: list,
        title: 'Главная'
    });
    // let s = '<!doctype html>' +
    //     '<html>' +
    //     '<head>' +
    //     '<meta charset="UTF-8">' +
    //     '<title>Главная</title>' +
    //     '</head>' +
    //     '<body>' +
    //     '<h1>Мои дела</h1>';
    // for (let t of list) {
    //     s += `<h2>${t.title}</h2>`
    // };

    // s += '</body>' + '</html>';
    // res.send(s);
}

function detailPage(req, res) {
    const t = getItem(req.params.id);

    if (!t) {
        errorPage(req, res);
        return;
    }

    // let s = '<!doctype html>' +
    //     '<html>' +
    //     '<head>' +
    //     '<meta charset="UTF-8">' +
    //     '<title>Мое дело</title>' +
    //     '</head>' +
    //     '<body>' +
    //     '<h1>Мое дело</h1>';

    // s += `<h2>${t.title}</h2>`;
    // s += '</body>' + '</html>';
    // res.send(s);

    res.render('detail', {
        'todo': t,
        'title': t.title,
    });


};

function errorPage(req, res) {
    res.statusCode = 404;
    let s = '<!doctype html>' +
        '<html>' +
        '<head>' +
        '<meta charset="UTF-8">' +
        '<title>Ошибка</title>' +
        '</head>' +
        '<body>' +
        '<h1>Ошибка!</h1>' +
        '</body>' +
        '</html>';
    res.end(s);
}


export { mainPage, detailPage }




