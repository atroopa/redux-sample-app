import { createStore } from "redux";
import reducers from "./reducers";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web


const persistConfig = {
    key: 'root',
    storage,
    //blacklist: ['productState'],
    whitelist: ['productState']
  }
   
const persistedReducer = persistReducer(persistConfig, reducers) 
// const store = createStore(reducers);

// export default store;

export const store = createStore(persistedReducer)
export const persistor = persistStore(store)
