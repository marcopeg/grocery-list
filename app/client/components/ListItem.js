
import React from 'react';
import { ClassMap } from 'class-map';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import ListItemCheckbox from 'components/ListItemCheckbox';


export default class ListItem extends React.Component {

    static propTypes = {
        id: React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.number,
        ]).isRequired,
        label: React.PropTypes.string.isRequired,
        isActive: React.PropTypes.bool.isRequired,
        onToggle: React.PropTypes.func.isRequired,
    }

    render() {
        var { id, label, isActive } = this.props;
        var { onChangeHandler } = this;

        var className = new ClassMap({
            'list-group-item--disabled' : (isActive === false),
        });

        var itemProps = {
            id,
            className: className.toString(),
        };

        return (
            <ListGroupItem {...itemProps}>
                <ListItemCheckbox
                    isChecked={!isActive}
                    onChange={onChangeHandler} />
                <span> {label}</span>
            </ListGroupItem>
        );
    }

    onChangeHandler = isActive => {
        var { onToggle } = this.props;
        onToggle(!isActive);
    }
}
