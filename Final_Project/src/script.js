/* Add any JavaScript you need to this file. */

let products = [
  {
    name: 'Iphone 12 Pro',
    tag: 'iphone12pro',
    price: 1360,
    inCart: 0
  },
  {
    name: 'Iphone 11 Pro',
    tag: 'iphone11pro',
    price: 960,
    inCart: 0
  },
  {
    name: 'Galaxy Note 20',
    tag: 'galaxyNote20',
    price: 1260,
    inCart: 0
  },
  {
    name: 'MacBook Pro',
    tag: 'macbookpro',
    price: 2330,
    inCart: 0
  },
  {
    name: 'Iphone X',
    tag: 'iphonex',
    price: 780,
    inCart: 0
  },
  {
    name: 'Apple Watch',
    tag: 'appleWatch',
    price: 350,
    inCart: 0
  },
  {
    name: 'Airpod',
    tag: 'airpod',
    price: 199,
    inCart: 0
  },
  {
    name: 'Apple mouse',
    tag: 'applemouse',
    price: 130,
    inCart: 0
  },
  {
    name: 'Iphone 12 Pro',
    tag: 'iphone12pro',
    price: 1360,
    inCart: 0
  },
  {
    name: 'Canon Camera',
    tag: 'canonCamera',
    price: 2380,
    inCart: 0
  },
  {
    name: 'Headphone',
    tag: 'headphone',
    price: 260,
    inCart: 0
  },
  {
    name: 'Memory Card 256',
    tag: 'memoryCard256',
    price: 1360,
    inCart: 0
  },
  {
    name: 'Iphone 12 Pro',
    tag: 'iphone12pro',
    price: 1360,
    inCart: 0
  },
  {
    name: 'Iphone 11 Pro',
    tag: 'iphone11pro',
    price: 960,
    inCart: 0
  },
  {
    name: 'Galaxy Note 20',
    tag: 'galaxyNote20',
    price: 1260,
    inCart: 0
  },
  {
    name: 'MacBook Pro',
    tag: 'macBookpro',
    price: 2330,
    inCart: 0
  },
  {
    name: 'Iphone X',
    tag: 'iphonex',
    price: 780,
    inCart: 0
  },
  {
    name: 'Apple Watch',
    tag: 'appleWatch',
    price: 350,
    inCart: 0
  },
  {
    name: 'Airpod',
    tag: 'airpod',
    price: 199,
    inCart: 0
  },
  {
    name: 'Apple mouse',
    tag: 'applemouse',
    price: 130,
    inCart: 0
  },
  {
    name: 'Iphone 12 Pro',
    tag: 'iphone12pro',
    price: 1360,
    inCart: 0
  },
  {
    name: 'Canon Camera',
    tag: 'canonCamera',
    price: 2380,
    inCart: 0
  },
  {
    name: 'Headphone',
    tag: 'headphone',
    price: 260,
    inCart: 0
  },
  {
    name: 'Memory Card 256',
    tag: 'memoryCard256',
    price: 1360,
    inCart: 0
  }
];

// let clear = document.querySelector('.remove');
// clear.onclick = clearCart();
// function clearCart(){
//   localStorage.removeItem('productsInCart');
// }
var carts = document.querySelectorAll('.cart');

for (let i = 0; i < carts.length; i++) {
  carts[i].addEventListener('click', () => {
    // console.log(carts[i]);
    cartNumbers(products[i]);
    totalCost(products[i]);
  });
}


function onLoadCartNumbers() {
  var productNumbers = localStorage.getItem('cartNumbers');

  if (productNumbers) {
    let cartIcon = document.querySelectorAll('.fa-shopping-cart span');
    for (var i = 0; i < cartIcon.length; i++) {
      cartIcon[i].textContent = productNumbers;
    }
  }
}
function cartNumbers(product) {
  var productNumbers = localStorage.getItem('cartNumbers');

  productNumbers = parseInt(productNumbers);

  if (productNumbers) {
    localStorage.setItem('cartNumbers', productNumbers + 1);
    let cartIcon = document.querySelectorAll('.fa-shopping-cart span');
    for (let i = 0; i < cartIcon.length; i++) {
      cartIcon[i].textContent = productNumbers + 1;
    }
  } else {
    localStorage.setItem('cartNumbers', 1);
    let cartIcon = document.querySelectorAll('.fa-shopping-cart span');
    for (let i = 0; i < cartIcon.length; i++) {
      cartIcon[i].textContent = 1;
    }
  }
  setItems(product);
}
function setItems(product) {
  let cartItems = localStorage.getItem('productsInCart');
  cartItems = JSON.parse(cartItems);

  if (cartItems !== null) {
    if (cartItems[product.tag] === undefined) {
      cartItems = {
        ...cartItems,
        [product.tag]: product
      };
    }
    cartItems[product.tag].inCart += 1;
  } else {
    product.inCart = 1;
    cartItems = {
      [product.tag]: product
    };
  }
  localStorage.setItem('productsInCart', JSON.stringify(cartItems));
}

