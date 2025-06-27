const UiMaker = (CartItem) => {
  document.getElementById("wishlist-grid").innerHTML = "";

  CartItem.map((item) => {
    const wishlistItem = document.createElement("div");
    wishlistItem.classList.add("wishlist-item");

    const discount = document.createElement("span");
    discount.classList.add("discount");
    discount.textContent = `${Math.round(
      (parseFloat(item.price) * 100) / parseFloat(item.mrp) - 100
    )}%`;
    wishlistItem.appendChild(discount);

    const remove = document.createElement("span");
    remove.classList.add("remove");
    const removeIcon = document.createElement("i");
    removeIcon.classList.add("fas", "fa-trash");
    remove.appendChild(removeIcon);
    wishlistItem.appendChild(remove);
    removeIcon.addEventListener("click", async () => {
      alert(`${item.name} Remove From WishList`);
    });

    const img = document.createElement("img");
    img.src = item.img;
    img.alt = item.name;
    wishlistItem.appendChild(img);

    const addToCart = document.createElement("div");
    addToCart.classList.add("add-to-cart");
    const cartIcon = document.createElement("i");
    cartIcon.classList.add("fas", "fa-shopping-cart");
    addToCart.appendChild(cartIcon);
    addToCart.appendChild(document.createTextNode(" Add To Cart"));
    wishlistItem.appendChild(addToCart);
    addToCart.addEventListener("click", async () => {
        alert(`${item.name} added to cart!`);
    });

    const info = document.createElement("div");
    info.classList.add("info");

    const name = document.createElement("h4");
    name.textContent = item.name;
    info.appendChild(name);

    const price = document.createElement("span");
    price.classList.add("price");
    price.textContent = `₹${item.price}`;
    info.appendChild(price);

    const originalPrice = document.createElement("span");
    originalPrice.classList.add("original-price");
    originalPrice.style.marginLeft = "20px";
    originalPrice.textContent = `₹${item.mrp}`;
    info.appendChild(originalPrice);

    wishlistItem.appendChild(info);

    document.getElementById("").appendChild(wishlistItem);
  });
};