document.addEventListener('DOMContentLoaded', fetchUsers);
document.getElementById('refresh').addEventListener('click', fetchUsers);
async function fetchUsers() {
    const contentDiv = document.getElementById('content');
    
    try {
        contentDiv.innerHTML = '<div class="loading">Loading user data...</div>';
        
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const users = await response.json();
        displayUsers(users);
    } catch (error) {
        console.error('Error fetching users:', error);
        contentDiv.innerHTML = `
            <div class="error">
                Failed to load user data. Please try again later.
                <p>${error.message}</p>
            </div>
        `;
    }
}
function displayUsers(users) {
    const contentDiv = document.getElementById('content');
    
    if (!users || users.length === 0) {
        contentDiv.innerHTML = '<div class="error">No users found.</div>';
        return;
    }
    
    let html = '<div class="user-grid">';
    
    users.forEach(user => {
        html += `
            <div class="user-card">
                <h2 class="user-name">${user.name}</h2>
                <div class="user-info">
                    <span class="info-label">Username:</span> ${user.username}
                </div>
                <div class="user-info">
                    <span class="info-label">Email:</span> 
                    <a href="mailto:${user.email}">${user.email}</a>
                </div>
                <div class="user-info">
                    <span class="info-label">City:</span> ${user.address.city}
                </div>
                <div class="user-info">
                    <span class="info-label">Company:</span> ${user.company.name}
                </div>
                <div class="user-info">
                    <span class="info-label">Phone:</span> ${user.phone}
                </div>
            </div>
        `;
    });
    
    html += '</div>';
    contentDiv.innerHTML = html;
}