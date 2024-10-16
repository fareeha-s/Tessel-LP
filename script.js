document.addEventListener('DOMContentLoaded', function() {
    var illuminateModal = document.getElementById('productModal');
    var igniteModal = document.getElementById('igniteModal');
    var illuminateBtn = document.getElementById('applyButton');
    var igniteBtn = document.getElementById('igniteButton');
    var spans = document.getElementsByClassName('close');

    function openModal(modal) {
        modal.style.display = 'block';
        document.body.classList.add('modal-open');
    }

    function closeModal(modal) {
        modal.style.display = 'none';
        document.body.classList.remove('modal-open');
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
