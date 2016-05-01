
import React from 'react';

import ListGroup from 'react-bootstrap/lib/ListGroup';
import ListItem from 'components/ListItem';

export default class Items extends React.Component {

    static propTypes = {
        items: React.PropTypes.array.isRequired,
        onStatusChange: React.PropTypes.func.isRequired,
    }

    render() {
        var { items } = this.props;
        var { createOnToggleHandler } = this;

        items = items.map(item => {
            var { id } = item;
            return (
                <ListItem {...item}
                    key={id}
                    onToggle={createOnToggleHandler(item)} />
            );
        });

        return (
            <ListGroup>
                {items}
            </ListGroup>
        );
    }

    createOnToggleHandler = item => {
        var { onStatusChange } = this.props;
        return isActive => onStatusChange(item, isActive);
    }
}
