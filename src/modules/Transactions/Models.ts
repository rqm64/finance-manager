import {ETransactionType} from './Enums';

export interface ITransaction {
    account: any;
    amount: string;
    category: any;
    comment: string;
    date: string;
    id: string;
    type: ETransactionType;
}
