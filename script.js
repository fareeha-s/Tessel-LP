document.addEventListener('DOMContentLoaded', function() {
    // Get the modal elements
    var illuminateModal = document.getElementById('productModal');
    var igniteModal = document.getElementById('igniteModal');
    
    // Get the button elements - note we're using the correct IDs now
    var illuminateBtn = document.getElementById('applyButton');
    var igniteBtn = document.getElementById('igniteButton');
    
    // Get all close buttons
    var spans = document.getElementsByClassName('close');

    // When the user clicks the button, open the modal
    illuminateBtn.onclick = function(event) {
        event.preventDefault();
        openModal(illuminateModal);
    }

    igniteBtn.onclick = function(event) {
        event.preventDefault();
        openModal(igniteModal);
    }

    // When the user clicks on <span> (x), close the modal
    Array.from(spans).forEach(function(span) {
        span.onclick = function() {
            closeModal(this.closest('.modal'));
        }
    });

    // When the user clicks anywhere outside of the modal, close it
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

    function openModal(modal) {
        modal.style.display = 'block';
        document.body.classList.add('modal-open');
        var backdrop = document.createElement('div');
        backdrop.className = 'modal-backdrop';
        document.body.appendChild(backdrop);
    }

    function closeModal(modal) {
        modal.style.display = 'none';
        document.body.classList.remove('modal-open');
        var backdrop = document.querySelector('.modal-backdrop');
        if (backdrop) {
            backdrop.remove();
        }
    }
});
