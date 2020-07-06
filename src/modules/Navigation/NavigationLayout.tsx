import React from 'react';
import {Page} from 'Common/Components';

interface IProps {}

type TProps = React.PropsWithChildren<IProps>;

export const NavigationLayout = (props: TProps) => {
    return (
        <Page>
            {props.children}
        </Page>
    )
};
