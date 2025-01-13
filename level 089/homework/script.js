const cardCont = document.getElementById('cards');
const filter = document.getElementById('filter');
const unfilter = document.getElementById('unfilter');
const ascBtn = document.getElementById('asc');
const descBtn = document.getElementById('desc');
const drabdomBtn = document.getElementById('random');

const cardsData = [
    { title: "კარტი 1", name:"placeholder", number: 15, image: "", rating: 4.5 },
    { title: "კარტი 2", name:"placeholder", number: 28, image: "", rating: 3.2 },
    { title: "კარტი 3", name:"placeholder", number: 5, image: "", rating: 5.0 },
    { title: "კარტი 4", name:"placeholder", number: 10, image: "", rating: 2.8 },
    { title: "კარტი 5", name:"placeholder", number: 22, image: "", rating: 4.0 },
    { title: "კარტი 6", name:"placeholder", number: 35, image: "", rating: 3.9 },
    { title: "კარტი 7", name:"placeholder", number: 18, image: "", rating: 4.3 },
    { title: "კარტი 8", name:"placeholder", number: 9, image: "", rating: 4.7 },
    { title: "კარტი 9", name:"placeholder", number: 40, image: "", rating: 3.0 },
    { title: "კარტი 10", name:"placeholder", number: 12, image: "", rating: 4.1 },
];

let filteredCards = cardsData;

function displayCards(cards) {
    cardCont.innerHTML = '';
        // not mine found it
    cards.forEach(function(card){
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        //
        cardElement.innerHTML = `
            <img src="${card.image}" alt="${card.title}">
            <h3>${card.title}</h3>
            <p>სახელი: ${card.name}</p>
            <p>რიცხვი: ${card.number}</p>
            <p>რეიტინგი: ${card.rating}</p>
        `;
        cardCont.appendChild(cardElement);
    });
}


filter.addEventListener('click', function(){
    // not mine found it
    const avg = cardsData.reduce((sum, card) => sum + card.number, 0) / cardsData.length;
    filteredCards = cardsData.filter(card => card.number < avg);
    displayCards(filteredCards);
    //

    filter.disabled = true;
    filter.style.opacity = '0.5';


    unfilter.disabled = false;
    unfilter.style.opacity = '1';
});

unfilter.addEventListener('click', function(){
    filteredCards = cardsData;
    displayCards(filteredCards);


    unfilter.disabled = true;
    unfilter.style.opacity = '0.5';


    filter.disabled = false;
    filter.style.opacity = '1';
});


ascBtn.addEventListener('click', function(){
    filteredCards.sort(function(a, b) {
        return b.rating - a.rating;
    });
    displayCards(filteredCards);
});


descBtn.addEventListener('click', function(){
    filteredCards.sort(function(a, b) {
        return a.rating - b.rating;
    });
    displayCards(filteredCards);
});


drabdomBtn.addEventListener('click', function(){
    filteredCards = shuffleArray(filteredCards);
    displayCards(filteredCards);
});

let mode = false;

function applyDarkModeToCards() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(function(card){
        card.style.backgroundColor = '#333';
        card.style.color = 'white';
        card.style.border = '1px solid #555';
    });
}

function applyLightModeToCards() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(function(card){
        card.style.backgroundColor = '#fff';
        card.style.color = 'black';
        card.style.border = '1px solid #ddd';
    });
}

function displayCards(cards) {
    cardCont.innerHTML = '';
    cards.forEach(function(card){
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.innerHTML = `
            <img src="${card.image}" alt="${card.title}">
            <h3>${card.title}</h3>
            <p>სახელი: ${card.name}</p>
            <p>რიცხვი: ${card.number}</p>
            <p>რეიტინგი: ${card.rating}</p>
        `;
        cardCont.appendChild(cardElement);
    });

    if (mode) {
        applyDarkModeToCards();
    }
}

function shuffleArray(array) {
    const shuffledArray = array;
        // not mine found it
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
    //
}


filter.disabled = false;
filter.style.opacity = '1';
unfilter.disabled = true;
unfilter.style.opacity = '0.5';


displayCards(filteredCards);