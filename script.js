//nav-bar za manjše ekrane

document.addEventListener('DOMContentLoaded', function() {
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  const mNav = document.getElementById('mNav');
  const icon = document.querySelector('.hamburger-menu i');

  hamburgerMenu.addEventListener('click', function(event) {
      event.preventDefault();

      if (mNav.classList.contains('m-nav-hidden')) {
          mNav.classList.remove('m-nav-hidden');
          mNav.classList.add('m-nav');
          icon.classList.remove('fa-bars');
          icon.classList.add('fa-xmark');
      } else {
          mNav.classList.remove('m-nav');
          mNav.classList.add('m-nav-hidden');
          icon.classList.remove('fa-xmark');
          icon.classList.add('fa-bars');
      }
  });
});

//interaktivni Bandersnatch .gif
function changeImage(image) {
  document.getElementById('box').style.backgroundImage = `url(${image})`;
  toggleButtonsVisibility(false);
}

function resetImage() {
  document.getElementById('box').style.backgroundImage = 'url("assets/bandersnatch-base.gif")';
  toggleButtonsVisibility(true);
}

function toggleButtonsVisibility(show) {
  const buttons = document.querySelector('.bandersnatch-buttons');
  if (show) {
    buttons.style.display = 'flex';
  } else {
    buttons.style.display = 'none';
  }
}
  
  window.onload = function() {
    resizeBox();
    window.addEventListener('resize', resizeBox);
  };
  
  function resizeBox() {
    const box = document.getElementById('box');
    const boxWidth = box.offsetWidth;
    const imageAspectRatio = 16 / 9; 
    const calculatedHeight = boxWidth / imageAspectRatio;
  
    box.style.height = `${calculatedHeight}px`;
  }
  