import React from 'react';
import {DependencyHOC} from 'Common';
import {FilterAcc} from './FilterAcc';
import {TableAcc} from './TableAcc';

const AccountingComponent = () => {
    return (
        <>
            <FilterAcc />
            <TableAcc />
        </>
    );
};

export const Accounting = DependencyHOC(AccountingComponent);