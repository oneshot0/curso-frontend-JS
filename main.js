// const menuEmail = document.querySelector('.navbar-email');
// const desktopMenu = document.querySelector('.desktop-menu');
const $ = (selector) => document.querySelector(selector);

const menuEmail = $('.navbar-email');
const menuHamIcon = $('.menu');
const menuCarritoIcon = $('.navbar-shopping-cart');
const productDetailCloseIcon = $('.product-detail-close');
const desktopMenu = $('.desktop-menu');
const mobileMenu = $('.mobile-menu');
const shoppingCartContainer = $('#shoppingCartContainer');
const productDetailContainer = $('#productDetail');
const cardsContainer = $('.cards-container');


menuEmail.addEventListener('click', toogleDescktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside)


function toogleDescktopMenu() {
  desktopMenu.classList.toggle('inactive');
  shoppingCartContainer.classList.add('inactive');
  productDetailContainer.classList.add('inactive');
}
function toggleMobileMenu() {
  const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

  if (!isAsideClosed) {
    shoppingCartContainer.classList.add('inactive');
  }

  closeProductDetailAside();
  mobileMenu.classList.toggle('oculto');
}
function toggleCarritoAside() {
  //1er método para ocultar 
  const isMobileMenuClosed = mobileMenu.classList.contains('oculto');
  
  if (!isMobileMenuClosed) {
    mobileMenu.classList.add('oculto');
  }
  const isproductDetailClosed = productDetailContainer.classList.contains('oculto');
  
  if (!isproductDetailClosed) {
    productDetailContainer.classList.add('inactive');
  }
  //2do método para ocultar 
    shoppingCartContainer.classList.toggle('inactive');
    desktopMenu.classList.add('inactive');

}
function openProductDetailAside() {
  shoppingCartContainer.classList.add('inactive');
  productDetailContainer.classList.remove('inactive');
  desktopMenu.classList.add('inactive');

  
} 
function closeProductDetailAside() {
  productDetailContainer.classList.add('inactive');
  mobileMenu.classList.add('oculto');
}


const productList = [];
productList.push({
  name: 'Bike',
  price: 120,
  image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fperusupply.com%2Fherramientas-de-golpe%2F282-martillo-cabeza-conica-27-mm-una-curva-mango-fibra-de-vidrio-truper-7506240641667.html&psig=AOvVaw0oK794Q0P4_D7bkMiUnRW0&ust=1705423058723000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCIivg4_q34MDFQAAAAAdAAAAABAF',
});
productList.push({
  name: "Modern kitchen",
  price: 120,
  image: "https://images.pexels.com/photos/6312355/pexels-photo-6312355.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});
productList.push({
  name: "Black kitchen",
  price: 150,
  image: "https://images.pexels.com/photos/7511700/pexels-photo-7511700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

});
productList.push({
  name: "Spacious kitchen",
  price: 170,
  image: "https://images.pexels.com/photos/3935350/pexels-photo-3935350.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});
productList.push ({
    name:'Tennis Montain Bike',
    price: 200,
    image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8ea578f6c07847fca2d0ac85011d7f1f_9366/Tenis_para_Mountain_Bike_Five_Ten_Freerider_Negro_FW2835_01_standard.jpg'
});
productList.push ({
    name:'Sunglasses',
    price: 800,
    image: 'https://cdn.siroko.com/s/files/1/1220/6874/products/gafas-siroko-tech-k3s-london-lateral/1200x/crop_center.jpg?v=1635209602'
});
productList.push ({
    name:'Sunglasses',
    price: 600,
    image: 'https://cdn.siroko.com/s/files/1/1220/6874/products/siroko-tech-k3s-clearfog-lente-antiniebla-frontal/1200x/crop_center.jpg?v=1635209603'
});
productList.push ({
    name:'Martillo',
    price: 100,
    image: 'https://perusupply.com/312-medium_default/martillo-cabeza-conica-27-mm-una-curva-mango-fibra-de-vidrio-truper.jpg'
});

/* <div class="product-card">
      <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
      <div class="product-info">
        <div>
          <p>$120,00</p>
          <p>Bike</p>
        </div>
        <figure>
          <img src="./icons/bt_add_to_cart.svg" alt="">
        </figure>
      </div>
    </div> */

function renderProducts(arr) {
  for (product of arr){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    // product = {name, price, image} => product.image
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
    productImg.addEventListener('click', openProductDetailAside);

    // Sección de precio y nombre del producto
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
    const productInfoDiv = document.createElement('div');
    const productPrice = document.createElement('p');
    productPrice.innerText =  '$' + product.price;
    const productName = document.createElement('p');
    productName.innerText = product.name

    productInfoDiv.append(productPrice, productName);

      //Sección del ícono 
    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg' );

    //Empezando a organizar el html
    productInfoFigure.appendChild(productImgCart);

    productInfo.append(productInfoDiv, productInfoFigure);

    productCard.append(productImg, productInfo);
    cardsContainer.appendChild(productCard);
}
}

renderProducts(productList);


