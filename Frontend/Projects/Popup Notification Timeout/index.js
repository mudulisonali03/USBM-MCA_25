document.getElementById('show-notification').addEventListener('click', () => {
    const notification = document.getElementById('notification');
    notification.classList.remove('hidden');
    setTimeout(() => {
        notification.classList.add('hidden');
    }, 5000); 
});