$(document).ready(function () {
    // Add an event listener for scroll
    $(window).scroll(function () {
        // Check if the user has scrolled down by comparing the scroll position
        if ($(this).scrollTop() > 50) {
            $('.navbar').css('background-color', 'rgba(0, 1, 3, 0.85)');
        } else {
            $('.navbar').css('background-color', 'transparent');
        }
    });
});