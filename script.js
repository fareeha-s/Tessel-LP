document.addEventListener('DOMContentLoaded', () => {
    // Get modal elements
    const productModal = document.getElementById('productModal');
    const igniteModal = document.getElementById('igniteModal');
    
    // Get trigger buttons
    const applyButton = document.getElementById('applyButton');
    const igniteButton = document.getElementById('igniteButton');
    
    // Add click event listeners to buttons
    applyButton.addEventListener('click', () => {
        productModal.style.display = 'flex';
        document.body.classList.add('modal-open');
    });
    
    igniteButton.addEventListener('click', () => {
        igniteModal.style.display = 'flex';
        document.body.classList.add('modal-open');
    });
    
    // Close modal when clicking close button or outside
    document.querySelectorAll('.close').forEach(closeBtn => {
        closeBtn.addEventListener('click', () => {
            productModal.style.display = 'none';
            igniteModal.style.display = 'none';
            document.body.classList.remove('modal-open');
        });
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', (event) => {
        if (event.target === productModal || event.target === igniteModal) {
            productModal.style.display = 'none';
            igniteModal.style.display = 'none';
            document.body.classList.remove('modal-open');
        }
    });
});
