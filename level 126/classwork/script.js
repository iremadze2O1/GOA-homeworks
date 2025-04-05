function fetchJokes(){
    const setup = document.getElementById('setup');
    const punchLine = document.getElementById('punchLine');

    fetch('https://v2.jokeapi.dev/joke/Any?safe-mode')
        .then(res => res.json()).then(joke =>{
            if(joke.type === 'twopart'){
                setup.innerText = joke.setup;
                punchLine.innerText = '';

                setTimeout(() => {
                    punchLine.innerText = joke.delivery;
                }, 2500);
            }else{
                setup.innerText = "click the button again";
            }
        });
}

document.getElementById('jokebtn').addEventListener('click', fetchJokes);