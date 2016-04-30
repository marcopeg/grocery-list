import React from 'react';
import { SGPage, SGSection } from 'reapp-dev-tools';

import List from 'components/List';
import { getTodos } from 'fixtures/todos.fixture.js';
import sortListItems from 'utils/sort-list-items';

export default class ListGuideComponent extends React.Component {
    render() {
        var items = sortListItems(getTodos());
        return (
            <SGPage>

                <SGSection title="List">
                    <List items={items} />
                </SGSection>

            </SGPage>
        );
    }
}
