/* eslint max-nested-callbacks:0 */

import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';

import NewItem from 'components/NewItem';

describe('NewItem Component', () => {

    it('should render without exceptions', () => {
        ReactTestUtils.renderIntoDocument(<NewItem onSubmit={() => {}} />);
    });

    it('should submit when there is text', () => {
        var el = <NewItem onSubmit={onSubmit} />;
        var cmp = ReactTestUtils.renderIntoDocument(el);
        var dom = ReactDOM.findDOMNode(cmp);

        var input = dom.querySelector('input');

        ReactTestUtils.Simulate.change(input, {
            target: {
                value: 'aaa',
            },
        });

        ReactTestUtils.Simulate.submit(dom);

        function onSubmit(value) {
            expect(value).to.equal('aaa');
        }
    });

    it('should set an error ui when submitted without text', function () {
        var el = <NewItem onSubmit={() => {}} />;
        var cmp = ReactTestUtils.renderIntoDocument(el);
        var dom = ReactDOM.findDOMNode(cmp);

        ReactTestUtils.Simulate.submit(dom);
        var error = dom.querySelector('.form-group.has-error');

        expect(error).to.not.equal(null);
    });
});
