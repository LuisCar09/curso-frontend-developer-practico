const navbar_email = document.querySelector('.navbar-email')
const desktop_orders = document.querySelector('.desktop-menu')
const menu_hamburguesa_mobile = document.querySelector('.menu')
const menu_mobile = document.querySelector('.mobile-menu')

navbar_email.addEventListener('click',display_order)
menu_hamburguesa_mobile.addEventListener('click',display_menu)

function display_order() {
    desktop_orders.classList.toggle('inactive')
}

function display_menu(){
    menu_mobile.classList.toggle('inactive')
}

