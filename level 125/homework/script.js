const productsContainer = document.getElementById('products-container');
const cartCount = document.getElementById('cart-count');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const viewCartBtn = document.getElementById('view-cart-btn');
const cartModal = document.getElementById('cart-modal');
const closeCartBtn = document.getElementById('close-cart-btn');
const clearCartBtn = document.getElementById('clear-cart-btn');
let products = [];
let cart = JSON.parse(localStorage.getItem('cart')) || [];
function fetchProducts() {
    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => {
            products = data;
            renderProducts();
            updateCartCount();
        });
}
function renderProducts() {
    productsContainer.innerHTML = '';
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.image}" class="product-image">
            <h3>${product.title}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
        `;
        productsContainer.appendChild(productCard);
    });
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            addToCart(productId);
        });
    });
}
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.image,
            quantity: 1
        });
    }
    
    saveCart();
    updateCartCount();
}
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}
function updateCartCount() {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = count;
}
function renderCart() {
    cartItems.innerHTML = '';
    let total = 0;
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p>Your cart is empty</p>';
    } else {
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <div>
                    <img src="${item.image}" style="width:50px;height:50px;object-fit:contain;">
                    ${item.title}
                </div>
                <div>
                    $${item.price.toFixed(2)} × ${item.quantity}
                </div>
            `;
            cartItems.appendChild(cartItem);
            total += item.price * item.quantity;
        });
    }
    
    cartTotal.textContent = total.toFixed(2);
    cartModal.style.display = 'flex';
}
function clearCart() {
    cart = [];
    saveCart();
    updateCartCount();
    renderCart();
}
viewCartBtn.addEventListener('click', renderCart);
closeCartBtn.addEventListener('click', () => cartModal.style.display = 'none');
clearCartBtn.addEventListener('click', clearCart);
fetchProducts();