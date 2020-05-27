import {useEffect, useContext} from 'react';
import {ReactReduxContext, useDispatch} from 'react-redux';

export enum ETransactionsActionType {
    ADD_ITEM = 'TRANSACTIONS_ADD_ITEM',
}

export const useInitStoreTransactions = () => {
    const {store} = useContext<any>(ReactReduxContext);

    useEffect(() => {
        if (store && store.addReducer) {
            store.addReducer({test: () => 123});
        }
    }, []);
}

export const useTransactionsActions = () => {
    const dispatch = useDispatch();

    const addTransaction = () => {
        dispatch({type: ETransactionsActionType.ADD_ITEM});
    }

    return {
        addTransaction
    };
};
