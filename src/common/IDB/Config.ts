import {IDBStoreName} from '../Enums';
import {TDBStoreConfigField, TDBStoreConfig} from '../Models';
import {ITransaction} from 'Modules/Transactions/Models';

const transactionsStoreConfig: TDBStoreConfigField<ITransaction> = {
    account: false,
    amount: false,
    category: false,
    comment: false,
    date: false,
    type: false,
}

export const storeConfig: TDBStoreConfig = {
    [IDBStoreName.TRANSACTIONS]: transactionsStoreConfig,
};
