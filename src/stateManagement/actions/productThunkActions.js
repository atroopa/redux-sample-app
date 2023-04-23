import {
    FETCH_PRODUCT_START,
    FETCH_PRODUCT_SUCC ,
    FETCH_PRODUCT_FAIELD
} from './actionTypes';

export function getAllProducts(dispatch){
    const apiUrl = 'https://apitester.ir/api/Products';
    dispatch(fetchProductStart);
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            dispatch(fetchProductSucc(data))
        })
        .catch(error => {
            dispatch(fetchProductFaield(error))
        })
}

export const fetchProductStart = () => ({
    type: FETCH_PRODUCT_START,

})

export const fetchProductSucc = (data) => ({
    type: FETCH_PRODUCT_SUCC,
    payload: data
    
})

export const fetchProductFaield = (errorMessage) => ({
    type: FETCH_PRODUCT_FAIELD,
    payload: errorMessage
    
})