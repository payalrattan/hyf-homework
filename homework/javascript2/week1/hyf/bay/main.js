const products = getAvailableProducts();
// Function to render products
function renderProducts(products) {
    const productList = document.getElementById("product-list");
    productList.innerHTML = ""; // Clear existing list

    products.forEach(product => {
        const listItem = document.createElement("li"); // Create <li>
        listItem.innerHTML = `<strong>${product.name}</strong> - Price: $${product.price} - Rating: ⭐${product.rating}`;
        productList.appendChild(listItem); // Append to <ul>
    });
}

// Get products and render them

renderProducts(products);
