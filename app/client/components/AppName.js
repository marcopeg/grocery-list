
import React from 'react';

export default class AppName extends React.Component {

    static propTypes = {
        title: React.PropTypes.string.isRequired,
    }

    render() {
        var { title } = this.props;

        return (
            <div className="app-name">
                {title}
            </div>
        );
    }
}
