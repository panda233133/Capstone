import {CreateProductCard} from "./createproductcart.js"
import {findProductsInCard} from "./utils/productInCart.js"
import { createHorizontalProductCard} from "./createHorizontalProductCard.js";
const cartContainer=document.getElementById("cart");
let cart=JSON.parse(localStorage.getItem("cart"))||[]


cartContainer.addEventListener("click",(event)=>{
    cart=cart.filter(({_id})=>_id!==event.target.dataset.id)
     cartContainer.innerHTML=""
     CreateProductCard(cart,cartContainer,findProductsInCard,"cart")
    localStorage.setItem("cart",JSON.stringify(cart))
})

// CreateProductCard(cart,cartContainer,findProductsInCard,"cart")
console.log(cart)


createHorizontalProductCard(cart,cartContainer,findProductsInCard)