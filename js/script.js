// index
// write-us
if (document.querySelector('.write-us-modal')) {
  const writeUsOpenButton = document.querySelector('.write-us');
  const writeUsModal = document.querySelector('.write-us-modal');
  const writeUsCloseButton = writeUsModal.querySelector('.write-us-modal-close');
  const writeUsModalForm = writeUsModal.querySelector('.write-us-modal-form');
  const userName = writeUsModalForm.querySelector('[id="user-name"]');
  const userEmail = writeUsModalForm.querySelector('[id="user-email"]');
  
  writeUsOpenButton.addEventListener('click', function(evt) {
    evt.preventDefault();
    writeUsModal.classList.add('modal-show', 'animation-write-us');
    userName.focus();
  });

  writeUsCloseButton.addEventListener('click', function(evt) {
    evt.preventDefault();
    writeUsModal.classList.remove('modal-show', 'animation-write-us', 'error');
  });
  
  writeUsModalForm.addEventListener('submit', function(evt) {
    if (!userName.value || !userEmail.value) {
      evt.preventDefault();
      // userName.setAttribute('required', 'required');
      writeUsModal.classList.remove('error');
      writeUsModal.offsetWidth = writeUsModal.offsetWidth;
      writeUsModal.classList.add('error');
    }
  });

  document.addEventListener('keydown', function(evt) {
    if (evt.keyCode === 27) {
      if (writeUsModal.classList.contains('modal-show')) {
        evt.preventDefault();
        writeUsModal.classList.remove('modal-show', 'animation-write-us', 'error');
      }
    }
  });
}

// map
if (document.querySelector('.map-modal')) {
  const mapModalOpenButton = document.querySelector('.map-open');
  const mapModal = document.querySelector('.map-modal');
  const mapModalCloseButton = mapModal.querySelector('.map-modal-close');

  mapModalOpenButton.addEventListener('click', function(evt) {
    evt.preventDefault();
    mapModal.classList.add('modal-show', 'animation-map');
  });
  
  mapModalCloseButton.addEventListener('click', function(evt) {
    evt.preventDefault();
    mapModal.classList.remove('modal-show', 'animation-map');
  });
  
  document.addEventListener('keydown', function (evt){
    if (evt.keyCode === 27) {
      if (mapModal.classList.contains('modal-show')) {
        evt.preventDefault();
        mapModal.classList.remove('modal-show', 'animation-map');
      }
    }
  });
}

//promo-slider
if (document.querySelector('.promo-slider')) {
  const promoSlider = document.querySelector('.promo-slider');
  const promoSliderItems = promoSlider.querySelectorAll('.promo-slider-item');
  const promoNextSlide = promoSlider.querySelector('.next-slide');
  const promoPreviousSlide = promoSlider.querySelector('.previous-slide');
  const promoSliderControls = promoSlider.querySelectorAll('.promo-slider-control button');
  let slideIndex = 0;

  showSlides(slideIndex);

  function showSlides (n) {
    if (n < 1) {
      slideIndex = promoSliderItems.length;
    } else if (n > promoSliderItems.length) {
      slideIndex = 1;
    }
    for (let i = 0; i < promoSliderItems.length; i++) {
      promoSliderItems[i].style.display = 'none';
    }
    for (let i = 0; i < promoSliderItems.length; i++) {
      promoSliderControls[i].classList.remove('active');
    }
    promoSliderItems[slideIndex - 1].style.display = 'block';
    promoSliderControls[slideIndex - 1].classList.add('active');
  }

  function plusSlides(n) {
    showSlides(slideIndex += n );
  }
  promoNextSlide.addEventListener('click', function () {
    plusSlides(-1);
  });
  promoPreviousSlide.addEventListener('click', function () {
    plusSlides(1);
  });
}
/* 
//services-slider
if (document.querySelector('.services-slider')) {
  const servicesSlider = document.querySelector('.services-slider');
  const servicesButtons = servicesSlider.querySelectorAll('.services-slider-controls-button');
  const servicesSliderItems = servicesSlider.querySelectorAll('.services-slide');



  var slideIndex = 1;

  showSlides(slideIndex);
  function showSlides (n) {
    if (n < 1) {
      slideIndex = servicesSliderItems.length;
    } else if (n > servicesSliderItems.length) {
      slideIndex = 1;
    }
    for (let i = 0; i < servicesSliderItems.length; i++) {
      servicesSliderItems[i].classList.remove('current-slide');
    }
    for (let i = 0; i < servicesSliderItems.length; i++) {
      servicesButtons[i].classList.remove('services-button-current');
    }
    servicesSliderItems[slideIndex - 1].classList.add('current-slide');
    servicesButtons[slideIndex - 1].classList.add('services-button-current');
  }

  for (let i = 1; i <= servicesButtons.length; i++) {
    servicesButtons[i].addEventListener('click', function () {
      if (!servicesButtons[i].classList.contains('services-button-current')) {
      slideIndex = i;
      showSlides(slideIndex);
      }
    });
  }
} */

// product-added
if (document.querySelector('.product-added-modal')) {
  const productAddedOpenButtons = document.querySelectorAll('.button-buy');
  const productAddedModal = document.querySelector('.product-added-modal');
  const productAddedCloseButton = productAddedModal.querySelector('.product-added-modal-close')
  
  for (let i = 0; i < productAddedOpenButtons.length; i++) {
    let productAddedOpenButton = productAddedOpenButtons[i];

    productAddedOpenButton.addEventListener('click', function(evt) {
      evt.preventDefault();
      productAddedModal.classList.add('modal-show', 'animation-added');
    });
  };

  productAddedCloseButton.addEventListener('click', function(evt) {
    evt.preventDefault();
    productAddedModal.classList.remove('modal-show', 'animation-added');
  });

  document.addEventListener('keydown', function(evt) {
    if (evt.keyCode === 27) {
      if (productAddedModal.classList.contains('modal-show')) {
        productAddedModal.classList.remove('modal-show','animation-added');
      }
    }
  });
}