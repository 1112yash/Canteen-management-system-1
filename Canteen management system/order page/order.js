document.getElementById('product').addEventListener('change', function() {
    var product = this.value;
    var orderButton = document.getElementById('order-button');
    var orderPhoto = orderButton.querySelector('.order-photo');
    var imageSrc = 'photo/';
    console.log("f")
    switch (product) {
      case 'Shakes':
        imageSrc += 'Shake.jpg';
        break;
      case 'Lunch':
        imageSrc += 'lunch.jpeg';
        break;
      case 'Fast_Food':
        imageSrc += 'fastfood.jpeg';
        break;
      default:
        imageSrc += 'default-photo.jpg';
    }
  
    orderPhoto.src = imageSrc;
  });
  