const cardCont = document.getElementById('cards');
const filter = document.getElementById('filter');
const unfilter = document.getElementById('unfilter');
const ascBtn = document.getElementById('asc');
const descBtn = document.getElementById('desc');
const drabdomBtn = document.getElementById('random');
const darkMode = document.getElementById('darkMode');

const cardsData = [
    { title: "კარტი 1", name:"C#", number: 15, image: "Csharp.png", rating: 4.5 },
    { title: "კარტი 2", name:"GO", number: 28, image: "go.png", rating: 3.2 },
    { title: "კარტი 3", name:"Ruby", number: 5, image: "ruby.png", rating: 5.0 },
    { title: "კარტი 4", name:"Java", number: 10, image: "java.png", rating: 2.8 },
    { title: "კარტი 5", name:"JavaScript", number: 22, image: "js.png", rating: 4.0 },
    { title: "კარტი 6", name:"SQL", number: 35, image: "sql.png", rating: 3.9 },
    { title: "კარტი 7", name:"Python", number: 18, image: "py.png", rating: 4.3 },
    { title: "კარტი 8", name:"Swift", number: 9, image: "swift.png", rating: 4.7 },
    { title: "კარტი 9", name:"Rust", number: 40, image: "rust.png", rating: 3.0 },
    { title: "კარტი 10", name:"C++", number: 12, image: "Cpp.png", rating: 4.1 },
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

darkMode.addEventListener('click', function () {
    if (mode === false) {
        document.body.style.color = 'white';
        document.body.style.backgroundColor = 'black';

        const buttons = document.querySelectorAll('button');
        buttons.forEach(function(button){
            button.style.color = 'white';
            button.style.backgroundColor = '#333';
        });

        const divs = document.querySelectorAll("div");
        divs.forEach(function(div){
            div.style.color = "white";
        });

        applyDarkModeToCards();

        mode = true;
    } else {
        document.body.style.color = 'black';
        document.body.style.backgroundColor = '#f5f5f5';

        const buttons = document.querySelectorAll('button');
        buttons.forEach(function(button){
            button.style.color = 'black';
            button.style.backgroundColor = 'white';
        });

        const divs = document.querySelectorAll("div");
        divs.forEach(function(div){
            div.style.color = "black";
        });

        applyLightModeToCards();

        mode = false;
    }
});

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