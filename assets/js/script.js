// AOS
AOS.init();

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
    overlay.style.zIndex = '0'
    sideShoppingCart.style.display = 'block'
    setTimeout(() => {
        sideShoppingCart.style.opacity = '1'
        sideShoppingCart.style.right = '-3%'
    }, 100);
}

function closeShoppingCart() {
    overlay.style.zIndex = '-2'
    sideShoppingCart.style.opacity = '0'
    sideShoppingCart.style.right = '-100%'
    setTimeout(()=> sideShoppingCart.style.display = 'none', 300)
}

// Sleep Function
function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}


// Getting Products From API

// HTML stuff
const productsBox = document.querySelector('.productsBox')

// Getting Data From API
async function getData() {
    let response = await axios.get('http://localhost:3000/products')
    let data = response.data

    productsBox.innerHTML = ''

    // Create and place every product
    data.forEach(element => {
        let product = document.createElement('div')

        product.innerHTML = `
        <div class="product">
            <div class="productImgBox">
                <img class="productImg" src="${element.img}" alt="">
                <div class="addButtons">
                    <button class="addToCartBtn productBtn" onclick="AddToCart(${element.id})"><i class="fa-solid fa-bag-shopping"></i><span class="description">Add To Cart</span></button>
                    <button class="addToWishlistBtn productBtn"><i class="fa-solid fa-heart"></i><span class="description">Add To Wishlist</span></button>
                </div>
            </div>
            <div class="productTextBox">
                <h4 class="productName">${element.name}</h4>
                <h3 class="productPrice">$${element.price}</h3>
            </div>
        </div>
        `
        // Place product in productsBox
        productsBox.append(product)
    });

}

getData()


// AddToCart Function (Adds product to basket array in json)
async function AddToCart(productId) {
    let response = await axios.get(`http://localhost:3000/products/${productId}`)

    const product = response.data

    try {
        product.count = 1

        await axios.post(`http://localhost:3000/basket`, product)
    } catch (error) {
        alert('You have added this product before')
    }

}

// Getting product from API and adding to Shopping Cart in HTML

// HTML stuff
const shoppingCartProductBox = document.querySelector('.shoppingCartProductBox')
const productCountOnIcon = document.querySelector('.productCountOnIcon')

async function GetToShoppingCart() {
    let response = await axios.get('http://localhost:3000/basket')

    const data = response.data

    let count = 0

    data.forEach(element => {
        let product = document.createElement('div')

        product.innerHTML = `
        <div class="shoppingCartProduct">
            <img class="shoppingCartProductImg" src="${element.img}" alt="">
                <div class="shoppingCartProductInfoBox">
                    <div class="shoppingCartProductTitleBox">
                        <h3 class="shoppingCartProductName">${element.name}</h3>
                    <div class="shoppingCartProductDeleteBtn"><i class="fa-solid fa-xmark shoppingCartProductDeleteIcon" onclick="DeleteProduct(${element.id})"></i></div>
                </div>
                <div class="shoppingCartProductPrice">$${element.price*element.count}</div>
                <div class="shoppingCartProductCountBox">
                    <div class="decreaseCount" onclick="CountMinus(${element.id})"><i class="fa-solid fa-minus"></i></div>
                    <input type="number" onchange="ChangeCount(${element.id}, this.value)" class="shoppingCartProductCount" value="${element.count}">
                    <div class="increaseCount" onclick="CountPlus(${element.id})"><i class="fa-solid fa-plus"></i></div>
                </div>
            </div>
        </div>
        `
        shoppingCartProductBox.append(product)

        count += element.count

        productCountOnIcon.textContent = count

    });
}

GetToShoppingCart()

// Shopping Cart Product Delete Function

async function DeleteProduct(productId) {
    let response = await axios.delete(`http://localhost:3000/basket/${productId}`)

    getData()
}


// CountPlus Function

async function CountMinus(productId) {
    let response = await axios.get(`http://localhost:3000/basket/${productId}`)

    const product = response.data

    if (product.count === 1) {
        await axios.delete(`http://localhost:3000/basket/${productId}`)
    }
    else if(product.count > 1){
        product.count--
        await axios.put(`http://localhost:3000/basket/${productId}`, product)

    }

    getData()
}


// CountPlus Function

async function CountPlus(productId) {
    let response = await axios.get(`http://localhost:3000/basket/${productId}`)

    const product = response.data

    product.count++

    await axios.put(`http://localhost:3000/basket/${productId}`, product)

    getData()

}

