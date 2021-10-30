import React from 'react';
import style from './Styles/page.less';
import {Aside} from './Aside';

interface IProps {

}

type TProps = React.PropsWithChildren<IProps>;

export const Page: React.FC<TProps> = ({children}) => {
    return (
        <div className={style['page']}>
            <Aside />
            <div className={style['page-container']}>
                {children}
            </div>
        </div>
    );
};
