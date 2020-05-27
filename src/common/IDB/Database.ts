import {EIDBStoreName} from '../Enums';
import {IStoreItem, storeConfig} from './Consts';

const IDB_NAME = 'FMDatabase';
const IDB_VERSION = 1;

let db: IDBDatabase = null;

export const openIDB = () => {
    if (!db) {
        const dbReq = indexedDB.open(IDB_NAME, IDB_VERSION);

        dbReq.onsuccess = (e: any) => {
            db = e.target.result;
        };
        dbReq.onerror = (e: any) => {
            console.error('error opening database ' + e.target.errorCode);
        };
        dbReq.onupgradeneeded = (e: any) => {
            db = e.target.result;
            createStore(db, EIDBStoreName.TRANSACTIONS, storeConfig[EIDBStoreName.TRANSACTIONS]);
        };
    }
};

const createStore = <T extends string>(db: IDBDatabase, name: string, config: IStoreItem<T>[]) => {
    if (!db.objectStoreNames.contains(name)) {
        const store = db.createObjectStore(name, {keyPath: 'id', autoIncrement: true});
        for (let i = 0; i < config.length; i++) {
            store.createIndex(config[i].key, config[i].key, {unique: config[i].unique});
        }
    }
};

const getObjectStore = (name: string, mode: IDBTransactionMode) => {
    const tx = db.transaction(name, mode);
    return tx.objectStore(name);
};