// ChangeCount Function

async function ChangeCount(productId, value) {
    let response = await axios.get(`http://localhost:3000/basket/${productId}`)

    const product = response.data

    if (value < 1) {
        await axios.delete(`http://localhost:3000/basket/${productId}`)
    }
    else{
        product.count = +value

        await axios.put(`http://localhost:3000/basket/${productId}`, product)
    }

    getData()

}


// Calculating Subtotal

// HTML stuff
const subTotalPrice = document.querySelector('.subTotalPrice')

// CalculateSubtotal Function
async function CalculateSubtotal() {
    let response = await axios.get(`http://localhost:3000/basket/`)

    const data = response.data

    let subtotal = 0

    data.forEach(element => {
        subtotal += element.count*+element.price
    });

    subTotalPrice.textContent = `$${subtotal}`

}

CalculateSubtotal()



// Writeing And Deleting

// HTML stuff
const wrap = document.querySelector('.wrap')

// Words Array
const words = [' Technology', ' Meets Creativity']

let i = 0
let j = 0

let str = ''

// A function that adds word to wrap
function Add(str, j, cb) {
    const interval = setInterval(() => {
        if (str !== words[j]) {
            str += words[j][i]
            wrap.textContent = str
            // console.log(`${str} Add`);
            i++;
        }
        else if (str === words[j]) {
            i = 0
            // sleep(2000)
            cb(str, Add)
            clearInterval(interval);
        }
    }, 300);
}

// A function that removes the added word from wrap
function Remove(str, cb) {
    const interval = setInterval(() => {
        if (str === '') {
            clearInterval(interval)
            if (j === 0) {
                j = 1
                cb('', j, Remove)
            }
            else {
                j = 0
                cb('', j, Remove)
            }
        }
        str = str.slice(0, -1)
        wrap.textContent = str
        // console.log(`${str} Remove`);
    }, 200)
}

Add(str, j, Remove)

const playbtn=document.getElementById('playbtn')
const exitbtn=document.getElementById('exitbtn')
const video=document.getElementById('video')
playbtn.addEventListener('click',()=>{
  video.style.display="flex"
})
exitbtn.addEventListener('click',()=>{
  video.style.display="none"
})
const plusbtninfo=document.getElementById('plusbtninfo')
const plusbtncareer=document.getElementById('plusbtncareer')
const plusbtnlegal=document.getElementById('plusbtnlegal')
const infoul=document.getElementById('info_ul')
const careerul=document.getElementById('career_ul')
const legalul=document.getElementById('legal_ul')
const minusbtninfo=document.getElementById('minusbtninfo')
const minusbtncareer=document.getElementById('minusbtncareer')
const minusbtnlegal=document.getElementById('minusbtnlegal')
plusbtninfo.addEventListener('click',()=>{
  infoul.style.height="150px"
  minusbtninfo.style.display="block"
  plusbtninfo.style.display="none"
})
plusbtncareer.addEventListener('click',()=>{
  careerul.style.height="150px"
  minusbtncareer.style.display="block"
  plusbtncareer.style.display="none"
})
plusbtnlegal.addEventListener('click',()=>{
  legalul.style.height="150px"
  minusbtnlegal.style.display="block"
  plusbtnlegal.style.display="none"
})
minusbtninfo.addEventListener('click',()=>{
  infoul.style.height="0px"
 plusbtninfo.style.display="block"
 minusbtninfo.style.display="none"
})
minusbtncareer.addEventListener('click',()=>{
  careerul.style.height="0px"
  plusbtncareer.style.display="block"
  minusbtncareer.style.display="none"
})
minusbtnlegal.addEventListener('click',()=>{
  legalul.style.height="0px"
  plusbtnlegal.style.display="block"
  minusbtnlegal.style.display="none"
})

