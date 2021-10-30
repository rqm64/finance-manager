import {v4} from 'uuid';
import {useSelector as useReduxSelector, shallowEqual} from 'react-redux'
import {Dispatch} from 'redux';
import {IDBStoreName, IDBActionType, IDBActionStatus} from './Enums';
import {addIDBItem, editIDBItem, getIDBItems, deleteIDBItem, getCount} from './IDB/Database';
import {IDBActions, IDBTypesMap, IStore} from './Models';

export function useSelector<T>(selector: (state: IStore) => T) {
  return useReduxSelector<IStore, T>(selector, shallowEqual);
}

export const createIDBActions = <T extends IDBStoreName, K extends IDBTypesMap[T]>(
    dispatch: Dispatch,
    type: T,
): IDBActions<K> => {
    return {
        addItem: (item: Omit<K, 'id'>) => {
            dispatch({type: `${type}.${IDBActionType.ADD_ITEM}.${IDBActionStatus.RUNNING}`});
            addIDBItem(type, {...item, id: v4()})
            .then(() => {
                dispatch({type: `${type}.${IDBActionType.ADD_ITEM}.${IDBActionStatus.SUCCESS}`});
            })
            .catch(() => {
                dispatch({type: `${type}.${IDBActionType.ADD_ITEM}.${IDBActionStatus.FAILURE}`});
            });
        },
        editItem: (item: K) => {
            dispatch({type: `${type}.${IDBActionType.EDIT_ITEM}.${IDBActionStatus.RUNNING}`});
            editIDBItem(type, item)
            .then(() => {
                dispatch({type: `${type}.${IDBActionType.EDIT_ITEM}.${IDBActionStatus.SUCCESS}`});
            })
            .catch(() => {
                dispatch({type: `${type}.${IDBActionType.EDIT_ITEM}.${IDBActionStatus.FAILURE}`});
            });
        },
        getItems: async () => {
            try {
                dispatch({type: `${type}.${IDBActionType.GET_ITEMS}.${IDBActionStatus.RUNNING}`});
                const [totalCount, items] = await Promise.all([
                    getCount(type),
                    getIDBItems(type),
                ]);
                dispatch({type: `${type}.${IDBActionType.GET_ITEMS}.${IDBActionStatus.SUCCESS}`, payload: {items, totalCount}});
            } catch {
                dispatch({type: `${type}.${IDBActionType.GET_ITEMS}.${IDBActionStatus.FAILURE}`});
            }
        },
        deleteItem: (id: string) => {
            dispatch({type: `${type}.${IDBActionType.DELETE_ITEM}.${IDBActionStatus.RUNNING}`});
            deleteIDBItem(type, id)
            .then(() => {
                dispatch({type: `${type}.${IDBActionType.DELETE_ITEM}.${IDBActionStatus.SUCCESS}`});
            })
            .catch(() => {
                dispatch({type: `${type}.${IDBActionType.DELETE_ITEM}.${IDBActionStatus.FAILURE}`});
            }); 
        },
    };
};
