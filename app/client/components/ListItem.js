
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
        mode: React.PropTypes.string,
        onDelete: React.PropTypes.func,
    }

    render() {

        var { id, label, isActive, mode } = this.props;
        var { onChangeHandler, onDeleteHandler } = this;

        var className = new ClassMap({
            'list-group-item--disabled' : (isActive === false),
        });

        var itemProps = {
            id,
            className: className.toString(),
        };

        var checkBox = <ListItemCheckbox isChecked={!isActive} onChange={onChangeHandler} />;

        var onCLickHandler;

        if (mode === 'delete') {
            checkBox = null;
            onCLickHandler = onDeleteHandler;
        }

        return (
            <ListGroupItem onClick={onCLickHandler} {...itemProps}>
                {checkBox}
                <span> {label}</span>
            </ListGroupItem>
        );
    }

    onChangeHandler = isActive => {
        var { onToggle } = this.props;
        onToggle(!isActive);
    }

    onDeleteHandler = () => {
        var { id, label, isActive } = this.props;
        var { onDelete } = this.props;
        var item = {
            id: id,
            label: label,
            isActive: isActive,
        };
        onDelete(item);
    }
}
