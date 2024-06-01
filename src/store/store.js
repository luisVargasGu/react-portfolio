import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import channelReducer from './channels/channels.reducers';
import roomReducer from './rooms/rooms.reducer';

const persistConfig = {
    key: 'root',
    storage,
};

const rootReducer = combineReducers({
    channels: channelReducer,
    rooms: roomReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
});

export const persistor = persistStore(store);

