// Imports

import initSearchComponent from './searchProducts.js';
import initmobilesearchproduct from './mobilesearchproduct.js';
import initsortproduct from './sortproducts.js';


const homeNav = document.querySelector('.home');
const homeTab = document.querySelector('.homeTab');
const homeDropDown = document.querySelector('.homedropDown');

const shopDropDown = document.querySelector('.shopdropdown');
const shopNav = document.querySelector('.shop');
const shopTab = document.querySelector('.shopTab');
const url = 'https://dummyjson.com/products'

// DropDown :Home 

homeNav.addEventListener('mouseenter', () => {

  homeTab.classList.remove('hidden');
})
homeDropDown.addEventListener("mouseleave", () => {
  homeTab.classList.add("hidden");
});

//   DropDown :Shop

shopNav.addEventListener('mouseenter', () => {
  shopTab.classList.remove('hidden');
})
shopDropDown.addEventListener("mouseleave", () => {
  shopTab.classList.add("hidden");
});

// Hamburger

const hamBurgericon = document.querySelector('.hamburgericon')
hamBurgericon.addEventListener('click', () => {
  const hamBurger = document.querySelector('.hamburger')
  hamBurger.classList.remove('hidden')
  const close = document.querySelector('.close')
  initmobilesearchproduct();
  close.addEventListener('click', () => {
    hamBurger.classList.add('hidden')
  })
})

initSearchComponent();



// Cart SideBar

const carts = document.querySelectorAll('.cart')
carts.forEach(cart => {

  cart.addEventListener('click', () => {
    const cartSidebar = document.querySelector('.cartSidebar')
    cartSidebar.classList.remove('hidden')
    const closeSidebar = document.querySelector('.closeCart')
    closeSidebar.addEventListener('click', () => {
      cartSidebar.classList.add('hidden')
    })
  })
})

// Various Products

async function variousProduct() {
  const response = await fetch(`${url}?limit=4`)
  const data = await response.json()
  const newProductsContainer = document.querySelector('.product-container');

  data.products.forEach(product => {

    const discountedPrice = (
      product.price - (product.price * product.discountPercentage / 30)
    ).toFixed(2);

    const productDiv = document.createElement('div');

    productDiv.setAttribute('class', 'product hover:shadow-xl p-6 border flex flex-col rounded-md  mb-4');

    productDiv.innerHTML = `<div class="relative text-white rounded-lg"> <img src="${product.thumbnail}" alt="${product.title}" class="w-full hvr-grow-shadow object-cover"><p class="absolute top-0 right-0 bg-[#EB6F25] text-white text-xs font-bold px-3 py-1 rounded-full">${discountedPrice} %</p></div>

  <div class="flex flex-col justify-end pb-3">

        <h2 class="font-bold text-[#333] text-md lg:text-lg mb-2">${product.title}</h2>

        <div class="flex gap-2 justify-start items-center">
        <p class="text-[#333]  text-sm line-through leading-tight">(${discountedPrice}%)</p>

        <p class="text-[#eb6f25] lg:text-xl font-semibold">$${product.price}</p>
        </div><div class="flex flex-col justify-end"> <button class="text-white py-2 px-4 rounded bg-[#EB6F25] mt-4"><iconify-icon icon="vaadin:cart-o" width="24" height="24"
                    class="cart align-sub pr-2"></iconify-icon></button></div></div>`;
    newProductsContainer.appendChild(productDiv);
  });
}
variousProduct();


// featured-collection

async function featuredproduct() {

  const response = await fetch(url)
  const data = await response.json()
  const featuredproducts = data.products;
  const randomfeaturedProducts = featuredproducts.sort(() => Math.random(4) - 0.5).slice(0, 8);

  const featuredCollections = document.querySelector('.featured-collection')


  randomfeaturedProducts.forEach(product => {

    const discountedPrice = 10
    const productDiv = document.createElement('div');

    productDiv.setAttribute('class', 'product border rounded-md hover:shadow-xl    mb-4 ');

    productDiv.innerHTML = `<div class="relative text-white rounded-lg pb-2"> <img src="${product.thumbnail}" alt="${product.title}" class="w-full bg-[#FFFBF5]  object-cover "><p class="absolute p-2  top-3 right-2 bg-[#EB6F25] text-white text-xs font-bold  rounded-full">${discountedPrice} %</p></div>

<div class="flex flex-col justify-end pb-2 px-4">
        <h2 class="font-bold text-[#333] px-4 py-4 text-lg overflow-visible  mb-1 whitespace-normal">${product.title}</h2>

        <div class="flex gap-2 justify-start px-4 ">
        <p class="text-[#333] line-through text-sm leading-tight ">(${discountedPrice}%)</p>
        <p class="text-[#eb6f25] text-xl font-semibold">$${product.price}</p>
        </div><div class="flex flex-col justify-end"><button class="text-white py-2 px-4 rounded bg-[#EB6F25] mt-2"><iconify-icon icon="vaadin:cart-o" width="24" height="24"
                    class="cart align-sub pr-2"></iconify-icon></button></div></div>`;
    featuredCollections.appendChild(productDiv);
  });
};

