import {Table} from 'antd';
import React from 'react';
import {FilterAcc} from './FilterAcc';
import {TableAcc} from './TableAcc';

export const Accounting = () => {
    return (
        <>
            <FilterAcc />
            <TableAcc />
        </>
    );
};
