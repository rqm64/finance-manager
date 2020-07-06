import React from 'react';
import {Virtuoso} from 'react-virtuoso';
import {IDBData} from 'Common/Models';
import {ITransaction} from '../Models';
import {TransactionsTableRow} from './TransactionsTableRow';

interface IProps {
    data: IDBData<ITransaction>;
}

export const TransactionTable: React.FC<IProps> = ({data}) => {
    return (
        <Virtuoso
            style={{height: '100%'}}
            overscan={100}
            totalCount={data.totalCount}
            item={TransactionsTableRow}
            endReached={() => {}}
        />
    );
};
