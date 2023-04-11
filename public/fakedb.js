// use local storage to manage cart data
const addToDb = id => {
    let applyed = getApplyed();
    // add quantity
    // console.log(id)
    const quantity = applyed[id];
    if (!quantity) {
        applyed[id] = 1;
    }
    else {
        const newQuantity = quantity + 1;
        applyed[id] = newQuantity;

        return applyed[id];
    }
    localStorage.setItem('applyed', JSON.stringify(applyed));
}

const removeFromDb = id => {
    const shoppingCart = getShoppingCart();
    if (id in shoppingCart) {
        delete shoppingCart[id];
        localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
    }
}


const getApplyed = () => {
    let applyed = {};

    //get the shopping cart from local storage
    const storedApplyed = localStorage.getItem('applyed');
    if (storedApplyed) {
        applyed = JSON.parse(storedApplyed);
    }
    return applyed;
}


const deleteShoppingCart = () => {
    localStorage.removeItem('shopping-cart');
}

export {
    addToDb,
    removeFromDb,
    getApplyed,
    deleteShoppingCart
}
