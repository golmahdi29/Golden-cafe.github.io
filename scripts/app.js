const toggleThemeBtns = document.querySelectorAll(".toggle-theme");
const submenuOpenBtn = document.querySelector(".submenu-open-btn");
const submenuItem = document.querySelector(".submenu_item");
const navOpenIcon = document.querySelector(".nav-icon");
const mobileNav = document.querySelector(".nav");
const navCloseBtn = document.querySelector(".nav-close-btn");
const overlay = document.querySelector(".overlay");
const cartCloseBtn = document.querySelector(".cart-close-btn");
const cartIcon = document.querySelector(".cart-icon");
const cart = document.querySelector(".cart");

toggleThemeBtns.forEach(btn => {
    btn.addEventListener("click" , () => {
        theme()
    })
})
function theme(){
    if (localStorage.theme === "dark"){
        document.documentElement.classList.remove("dark");
        localStorage.theme = "light";
    } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme" , "dark");
    }
}

submenuOpenBtn.addEventListener("click" , (e) => {
    submenuItem.classList.toggle('submenu_item--open')
    e.currentTarget.parentElement.classList.toggle('text-orange-300')
})

navOpenIcon.addEventListener("click" , (e) => {
    mobileNav.classList.remove('-right-64')
    mobileNav.classList.add('right-0')
    overlay.classList.remove('hidden')
})

navCloseBtn.addEventListener("click" , (e) => {
    mobileNav.classList.remove('right-0')
    mobileNav.classList.add('-right-64')
    overlay.classList.add('hidden')
})

overlay.addEventListener("click" , (e) => {
    mobileNav.classList.remove('right-0')
    mobileNav.classList.add('-right-64')
    cart.classList.remove('left-0')
    cart.classList.add('-left-64')
    overlay.classList.add('hidden')
})

cartIcon.addEventListener("click" , (e) => {
    cart.classList.remove('-left-64')
    cart.classList.add('left-0')
    overlay.classList.remove('hidden')
})

cartCloseBtn.addEventListener("click" , (e) => {
    cart.classList.remove('left-0')
    cart.classList.add('-left-64')
    overlay.classList.add('hidden')
})