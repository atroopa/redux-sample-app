import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import logger from 'redux-logger'


const persistConfig = {
    key: 'root',
    storage,
    //blacklist: ['productState'],
    whitelist: ['productState']
  }
   
const persistedReducer = persistReducer(persistConfig, reducers) 
// const store = createStore(reducers);

// export default store;

//export const store = createStore(persistedReducer, applyMiddleware(logger))
export const store = createStore(persistedReducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
export const persistor = persistStore(store)
