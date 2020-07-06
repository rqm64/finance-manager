import React from 'react';
import {useTranslation} from "react-i18next";
import {Modal, useModal} from 'Common/Components';
import style from '../Styles/filter-panel.less';

interface IProps {
    onCreate: () => void;
}

export const TransactionsFilter: React.FC<IProps> = ({onCreate}) => {
    const {t} = useTranslation();
    const {isShowModal, handleShowModal} = useModal();

    return (
        <div className={style['filter']}>
            <button onClick={handleShowModal}>create</button>
            <Modal
                title={t('Transactions.ModalCreate.title')}
                isOpen={isShowModal}
                onClose={handleShowModal}
            />
        </div>
    );
};
