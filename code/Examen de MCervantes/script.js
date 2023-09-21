document.getElementById('publisher-tab').addEventListener('click', function() {
    window.location.assign('index2.html');
});

document.getElementById('book-tab').addEventListener('click', function() {
    window.location.assign('index.html');
});
document.getElementById('book-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Handle form submission
});