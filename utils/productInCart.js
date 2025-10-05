export const findProductsInCard = (cart, productId) => {
    return Array.isArray(cart) && 
           productId && 
           cart.some(product => product?._id === productId);
}