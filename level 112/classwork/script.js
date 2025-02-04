class Animal {
    constructor(name, image, habitat, hsaFur, description){
        this.name = name;
        this.image = image;
        this.habitat = habitat;
        this.hsaFur = hsaFur;
        this.description = description;
    }
    createCard(){
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${this.image}" alt="${this.name}">
            <h2>${this.name}</h2>
            <p>${this.habitat}</p>
            <p>${this.hsaFur}</p>
            <p>${this.description}</p>
        `;
        return card;
    }
}

const animals = [
    new Animal('Lion', 'photos/lion.jfif', 'Savannah', true, 'The lion is a species in the family Felidae.'),
    new Animal('Penguin', 'photos/penguin.jfif', 'Antarctica', false, 'Penguins are a group of aquatic flightless birds.'),
    new Animal('Elephant', 'photos/elephant.jfif', 'Forest', false, 'Elephants are the largest existing land animals.'),
    new Animal('Kangaroo', 'photos/kangoroo.jfif', 'Australia', false, 'Kangaroos are indigenous to Australia.'),
    new Animal('Panda', 'photos/panda.JPG', 'Forest', true, 'The giant panda is a bear native to south central China.'),
    new Animal('Tiger', 'photos/tiger.jpg', 'Forest', true, 'The tiger is the largest species among the Felidae and classified in the genus Panthera.')
];

const cont = document.getElementById('cont');
animals.forEach(animal =>{
    cont.appendChild(animal.createCard());
});