import {
    ProductGetAll,
    ProductGetById,
    ProductADD,
    ProductRemove,
    ProductEdit
} from './actionTypes';


const initialState = {
    items:     [],
    isLoading: true,
};


function ProductReducer(state, action) {

    switch (action.type) {

        case ProductGetAll:
            
            break;
    
        default:
            break;
    }

}