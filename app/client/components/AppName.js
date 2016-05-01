
import React from 'react';

export default class AppName extends React.Component {

    static propTypes = {
        title: React.PropTypes.string.isRequired,
    }

    render() {
        var { title } = this.props;

        var titleStyle = {
            fontSize: '28',
            color: 'rgb(77, 148, 255)',
            fontWeight: '600',
            paddingTop: '15',
            paddingBottom: '15',
        };

        return (
            <div className="app-name" style={ titleStyle }>
                {title}
            </div>
        );
    }
}
