
var fileCollection = [];
var dataTransfer = new DataTransfer();
function updateFiles(newFiles) {
    
    //adding files to the array
    for (var i = 0; i < newFiles.length; i++) {
        fileCollection.push(newFiles[i]);
    }

    //updating filelist in frontend
    var fileList = document.getElementsByClassName('kd-file-list')[0];
    for (var i = 0; i < newFiles.length; i++) {
        fileList.innerHTML += "<div><span class='kd-text-primary kd-underlined'>" + newFiles[i].name + "</span>&nbsp;</div>";
    }

    for (var i = 0; i < fileCollection.length; i++) { 
        dataTransfer.items.add(fileCollection[i]);
    }
    document.getElementById('uploadFiles').files = dataTransfer.files;
    document.getElementsByClassName('kd-delete-files')[0].classList.remove('d-none');
}

function removeFiles() {
    dataTransfer.clearData();
    fileCollection = [];
    document.getElementsByClassName('kd-delete-files')[0].classList.add('d-none');
    document.getElementById('uploadFiles').files = dataTransfer.files;
    document.getElementsByClassName('kd-file-list')[0].innerHTML = '';
}

//drag and drop
let dropArea = document.getElementById("dropzone");

if (dropArea != null) {
    document.getElementById('dropzone').addEventListener("drop", function (event) {
        if (e.dataTransfer && e.dataTransfer.files.length != 0) {
            var files = e.dataTransfer.files;

            updateFiles(files);

        } else {
            alert("Drag and Drop in diesem Browser nicht möglich. Bitte per Klick hochladen.");
        }

    });
}
if (dropArea != null) {
  // Prevent default drag behaviors
  ;['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
    dropArea.addEventListener(eventName, preventDefaults, false)   
    document.body.addEventListener(eventName, preventDefaults, false)
  })

  // Highlight drop area when item is dragged over it
  ;['dragenter', 'dragover'].forEach(eventName => {
    dropArea.addEventListener(eventName, highlight, false)
  })

  ;['dragleave', 'drop'].forEach(eventName => {
    dropArea.addEventListener(eventName, unhighlight, false)
  })

  function preventDefaults (e) {
    e.preventDefault()
    e.stopPropagation()
  }

  function highlight(e) {
    dropArea.classList.add('highlight')
      dropArea.innerHTML = '<div class="text-center"><span class="text-center">Loslassen zu Hochzuladen<div class="kd-abbreviation mt-2">(max. 5 Dateien)</div></div>';
  }

  function unhighlight(e) {
    dropArea.classList.remove('highlight')
      dropArea.innerHTML = '<div class="text-center"><span class="text-center">Dateien in diesen Bereich ziehen oder <span class="kd-underlined">klicken</span> zum auswählen.</span><div class="kd-abbreviation mt-2">(max. 5 Dateien)</div></div>';
  }
}