featuredproduct()
initsortproduct()


// Best Sales


async function bestsales() {
  const response = await fetch(url)
  const data = await response.json()
  const products = data.products;
  const randomProducts = products.sort(() => Math.random() - 0.5).slice(0, 4);

  randomProducts.forEach(product => {
    const discountedPrice = (
      product.price - (product.price * product.discountPercentage / 30)
    ).toFixed(2);
    const bestSelling = document.querySelector('.best-sales')
    const discountDiv = document.createElement('div')
    discountDiv.setAttribute('class', 'w-[350px]')
    discountDiv.classList.add('flex', 'items-center')
    discountDiv.innerHTML = `<img src="${product.thumbnail}" alt="${product.title}" class="w-[150px] bg-[#F5FFF7]  object-cover mt-2"> <div class="flex flex-col gap-3 ml-2"> <h2 class="font-semibold">${product.title}</h2> <p class="text-[#eb6f25] text-xl font-semibold">$${product.price}</p><p  class="text-[#333] line-through text-sm leading-tight ">(${discountedPrice}%)</p><div class="flex gap-2"><iconify-icon icon="streamline-ultimate:search-circle" width="28" height="28" class="hover:text-white text-[#757575] hover:bg-[#EB6F25] rounded-full outline-none" ></iconify-icon><iconify-icon icon="teenyicons:heart-circle-outline" width="28" height="28"   class="hover:text-white text-[#757575] hover:bg-[#EB6F25] rounded-full outline-none"></iconify-icon><iconify-icon icon="hugeicons:recycle-03" width="20" height="20"class="text-[#757575] cursor-pointer rounded-full border-2 border-[#757575] p-[2px]  outline-none"></iconify-icon></div>
        </div>`

    bestSelling.appendChild(discountDiv)

  });
}
bestsales();

// Top Rated


async function topRated() {
  const response = await fetch(url)
  const data = await response.json()

  const topRatedPRoducts = data.products;
  const randomTopRatedProducts = topRatedPRoducts.sort(() => Math.random(4) - 0.5).slice(0, 4);

  randomTopRatedProducts.forEach(product => {
    const discountedPrice = (
      product.price - (product.price * product.discountPercentage / 30)
    ).toFixed(2);

    const topRated = document.querySelector('.top-rated')
    const ratedDiv = document.createElement('div')
    ratedDiv.setAttribute('class', 'w-[350px]')
    ratedDiv.classList.add('flex', 'items-center')
    ratedDiv.innerHTML = `<img src="${product.thumbnail}" alt="${product.title}" class="w-[150px] bg-[#F6FCFE] object-cover mt-2"> <div class="flex flex-col gap-3 ml-3"> <h2 class="font-semibold">${product.title}</h2> <p class="text-[#eb6f25] text-xl font-semibold">$${product.price}</p><p  class="text-[#333] line-through text-sm leading-tight ">(${discountedPrice}%)</p><div class="flex gap-2"><iconify-icon icon="streamline-ultimate:search-circle" width="28" height="28" class="hover:text-white text-[#757575] hover:bg-[#EB6F25] rounded-full outline-none" ></iconify-icon><iconify-icon icon="teenyicons:heart-circle-outline" width="28" height="28"   class="hover:text-white text-[#757575] hover:bg-[#EB6F25] rounded-full outline-none"></iconify-icon><iconify-icon icon="hugeicons:recycle-03" width="24" height="24"class="text-[#757575] cursor-pointer rounded-full outline-none"></iconify-icon></div>
        </div>`
    topRated.appendChild(ratedDiv)


  });
};
topRated();

featuredBlogs()
  .catch(err => console.error('Error fetching products:', err));
