import React, {useEffect} from 'react';
import {useSelector} from 'Common';
import {getNow} from 'Common/Utils/DateUtils';
import {useInitStoreTransactions, useTransactionsActions} from '../Store';
import style from '../Styles/transactions.less';
import {TransactionsFilter} from './TransactionsFilter';
import {TransactionTable} from './TransactionsTable';

export const Transactions = () => {
    useInitStoreTransactions();
    const actions = useTransactionsActions();

    const transactions = useSelector(state => state.Transactions);

    const handleCreate = () => {
        // actions.addItem({amount: '10', date: getNow()});
    };

    useEffect(() => {
        actions.getItems();
    }, []);

    return (
        <div className={style['container']}>
            <TransactionsFilter onCreate={handleCreate}/>
            <TransactionTable data={transactions || {items: []} as any} />
        </div>
    );
};
