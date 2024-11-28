const products = [
    {
        name: "ფეხსაცმელები",
        image: "download.jpeg",
        description: "ფეხსაცმელები კომფორტული ყოველდღიური გამოყენებისთვის.",
        price: "100₾"
    },
    {
        name: "ზურგჩანთა",
        image: "download (1).jpeg",
        description: "პანელით დატვირთული ჩანთა სამუშაოთი თუ გართობისთვის.",
        price: "120₾"
    },
    {
        name: "მოსასხამი",
        image: "download (2).jpeg",
        description: "ახალი სეზონის მოსასხამი, იდეალური შემოდგომისთვის.",
        price: "150₾"
    }
];

const cardsContainer = document.getElementById('cards-container');

products.forEach(product => {
    const card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <div class="card-content">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <div class="price">${product.price}</div>
        </div>
    `;

    cardsContainer.appendChild(card);
});
