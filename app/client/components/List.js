
import React from 'react';

import ListGroup from 'react-bootstrap/lib/ListGroup';
import ListItem from 'components/ListItem';

export default class List extends React.Component {

    static propTypes = {
        items: React.PropTypes.array.isRequired,
        mode: React.PropTypes.string,
        onStatusChange: React.PropTypes.func.isRequired,
        onDelete: React.PropTypes.func,
    }

    render() {
        var { items, mode, onDelete } = this.props;
        var { createOnToggleHandler } = this;

        items = items.map(item => {
            var { id } = item;
            return (
                <ListItem {...item}
                    mode={mode}
                    onDelete={onDelete}
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
