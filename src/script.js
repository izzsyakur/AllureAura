// Function to fetch products by brand
function fetchProductDetails() {
    const brand = document.getElementById("brandInput").value;

    // Check if a brand is provided
    if (!brand) {
        alert("Please enter a brand to search for products.");
        return;
    }

    // Construct the API URL with brand
    const apiURL = `http://makeup-api.herokuapp.com/api/v1/products.json?brand=${brand}`;

    fetch(apiURL)
        .then(response => response.json())
        .then(data => displayProductDetails(data))
        .catch(error => console.error("An error occurred:", error));
}

// Function to fetch products by both brand and product type
function fetchProductsByBrandAndType() {
    const brand = document.getElementById("brandInput").value;
    const productType = document.getElementById("productTypeSelect").value;

    // Check if both brand and product type are provided
    if (!brand || !productType) {
        alert("Please enter both brand and select a product type to search for products.");
        return;
    }

    // Construct the API URL with brand and product type
    const apiURL = `http://makeup-api.herokuapp.com/api/v1/products.json?brand=${brand}&product_type=${productType}`;

    fetch(apiURL)
        .then(response => response.json())
        .then(data => displayProductDetails(data))
        .catch(error => console.error("An error occurred:", error));
}

// Function to display product details
function displayProductDetails(data) {
    const productList = document.getElementById("productList");
    productList.innerHTML = ""; // Clear the previous content

    if (data.length === 0) {
        productList.innerHTML = "No products found for this brand and product type.";
        return;
    }

    data.forEach(product => {
        const productInfo = document.createElement("div");
        productInfo.innerHTML = `
            <h2>${product.name}</h2>
            <p class="brand-info"><strong>Brand:</strong> ${product.brand}</p>
            <p><strong>Category:</strong> ${product.category}</p>
            <p><strong>Price:</strong> $${product.price}</p>
            <p><strong>Description:</strong> ${product.description}</p>
            <p><strong>Product Image:</strong> <img src="${product.image_link}" alt="Product Image"></p>
            <p><strong>Product Website:</strong> <a href="${product.product_link}" target="_blank">${product.product_link}</a></p>
            <p><strong>Related Link:</strong> <a href="${product.product_link}" target="_blank">${product.product_link}</a></p>
            <hr>
        `;
        productList.appendChild(productInfo);

        // Apply Agbalumo font to the brand information paragraph
        const brandInfoParagraph = productInfo.querySelector(".brand-info");
        brandInfoParagraph.style.fontFamily = 'Agbalumo, sans-serif';
    });
}


