export enum IDBStoreName {
    TRANSACTIONS = 'Transactions',
}

export enum IDBActionType {
    ADD_ITEM = 'ADD_ITEM',
    EDIT_ITEM = 'EDIT_ITEM',
    GET_ITEMS = 'GET_ITEMS',
    DELETE_ITEM = 'DELETE_ITEM',
}

export enum IDBActionStatus {
    RUNNING = 'RUNNING',
    SUCCESS = 'SUCCESS',
    FAILURE = 'FAILURE',
}
