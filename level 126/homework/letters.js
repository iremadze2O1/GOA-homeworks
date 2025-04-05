document.addEventListener('DOMContentLoaded', function() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(r => r.json())
        .then(users => {
            users.sort((a, b) => a.name.localeCompare(b.name));
            const grouped = {};
            users.forEach(u => {
                const l = u.name.charAt(0).toUpperCase();
                if (!grouped[l]) grouped[l] = [];
                grouped[l].push(u);
            });
            const c = document.getElementById('usersContainer');
            for (let l in grouped) {
                const s = document.createElement('div');
                s.className = 'letter-section';
                const h = document.createElement('div');
                h.className = 'letter-header';
                h.textContent = l;
                s.appendChild(h);
                const ul = document.createElement('div');
                ul.className = 'user-list';
                grouped[l].forEach(u => {
                    const card = document.createElement('div');
                    card.className = 'user-card';
                    const n = document.createElement('div');
                    n.className = 'user-name';
                    n.textContent = u.name;
                    const e = document.createElement('div');
                    e.className = 'user-email';
                    e.textContent = u.email;
                    card.appendChild(n);
                    card.appendChild(e);
                    ul.appendChild(card);
                });
                s.appendChild(ul);
                c.appendChild(s);
            }
        })
        .catch(e => {
            document.getElementById('usersContainer').innerHTML = '<p>Failed to load users. Please try again.</p>';
        });
});