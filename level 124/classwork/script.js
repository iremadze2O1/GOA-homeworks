const a = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("we have rejected after 1 second");
    }, 1000);
});

a.catch(error => {
    console.log(error)
})