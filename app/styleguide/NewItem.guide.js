import React from 'react';
import { SGPage, SGSection } from 'reapp-dev-tools';


import NewItem from 'components/NewItem';

export default class NewItemGuideComponent extends React.Component {

    render() {
        return (
            <SGPage>

                <SGSection title="NewItem">
                    <NewItem
                        onSubmit={value => console.log('Submit: ', value)} />
                </SGSection>

            </SGPage>
        );
    }
}
