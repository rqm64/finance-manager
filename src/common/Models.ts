import {ETransactionType, EIDBStoreName} from './Enums';

export interface IStore {
    [EIDBStoreName.TRANSACTIONS]?: ITransaction[];
}

export interface ITransaction {
    account: any;
    amount: string;
    comment: string;
    date: string;
    category: any;
    transactionId: string;
    type: ETransactionType;
}
