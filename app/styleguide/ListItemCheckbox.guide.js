import React from 'react';
import { SGPage, SGSection } from 'reapp-dev-tools';

import ListItemCheckbox from 'components/ListItemCheckbox';

export default class ListItemCheckboxGuideComponent extends React.Component {

    state = {
        isChecked: false,
    }

    render() {
        return (
            <SGPage>

                <SGSection title="ListItemCheckbox - unchecked">
                    <ListItemCheckbox isChecked={false} />
                </SGSection>

                <SGSection title="ListItemCheckbox - checked">
                    <ListItemCheckbox isChecked={true} />
                </SGSection>

                <SGSection title="ListItemCheckbox - change value with callback">
                    <ListItemCheckbox
                        isChecked={this.state.isChecked}
                        onChange={nextValue => this.setState({ isChecked: nextValue })} />
                </SGSection>

            </SGPage>
        );
    }
}
