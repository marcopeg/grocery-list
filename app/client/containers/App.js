
import React from 'react';
import { connect } from 'react-redux';

import { init as initStorage } from 'services/storage-service';
import {
    init as initTodos,
    add as addTodo,
    toggle as toggleTodo,
} from 'services/todos-service';

import List from 'components/List';
import NewItem from 'components/NewItem';
import AppName from 'components/AppName';

import Grid from 'react-bootstrap/lib/Grid';

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
        var { addNewItem, toggleItem } = this;

        return (
            <Grid>
                <AppName title="Grocery List" />
                <List items={items} onStatusChange={toggleItem} />
                <hr />
                <NewItem onSubmit={addNewItem} />
            </Grid>
        );
    }

    addNewItem = label => {
        var { dispatch } = this.props;
        dispatch(addTodo(label));
    }

    toggleItem = (item) => {
        var { dispatch } = this.props;
        dispatch(toggleTodo(item));
    }
}
