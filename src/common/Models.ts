import {ETransactionType} from './Enums';

export interface ITransaction {
    account: any;
    amount: string;
    comment: string;
    date: string;
    category: any;
    transactionId: string;
    type: ETransactionType;
}
