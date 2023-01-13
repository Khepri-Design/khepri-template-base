let galleryImages = document.querySelectorAll('[data-gallery-img]')
let counter = 0;

if (galleryImages != '') {
    function createGalleryDiv(img) {
        document.getElementsByTagName('body')[0].prepend(document.createElement('div'));
        document.getElementsByTagName('body')[0].prepend(document.createElement('div'));
        let galleryBox = document.getElementsByTagName('div')[0];
        let galleryBackdrop = document.getElementsByTagName('div')[1];

        galleryBackdrop.innerHTML = `<div class="kd-gallery-backdrop"></div>`;
    galleryBox.setAttribute('data', 'gallery-template')
    galleryBox.classList.add('kd-gallery-open')
        galleryBox.innerHTML = `<figure><img id='img-preview' src='` + img.getAttribute('data-gallery-img-url') +`' />
        <div id="img-caption-container" class="d-flex justify-content-center"><div class="kd-round kd-gallery-caption d-flex justify-content-center"><div id="img-caption" class="text-center" style="overflow-wrap: anywhere">` + img.getAttribute('data-gallery-img-caption') + `</div></div></div></figure>
    <div class='kd-gallery-controls'>
        <div id='close-btn'  class='kd-round kd-controls-btn-close'>
        <svg width="42" height="42" fill="none" stroke="#ffffff" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6 6 18"></path>
            <path d="m6 6 12 12"></path>
        </svg>
        </div>
        <div id='prev-btn' class='kd-round kd-control-btn'>
        <svg width="42" height="42" fill="none" stroke="#ffffff" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 12H5"></path>
            <path d="m12 19-7-7 7-7"></path>
        </svg>
        </div>
        <div id='next-btn' class='kd-round kd-control-btn'>
        <svg width="42" height="42" fill="none" stroke="#ffffff" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
        </svg>
        </div>
    </div>`;
    document.querySelector('body').append(galleryBox)

    }

    galleryImages.forEach((img, index, arr) => {
    img.addEventListener('click', function() {
        createGalleryDiv(img);
        let gallery = document.querySelector('.kd-gallery-open')
        let imgPreview = gallery.querySelector("#img-preview");
        let imgCaption = gallery.querySelector("#img-caption");
        let nextBtn = gallery.querySelector('#next-btn')
        let prevBtn = gallery.querySelector('#prev-btn')
        let closeBtn=gallery.querySelector('#close-btn')

        document.getElementsByClassName('kd-gallery-backdrop')[0].addEventListener('click',function(){
            gallery.remove();
            document.getElementsByClassName('kd-gallery-backdrop')[0].classList.toggle('d-none');
        })

        closeBtn.addEventListener('click',function(){
            gallery.remove();
            document.getElementsByClassName('kd-gallery-backdrop')[0].classList.toggle('d-none');
        })
        prevBtn.addEventListener('click', function() {
        if (counter == 0) {
            counter = arr.length - 1
        }else{
        counter--;
        }
            imgPreview.src = galleryImages[counter].src
            imgCaption.innerHTML = galleryImages[counter].getAttribute('data-gallery-img-caption');
        })
        nextBtn.addEventListener('click', function () {
            if (counter < arr.length - 1) {
                counter++
            } else {
                counter = 0
            }
            imgPreview.src = galleryImages[counter].src
            imgCaption.innerHTML = galleryImages[counter].getAttribute('data-gallery-img-caption');
            
        })
        counter = index;
        //imgPreview.src = this.src;
        //imgCaption.innerHTML = this.getAttribute('data-gallery-img-caption');
        gallery.style.display = 'block'
    })
    })
}