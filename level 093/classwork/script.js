document.addEventListener('DOMContentLoaded', function() {
    let count = 0;

    const counter = document.getElementById('counter');
    const add = document.getElementById('Add');
    const Sub = document.getElementById('Sub');
    const resetButton = document.getElementById('reset');

    function updateCounter() {
        counter.textContent = count;
        if (count < 0) {
            counter.style.color = 'red'; 
        } else if (count > 0) {
            counter.style.color = 'green'; 
        } else {
            counter.style.color = 'black'; 
        }
    }

    add.addEventListener('click', function() {
        count++;
        updateCounter();
    });

    Sub.addEventListener('click', function() {
        count--;
        updateCounter();
    });

    resetButton.addEventListener('click', function() {
        count = 0;
        updateCounter();
    });

    updateCounter();
});
