import { createStore } from "redux";
import reducers from "./reducers";
import { persistStore, persistReducer } from "redux-persist";
import  storage  from "redux-persist/lib/storage";



const persistConfig = {
    key:'root',
    storage
}

// const = persistReducer = persistReducer(persistConfig, reducers);   
// const store = createStore(reducers);

// export default store;

export default () => {
    let store = createStore(persistReducer);
    let persistor =  persistStore(store);
    return {store, persistor}
}