const Illustration = [
    "https://dt-aimax.myshopify.com/cdn/shop/files/tab-masonry3.jpg?v=1684147835&width=1500",
    "https://dt-aimax.myshopify.com/cdn/shop/files/tab-masonry2.jpg?v=1684148010&width=1500",
    "https://dt-aimax.myshopify.com/cdn/shop/files/tab-masonry4.jpg?v=1684148011&width=1500",
    "https://dt-aimax.myshopify.com/cdn/shop/files/tab-masonry1.jpg?v=1684148010&width=1500",
    "https://dt-aimax.myshopify.com/cdn/shop/files/tab-masonry5.jpg?v=1684148010&width=1500"
  ];
  
  const Animals = [
      "https://dt-aimax.myshopify.com/cdn/shop/files/home-tab-image-animal-1.jpg?v=1685531183&width=1500",
      "https://dt-aimax.myshopify.com/cdn/shop/files/home-tab-image-animal-5.jpg?v=1685531253&width=1500",
      "https://dt-aimax.myshopify.com/cdn/shop/files/home-tab-image-animal-2.jpg?v=1685531204&width=1500",
      "https://dt-aimax.myshopify.com/cdn/shop/files/home-tab-image-animal-3.jpg?v=1685531220&width=1500",
      "https://dt-aimax.myshopify.com/cdn/shop/files/home-tab-image-animal-4.jpg?v=1685531237&width=1500"
  ]
  
  const Architecture = [
      "https://dt-aimax.myshopify.com/cdn/shop/files/home-tab-image-architechture-1.jpg?v=1685531594&width=1500",
      "https://dt-aimax.myshopify.com/cdn/shop/files/home-tab-image-architechture-5.jpg?v=1685531659&width=1500",
      "https://dt-aimax.myshopify.com/cdn/shop/files/home-tab-image-architechture-2.jpg?v=1685531611&width=1500",
      "https://dt-aimax.myshopify.com/cdn/shop/files/home-tab-image-architechture-3.jpg?v=1685531625&width=1500",
      "https://dt-aimax.myshopify.com/cdn/shop/files/home-tab-image-architechture-4.jpg?v=1685531644&width=1500"
  ]
  
  const Robotics = [
      "https://dt-aimax.myshopify.com/cdn/shop/files/home-tab-image-game-1.jpg?v=1685531750&width=1500",
      "https://dt-aimax.myshopify.com/cdn/shop/files/home-tab-image-game-5.jpg?v=1685531813&width=1500",
      "https://dt-aimax.myshopify.com/cdn/shop/files/home-tab-image-game-2.jpg?v=1685531766&width=1500",
      "https://dt-aimax.myshopify.com/cdn/shop/files/home-tab-image-game-3.jpg?v=1685531782&width=1500",
      "https://dt-aimax.myshopify.com/cdn/shop/files/home-tab-image-game-4.jpg?v=1685531796&width=1500"
  ]
  
  const Animations = [
      "https://dt-aimax.myshopify.com/cdn/shop/files/home-tab-image-robotics-1.jpg?v=1685531836&width=1500",
      "https://dt-aimax.myshopify.com/cdn/shop/files/home-tab-image-robotics-5.jpg?v=1685531897&width=1500",
      "https://dt-aimax.myshopify.com/cdn/shop/files/home-tab-image-robotics-2.jpg?v=1685531852&width=1500",
      "https://dt-aimax.myshopify.com/cdn/shop/files/home-tab-image-robotics-3.jpg?v=1685531867&width=1500",
      "https://dt-aimax.myshopify.com/cdn/shop/files/home-tab-image-robotics-4.jpg?v=1685531882&width=1500"
  ]
  
  const img1 = document.querySelector(".img1")
  const img2 = document.querySelector(".img2")
  const img3 = document.querySelector(".img3")
  const img4 = document.querySelector(".img4")
  const img5 = document.querySelector(".img5")

  function addIllus() {
     img1.src = Illustration[0]
     img2.src = Illustration[1]
     img3.src = Illustration[2]
     img4.src = Illustration[3]
     img5.src = Illustration[4]  
  }
  function addAnimal() {
      img1.src = Animals[0]
      img2.src = Animals[1]
      img3.src = Animals[2]
      img4.src = Animals[3]
      img5.src = Animals[4]  
   }
   function addArch() {
      img1.src = Architecture[0]
      img2.src = Architecture[1]
      img3.src = Architecture[2]
      img4.src = Architecture[3]
      img5.src = Architecture[4]  
   }
   function addRobots() {
      img1.src = Robotics[0]
      img2.src = Robotics[1]
      img3.src = Robotics[2]
      img4.src = Robotics[3]
      img5.src = Robotics[4]  
   }
   function addAnimation() {
      img1.src = Animations[0]
      img2.src = Animations[1]
      img3.src = Animations[2]
      img4.src = Animations[3]
      img5.src = Animations[4]  
   }

