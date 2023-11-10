// Toggle Icon Fucntion

// HTML stuff
const overlay = document.querySelector('.overlay')
const toggleIcon = document.querySelector('.toggleIcon')
const sideNavContainer = document.querySelector('.sideNavContainer')

function openSideNav() {
    sideNavContainer.style.left = '0px'
    overlay.style.zIndex = '0'
}

// Side Nav Close Button Function

// HTML stuff
const sideNavCloseBtn = document.querySelector('.sideNavCloseBtn')

function closeSideNav() {
    sideNavContainer.style.left = '-400px'
    overlay.style.zIndex = '-2'
}

// Side Shop SubNav Opening and Closing

// HTML stuff
const sideShopSubNav = document.querySelector('.sideShopSubNav')
const sideNavShop = document.querySelector('.sideNavShop')
const shopNavTitle = document.querySelector('.shopNavTitle')

function openShop() {
    sideShopSubNav.style.right = '0px'
}

function closeShop() {
    sideShopSubNav.style.right = '-400px'
}


// Side Pages SubNav Opening and Closing

// HTML stuff
const sidePagesSubNav = document.querySelector('.sidePagesSubNav')
const sideNavPages = document.querySelector('.sideNavPages')
const pagesNavTitle = document.querySelector('.pagesNavTitle')

function openPages() {
    sidePagesSubNav.style.right = '0px'
}

function closePages() {
    sidePagesSubNav.style.right = '-400px'
}

// Shopping Cart Opening and Closing

// HTML stuff
const sideShoppingCart = document.querySelector('.sideShoppingCart')
const shoppingBag = document.querySelector('.shoppingBag')
const shoppingCartCloseBtn = document.querySelector('.shoppingCartCloseBtn')

function openShoppingCart() {
    sideShoppingCart.style.right = '0px'
}

function closeShoppingCart() {
    sideShoppingCart.style.right = '-400px'
}


