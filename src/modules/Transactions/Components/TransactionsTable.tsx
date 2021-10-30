import React from 'react';
import {Virtuoso} from 'react-virtuoso';
import {IDBData} from 'Common/Models';
import {ITransaction} from '../Models';
import {TransactionsTableRow} from './TransactionsTableRow';

interface IProps {
    data: IDBData<ITransaction>;
}

const itemConstent = (index: number, item: ITransaction) => <TransactionsTableRow index={index} item={item} />

export const TransactionTable: React.FC<IProps> = ({data}) => {
    return (
        <Virtuoso
            data={data.items || []}
            overscan={100}
            totalCount={data.totalCount}
            itemContent={itemConstent}
        />
    );
};
