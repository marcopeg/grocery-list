
/**
 * sort list items so to have unchecked items packed on top
 */

export default function sortListItems(items) {
    var _items = items.map(i => i);
    _items.sort(compareItems);
    return _items;
}

function compareItems(a, b) {
    if (a.isActive && !b.isActive) {
        return -1;
    }
    if (b.isActive && !a.isActive) {
        return 1;
    }
    // may apply aplhabetical order?
    // may apply custom order with drag'n'drop?
    return 0;
}
