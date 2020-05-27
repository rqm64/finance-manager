import {useDispatch} from 'react-redux';

export enum ETransactionsActionType {
    ADD_ITEM = 'TRANSACTIONS_ADD_ITEM',
}

export const useTransactionsActions = () => {
    const dispatch = useDispatch();

    const addTransaction = () => {
        dispatch({type: ETransactionsActionType.ADD_ITEM})
    }

    return {
        addTransaction
    };
};
