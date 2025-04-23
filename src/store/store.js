import {combineReducers, configureStore} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer, persistStore} from 'redux-persist';
import dataReducer from "./dataSlice"

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
};

const reducer = combineReducers({
    data: dataReducer,
})

const persistedReducer = persistReducer(persistConfig, reducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            thunk: {},
            serializableCheck: false,
        }),
})

export const persistor = persistStore(store);
