 const track = document.getElementById('track');
        const cards = document.querySelectorAll('.card');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const dotsContainer = document.getElementById('dotsContainer');

        let currentIndex = 0;
        const totalCards = cards.length;

        cards.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            if (index === 0) dot.classList.add('active');
            dot.addEventListener('click', () => {
                currentIndex = index;
                updateCarousel();
            });
            dotsContainer.appendChild(dot);
        });

        const dots = document.querySelectorAll('.dot');

        function updateCarousel() {
            const width = cards[0].clientWidth;
            track.style.transform = `translateX(-${currentIndex * width}px)`;
            
            dots.forEach(dot => dot.classList.remove('active'));
            dots[currentIndex].classList.add('active');
        }

        window.addEventListener('resize', updateCarousel);

        nextBtn.addEventListener('click', () => {
            if (currentIndex < totalCards - 1) {
                currentIndex++;
            } else {
                currentIndex = 0;
            }
            updateCarousel();
        });

        prevBtn.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
            } else {
                currentIndex = totalCards - 1;
            }
            updateCarousel();
        });

const themeToggleBtn = document.getElementById('themeToggleBtn');
const body = document.body;

if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-theme');
    themeToggleBtn.textContent = '☀️ Светлая тема';
}

themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    
    if (body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark');
        themeToggleBtn.textContent = '☀️ Светлая тема';
    } else {
        localStorage.setItem('theme', 'light');
        themeToggleBtn.textContent = '🌙 Тёмная тема';
    }
});



document.addEventListener('keydown', (e) => {
    if (document.querySelector('dialog[open]')) return;
    if (e.key === 'ArrowRight') nextBtn.click();
    if (e.key === 'ArrowLeft') prevBtn.click();
});

document.querySelectorAll('dialog').forEach((dlg) => {
    dlg.addEventListener('click', (e) => {
        const r = dlg.getBoundingClientRect();
        const outside = e.clientX < r.left || e.clientX > r.right ||
                        e.clientY < r.top  || e.clientY > r.bottom;
        if (outside) dlg.close();
    });
});
