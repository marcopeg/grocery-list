
import { isReady, getItem } from 'services/storage-service';
import { setItems } from 'actions/todos-actions';

export function init(dispatch) {
    isReady()
    .then(() => getItem('items', []))
    .then(items => dispatch(setItems(items)))
    .catch(err => console.log(err));
}
