const CreateProductCard=(products,productContainer)=>{
    for (let product of products) {
    


    const cardContainer = document.createElement("div");
    cardContainer.classList.add("card", "card-vertical", "d-flex", "direction-column", "relative", "shadow");

    // Image Container
    const imageContainer = document.createElement("div");
    imageContainer.classList.add("image-container","p-relative");

    const image = document.createElement("img");
    image.classList.add("card-image");
    image.setAttribute("src", product.img);
    image.setAttribute("alt", product.alt);
    
    const wishlist=document.createElement("button");
    const span=document.createElement("span");
    span.classList.add("material-symbols-outlined","inline-flex")
    span.innerText="favorite";
    
    wishlist.classList.add("wishlist");
    
    imageContainer.appendChild(image);
    imageContainer.appendChild(wishlist);
    wishlist.appendChild(span);
    cardContainer.appendChild(imageContainer);

    // Card Details Container
    const cardDetailsContainer = document.createElement("div");
    cardDetailsContainer.classList.add("card-details");

    // Brand
    const brandContainer = document.createElement("div");
    brandContainer.classList.add("card-title");
    brandContainer.innerText = product.brand;
    cardDetailsContainer.appendChild(brandContainer);

    // Card Description Container
    const descriptionContainer = document.createElement("div");
    descriptionContainer.classList.add("card-description");

    // Product Name
    const name = document.createElement("div");
    name.classList.add("card-des");
    name.innerText = product.name;
    descriptionContainer.appendChild(name);

    // Product Price
    const price = document.createElement("p");
    price.classList.add("card-price","d-flex","align-end","gap-sm");
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

    // Rating Container
    const ratings = document.createElement("p");
    ratings.classList.add("d-flex", "align-center");

    const rating = document.createElement("span");
    rating.innerText = product.rating;
    ratings.appendChild(rating);

    const star = document.createElement("span");
    star.classList.add("star-icon","star");
    star.innerText = "★"; // Unicode star
    ratings.appendChild(star);

    descriptionContainer.appendChild(ratings);

    cardDetailsContainer.appendChild(descriptionContainer);

    // cta-btn container
    const ctaBtnContainer = document.createElement("div");
    ctaBtnContainer.classList.add("cta-btn");

    const btn = document.createElement("button");
    btn.classList.add(
        "button", "btn-primary", "btn-icon", "cart-btn",
        "d-flex", "align-center", "justify-center", "gap", "cursor", "btn-margin"
    );
    btn.setAttribute("data-id",product._id)

    const image1 = document.createElement("i");
    image1.classList.add('bx', 'bx-cart');
   

    btn.appendChild(image1);
    btn.appendChild(document.createTextNode(" Add To Cart"));
    ctaBtnContainer.appendChild(btn);

    cardDetailsContainer.appendChild(ctaBtnContainer);

    cardContainer.appendChild(cardDetailsContainer);

    productContainer.appendChild(cardContainer);
}
}