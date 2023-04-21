// GetAll
// GetById
// Add
// Remove
// Edite

export const getAll = () => ({
    type:"PRODUCT_GET_ALL",

});


export const getByiD = id => ({
    type: "PRODUCT_GET_BY_ID",
    pyload: id
});

export const add = item => ({
    type: "PRODUCT_ADD",
    payload: item
});

export const remove = id => ({
    type: "PRODUCT_REMOVE",
    payload: id
});

export const edit = item => ({
    type: "PRODUCT_EDIT",
    payload: item
});