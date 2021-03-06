import { persistStore, persistReducer } from 'redux-persist'
import { combineReducers, createStore } from 'redux'
import storage from 'redux-persist/lib/storage'
import tokenReducer from './tokenReducer'

const rootReducer = combineReducers({
  token: tokenReducer,
})

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer)
export const persistor = persistStore(store)
