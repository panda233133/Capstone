import { products } from "./db/product.js";
import{CreateProductCard} from "./createproductcart.js"
import { findProductsInCard } from "./utils/productInCart.js";
console.log(products);


const productContainer = document.getElementById("products");
let cart=[]


const filterContainer=document.querySelector(".side-bar")


productContainer.addEventListener("click",(e)=>{
    
 
    
    if(!findProductsInCard(cart,e.target.dataset.id)){
         const productToAddToCart=products.filter(({_id})=>_id===e.target.dataset.id)
         
    cart=[...cart,...productToAddToCart]
    localStorage.setItem("cart",JSON.stringify(cart))
    console.log(cart)
    const cartButton=e.target;
    cartButton.innerHTML="Go To Cart<span class='material-icons-outlined'>shopping_cart</span>"
  
    }else{
        window.location.href="cart.html"
    }

})



filterContainer.addEventListener("click",(event)=>{
    
    const updatedProducts=products.filter(({rating})=>rating>=Number(event.target.dataset.rating))
    productContainer.innerHTML=""
    CreateProductCard(updatedProducts,productContainer,findProductsInCard,"products")

})


CreateProductCard(products,productContainer,findProductsInCard,"products")
let carts=document.getElementById("cart")
carts.addEventListener("click",()=>{
    window.location.href="./cart.html"
})

