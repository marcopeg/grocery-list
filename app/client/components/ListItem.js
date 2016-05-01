
import React from 'react';
import { ClassMap } from 'class-map';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';


export default class ListItem extends React.Component {

    static propTypes = {
        id: React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.number,
        ]).isRequired,
        label: React.PropTypes.string.isRequired,
        isActive: React.PropTypes.bool,
    }

    render() {
        var { id, label, isActive } = this.props;

        var className = new ClassMap({
            'list-group-item--disabled' : (isActive === false),
        });

        var itemProps = {
            id,
            className: className.toString(),
        };

        return (
            <ListGroupItem {...itemProps}>
                {label}
            </ListGroupItem>
        );
    }
}
