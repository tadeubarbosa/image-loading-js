const imagesToLoad = [
  'https://i.picsum.photos/id/201/400/400.jpg',
  'https://i.picsum.photos/id/202/400/400.jpg',
  'https://i.picsum.photos/id/203/400/400.jpg',
];

const notFoundImage = 'not-found-image.jpg';

imagesToLoad.forEach((src, index) => {
  new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => {
      document.getElementById('image-' + index).src = src;
      if (index == imagesToLoad.length-1) {
        document.getElementById('loading').style.display = 'none';
        document.getElementById('loaded').style.display = 'block';
      }
    }
    image.src = src;
  });
});