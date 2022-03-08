import { combineReducers, createStore } from 'redux'
import authReducer from './authReducer'

const rootReducer = combineReducers({
  auth: authReducer,
})

export const store = createStore(rootReducer)
