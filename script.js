document.addEventListener('DOMContentLoaded', function() {
    var illuminateModal = document.getElementById('productModal');
    var igniteModal = document.getElementById('igniteModal');
    var illuminateBtn = document.getElementById('applyButton');
    var igniteBtn = document.getElementById('igniteButton');
    var spans = document.getElementsByClassName('close');

    function openModal(modal) {
        modal.style.display = 'block';
    }

    function closeModal(modal) {
        modal.style.display = 'none';
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

    window.onclick = function(event) {
        if (event.target.classList.contains('modal')) {
            closeModal(event.target);
        }
    }
});
