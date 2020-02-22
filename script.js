
const imagesToLoad = document.querySelectorAll('[image-to-load]');
const notFoundImage = 'img/not-found-image.jpg';
let countLoaded = 0;
let notFoundImages = [];

function hiddeLoading() {
  document.getElementById('loading').style.display = 'none';
  document.getElementById('loaded').style.display = 'block';
}

function finishImages() {
  if (notFoundImages.length) {
    const image = new Image();
    image.onload = () => {
      notFoundImages.forEach(element => {
        element.src = notFoundImage;
      });
      hiddeLoading();
    }
    image.src = notFoundImage;
    return;
  }
  hiddeLoading();
}

imagesToLoad.forEach(element => {
  const src = element.getAttribute('image-to-load');
  const image = new Image();
  image.onload = () => {
    element.src = src;
    if (countLoaded == imagesToLoad.length-1) {
      finishImages();
    }
    countLoaded++;
  }
  image.onerror = () => {
    element.src = notFoundImage;
    notFoundImages.push(element);
    if (countLoaded == imagesToLoad.length-1) {
      finishImages();
    }
    countLoaded++;
  };
  image.src = src;
});