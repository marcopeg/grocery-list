import React from 'react';
import { SGPage, SGSection } from 'reapp-dev-tools';


import AppName from 'components/AppName';

export default class AppNameGuideComponent extends React.Component {
    render() {
        return (
            <SGPage>

                <SGSection title="AppName - with name property">
                    <AppName title="Grocery List" />
                </SGSection>

            </SGPage>
        );
    }
}
