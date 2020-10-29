// index
if (document.querySelector('.write-us-modal')) {
  var writeUsOpenButton = document.querySelector('.write-us');
  var writeUsModal = document.querySelector('.write-us-modal');
  var writeUsCloseButton = writeUsModal.querySelector('.write-us-modal-close');
  var writeUsModalForm = writeUsModal.querySelector('.write-us-modal-form');
  var userName = writeUsModalForm.querySelector('[id="user-name"]');
  var userEmail = writeUsModalForm.querySelector('[id="user-email"]');
  
  writeUsOpenButton.addEventListener('click', function(evt) {
    evt.preventDefault();
    writeUsModal.classList.add('modal-show');
    writeUsModal.classList.add('animation-write-us');
    userName.focus();
  });
  
  writeUsCloseButton.addEventListener('click', function(evt) {
    evt.preventDefault();
    writeUsModal.classList.remove('modal-show');
    writeUsModal.classList.remove('animation-write-us');
  });
  
  document.addEventListener('keydown', function(evt) {
    if (evt.keyCode === 27) {
      if (writeUsModal.classList.contains('modal-show')) {
        evt.preventDefault();
        writeUsModal.classList.remove('modal-show');
        writeUsModal.classList.remove('animation-write-us');
      }
    }
  });
}

if (document.querySelector('.map-modal')) {
  var mapModalOpenButton = document.querySelector('.map-open');
  var mapModal = document.querySelector('.map-modal');
  var mapModalCloseButton = mapModal.querySelector('.map-modal-close');
  var test = document.querySelector('iframe');

  mapModalOpenButton.addEventListener('click', function(evt) {
    evt.preventDefault();
    mapModal.classList.add('modal-show');
    mapModal.classList.add('animation-map');
  });
  
  mapModalCloseButton.addEventListener('click', function(evt) {
    evt.preventDefault();
    mapModal.classList.remove('modal-show');
    mapModal.classList.remove('animation-map');
  });
  
  document.addEventListener('keydown', function (evt){
    if (evt.keyCode === 27) {
      if (mapModal.classList.contains('modal-show')) {
        evt.preventDefault();
        mapModal.classList.remove('modal-show');
        mapModal.classList.remove('animation-map');
      }
    }
  });
}
// Как закрывать через esc когда фокус в iframe ? 

// inner 
if (document.querySelector('.product-added-modal')) {
  var productAddedOpenButtons = document.querySelectorAll('.button-buy');
  var productAddedModal = document.querySelector('.product-added-modal');
  var productAddedCloseButton = productAddedModal.querySelector('.product-added-modal-close')
  
  for (var i = 0; i < productAddedOpenButtons.length; i++) {
    var productAddedOpenButton = productAddedOpenButtons[i];

    productAddedOpenButton.addEventListener('click', function(evt) {
      evt.preventDefault();
      productAddedModal.classList.add('modal-show');
      productAddedModal.classList.add('animation-added');
    });
  };

  productAddedCloseButton.addEventListener('click', function(evt) {
    evt.preventDefault();
    productAddedModal.classList.remove('modal-show');
    productAddedModal.classList.remove('animation-added');
  });

  document.addEventListener('keydown', function(evt) {
    if (evt.keyCode === 27) {
      if (productAddedModal.classList.contains('modal-show')) {
        productAddedModal.classList.remove('modal-show');
        productAddedModal.classList.remove('animation-added');
      }
    }
  });
}