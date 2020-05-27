import {EIDBStoreName} from '../Enums';
import {ITransaction} from '../Models';

export interface IStoreItem<T> {
    key: T;
    unique: boolean;
}

const transactionsStoreConfig: IStoreItem<keyof ITransaction>[] = [
    {key: 'transactionId', unique: true},
    {key: 'amount', unique: false},
];

export const storeConfig = {
    [EIDBStoreName.TRANSACTIONS]: transactionsStoreConfig,
};
