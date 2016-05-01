/* eslint no-unused-expressions:0 */

import sortListItems from 'utils/sort-list-items';
import { getTodos } from 'fixtures/todos.fixture';

describe('sortListItems()', function () {

    var items;
    var sortedItems;

    beforeEach(function () {
        items = getTodos();
        sortedItems = sortListItems(items);
    });

    it('should be immutable', function () {
        expect(items).to.not.equal(sortedItems);
    });

    it('should not change the content of the list', function () {
        expect(items.length).to.equal(sortedItems.length);
    });

    it('should place unchecked items on top', function () {
        var ids = sortedItems.map(i => i.id);
        var expectedIds = [7, 3, 4, 5, 8, 1, 2, 6];
        expect(ids).to.deep.equal(expectedIds);
    });
});
