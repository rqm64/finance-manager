import {useEffect, useContext, useRef} from 'react';
import {ReactReduxContext, useDispatch} from 'react-redux';
import {IDBStoreName, createIDBActions, createIDBReducers} from 'Common';

export function useInitStoreTransactions() {
    const {store} = useContext<any>(ReactReduxContext);

    useEffect(() => {
        createIDBReducers(store, IDBStoreName.TRANSACTIONS);
    }, []);
}

export function useTransactionsActions() {
    const dispatch = useDispatch();

    const IDBActions = useRef(createIDBActions(dispatch, IDBStoreName.TRANSACTIONS)).current;

    return IDBActions;
};
