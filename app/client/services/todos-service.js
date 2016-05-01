
import { isReady, getItem, setItem } from 'services/storage-service';
import { setItems } from 'actions/todos-actions';

export function init(dispatch) {
    isReady()
    .then(() => getItem('items', []))
    .then(items => dispatch(setItems(items)))
    .catch(err => console.log(err));
}

export function add(label) {
    return (dispatch, getState) => {
        var { todos } = getState();
        var { items } = todos;

        items.push(createNewItem(label));

        isReady()
        .then(() => setItem('items', todos.items))
        .then(() => dispatch(setItems(todos.items)))
        .catch(err => console.log(err));
    };
}

export function toggle(todo) {
    return (dispatch, getState) => {
        var { todos } = getState();
        var { items } = todos;

        items = items.map(item => {
            if (item.id === todo.id) {
                item.isActive = !item.isActive;
            }
            return item;
        });

        isReady()
        .then(() => setItem('items', todos.items))
        .then(() => dispatch(setItems(todos.items)))
        .catch(err => console.log(err));
    };
}

export function createNewItem(label) {
    return {
        id: Date.now(),
        isActive: true,
        label,
    };
}
