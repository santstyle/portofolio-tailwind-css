document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('hamburger-active');
        console.log('Button clicked, class toggled:', this.classList.contains('hamburger-active'));
    });
});