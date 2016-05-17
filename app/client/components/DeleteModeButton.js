
import React from 'react';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';

export default class DeleteModeButton extends React.Component {

    static propTypes = {
        isActive: React.PropTypes.bool,
        onClick: React.PropTypes.func,
    }

    render() {
        var { isActive } = this.props;
        var { handleChange } = this;

        var deleteButtonStyle = isActive ? 'shake-little' : 'dont-shake';

        return (
                <Glyphicon
                    glyph={'glyphicon glyphicon-trash'}
                    onClick={handleChange} className={deleteButtonStyle} />
        );
    }

    handleChange = () => {
        var { isActive, onClick } = this.props;
        var nextValue = !isActive;
        onClick(nextValue);
    }
}
