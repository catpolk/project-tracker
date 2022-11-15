const delMessageHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {

        const id = event.target.getAttribute('data-id');
        console.log(id)
        const response = await fetch(`/api/message/${id}`, {
            method: 'DELETE',
        });
        console.log(response)
        if (response.ok) {
            document.location.replace('/planning');
        } else {
            alert('Failed to delete project');
        }
    }
};

document
    .querySelector('.messageYO')
    .addEventListener('click', delMessageHandler);