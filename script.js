
const homeNav =document.querySelector('.home')
const homeTab = document.querySelector('.homeTab')
const shopNav = document.querySelector('.shop')
const homeDropDown = document.querySelector('.homedropDown')

// DropDown :Home 

homeNav.addEventListener('mouseenter', ()=>{
    
    homeTab.classList.remove('hidden')
})
  homeDropDown.addEventListener("mouseleave", () => {
    homeTab.classList.add("hidden");
  });

//   DropDown :Shop












  fetch('https://dummyjson.com/products')

.then(res => res.json())
.then(data => console.log(data.products[0].thumbnail

))

// .catch(err => console.log(err))