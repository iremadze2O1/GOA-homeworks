function createParagraph() {
    const newPara = document.createElement('p');
    newPara.textContent = 'This is a newly created paragraph.';
    document.getElementById('createdElementsList').appendChild(newPara);
}

function createImage() {
    const newImage = document.createElement('img');
    newImage.src = 'https://via.placeholder.com/150';
    document.getElementById('createdElementsList').appendChild(newImage);
}

function createListItem() {
    const newListItem = document.createElement('li');
    newListItem.textContent = 'New List Item';
    document.getElementById('createdElementsList').appendChild(newListItem);
}

function appendParagraph() {
    const newPara = document.createElement('p');
    newPara.textContent = 'This paragraph was appended to the body.';
    document.body.appendChild(newPara);
}

function appendDiv() {
    const newDiv = document.createElement('div');
    newDiv.textContent = 'This div was appended to the body.';
    document.body.appendChild(newDiv);
}

function insertBeforePara() {
    const newPara = document.createElement('p');
    newPara.textContent = 'This paragraph is inserted before the first paragraph.';
    const firstPara = document.getElementById('para1');
    const container = document.getElementById('container');
    container.insertBefore(newPara, firstPara);
}

function removeFirstChild() {
    const container = document.getElementById('container');
    const firstChild = container.firstElementChild;
    container.removeChild(firstChild);
}

function getParent() {
    const firstPara = document.getElementById('para1');
    const parent = firstPara.parentNode;
    alert('The parent of the first paragraph is: ' + parent.tagName);
}

function replaceParagraph() {
    const newPara = document.createElement('p');
    newPara.textContent = 'This is a new paragraph replacing the old one.';
    const oldPara = document.getElementById('para1');
    const container = document.getElementById('container');
    container.replaceChild(newPara, oldPara);
}