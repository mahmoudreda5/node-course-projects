const weatherForm = document.querySelector('form');
const query = document.querySelector('input');
const messageOne = document.querySelector('#success');
const messagetwo = document.querySelector('#error');

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();
    messageOne.textContent = 'loading...';
    const location = query.value;
    fetch(`/weather?location=${location}`)
    .then(response => {
        response.json().then(data => {
            if(data.error) {
                messageOne.textContent = '';
                messagetwo.textContent = data.error;
            } else {
                messagetwo.textContent = '';
                messageOne.textContent = data.forecast;
            }
        });
    });
});