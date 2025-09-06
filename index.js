import { products } from "./db/product.js";
console.log(products);


const productContainer = document.getElementById("products");
let cart=[]
const findProductsInCard=(cart,productId)=>{
    let isProductInCart=(cart&&cart.length>0&&cart.some(({_id})=>_id===productId))
        return isProductInCart
}

productContainer.addEventListener("click",(e)=>{
    
 
   
    if(!findProductsInCard(cart,e.target.dataset.id)){
         const productToAddToCart=products.filter(({_id})=>_id===e.target.dataset.id)
         
    cart=[...cart,...productToAddToCart]
    console.log(cart)
    const cartButton=e.target;
    cartButton.innerHTML="Go To Cart<span class='material-icons-outlined'>shopping_cart</span>"
  
    }else{
        location.href="cart.html"
    }

})
