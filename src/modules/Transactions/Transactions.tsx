import React from 'react';
import {useTransactionsActions} from './Actions';
import {TransactionsFilter} from './TransactionsFilter';
import {TransactionTable} from './TransactionsTable';

export const Transactions = () => {
    const actions = useTransactionsActions();

    return (
        <>
            <button onClick={actions.addTransaction}>Click</button>
            <TransactionsFilter />
            <TransactionTable />
        </>
    );
};
