import {IDBStoreName, IDBActionType, IDBActionStatus} from './Enums';
import {IAction} from './Models';
import {IAsyncStore} from './Store';

export const createIDBReducers = (store: IAsyncStore, type: IDBStoreName) => {
    if (store && store.addReducer) {
        store.addReducer({[type]: getIDBReducers(type)});
    }
};

const getDefaultIDBState = (): any => ({
    items: null,
    isLoading: false,
    totalCount: 0,
});

const getIDBReducers = (name: IDBStoreName) =>
    (prevState: any = getDefaultIDBState(), action: IAction<any>) => {
        const {type, payload} = action;
        switch (type) {
            case `${name}.${IDBActionType.GET_ITEMS}.${IDBActionStatus.RUNNING}`:
                return {...prevState, isLoading: true};
            case `${name}.${IDBActionType.GET_ITEMS}.${IDBActionStatus.SUCCESS}`:
                return {...prevState, items: payload.items, totalCount: payload.totalCount, isLoading: false};
            default:
                return prevState;
        }
    };

