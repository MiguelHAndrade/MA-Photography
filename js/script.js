// window.alert('Hello World')

// function ampliarImagem(img) {
//     img.style.width = "500px"; // altera a largura da imagem para 500px
//     img.style.height = "auto"; // ajusta a altura automaticamente
//   }

function openWindow(imagemUrl) {
window.open(imagemUrl, "_blank", "width=100vh,height=auto"); // abre a imagem em uma nova janela com o tamanho de 800x600
}

// ////////////////////////////////// Open Full Screen Mode
// var img = document.getElementById("fullscreenImg");
// var closeBtn = document.getElementById("closeBtn");

// function openFullscreen() {
//   if (img.requestFullscreen) {
//     img.requestFullscreen();
//   } else if (img.webkitRequestFullscreen) { /* Safari */
//     img.webkitRequestFullscreen();
//   } else if (img.msRequestFullscreen) { /* IE11 */
//     img.msRequestFullscreen();
//   }
//   closeBtn.style.display = "block"; // Exibe o botão "close"
//   img.style.cursor = "auto";
// }

// function closeFullscreen() {
//   if (document.exitFullscreen) {
//     document.exitFullscreen();
//   } else if (document.webkitExitFullscreen) { /* Safari */
//     document.webkitExitFullscreen();
//   } else if (document.msExitFullscreen) { /* IE11 */
//     document.msExitFullscreen();
//   }
//   closeBtn.style.display = "none"; // Esconde o botão "close"
// }

// closeBtn.addEventListener("click", closeFullscreen); // Adiciona evento de clique ao botão "close"
// /////////////////////////////////////////////////////////

var imgs = document.querySelectorAll(".fullscreen-img");

function openFullscreen(img) {
  if (img.requestFullscreen) {
    img.requestFullscreen();
  } else if (img.webkitRequestFullscreen) { /* Safari */
    img.webkitRequestFullscreen();
  } else if (img.msRequestFullscreen) { /* IE11 */
    img.msRequestFullscreen();
  }
  img.style.cursor = "auto";

  closeFullscreen()
}

function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) { /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE11 */
    document.msExitFullscreen();
  }
}

// Adiciona evento de clique em cada imagem
for (var i = 0; i < imgs.length; i++) {
  imgs[i].addEventListener("click", function() {
    openFullscreen(this);
  });
}

//////////////////////////////////

var myDiv = document.querySelectorAll(".card");

myDiv.addEventListener('touchstart', function() {
  myDiv.classList.add('active');
});

myDiv.addEventListener('touchmove', function() {
  myDiv.classList.add('active');
});

myDiv.addEventListener('touchend', function() {
  myDiv.classList.remove('active');
});
