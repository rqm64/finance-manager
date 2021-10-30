import React from 'react';
import {useTranslation} from "react-i18next";
import {ITransaction} from '../Models';
import style from '../Styles/transactions-table-row.less';

interface IProps {
    index: number;
    item: ITransaction;
}

export const TransactionsTableRow: React.FC<IProps> = ({item}) => {
    const {t} = useTranslation();

    return (
        <div className={style['row']}>
            <div>
                {t(`Transactions.TransactionType.${item.type}`)}
            </div>
        </div>
    );
};
