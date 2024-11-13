document.addEventListener('DOMContentLoaded', function() {
    // Get modal elements
    const illuminateModal = document.getElementById('productModal');
    const igniteModal = document.getElementById('igniteModal');
    const illuminateBtn = document.getElementById('applyButton');
    const igniteBtn = document.getElementById('igniteButton');
    const closeButtons = document.getElementsByClassName('close');

    // Function to open modal
    function openModal(modal) {
        if (modal) {
            modal.style.display = 'block';
            document.body.classList.add('modal-open');
        }
    }

    // Function to close modal
    function closeModal(modal) {
        if (modal) {
            modal.style.display = 'none';
            document.body.classList.remove('modal-open');
        }
    }

    // Event listeners for buttons
    if (illuminateBtn) {
        illuminateBtn.addEventListener('click', function(e) {
            e.preventDefault();
            openModal(illuminateModal);
        });
    }

    if (igniteBtn) {
        igniteBtn.addEventListener('click', function(e) {
            e.preventDefault();
            openModal(igniteModal);
        });
    }

    // Close button functionality
    Array.from(closeButtons).forEach(button => {
        button.addEventListener('click', function() {
            const modal = this.closest('.modal');
            closeModal(modal);
        });
    });

    // Close modal when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target.classList.contains('modal')) {
            closeModal(e.target);
        }
    });

    // Slide functionality
    function initializeModal(modal) {
        // Only initialize slide functionality on mobile
        if (window.innerWidth <= 767.98) {
            const slides = modal.querySelectorAll('.modal-slide');
            const prevBtn = modal.querySelector('.prev');
            const nextBtn = modal.querySelector('.next');
            const pagination = modal.querySelector('.modal-pagination');
            let currentSlide = 0;

            // Only create pagination dots if they don't already exist
            if (pagination && pagination.children.length === 0) {
                slides.forEach((_, index) => {
                    const dot = document.createElement('div');
                    dot.className = `pagination-dot${index === 0 ? ' active' : ''}`;
                    dot.addEventListener('click', () => goToSlide(index));
                    pagination.appendChild(dot);
                });
            }

            function updateNavigation() {
                // Handle previous button
                prevBtn.classList.toggle('hidden', currentSlide === 0);
                
                // Handle next button
                nextBtn.classList.toggle('hidden', currentSlide === slides.length - 1);
                
                // Update pagination dots
                pagination.querySelectorAll('.pagination-dot').forEach((dot, index) => {
                    dot.classList.toggle('active', index === currentSlide);
                });
            }

            function goToSlide(index) {
                slides[currentSlide].classList.remove('active');
                currentSlide = index;
                slides[currentSlide].classList.add('active');
                updateNavigation();
            }

            prevBtn.addEventListener('click', () => {
                if (currentSlide > 0) {
                    goToSlide(currentSlide - 1);
                }
            });

            nextBtn.addEventListener('click', () => {
                if (currentSlide < slides.length - 1) {
                    goToSlide(currentSlide + 1);
                }
            });

            // Add keyboard navigation
            document.addEventListener('keydown', (e) => {
                if (modal.style.display === 'block') {
                    if (e.key === 'ArrowLeft' && currentSlide > 0) {
                        goToSlide(currentSlide - 1);
                    } else if (e.key === 'ArrowRight' && currentSlide < slides.length - 1) {
                        goToSlide(currentSlide + 1);
                    }
                }
            });
        }
    }

    // Initialize both modals
    initializeModal(document.getElementById('productModal'));
    initializeModal(document.getElementById('igniteModal'));

    // Add resize listener to handle orientation changes
    window.addEventListener('resize', function() {
        const modals = document.querySelectorAll('.modal');
        modals.forEach(modal => {
            if (window.innerWidth <= 768) {
                initializeModal(modal);
            } else {
                // Reset to desktop view
                modal.querySelectorAll('.modal-slide').forEach(slide => {
                    slide.style.display = 'block';
                    slide.style.opacity = '1';
                });
            }
        });
    });
});
