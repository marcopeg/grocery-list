/* eslint no-undefined:0 */

import {
    todosReducer,
    INITIAL_STATE,
} from 'reducers/todos-reducer';

import {
    setItems,
} from 'actions/todos-actions';

import sortListItems from 'utils/sort-list-items';
import { getTodos } from 'fixtures/todos.fixture';

describe('todosReducer', () => {

    var items;

    beforeEach(function () {
        items = getTodos();
    });

    it('should setup its initial state', () => {
        var expectedState = {
            ...INITIAL_STATE,
        };
        var nextState = todosReducer(undefined, {});
        expect(nextState).to.deep.equal(expectedState);
    });

    it('should set a new set of items', () => {
        var action = setItems(items);
        var expectedState = {
            ...INITIAL_STATE,
            items: sortListItems(items),
        };
        var nextState = todosReducer(undefined, action);
        expect(nextState).to.deep.equal(expectedState);
    });
});
