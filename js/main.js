const ROOMS = {
    1: { id: 1, name: 'Номер №1', desc: 'Двухместный номер с видом на улицу', price: 120 },
    2: { id: 2, name: 'Номер №2', desc: 'Двухместный номер с фортепиано', price: 130 },
    3: { id: 3, name: 'Номер №3', desc: 'Двухместный номер с видом во двор', price: 110 },
    4: { id: 4, name: 'Номер №4', desc: 'Уютный двухместный номер', price: 110 }
};

const TOURS = [
    { id: 1, name: 'Сванские башни', price: 300, duration: '2 дня' },
    { id: 2, name: 'Портовый город', price: 50, duration: '2–3 часа' },
    { id: 3, name: 'Горячие источники', price: 120, duration: '1 день' },
    { id: 4, name: 'Закат над облаками', price: 90, duration: '3–4 часа' },
    { id: 5, name: 'Подземное царство', price: 80, duration: '4–5 часов' }
];

function renderRooms() {
    const grid = document.getElementById('roomsGrid');
    if (!grid) return;
    grid.innerHTML = '';
    
    Object.values(ROOMS).forEach(room => {
        const card = document.createElement('div');
        card.className = 'room-card';
        card.innerHTML = `
            <div class="room-info">
                <h3 class="room-name">${room.name}</h3>
                <p class="room-desc">${room.desc}</p>
                <div class="price">${room.price}₾ / ночь</div>
            </div>
        `;
        grid.appendChild(card);
    });
}

function renderTours() {
    const grid = document.getElementById('toursGrid');
    if (!grid) return;
    grid.innerHTML = '';
    
    TOURS.forEach(tour => {
        const card = document.createElement('div');
        card.className = 'tour-card';
        card.innerHTML = `
            <div>
                <i class="fas fa-hiking"></i>
                <h3>${tour.name}</h3>
                <div class="tour-duration"><i class="fas fa-clock"></i> ${tour.duration}</div>
                <div class="tour-price">${tour.price}₾</div>
            </div>
        `;
        grid.appendChild(card);
    });
}

document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href && href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

(async () => {
    renderRooms();
    renderTours();
})();