import React, { useCallback, useState } from 'react';
import {useTranslation} from "react-i18next";
import {Modal, Select} from 'Components';
import { ITransaction } from '../Models';
import { getDefaultTransaction } from '../Utils';
import { ETransactionType } from '../Enums';

interface IProps {
  isShowModal: boolean;
  onShowModal: () => void;
  onCreate: (data: ITransaction) => void;
}

export const TransactionsModalCreate: React.FC<IProps> = ({isShowModal, onShowModal, onCreate}) => {
    const {t} = useTranslation();

    const [data, onChangeData] = useState(getDefaultTransaction());

    const handleChangeData = (field: keyof ITransaction) => (value: any) => {
        onChangeData({...data, [field]: value});
    };

    const handleSave = () => {
        onCreate(data);
    };

    return (
        <Modal
            title={t('Transactions.ModalCreate.title')}
            isOpen={isShowModal}
            onClose={onShowModal}
        >
            <div>
                {t('Transactions.ModalCreate.type')}
                <Select
                    value={data.type}
                    onChange={handleChangeData('type')}
                    options={[
                        {value: ETransactionType.EXPENSE, label: t('Transactions.TransactionType.EXPENSE')},
                        {value: ETransactionType.INCOME, label: t('Transactions.TransactionType.INCOME')},
                    ]}
                />
            </div><br />
            <div>
                {t('Transactions.ModalCreate.amount')}
            </div><br />
            <div>
                {t('Transactions.ModalCreate.category')}
            </div><br />
            <div>
                {t('Transactions.ModalCreate.date')}
            </div><br />
            <div>
                {t('Transactions.ModalCreate.account')}
            </div><br />
            <div>
                {t('Transactions.ModalCreate.notes')}
            </div><br />
            <button onClick={handleSave}>Save</button>
        </Modal>
    );
};
