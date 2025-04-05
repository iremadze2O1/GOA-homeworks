let messageQueue = [];
let isProcessing = false;

function addMessage(){
    const message = document.getElementById('message').value;
    const delay = parseInt(document.getElementById('delay').value);
    if (message && delay){
        messageQueue.push({ message, delay });
        processQueue();
    }
}

function queue(){
    if (isProcessing || messageQueue.length === 0) return;
    isProcessing = true;
    const{ message, delay } = messageQueue.shift();
    setTimeout(() => {
        const output = document.getElementById('output');
        const messageDiv = document.createElement('p');
        messageDiv.textContent = message;
        output.appendChild(messageDiv);
        isProcessing = false;
        queue();
    }, delay);
}