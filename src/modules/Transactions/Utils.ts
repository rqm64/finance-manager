import { ETransactionType } from "./Enums";
import { ITransaction } from "./Models";

export const getDefaultTransaction = (): ITransaction => ({
    type: ETransactionType.EXPENSE,
    amount: '0.00',
    id: null,
    account: null,
    category: null,
    comment: '',
    date: null,
});
