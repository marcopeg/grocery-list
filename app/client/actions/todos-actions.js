/**
 * todos Actions
 */

import sortListItems from 'utils/sort-list-items';

export const SET_ITEMS = 'setItems@todos';

export function setItems(items) {
    return {
        type: SET_ITEMS,
        items: sortListItems(items),
    };
}
