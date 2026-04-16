// Kafka Mouse Hover Functions

function hover(img){
    img.src = "static/images/kafka/kafka4.png";
}
function hoverOut(img){
    img.src = "static/images/kafka/kafka1.png";
}

// AMA Form

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('ama-form');
    const scriptURL = 'https://script.google.com/macros/s/AKfycbx3XlqjKdMXX1q_6dYkiIoipOyE78k1q7RGRBYGzI-jMS031YyQjlV4N3SoezaOYKtL/exec';

    if (form) {
        form.addEventListener('submit', e => {
            e.preventDefault();

            const requestBody = new FormData(form);

            const submitButton = form.querySelector('input[type="submit"]');
            const originalText = submitButton.value;
            submitButton.value = 'sending...';

            fetch(scriptURL, { method: 'POST', body: requestBody })
                .then(response => {
                    window.location.href = '/questions/success/';
                })
                .catch(error => {
                    console.error('Error!', error.message);
                    window.location.href = '/placeholder';
                });
        });
    }
});