/* eslint max-nested-callbacks:0 */

import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';

import List from 'components/List';
import { getTodos } from 'fixtures/todos.fixture';

describe('List Component', () => {
    it('should render without exceptions', () => {
        ReactTestUtils.renderIntoDocument(<List items={getTodos()} />);
    });
});
