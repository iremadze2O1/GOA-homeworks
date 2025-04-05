function task5() {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject(new Error("Task 3 failed"));
        }, 2000);
    }).catch(error => console.error(error.message));
}

function task6() {
    return new Promise(resolve => {
        const delay = Math.floor(Math.random() * 5000) + 1000;
        setTimeout(() => {
            resolve("Task 1 complete");
        }, delay);
    });
}

function task7() {
    return new Promise(resolve => {
        const delay = Math.floor(Math.random() * 3000) + 1000;
        setTimeout(() => {
            resolve("First");
        }, delay);
    }).then(message => {
        console.log(message);
        return new Promise(resolve => {
            const delay = Math.floor(Math.random() * 3000) + 1000;
            setTimeout(() => {
                resolve("Second");
            }, delay);
        });
    }).then(message => console.log(message));
}

function task8() {
    return new Promise((_, reject) => {
        const delay = Math.floor(Math.random() * 4000) + 1000;
        setTimeout(() => {
            reject(new Error("Task 3 failed"));
        }, delay);
    }).catch(error => console.error(error.message));
}

function task9() {
    return new Promise(resolve => {
        const delay = Math.floor(Math.random() * 5000) + 1000;
        const randomNumber = Math.random();
        setTimeout(() => {
            if (randomNumber > 0.5) {
                resolve("Task 1 complete");
            } else {
                resolve("Task 1 was quick");
            }
        }, delay);
    });
}

function task10() {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 4000) + 1000;
        const randomNumber = Math.random();
        setTimeout(() => {
            if (randomNumber < 0.3) {
                reject(new Error("Task 3 failed"));
            } else {
                resolve("Task 3 complete");
            }
        }, delay);
    }).catch(error => console.error(error.message));
}