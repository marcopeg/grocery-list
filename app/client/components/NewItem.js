
import React from 'react';
import ReactDOM from 'react-dom';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import InputGroup from 'react-bootstrap/lib/InputGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import Button from 'react-bootstrap/lib/Button';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';

export default class NewItem extends React.Component {

    state = {
        currentValue: '',
        hasError: false,
    }

    static propTypes = {
        onSubmit: React.PropTypes.func.isRequired,
    }

    render() {
        var { currentValue, hasError } = this.state;
        var { onChangeHandler, onSubmitHandler } = this;

        var validationState = hasError ? 'error' : null;

        return (
            <form onSubmit={onSubmitHandler}>
                <FormGroup validationState={validationState}>
                    <InputGroup>
                        <InputGroup.Addon>
                            <Glyphicon glyph="plus" />
                        </InputGroup.Addon>
                        <FormControl
                            ref="input"
                            type="text"
                            value={currentValue}
                            onChange={onChangeHandler} />
                        <InputGroup.Button>
                            <Button bsStyle="primary" type="submit">
                                {'Add'}
                            </Button>
                        </InputGroup.Button>
                    </InputGroup>
                </FormGroup>
            </form>
        );
    }

    onChangeHandler = e => {
        this.setState({
            hasError: false,
            currentValue: e.target.value,
        });
    }

    onSubmitHandler = e => {
        e.preventDefault();
        var { onSubmit } = this.props;
        var { currentValue } = this.state;

        // static validationof the current input
        if (!currentValue.length) {
            return this.setState({
                hasError: true,
            });
        }

        onSubmit(currentValue);

        this.setState({
            currentValue: '',
        });

        ReactDOM.findDOMNode(this.refs.input).focus();
    }
}
