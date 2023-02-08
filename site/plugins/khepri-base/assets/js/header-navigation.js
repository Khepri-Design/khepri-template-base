// Scrollevenet Listener
const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
}

// Main-Navigation
document.querySelectorAll('.mobile-nav-toggle')[0].addEventListener("click", function () {
    document.getElementById('navbar').classList.toggle('navbar-mobile');
    var searchButton = document.querySelector('.kd-search-container-header-m');

    if (searchButton) {
        searchButton.classList.toggle('d-none');
    }
});

function dropdownToggle(dropindex) {
    dropdown = document.querySelectorAll('.navbar .dropdown .dropdown-container')[dropindex];
    if (document.getElementById('navbar').classList.contains('navbar-mobile')) {
        dropdown.nextElementSibling.classList.toggle('dropdown-active')
    }   
}

function childDropdownToggle(childdropindex) {
    childdropdown = document.querySelectorAll('.navbar .dropdown .dropdown-dropdown-container')[childdropindex];
    if (document.getElementById('navbar').classList.contains('navbar-mobile')) {
        childdropdown.nextElementSibling.classList.toggle('dropdown-active')
    }   
}

//mobile navigation icon-animation
const navigation = document.querySelector(".mobile-nav-toggle");
navigation.addEventListener('click', () => {
    const isOpened = navigation.getAttribute('aria-expanded');
    if (isOpened === 'false') {
        navigation.setAttribute('aria-expanded', 'true');
    } else {
        navigation.setAttribute('aria-expanded', 'false');
    }
})


// toggle header-scrolled class
let selectHeader = document.getElementById('header');
if (selectHeader) {
    const headerScrolled = () => {
        if (window.scrollY > 100) {
            selectHeader.classList.add('kd-header-scrolled');
        } else {
            selectHeader.classList.remove('kd-header-scrolled');
        }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled);
}