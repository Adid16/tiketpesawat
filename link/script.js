
    document.addEventListener("DOMContentLoaded", () => {
    const hamburgerMenu = document.getElementById("hamburger-menu");
    const sidebar = document.getElementById("sidebar");
    const closeSidebarBtn = document.getElementById("close-sidebar");

    // Ketika hamburger diklik, buka sidebar
    hamburgerMenu.addEventListener("click", () => {
      sidebar.style.width = "100%"; // Lebar sidebar saat terbuka
    });

    // Ketika tombol close diklik, tutup sidebar
    closeSidebarBtn.addEventListener("click", () => {
      sidebar.style.width = "0"; // Tutup sidebar
    });
  });
  const slider = document.getElementById("slider");
  const slides = document.querySelectorAll(".slide");
  let index = 0;

  function showSlide(i) {
    index = (i + slides.length) % slides.length;
    slider.style.transform = `translateX(-${index * 100}%)`;
  }

  function nextSlide() {
    showSlide(index + 1);
  }

  function prevSlide() {
    showSlide(index - 1);
  }

  setInterval(() => {
    nextSlide();
  }, 4000);


        // Destination slider functionality
        const destinationsSlider = document.getElementById('destinationsSlider');
        const nextBtn = document.getElementById('next');
        const prevBtn = document.getElementById('prev');
        const cardWidth = 215; // Width of each card + gap
        let currentPosition = 0;
        const maxPosition = (destinationsSlider.scrollWidth - destinationsSlider.clientWidth) / cardWidth;

        nextBtn.addEventListener('click', () => {
            if (currentPosition < maxPosition) {
                currentPosition++;
                destinationsSlider.scrollTo({
                    left: currentPosition * cardWidth,
                    behavior: 'smooth'
                });
            }
        });

        prevBtn.addEventListener('click', () => {
            if (currentPosition > 0) {
                currentPosition--;
                destinationsSlider.scrollTo({
                    left: currentPosition * cardWidth,
                    behavior: 'smooth'
                });
            }
        });

        // Update button states based on scroll position
        destinationsSlider.addEventListener('scroll', () => {
            currentPosition = Math.round(destinationsSlider.scrollLeft / cardWidth);
            
            // Disable/enable buttons based on position
            prevBtn.disabled = currentPosition === 0;
            nextBtn.disabled = currentPosition >= maxPosition;
        });

        // Initialize button states
        prevBtn.disabled = true;
        nextBtn.disabled = destinationsSlider.scrollWidth <= destinationsSlider.clientWidth;
    