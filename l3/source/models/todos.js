import { database } from "./__loaddatabase.js";

const todos = database.todos;

function getList() {
    return todos;
};

function getItem(id) {
    return todos.find((el) => el._id === id);
}

export {getList, getItem};

