import {
    FETCH_PRODUC_START,
    FETCH_PRODUC_SUCC ,
    FETCH_PRODUC_FAIELD
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
    type: FETCH_PRODUC_START,

})

export const fetchProductSucc = (data) => ({
    type: FETCH_PRODUC_SUCC,
    payload: data
    
})

export const fetchProductFaield = (errorMessage) => ({
    type: FETCH_PRODUC_FAIELD,
    payload: errorMessage
    
})