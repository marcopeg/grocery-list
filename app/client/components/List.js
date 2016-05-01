
import React from 'react';

import ListGroup from 'react-bootstrap/lib/ListGroup';
import ListItem from 'components/ListItem';

export default class Items extends React.Component {

    static propTypes = {
        items: React.PropTypes.array.isRequired,
    }

    render() {
        var { items } = this.props;

        items = items.map(item => {
            var { id } = item;
            return (
                <ListItem {...item} key={id} />
            );
        });

        return (
            <ListGroup>
                {items}
            </ListGroup>
        );
    }
}
