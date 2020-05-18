const IDB_NAME = 'FMDatabase';

let db: IDBDatabase = null;
// let dbReq: IDBOpenDBRequest = null;

const openIDB = () => {
    if (!db) {
        const dbReq = indexedDB.open(IDB_NAME, 1);

        dbReq.onupgradeneeded = (e: any) => {
            console.log('onupgradeneeded', e)
            db = e.target.result;
            db.createObjectStore('notes', {autoIncrement: true});
        };

        dbReq.onsuccess = (e: any) => {
            console.log('onsuccess', e)
            db = e.target.result;

            addNote('lalalal')
        };

        dbReq.onerror = (e: any) => {
            alert('error opening database ' + e.target.errorCode);
        };
    }
};

const addNote = (message: string) => {
    let tx = db.transaction(['notes'], 'readwrite');
    let store = tx.objectStore('notes');
    let note = {text: message, timestamp: Date.now()};
    store.add(note);

    tx.oncomplete = () => {
        console.log('stored note!')
    }

    tx.onerror = (e: any) => {
        alert('error storing note ' + e.target.errorCode);
    }
}

export const IDB = {
    open: openIDB,
    addNote: addNote,
};
