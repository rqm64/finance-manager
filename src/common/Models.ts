import {Action} from 'redux';
import {IDBStoreName} from './Enums';
import {ITransaction} from 'Modules/Transactions/Models';

export interface IStore extends TDBStore {

}

type TDBStore = {
    [K in keyof IDBTypesMap]: IDBData<IDBTypesMap[K]>;
}

export interface IDBTypesMap  {
    [IDBStoreName.TRANSACTIONS]?: ITransaction;
}

export type TDBStoreConfigField<T> = {
    [key in keyof Omit<T, 'id'>]: boolean;
}

export type TDBStoreConfig = {
    [K in keyof IDBTypesMap]: TDBStoreConfigField<IDBTypesMap[K]>;
}

export interface IAction<T> extends Action {
    payload: T;
}

export interface IDBActions<T> {
    addItem: (item: Omit<T, 'id'>) => void;
    editItem: (item: T) => void;
    getItems: () => Promise<void>;
    deleteItem: (id: string) => void;
}

export interface IDBData<T> {
    items: T[];
    isLoading: boolean;
    totalCount: number;
}
