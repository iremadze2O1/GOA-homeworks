document.getElementById('generate').addEventListener('click', async function() {
    const catChecked = document.getElementById('cat').checked;
    const dogChecked = document.getElementById('dog').checked;
    const foxChecked = document.getElementById('fox').checked;
    
    const resultsDiv = document.getElementById('results');
    const errorDiv = document.getElementById('error');
    
    resultsDiv.innerHTML = '';
    errorDiv.textContent = '';
    
    if (!catChecked && !dogChecked && !foxChecked) {
        errorDiv.textContent = 'Please select at least one animal.';
        return;
    }
    
    try {
        if (catChecked) {
            await fetchAndDisplayPhoto('https://api.thecatapi.com/v1/images/search', 'Cat', 'url');
        }
        if (dogChecked) {
            await fetchAndDisplayPhoto('https://dog.ceo/api/breeds/image/random', 'Dog', 'message');
        }
        if (foxChecked) {
            await fetchAndDisplayPhoto('https://randomfox.ca/floof/', 'Fox', 'image');
        }
    } catch (error) {
        errorDiv.textContent = 'An error occurred while fetching photos. Please try again.';
        console.error(error);
    }
});
        
async function fetchAndDisplayPhoto(apiUrl, animalName, imagePath) {
    const response = await fetch(apiUrl);
    if (!response.ok) {
        throw new Error(`Failed to fetch ${animalName} photo`);
    }
    
    const data = await response.json();
    const imageUrl = getNestedProperty(data, imagePath);
    
    if (!imageUrl) {
        throw new Error(`Could not find image URL in ${animalName} API response`);
    }
    
    const img = document.createElement('img');
    img.src = imageUrl;
    img.alt = `${animalName} photo`;
    img.className = 'animal-photo';
    img.title = `Random ${animalName}`;
    
    const container = document.createElement('div');
    container.innerHTML = `<h3>${animalName}</h3>`;
    container.appendChild(img);
    
    document.getElementById('results').appendChild(container);
}
        
function getNestedProperty(obj, path) {
    return path.split('.').reduce((o, p) => o?.[p], obj);
}