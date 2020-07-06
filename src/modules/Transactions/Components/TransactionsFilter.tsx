import React from 'react';
import {Modal, useModal} from 'Common/Components';
import style from '../Styles/filter-panel.less';

interface IProps {
    onCreate: () => void;
}

export const TransactionsFilter: React.FC<IProps> = ({onCreate}) => {
    const {isShowModal, handleShowModal} = useModal();

    return (
        <div className={style['filter']}>
            <button onClick={handleShowModal}>create</button>
            <Modal
                title="Modal Window"
                isOpen={isShowModal}
                onClose={handleShowModal}
            />
        </div>
    );
};
