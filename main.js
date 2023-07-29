const navbar_email = document.querySelector('.navbar-email')
const menu_hamburguesa_mobile = document.querySelector('.menu')
const shoping_cart = document.querySelector('.shopping-image')
const main_container = document.querySelector('.main-container')

const desktop_orders = document.querySelector('.desktop-menu')
const menu_mobile = document.querySelector('.mobile-menu')
const product_details = document.querySelector('.product-detail')

navbar_email.addEventListener('click',display_order)
menu_hamburguesa_mobile.addEventListener('click',display_menu)
shoping_cart.addEventListener('click',show_shoping_cart)
main_container.addEventListener('click',closeAllWindows)



function closeAllWindows() {
    const isDisplayOrdersClosed = desktop_orders.classList.contains('inactive')
    const isMenuMobileClosed = menu_mobile.classList.contains('inactive')
    const isProductDetailClosed = product_details.classList.contains('inactive')

    if (!isDisplayOrdersClosed || !isMenuMobileClosed || !isProductDetailClosed) {
        desktop_orders.classList.add('inactive')
        menu_mobile.classList.add('inactive')
        product_details.classList.add('inactive')
    }
}
function display_order() {
    const isProductDetailClosed = product_details.classList.contains('inactive')
    if (!isProductDetailClosed) {
        product_details.classList.add('inactive')
    }

    desktop_orders.classList.toggle('inactive')
}

function display_menu(){
    const isProductDetailClosed = product_details.classList.contains('inactive')
    

    if (!isProductDetailClosed) {
        product_details.classList.add('inactive')
    }

    menu_mobile.classList.toggle('inactive')
}
function show_shoping_cart() {
    const isMenuMobileClosed = menu_mobile.classList.contains('inative')
    const isDisplayOrdersClosed = desktop_orders.classList.contains('inactive')
    
    if (!isMenuMobileClosed || !isDisplayOrdersClosed) {
        menu_mobile.classList.add('inactive')
        desktop_orders.classList.add('inactive')

    }
    
    product_details.classList.toggle('inactive')
}

