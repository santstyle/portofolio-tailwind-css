document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('#hamburger');

    if (hamburger) {
        hamburger.addEventListener('click', function () {
            this.classList.toggle('hamburger-active');
        });
    }
});
