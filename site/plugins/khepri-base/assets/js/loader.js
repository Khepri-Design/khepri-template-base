let formsubmit = document.getElementById('submit');

if (formsubmit != null) {
    formsubmit.addEventListener('click', showLoader);
}

function showLoader() {
    document.getElementById('loader').classList.remove('d-none');   
}