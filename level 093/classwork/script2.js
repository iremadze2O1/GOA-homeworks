document.addEventListener('DOMContentLoaded', function() {
    let count = 0;
    const counter = document.getElementById('counter');
    const inputValue = document.getElementById('input');
    const add = document.getElementById('add');
    const sub = document.getElementById('sub');
    const resetButton = document.getElementById('reset');
    let resetAttempts = 0;

    function updateCounter() {
        counter.textContent = count;
        if (count < 0) {
            counter.style.color = 'red';
        } else {
            counter.style.color = 'green';
        }
    }

    function handleAlert() {
        if (resetAttempts >= 1) {
            alert("You can't reset the counter multiple times while it's already at 0.");
        } else if (count === 0) {
            alert("You can't reset when the counter is already at 0.");
        }
    }

    add.addEventListener('click', function() {
        let value = parseInt(inputValue.value, 10) || 0;
        if (value > 100) {
            alert("You can't increment by more than 100.");
        } else {
            count = count + value;
            updateCounter();
        }
    });

    sub.addEventListener('click', function() {
        let value = parseInt(inputValue.value, 10) || 0;
        if (value > 100) {
            alert("You can't decrement by more than 100.");
        } else {
            count = count - value;
            updateCounter();
        }
    });

    resetButton.addEventListener('click', function() {
        if (count === 0) {
            handleAlert();
            resetAttempts++;
        } else {
            count = 0;
            updateCounter();
            resetAttempts = 0;
        }
    });

    updateCounter();
});
