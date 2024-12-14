document.addEventListener('DOMContentLoaded', function() {
    const createC = document.getElementById('create');
    const counterCont = document.getElementById('container');

    let counterId = 0;
    let undoStack = [];
    let redoStack = [];

    createC.addEventListener('click', function() {
        counterId++;
        const counterDiv = document.createElement('div');
        counterDiv.classList.add('counter');
        counterDiv.setAttribute('id', 'counter' + counterId);
        counterDiv.innerHTML = `
            <button class="delete-button" id="delete${counterId}">Delete</button>
            <div class="counter-display" id="counter-display${counterId}">0</div>
            <input type="number" id="input${counterId}" placeholder="Enter a number" />
            <div class="buttons">
                <button class="add" id="add${counterId}">Add</button>
                <button class="sub" id="sub${counterId}">Subtract</button>
                <button class="reset" id="reset${counterId}">Reset</button>
            </div>
            <div class="checkbox-container">
                <input type="checkbox" id="lock${counterId}" /> Lock Counter
            </div>
            <div class="undo-redo">
                <button class="undo" id="undo${counterId}">Undo</button>
                <button class="redo" id="redo${counterId}">Redo</button>
            </div>
        `;

        counterCont.appendChild(counterDiv);

        let count = 0;
        let locked = false;

        const counterDisplay = document.getElementById('counter-display' + counterId);
        const inputValue = document.getElementById('input' + counterId);
        const addButton = document.getElementById('add' + counterId);
        const subButton = document.getElementById('sub' + counterId);
        const resetButton = document.getElementById('reset' + counterId);
        const lockCheckbox = document.getElementById('lock' + counterId);
        const undoButton = document.getElementById('undo' + counterId);
        const redoButton = document.getElementById('redo' + counterId);
        const deleteButton = document.getElementById('delete' + counterId);

        function updateCounter() {
            counterDisplay.textContent = count;
            if (count < 0) {
                counterDisplay.style.color = 'red';
            } else {
                counterDisplay.style.color = 'green';
            }
        }

        function lockCounter() {
            locked = lockCheckbox.checked;
            if (locked) {
                inputValue.disabled = true;
                addButton.disabled = true;
                subButton.disabled = true;
                resetButton.disabled = true;
            } else {
                inputValue.disabled = false;
                addButton.disabled = false;
                subButton.disabled = false;
                resetButton.disabled = false;
            }
        }

        function undo() {
            if (undoStack.length > 0) {
                redoStack.push(count);
                count = undoStack.pop();
                updateCounter();
            }
        }

        function redo() {
            if (redoStack.length > 0) {
                undoStack.push(count);
                count = redoStack.pop();
                updateCounter();
            }
        }

        addButton.addEventListener('click', function() {
            if (locked) return;
            const value = parseInt(inputValue.value, 10) || 1; 
            if (value > 100) {
                alert("You can't increment by more than 100.");
            } else {
                undoStack.push(count);
                count += value;
                updateCounter();
            }
        });

        subButton.addEventListener('click', function() {
            if (locked) return;
            const value = parseInt(inputValue.value, 10) || 1;
            if (value > 100) {
                alert("You can't decrement by more than 100.");
            } else {
                undoStack.push(count);
                count -= value;
                updateCounter();
            }
        });

        resetButton.addEventListener('click', function() {
            if (locked) return;
            undoStack.push(count);
            count = 0;
            updateCounter();
        });

        deleteButton.addEventListener('click', function() {
            counterDiv.remove();
            counterId--; 
        });

        lockCheckbox.addEventListener('change', lockCounter);
        undoButton.addEventListener('click', undo);
        redoButton.addEventListener('click', redo);

        lockCounter();
        updateCounter();
    });
});
