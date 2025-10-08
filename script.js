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
hamBurgericon.addEventListener('click',()=>{
    const hamBurger = document.querySelector('.hamburger')
    hamBurger.classList.remove('hidden')
    const close = document.querySelector('.close')
    close.addEventListener('click',()=>{
      hamBurger.classList.add('hidden')
    })  
})

const searchIcon = document.querySelector('.searchicon')
searchIcon.addEventListener('click', ()=>{
  const search = document.querySelector('.Search')
  search.classList.remove('hidden')
  const closeSearch = document.querySelector('.closeSearch')
  closeSearch.addEventListener('click',()=>{
    search.classList.add('hidden')
  })
})

// Cart SideBar

const carts = document.querySelectorAll('.cart')
carts.forEach(cart => {

cart.addEventListener('click',()=>{
  const cartSidebar = document.querySelector('.cartSidebar')
  cartSidebar.classList.remove('hidden')
  const closeSidebar = document.querySelector('.closeCart')
  closeSidebar.addEventListener('click',()=>{
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

    productDiv.setAttribute('class', 'product border flex flex-col justify-end rounded-md p-4 mb-4 w-full');

    productDiv.innerHTML = ` <img src="${product.thumbnail}" alt="${product.title}" class="w-full hvr-grow-shadow object-cover mt-2">

        <h2 class="font-bold text-[#333] text-md lg:text-lg mb-2">${product.title}</h2>

        <div class="flex gap-2 justify-start">
        <p class="text-[#333]  text-sm line-through leading-tight">(${discountedPrice}%)</p>

        <p class="text-[#eb6f25] lg:text-xl font-semibold">$${product.price}</p>
        </div>`;
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

const discountedPrice = (
      product.price - (product.price * product.discountPercentage / 30)
    ).toFixed(2);
      const productDiv = document.createElement('div');

      productDiv.setAttribute('class', 'product border rounded-md  mb-4 w-[250]');

      productDiv.innerHTML = ` <img src="${product.thumbnail}" alt="${product.title}" class="w-full bg-[#FFFBF5]  object-cover ">

        <h2 class="font-bold text-[#333] px-4 py-4 text-lg mb-2">${product.title}</h2>

        <div class="flex gap-2 justify-start px-4 pb-4">
        <p class="text-[#333] line-through text-sm leading-tight ">(${discountedPrice}%)</p>

        <p class="text-[#eb6f25] text-xl font-semibold">$${product.price}</p>
        </div>`;
      featuredCollections.appendChild(productDiv);
    });
  }
  featuredproduct()


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
      discountDiv.innerHTML = `<img src="${product.thumbnail}" alt="${product.title}" class="w-[150px] bg-[#F5FFF7]  object-cover mt-2"> <div class="flex flex-col gap-3 ml-2"> <h2 class="font-semibold">${product.title}</h2> <p class="text-[#eb6f25] text-xl font-semibold">$${product.price}</p><p  class="text-[#333] line-through text-sm leading-tight ">(${discountedPrice}%)</p><div class="flex gap-2"><iconify-icon icon="streamline-ultimate:search-circle" width="28" height="28" class="hover:text-white text-[#757575] hover:bg-[#EB6F25] rounded-full outline-none" ></iconify-icon><iconify-icon icon="teenyicons:heart-circle-outline" width="28" height="28"   class="hover:text-white text-[#757575] hover:bg-[#EB6F25] rounded-full outline-none"></iconify-icon><iconify-icon icon="hugeicons:recycle-03" width="24" height="24"class="text-[#757575] cursor-pointer rounded-full outline-none"></iconify-icon></div>
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
  topRated()

  // Featured Blogs 


  async function featuredBlogs() {
    const response = await fetch(`${url}?limit=3`)
  const data = await response.json()
  const blogs = document.querySelector('.blogs')
  blogs.forEach(blog =>{
    const blogs = document.querySelector('.blogs')
    bo
  })
  

  };
featuredBlogs()
  .catch(err => console.error('Error fetching products:', err));
