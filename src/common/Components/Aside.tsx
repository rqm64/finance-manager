import React from 'react';
import style from 'Styles/Common/aside.less';

interface IProps {

}

export const Aside: React.FC<IProps> = () => {
    return (
        <aside className={style['aside']}>
            Aside
        </aside>
    );
};
