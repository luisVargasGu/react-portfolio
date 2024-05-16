import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import channelReducer from './channels/channels.reducers';

const persistConfig = {
    key: 'root',
    storage,
};

const rootReducer = persistReducer(persistConfig, channelReducer);

export const store = configureStore({
    reducer: rootReducer,
});

export const persistor = persistStore(store);

