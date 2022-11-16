// Creates a new message

const messageFormHandler = async (event) => {

    event.preventDefault();

    const message = document.querySelector('#message-input').value;
    console.log(message)
    if (message) {
        const response = await fetch('/api/message', {
            method: 'POST',
            body: JSON.stringify({ message }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/planning');
        } else {
            alert(response.statusText);
        }
    }
};



document
    .querySelector('.message-fourm')
    .addEventListener('submit', messageFormHandler);

