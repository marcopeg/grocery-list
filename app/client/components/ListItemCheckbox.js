
import React from 'react';

import Glyphicon from 'react-bootstrap/lib/Glyphicon';

export default class ListItemCheckbox extends React.Component {

    static propTypes = {
        isChecked: React.PropTypes.bool,
        onChange: React.PropTypes.func,
    }

    static defaultProps = {
        onChange: () => {},
    }

    render() {
        var { isChecked } = this.props;
        var { handleChange } = this;

        var iconName = isChecked ? 'check' : 'unchecked';

        return (
            <Glyphicon glyph={'glyphicon glyphicon-' + iconName} onClick={handleChange}/>
        );
    }

    handleChange = () => {
        var { isChecked, onChange } = this.props;
        var nextValue = !isChecked;
        onChange(nextValue);
    }
}
