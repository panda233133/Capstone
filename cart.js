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
const cartLength=document.querySelector(".item-count");
cartLength.innerText=cart.length

const productPrice=document.querySelector(".product-price")
const priceAfterDiscount=cart.reduce((accu,curr)=>accu+curr.newPrice,0)
productPrice.innerText=priceAfterDiscount

const discount=document.querySelectorAll(".discounted-amount")

const priceBeforeDiscount=cart.reduce((acc,curr)=>acc+curr.oldPrice,0)


const discountAmount=priceBeforeDiscount - priceAfterDiscount


for(let element of discount){
    element.innerText=discountAmount
}
discount.innerText=discountAmount
const totalAmount=document.querySelector(".total-amount")
totalAmount.innerText=priceAfterDiscount - discountAmount +100


