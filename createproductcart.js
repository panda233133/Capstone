export const CreateProductCard = (products, productContainer, findProductsInCard, pageType) => {
  for (let product of products) {
    // Card Container
    const cardContainer = document.createElement("div");
    cardContainer.classList.add("card", "card-vertical", "d-flex", "direction-column", "relative", "shadow","column");
    

    // Image Container
    const imageContainer = document.createElement("div");
    imageContainer.classList.add("image-container", "p-relative");

    const image = document.createElement("img");
    image.classList.add("card-image");
    image.setAttribute("src", product.img);
    image.setAttribute("alt", product.alt);

    const wishlist = document.createElement("button");
    wishlist.classList.add("wishlist");

    const span = document.createElement("span");
    span.classList.add("material-symbols-outlined", "inline-flex");
    span.innerText = "favorite";

    wishlist.appendChild(span);
    imageContainer.appendChild(image);
    imageContainer.appendChild(wishlist);
    cardContainer.appendChild(imageContainer);

    // Card Details
    const cardDetailsContainer = document.createElement("div");
    cardDetailsContainer.classList.add("card-details");

    const brandContainer = document.createElement("div");
    brandContainer.classList.add("card-title");
    brandContainer.innerText = product.brand;
    cardDetailsContainer.appendChild(brandContainer);

    const descriptionContainer = document.createElement("div");
    descriptionContainer.classList.add("card-description");

    const name = document.createElement("div");
    name.classList.add("card-des");
    name.innerText = product.name;
    descriptionContainer.appendChild(name);

    const price = document.createElement("p");
    price.classList.add("card-price", "d-flex", "align-end", "gap-sm");
    price.innerText = `Rs. ${product.newPrice} `;

    const oldPrice = document.createElement("span");
    oldPrice.classList.add("price-strike-through");
    oldPrice.innerText = `Rs. ${product.oldPrice}`;
    price.appendChild(oldPrice);

    const discount = document.createElement("span");
    discount.classList.add("discount");
    discount.innerText = ` (${product.discount}% OFF)`;
    price.appendChild(discount);

    descriptionContainer.appendChild(price);
  
    // rating
    const ratings = document.createElement("p");
    ratings.classList.add("d-flex", "align-center");

    const rating = document.createElement("span");
    rating.innerText = product.rating;
    ratings.appendChild(rating);

    const star = document.createElement("span");
    star.classList.add("star-icon", "star");
    star.innerText = "★";
    ratings.appendChild(star);

    descriptionContainer.appendChild(ratings);
    cardDetailsContainer.appendChild(descriptionContainer);

    // CTA Button
    const ctaBtnContainer = document.createElement("div");
    ctaBtnContainer.classList.add("cta-btn");

    const btn = document.createElement("button");
    btn.classList.add(
      "button", "btn-primary", "btn-icon", "cart-btn",
      "d-flex", "align-center", "justify-center", "gap", "cursor", "btn-margin"
    );
    btn.setAttribute("data-id", product._id);

    const icon = document.createElement("i");
    icon.classList.add("bx", "bx-cart");

    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    const isProductInCart = findProductsInCard(cartItems, product._id);

    const buttonText = pageType === "cart"
      ? "Remove"
      : pageType === "products" && isProductInCart
        ? "Go to Cart"
        : "Add to Cart";

    btn.appendChild(icon);
    btn.appendChild(document.createTextNode(buttonText));
    ctaBtnContainer.appendChild(btn);

    cardDetailsContainer.appendChild(ctaBtnContainer);
    cardContainer.appendChild(cardDetailsContainer);
    productContainer.appendChild(cardContainer);
  }
};