import React from 'react';
import {useSelector} from 'react-redux';
import {useInitStoreTransactions, useTransactionsActions} from './Store';
import {TransactionsFilter} from './TransactionsFilter';
import {TransactionTable} from './TransactionsTable';

export const Transactions = () => {
    useInitStoreTransactions();

    const actions = useTransactionsActions();
    const test = useSelector(s => s.test);

    return (
        <>
            {test}
            <button onClick={actions.addTransaction}>Click</button>
            <TransactionsFilter />
            <TransactionTable />
        </>
    );
};
