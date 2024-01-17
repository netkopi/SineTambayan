const openBtn = document.getElementById('open');
const closeBtn = document.getElementById('close');
const sidebar = document.getElementById('sidebar');

openBtn.addEventListener('change', () => {
    if (openBtn.checked) {
        sidebar.style.width = '20rem';
        closeBtn.checked = false;
    }
});
closeBtn.addEventListener('change', () => {
    if (openBtn.checked) {
        sidebar.style.width = '0rem';
        openBtn.checked = false;
    }
});