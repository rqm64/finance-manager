import {IDBStoreName} from '../Enums';
import {IDBTypesMap} from '../Models';
import {storeConfig} from './Config';

const IDB_NAME = 'FMDatabase';
const IDB_VERSION = 1;

let db: IDBDatabase = null;

export const openIDB = (onOpen: (loaded: boolean) => void) => {
    if (!db) {
        const dbReq = indexedDB.open(IDB_NAME, IDB_VERSION);

        dbReq.onsuccess = (e: any) => {
            db = e.target.result;
            onOpen(true);
        };
        dbReq.onerror = (e: any) => {
            console.error('error opening database ' + e.target.errorCode);
        };
        dbReq.onupgradeneeded = (e: any) => {
            db = e.target.result;
            createStore(db, IDBStoreName.TRANSACTIONS);
        };
    }
};

const createStore = (db: IDBDatabase, storeName: IDBStoreName) => {
    if (!db.objectStoreNames.contains(storeName)) {
        const config = storeConfig[storeName];
        const store = db.createObjectStore(storeName, {keyPath: 'id', autoIncrement: false});
        for (let i in config) {
            // @ts-ignore tslint:disable-next-line
            store.createIndex(i, i, {unique: config[i]});
        }
    }
};

const getObjectStore = (storeName: IDBStoreName, mode: IDBTransactionMode) => {
    const tx = db.transaction(storeName, mode);
    return tx.objectStore(storeName);
};

export const addIDBItem = <T extends IDBStoreName>(storeName: T, data: IDBTypesMap[T]) => (
    asyncRequest(storeName, 'readwrite', (s: IDBObjectStore) => s.add(data))
);

export const editIDBItem = <T extends IDBStoreName>(storeName: T, data: IDBTypesMap[T]) => (
    asyncRequest(storeName, 'readwrite', (s: IDBObjectStore) => s.put(data))
);

export const getIDBItems = <T extends IDBStoreName>(storeName: T, index?: Extract<keyof IDBTypesMap[T], string>) => (
    asyncRequest(storeName, 'readonly', (s: IDBObjectStore) => s.getAll())
);

export const deleteIDBItem = (storeName: IDBStoreName, id: string) => (
    asyncRequest(storeName, 'readwrite', (s: IDBObjectStore) => s.delete(id))
);

export const getCount = (storeName: IDBStoreName) => (
    asyncRequest(storeName, 'readonly', (s: IDBObjectStore) => s.count())
);

const asyncRequest = (storeName: IDBStoreName, mode: IDBTransactionMode, call: (s: IDBObjectStore) => IDBRequest) => (
    new Promise((resolve, reject) => {
        const store = getObjectStore(storeName, mode);
        const request = call(store);
        request.onsuccess = (e: any) => {
            resolve(e.target.result);
        }
        request.onerror = (e: any) => {
            reject(e.target.errorCode);
        }
    })
);
