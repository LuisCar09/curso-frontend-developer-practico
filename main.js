const navbar_email = document.querySelector('.navbar-email')
const menu_hamburguesa_mobile = document.querySelector('.menu')
const shoping_cart = document.querySelector('.shopping-image')
const main_container = document.querySelector('.main-container')
const cardsContainer = document.querySelector('.cards-container')


const desktop_orders = document.querySelector('.desktop-menu')
const menu_mobile = document.querySelector('.mobile-menu')
const shopingCart = document.querySelector('.product-detail')
const showProductDetails = document.querySelector('.product-detail-secundary')
const closeShowProductDetails = document.querySelector('.product-detail-secundary-close')
console.log(closeShowProductDetails);


//Creamos el objeto producto
function Productos(nombre,precio,imagenProducto,iconoAddProduct,clase){
    this.nombre = nombre,
    this.precio = precio,
    this.imagenProducto = imagenProducto,
    this.iconoAddProduct = iconoAddProduct,
    this.clase = clase
}

let bicicleta1 = new Productos('Bike','$120,00',"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940","./icons/bt_add_to_cart.svg",'product-card')
let bicicleta2 = new Productos('Bike','$120,00',"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940","./icons/bt_add_to_cart.svg",'product-card')
let bicicleta3 = new Productos('Bike','$120,00',"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940","./icons/bt_add_to_cart.svg",'product-card')
let bicicleta4 = new Productos('Bike','$120,00',"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940","./icons/bt_add_to_cart.svg",'product-card')
let bicicleta5 = new Productos('Bike','$120,00',"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940","./icons/bt_add_to_cart.svg",'product-card')
let bicicleta6 = new Productos('Bike','$120,00',"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940","./icons/bt_add_to_cart.svg",'product-card')
let bicicleta7 = new Productos('Bike','$120,00',"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940","./icons/bt_add_to_cart.svg",'product-card')
let bicicleta8 = new Productos('Bike','$120,00',"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940","./icons/bt_add_to_cart.svg",'product-card')
let bicicleta9 = new Productos('Bike','$120,00',"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940","./icons/bt_add_to_cart.svg",'product-card')
let bicicleta10 = new Productos('Bike','$120,00',"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940","./icons/bt_add_to_cart.svg",'product-card')

let productos = []
productos.push(bicicleta1,bicicleta2,bicicleta3,bicicleta4,bicicleta5,bicicleta6,bicicleta7,bicicleta8,bicicleta9,bicicleta10)


navbar_email.addEventListener('click',display_order)
menu_hamburguesa_mobile.addEventListener('click',display_menu)
shoping_cart.addEventListener('click',show_shoping_cart)
main_container.addEventListener('click',closeAllWindows)
closeShowProductDetails.addEventListener('click',buttonCloseDetailsProduct)


//Agregamos dinamicamente los productos desde JS

function showProducts() {
    
    productos.forEach((product) => {
        let show_all_productos = ` <div class="${product.clase}">
        <img class='product-image' src="${product.imagenProducto}" alt="Bike">
        <div class="product-info">
          <div>
            <p>${product.precio} </p>
            <p>${product.nombre} </p>
          </div>
          <figure>
            <img src="${product.iconoAddProduct}" alt="${product.nombre}">
          </figure>
        </div>
      </div>`
      
        cardsContainer.innerHTML += show_all_productos


       
    });
    let productImage = document.querySelectorAll('.product-image')
    productImage.forEach(image => {
        image.addEventListener('click',showDetails)
    });
}


//close all windows if we have a click outside of navbar
function closeAllWindows() {
    const isDisplayOrdersClosed = desktop_orders.classList.contains('inactive')
    const isMenuMobileClosed = menu_mobile.classList.contains('inactive')
    const isProductDetailClosed = shopingCart.classList.contains('inactive')

    if (!isDisplayOrdersClosed || !isMenuMobileClosed || !isProductDetailClosed) {
        desktop_orders.classList.add('inactive')
        menu_mobile.classList.add('inactive')
        shopingCart.classList.add('inactive')
    }
}

//Show order, my account and log out
function display_order() {
    const isShopingCartClosed = shopingCart.classList.contains('inactive')
    if (!isShopingCartClosed) {
        shopingCart.classList.add('inactive')
        
    }
    showProductDetails.classList.add('inactive')
    desktop_orders.classList.toggle('inactive')
}

//Show menuMobile
function display_menu(){
    const isProductDetailClosed = shopingCart.classList.contains('inactive')
    

    if (!isProductDetailClosed) {
        shopingCart.classList.add('inactive')
    }

    menu_mobile.classList.toggle('inactive')
}
//Mostrar shopping cart
function show_shoping_cart() {
    const isMenuMobileClosed = menu_mobile.classList.contains('inative')
    const isDisplayOrdersClosed = desktop_orders.classList.contains('inactive')
    
    if (!isMenuMobileClosed || !isDisplayOrdersClosed) {
        menu_mobile.classList.add('inactive')
        desktop_orders.classList.add('inactive')
        showProductDetails.classList.add('inactive')
    }
    
    shopingCart.classList.toggle('inactive')
}

//Mostrar los detalles de los productos
function showDetails() {
    showProductDetails.classList.remove('inactive')
 
}
//cerrar los detalles de los productos
function buttonCloseDetailsProduct() {
    showProductDetails.classList.add('inactive')
}
window.addEventListener('load',showProducts)
