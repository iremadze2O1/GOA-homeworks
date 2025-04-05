fetch("https://fakestoreapi.com/products/1")
    .then(res =>{
        if(!res.ok){
            if(res.status === 404){
                document.getElementById("product").innerHTML = '<img src="error.png">';
            }else{
                throw new Error("error " + res.status);
            }
        }
        return res.json();
    })
    .then(data =>{
        const product = document.getElementById("product");
        product.innerHTML = `
            <h1>${data.title}</h1>
            <img src="${data.image}" alt="${data.title}">
            <p>${data.description}</p>
            <p>Price: $${data.price}</p>
        `;
    })
    .catch(error =>{
        console.error(error);
    });