
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

        var deleteMode = isActive ? 'shake-little' : 'dont-shake';

        return (
            <div onClick={handleChange} className={deleteMode}>
                <Glyphicon
                    glyph={'glyphicon glyphicon-trash'}
                    onClick={handleChange} className={deleteMode} />
            </div>
        );
    }

    handleChange = () => {
        var { isActive, onClick } = this.props;
        var nextValue = !isActive;
        onClick(nextValue);
        console.log(this.props);
    }
}
