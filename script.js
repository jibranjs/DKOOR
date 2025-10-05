
const homeNav = document.querySelector('.home')
const homeTab = document.querySelector('.homeTab')
const homeDropDown = document.querySelector('.homedropDown')

const shopDropDown = document.querySelector('.shopdropdown')
const shopNav = document.querySelector('.shop')
const shopTab = document.querySelector('.shopTab')


// DropDown :Home 

homeNav.addEventListener('mouseenter', () => {

  homeTab.classList.remove('hidden')
})
homeDropDown.addEventListener("mouseleave", () => {
  homeTab.classList.add("hidden");
});

//   DropDown :Shop

shopNav.addEventListener('mouseenter', () => {

  shopTab.classList.remove('hidden')
})
shopDropDown.addEventListener("mouseleave", () => {
  shopTab.classList.add("hidden");
});

// Product Listing

fetch('https://dummyjson.com/products?limit=4')
  .then(res => res.json())
  .then(data => {

    const newProductsContainer = document.querySelector('.product-container')

    data.products.forEach(product => {

      const productDiv = document.createElement('div');

      productDiv.setAttribute('class', 'product border rounded-md p-4 mb-4 w-[250]');

      productDiv.innerHTML = ` <img src="${product.thumbnail}" alt="${product.title}" class="w-full hvr-grow-shadow object-cover mt-2">

        <h2 class="font-boldtext-[#333] text-lg mb-2">${product.title}</h2>

        <div class="flex gap-2 justify-start">
        <p class="text-[#333]  text-sm leading-tight ">$19.99</p>

        <p class="text-[#eb6f25] text-xl font-semibold">$${product.price}</p>
        </div>`;
      newProductsContainer.appendChild(productDiv);
    });  

  });
   fetch('https://dummyjson.com/products?limit=8')
  .then(res => res.json())
  .then(data => {
     // featured-collection

    const featuredCollections = document.querySelector('.featured-collection')


    data.products.forEach(product => {

      const productDiv = document.createElement('div');

      productDiv.setAttribute('class', 'product border rounded-md p-4 mb-4 w-[250]');

      productDiv.innerHTML = ` <img src="${product.thumbnail}" alt="${product.title}" class="w-full hvr-grow-shadow object-cover mt-2">

        <h2 class="font-bold text-[#333] text-lg mb-2">${product.title}</h2>

        <div class="flex gap-2 justify-start">
        <p class="text-[#333] line-through text-sm leading-tight ">$19.99</p>

        <p class="text-[#eb6f25] text-xl font-semibold">$${product.price}</p>
        </div>`;
      featuredCollections.appendChild(productDiv);
    });
  })


    fetch('https://dummyjson.com/products?')
  .then(res => res.json())
  .then(data => {
  //  Discount

  data.product.forEach(product =>{
     const discountContainer = document.querySelector('.discount-container') 
    const DiscountDiv = document.createElement('div')
    DiscountDiv.setAttribute('class','p-6')
    DiscountDiv.innerHTML = `<img src="${product.thumbnail}" alt="${product.title}" class="w-full hvr-grow-shadow object-cover mt-2"> <div> <h2>${product.title}</h2> <p class="text-[#eb6f25] text-xl font-semibold">$${product.price}</p>
        </div>`
        discountContainer.appendChild(DiscountDiv)
  })
   

  })
  .catch(err => console.error('Error fetching products:', err));
