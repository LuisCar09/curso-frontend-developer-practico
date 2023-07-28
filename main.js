const navbar_email = document.querySelector('.navbar-email')
const desktop_orders = document.querySelector('.desktop-menu')

navbar_email.addEventListener('click',display_order)
document.addEventListener('click',inactive)
function display_order() {
    desktop_orders.classList.toggle('inactive')
}

