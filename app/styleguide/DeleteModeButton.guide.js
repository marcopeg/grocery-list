import React from 'react';
import { SGPage, SGSection } from 'reapp-dev-tools';


import DeleteModeButton from 'components/DeleteModeButton';

export default class DeleteModeButtonGuideComponent extends React.Component {

    state = {
        isActive: false,
    }

    render() {
        return (
            <SGPage>

                <SGSection title="DeleteModeButton - inactive">
                    <DeleteModeButton
                        onClick={nextValue => this.setState({ isActive: nextValue })} />
                </SGSection>

                <SGSection title="DeleteModeButton - active">
                    <DeleteModeButton
                        isActive={true}
                         />
                </SGSection>

                <SGSection title="DeleteModeButton - toggle">
                    <DeleteModeButton
                        isActive={this.state.isActive}
                        onClick={nextValue => this.setState({ isActive: nextValue })} />
                </SGSection>

            </SGPage>
        );
    }
}
