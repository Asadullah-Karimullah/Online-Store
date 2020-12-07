/* Add any JavaScript you need to this file. */

var MenuItem = document.querySelector('#menuItem');
MenuItem.style.maxHeight = '0px';

function menutoggle() {
  if (MenuItem.style.maxHeight === '0px') {
    MenuItem.style.maxHeight = '200px';
  } else {
    MenuItem.style.maxHeight = '0px';
  }
}

var item = document.querySelector('menu-icon');
item.onclick = menutoggle();

var productImg = document.querySelector('#productImg');
var smallImg = document.querySelectorAll('.small-img');

smallImg[0].onclick = function() {
  productImg.src = smallImg[0].src;
};
smallImg[1].onclick = function() {
  productImg.src = smallImg[1].src;
};
smallImg[2].onclick = function() {
  productImg.src = smallImg[2].src;
};

smallImg[3].onclick = function() {
  productImg.src = smallImg[3].src;
};
