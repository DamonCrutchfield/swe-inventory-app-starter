const deleteButton = document.getElementById('delete-button');

deleteButton.addEventListener('click', async (e) => {
    await fetch(`/remove-item/${deleteButton.dataset.id}`, {method: 'DELETE'})
})