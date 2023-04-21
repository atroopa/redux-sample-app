
import {
    ProductGetAll,
    ProductGetById,
    ProductADD,
    ProductRemove,
    ProductEdit
} from './actionTypes';



export const getAll = () => ({
    type:ProductGetAll,

});


export const getByiD = id => ({
    type: ProductGetById,
    pyload: id
});

export const add = item => ({
    type: ProductADD,
    payload: item
});

export const remove = id => ({
    type:ProductRemove,
    payload: id
});

export const edit = item => ({
    type: ProductEdit,
    payload: item
});