import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { thunk } from 'redux-thunk';
import channelReducer from './channels/channels.reducers';
import messagesReducer from './messages/messages.reducer';
import roomReducer from './rooms/rooms.reducer';

const persistConfig = {
	key: 'root',
	storage,
}

const rootReducer = combineReducers({
	channels: channelReducer,
	rooms: roomReducer,
	messages: messagesReducer,
})

// TODO: Check redux-persist lib for fix
const persistedReducer = persistReducer<any, any>(persistConfig, rootReducer)

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}).concat(thunk),
})

export const persistor = persistStore(store)
