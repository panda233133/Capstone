export const createHorizontalProductCard = (products, parentContainer) => {
    for (let product of products) {
        const cardcontainer = document.createElement("div")
        cardcontainer.classList.add("d-flex", "card-horizontal", "shadow","hieght2" )

        // image container
        const imagecontainer = document.createElement("div")
        imagecontainer.classList.add("card-hori-image-contaienr","relative")

        const image = document.createElement("img")
        image.classList.add("card-image","height")
        image.setAttribute("src", product.img)
        image.setAttribute("alt", product.name)

        imagecontainer.appendChild(image)
        cardcontainer.append(imagecontainer)

        // card Description container
        const cardDetailsContainer = document.createElement("div");
        cardDetailsContainer.classList.add("card-details", "d-flex", "direction-column");

        const brandContainer = document.createElement("div");
        brandContainer.classList.add("card-title");
        brandContainer.innerText = product.brand;
        cardDetailsContainer.appendChild(brandContainer);

        const descriptionContainer = document.createElement("div");
        descriptionContainer.classList.add("card-description");

        // product name
        const name = document.createElement("div");
        name.classList.add("card-des");
        name.innerText = product.name;
        descriptionContainer.appendChild(name);

        const price = document.createElement("p");
        price.classList.add("card-price");
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
        cardDetailsContainer.appendChild(descriptionContainer)

        // Quantity container
        const quantitycontainer = document.createElement("div")
        quantitycontainer.classList.add("quantity-container", "d-flex", "gap")


        const quantityContainerTitle = document.createElement("p")
        quantityContainerTitle.classList.add("count-container", "d-flex", "align-center", "gap")


        const quantity = document.createElement("div")
        quantity.classList.add("count-container", "d-flex", "align-center", "gap")

        const incBtn = document.createElement("button")
        incBtn.classList.add("count")
        incBtn.innerText - "+"

        const value = document.createElement("span")
        value.classList.add("count-value")
        value.innerText = "1"

        const decBtn = document.createElement("button")
        decBtn.classList.add("count",)
        decBtn.innerText - "-"



        quantity.appendChild(incBtn)
        quantity.appendChild(value)
        quantity.appendChild(decBtn)


        quantitycontainer.appendChild(quantity)
        cardDetailsContainer.appendChild(quantitycontainer)

        // CTA BUTTON
        const ctaBtnContainer = document.createElement("div");
        ctaBtnContainer.classList.add("cta-btn","d-flex","gap");

        const removebtn = document.createElement("button");
        removebtn.classList.add(
            "button", "btn-primary", "btn-icon", "cart-btn",
            "d-flex", "align-center", "justify-center", "gap", "cursor", "btn-margin","hori-btn"
        );
        removebtn.setAttribute("data-di",product._id)
        removebtn.innerText="Remove"

        const savebtn = document.createElement("button");
        savebtn.classList.add(
            "button", "btn-primary", "btn-icon", "cart-btn",
            "d-flex", "align-center", "justify-center", "gap", "cursor", "btn-margin","hori-btn"
        );
        savebtn.setAttribute("data-di",product._id)
        savebtn.innerText="save To Wishlist"
        ctaBtnContainer.appendChild(removebtn)
        ctaBtnContainer.appendChild(savebtn)

        cardDetailsContainer.appendChild(ctaBtnContainer)

        cardcontainer.appendChild(cardDetailsContainer)

        parentContainer.appendChild(cardcontainer)
    }

}