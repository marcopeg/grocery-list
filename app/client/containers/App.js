
import React from 'react';
import { connect } from 'react-redux';

import { init as initStorage } from 'services/storage-service';
import { init as initTodos } from 'services/todos-service';

import List from 'components/List';

@connect(state => {
    var { todos } = state;
    var { items } = todos;

    return {
        items,
    };
})

export default class App extends React.Component {

    static propTypes = {
        dispatch: React.PropTypes.func,
        items: React.PropTypes.array,
    }

    componentWillMount() {
        var { dispatch } = this.props;
        dispatch(initStorage);
        dispatch(initTodos);
    }

    render() {
        var { items } = this.props;

        return (
            <List items={items} />
        );
    }
}
