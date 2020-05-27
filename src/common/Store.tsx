import {combineReducers, createStore, ReducersMapObject} from 'redux';

const createReducer = (reducers?: any) => combineReducers({...reducers});

function configureStore() {
    const store: any = {
        ...createStore(
            createReducer(),
            (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
        ),
        asyncReducers: {},
    };

    store.addReducer = (reducers: ReducersMapObject) => {
        let isUpdate = false;
        Object.keys(reducers).forEach((key) => {
            if (!store.asyncReducers[key]) {
                isUpdate = true;
                store.asyncReducers[key] = reducers[key];
            }
        });
        isUpdate && store.replaceReducer(createReducer(store.asyncReducers));
        return store;
    };
    return store;
}

export const store = configureStore();
