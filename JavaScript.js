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

