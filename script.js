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
});