function totalCost(product) {
  let cartCost = localStorage.getItem('totalCost');
  if (cartCost != null) {
    cartCost = parseInt(cartCost);
    localStorage.setItem('totalCost', cartCost + product.price);
  } else {
    localStorage.setItem('totalCost', product.price);
  }
}
function displayCart() {
  let cartItems = localStorage.getItem('productsInCart');
  cartItems = JSON.parse(cartItems);
  let productContainer = document.querySelector('.cart-page table');
  let productTotal = document.querySelector('.total-price table');
  let cartCost = localStorage.getItem('totalCost');

  if (cartItems && productContainer) {
    productContainer.innerHTML = ` 
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Subtotal</th>
          </tr>`;
    productTotal.innerHTML = '';
    Object.values(cartItems).map(item => {
      productContainer.innerHTML += `
          <tr>
            <td>
              <div class="cart-info">
                <img src="images/${item.tag}.jpg" alt="" />
                <div class="details">
                  <p>${item.name}</p>
                  <small>Price: $${item.price}.00</small>
                  <br />
                  <a href="" class="remove-item">Remove</a>
                </div>
              </div>
            </td>
            <td><input type="number" value="${item.inCart}" /></td>
            <td>$${item.price * item.inCart}.00</td>
          </tr>
      `;
    });
    let tax = parseInt(cartCost) * 0.13;
    tax = parseInt(tax);
    let total = parseInt(cartCost) + tax;
    productTotal.innerHTML += `
    <tr>
              <td>Subtotal</td>
              <td>$${cartCost}.00</td>
            </tr>
            <tr>
              <td>Tax</td>
              <td>$${tax}.00</td>
            </tr>
            <tr>
              <td>Total</td>
              <td>$${total}.00</td>
            </tr>
            </div>
        <div class="remove-container">
          <a class="btn remove px-auto">CLEAR CART</a>
        </div>
    `;
  }
}

onLoadCartNumbers();
displayCart();

let remove = document.querySelectorAll('.remove-item');
for (let i = 0; i < remove.length; i++) {
  remove[i].addEventListener('click', function(e) {
    var buttonClicked = e.target;
    console.log('clicked');
    cartRemoves(remove[i]);
    
  });

}
function cartRemoves(product1) {
  var productNumbers = localStorage.getItem('cartNumbers');

  productNumbers = parseInt(productNumbers);

  if (productNumbers) {
    localStorage.setItem('cartNumbers', productNumbers - 1);
    let cartIcon = document.querySelectorAll('.fa-shopping-cart span');
    for (let i = 0; i < cartIcon.length; i++) {
      cartIcon[i].textContent = productNumbers - 1;
    }
  } else {
    localStorage.setItem('cartNumbers', 0);
    let cartIcon = document.querySelectorAll('.fa-shopping-cart span');
    for (let i = 0; i < cartIcon.length; i++) {
      cartIcon[i].textContent = 0;
    }
  }
  removeItems(product1)

  

  //setItems(product);
}

function removeItems(product){
  let resItems = localStorage.getItem('productsInCart');
  resItems = JSON.parse(resItems);
  let num = localStorage.getItem('cartNumbers');
  num = JSON.parse(num);

  let proName = product.parentElement.children[0];
  console.log(proName);

  if (resItems !== null) {
    resItems = Object.values(resItems).map(item => {
      if(item.name === 'Galaxy Note 20'){
      item.inCart = num;
      if (item.inCart === 0){
        resItems = resItems.filter(src => {
        return src !== item;
        });
        
      }
    }
      return item;
    })
    
   } 
  localStorage.setItem('productsInCart', JSON.stringify(resItems));
}

// function remove(item){
//   let resItems1 = localStorage.getItem('productsInCart');
//   resItems1 = JSON.parse(resItems1);
//   resItems1 = Object.values.filter(src => {
//     return src !== item;
//   })

//   localStorage.setItem('productsInCart', JSON.stringify(resItems1));


// }



var MenuItem = document.querySelector('#menuItem');
MenuItem.style.maxHeight = '0px';

function menutoggle() {
  if (MenuItem.style.maxHeight === '0px') {
    MenuItem.style.maxHeight = '200px';
  } else {
    MenuItem.style.maxHeight = '0px';
  }
}

// var item = document.querySelector('menu-icon');
// item.onclick = menutoggle();

var productImg = document.querySelector('#productImg');
var smallImg = document.querySelectorAll('.small-img');
console.log(smallImg);

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
