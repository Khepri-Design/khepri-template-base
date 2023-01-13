AOS.init();

//parallax init
var parallaxElements = document.getElementsByClassName('kd-parallax');

if (parallaxElements != "") {
    for (var i = 0; i < parallaxElements.length; i++) {
        var parallaxInstance = new Parallax(parallaxElements[i]);
    }
}