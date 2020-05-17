import {Table} from 'antd';
import React from 'react';

const columns = [
    {
        title: 'Type',
        dataIndex: 'type',
        key: 'type',
    },
    {
        title: 'Amount',
        dataIndex: 'amount',
        key: 'amount',
    },
    {
        title: 'Date',
        dataIndex: 'date',
        key: 'date',
    },
];

export const TableAcc = () => {
    return (
        <Table columns={columns} />
    );
};
