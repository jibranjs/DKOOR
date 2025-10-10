export default function initsortproduct() {

    const sortBtn = document.querySelector('.sortbtn');
    const sortMenu = document.querySelector('.sortMenu');
    const sortOptions = document.querySelectorAll('.sortoption')

    sortBtn.addEventListener('click', () => {
        sortMenu.classList.toggle('hidden')
    });

    sortOptions.forEach(option => {
        option.addEventListener('click', () => {
            const opt = option.textContent
            sortingproducts(opt)

            async function sortingproducts() {
                const response = await fetch(`https://dummyjson.com/products?limit=8&sortBy=title&order=${opt}`);

                const data = await response.json()
                const featuredCollections = document.querySelector('.featured-collection');
                featuredCollections.innerHTML = ''; 

                data.products.forEach(product => {

                    const discountedPrice = 10
                    const pro = document.createElement('div');

                    pro.setAttribute('class', 'product border rounded-md  mb-4 ');

                    pro.innerHTML = `<div class="relative text-white rounded-lg"> <img src="${product.thumbnail}" alt="${product.title}" class="w-full bg-[#FFFBF5]  object-cover "><p class="absolute   top-3 right-2 bg-[#EB6F25] text-white text-xs font-bold px-3 py-1 rounded-full">${discountedPrice} %</p></div>

<div class=" flex flex-col justify-end pb-3 px-4">
        <h2 class="font-bold text-[#333] px-4 py-4 text-lg mb-2">${product.title}</h2>

        <div class="flex gap-2 justify-start px-4 pb-4">
        <p class="text-[#333] line-through text-sm leading-tight ">(${discountedPrice}%)</p>
        <p class="text-[#eb6f25] text-xl font-semibold">$${product.price}</p>
        </div><div class="flex flex-col justify-end"> <button class="text-white py-2 px-4 rounded bg-[#EB6F25] mt-4"><iconify-icon icon="vaadin:cart-o" width="20" height="20"
                    class="cart align-sub pr-2"></iconify-icon><span class="lg:block hidden">Add to Cart</span></button></div></div>`;
                    featuredCollections.appendChild(pro);
                })
            }
        })
    })
}