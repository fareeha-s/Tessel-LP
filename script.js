document.addEventListener('DOMContentLoaded', function() {
    var illuminateModal = document.getElementById('productModal');
    var igniteModal = document.getElementById('igniteModal');
    var illuminateBtn = document.getElementById('applyButton');
    var igniteBtn = document.getElementById('igniteButton');
    var spans = document.getElementsByClassName('close');

    function openModal(modal) {
        document.body.classList.add('modal-open');
        var backdrop = document.createElement('div');
        backdrop.className = 'modal-backdrop';
        document.body.appendChild(backdrop);

        // Show the modal
        modal.style.display = 'block';
        
        // Add small delay before adding show class for animation
        setTimeout(() => {
            modal.classList.add('show');
        }, 10);
    }

    function closeModal(modal) {
        // Remove the show class first
        modal.classList.remove('show');
        
        // Wait for animation to complete before hiding
        setTimeout(() => {
            modal.style.display = 'none';
            document.body.classList.remove('modal-open');
            var backdrop = document.querySelector('.modal-backdrop');
            if (backdrop) {
                backdrop.remove();
            }
        }, 300); // Match this with your CSS transition duration
    }

    illuminateBtn.onclick = function(event) {
        event.preventDefault();
        openModal(illuminateModal);
    }

    igniteBtn.onclick = function(event) {
        event.preventDefault();
        openModal(igniteModal);
    }

    Array.from(spans).forEach(function(span) {
        span.onclick = function() {
            closeModal(this.closest('.modal'));
        }
    });

    // Close the modal when clicking outside the modal content
    window.onclick = function(event) {
        if (event.target.classList.contains('modal')) {
            closeModal(event.target);
        }
    }

    // Add touch event for mobile devices
    window.ontouchend = function(event) {
        if (event.target.classList.contains('modal')) {
            closeModal(event.target);
        }
    }

    // Check for backdrop-filter support
    if (!('backdropFilter' in document.body.style) && 
        !('-webkit-backdrop-filter' in document.body.style)) {
        document.body.classList.add('no-backdrop-filter');
    }
});
