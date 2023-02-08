//get current URL
var url = window.location.href; 

//define beginn of param
var arr = url.split('?q');

// if url has params (is a search-result) hide the 404-image
if (arr.length > 1 && arr[1] !== '') {
    var oopsImage = document.querySelector('.kd-oops-img');
    var searchImage = document.querySelector('.kd-search-img');
    var searchMessage = document.querySelector('.kd-search-message');
    if (oopsImage) {
        oopsImage.classList.add('d-none');
    }
    if (searchImage) {
        searchImage.classList.add('d-none');
    }
    if (searchMessage) {
        searchMessage.classList.remove('d-none');
    }
}