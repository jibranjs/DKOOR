

export default function initmobilesearchproduct() {


    const mobInput = document.querySelector('.mbinputs');
    console.log(mobInput.value);
    const mobResults = document.querySelector('.mobResults');



    //  Search product when typing

    mobInput.addEventListener('input', () => {
        const inputsValue = mobInput.value.trim();
        if (!mobInput || !mobResults) {
            console.error('Search not found.');
            return;
        }

        if (inputsValue) {
            searchProducts(inputsValue, mobResults);
        } else {
            results.innerHTML = '';
        }

    });
}

//  Helper function

async function searchProducts(inputsValue, mobResults) {
    try {
        const response = await fetch(`https://dummyjson.com/products/search?q=${inputsValue}`);
        const data = await response.json();

        mobResults.innerHTML = '';

        if (data.products.length === 0) {
            mobResults.innerHTML = '<p class="text-center text-white text-xl">No Product Found.</p>';
            return;
        }
        mobResults.className = '';
        mobResults.classList.add('grid', 'grid-cols-1', 'gap-4', 'justify-center', 'items-center', 'p-4');



        data.products.forEach(product => {
            const mobProductCard = document.createElement('div');
            mobProductCard.className = 'border rounded p-3 bg-white  text-black shadow';

            mobProductCard.innerHTML = `
        <img src="${product.thumbnail}" alt="${product.title}" class="w-full  object-cover mb-2 rounded">
        <h3 class="font-semibold">${product.title}</h3>
        <p class="text-gray-700">Price: $${product.price}</p>
      `;

            mobResults.appendChild(mobProductCard);

        });

    } catch (error) {
        console.error('Search error:', error);
    }
}

