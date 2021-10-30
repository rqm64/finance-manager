import React from 'react';
import { useTranslation } from "react-i18next";
import { useModalState } from 'Components';
import style from '../Styles/filter-panel.less';
import { TransactionsModalCreate } from './TransactionsModalCreate';
import { ITransaction } from '../Models';

interface IProps {
  onCreate: (data: ITransaction) => void;
}

export const TransactionsFilter: React.FC<IProps> = ({onCreate}) => {
  const {t} = useTranslation();
  const {isShowModal, handleShowModal} = useModalState();

  return (
    <div className={style['filter']}>
      <button onClick={handleShowModal}>create</button>
      <TransactionsModalCreate
        isShowModal={isShowModal}
        onShowModal={handleShowModal}
        onCreate={onCreate}
      />
    </div>
  );
};
