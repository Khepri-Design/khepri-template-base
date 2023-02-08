let modal = document.querySelector('.kd-modal');
let modalOpen = document.querySelector('.kd-modal-open');
let modalClose = document.querySelector('.kd-modal-close');
let modalAccept = document.querySelector('.kd-modal-accept');

//get DSGVO Checkbox
let dsgvoCheck = document.querySelector('.kd-checkbox#agree');

if (modal) {
    modalOpen.addEventListener("click", function (event) {
        event.preventDefault();
        modal.classList.remove('d-none');
    });

    modalClose.addEventListener("click", function () {
        modal.classList.add('d-none');
    });

    if (dsgvoCheck) {
        modalAccept.addEventListener("click", function () {
            modal.classList.add('d-none');
            dsgvoCheck.checked = true;
        });
    }
}