import {
    ProductGetAll,
    ProductGetById,
    ProductADD,
    ProductRemove,
    ProductEdit
} from '../actions/actionTypes';


const initialState = {
    items:     [
        {id:1 , productName: "Product A", price: 100},
        {id:2 , productName: "Product B", price: 200},
        {id:3 , productName: "Product C", price: 300}
    ],
    isLoading: true,
};


function ProductReducer(state, action) {

    switch (action.type) {

        case ProductGetAll:
            return {...state, items:state.items};

        case ProductGetById:
            return {...state, items:state.items.find(q => q.id === action.payload)};
    
        case ProductADD:
            return {...state , items: state.items.concat([action.payload])};

        case ProductRemove:
            return {...state, items:state.item.filter(q => q.id != action.payload)};    

        default:
            return state;
    }

}

export default ProductReducer;