let backtotop = document.querySelector('.kd-back-to-top')
if (backtotop) {
    const toggleBacktotop = () => {
        if (window.scrollY > 100) {
    backtotop.classList.add('active')
    } else {
    backtotop.classList.remove('active')
    }
}
window.addEventListener('scroll', toggleBacktotop)
}

// Back to top frame
let backtotopFrame = document.querySelector('.kd-back-to-top-frame')
if (backtotopFrame) {
    const toggleBacktotop = () => {
        if (window.scrollY > 100) {
    backtotopFrame.classList.add('active')
    } else {
    backtotopFrame.classList.remove('active')
    }
}
window.addEventListener('scroll', toggleBacktotop)
}