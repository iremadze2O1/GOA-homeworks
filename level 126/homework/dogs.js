document.addEventListener('DOMContentLoaded',function(){
    const btn=document.getElementById('dogBtn');
    const container=document.getElementById('dogContainer');
    function getDog(){
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(r=>r.json())
        .then(data=>{
            container.innerHTML=`<img src="${data.message}" alt="Random dog">`;
        })
        .catch(e=>{
            container.innerHTML='<p>Failed to load dog image.</p>';
        });
    }
    btn.addEventListener('click',getDog);
    getDog();
});