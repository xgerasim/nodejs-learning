import {loadItem, loadList} from './model.js';

export async function mainPage(res) {
    const list = await loadList();
    let s = '<!doctype html>' +
               '<html>' +
                   '<head>' +
                      '<meta charset="UTF-8">' +
                      '<title>Главная</title>' +
                    '</head>' + 
                    '<body>' +
                      '<h1>Мои дела</h1>';
                      for (let t of list) {
                        s+= `<h2>${t.title}</h2>`
                      };

                     s += '</body>' + '</html>';
    res.end(s);  
}

export async function detailPage(res, id) {
    const t = await loadItem(id);
    if (!t) {
        errorPage(res);
        return;
    };
    let s = '<!doctype html>' +
               '<html>' +
                   '<head>' +
                      '<meta charset="UTF-8">' +
                      '<title>Внутренняя</title>' +
                    '</head>' + 
                    '<body>' +
                      `<h1>Дело:: ${t.title}</h1>` +
                    '</body>' +
                '</html>';
    res.end(s);  
}

export function errorPage(res) {
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