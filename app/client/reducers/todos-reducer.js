/**
 * todos Reducer
 */

import {
    SET_ITEMS,
} from 'actions/todos-actions';

export const INITIAL_STATE = {
    items: [],
};

export function todosReducer(state = INITIAL_STATE, action) {
    var { type, ...payload } = action;
    switch (type) {
        case SET_ITEMS: return setItems(state, payload);
        default: return state;
    }
}

function setItems(state, payload) {
    var { items } = payload;

    return {
        ...state,
        items,
    };
}
