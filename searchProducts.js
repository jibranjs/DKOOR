// SearchComponent.js

export default function initSearchComponent() {

  const searchIcon = document.querySelector('.searchicon');
  const search = document.querySelector('.Search');
  const closeSearch = document.querySelector('.closeSearch');
  const searchInput = document.querySelector('.searchInput');
  const results = document.querySelector('.results');
 

  //  Open search modal

  searchIcon.addEventListener('click', () => {
    search.classList.remove('hidden');
  });

  //  Close search modal

  closeSearch.addEventListener('click', () => {
    search.classList.add('hidden');
    results.innerHTML = '';
    searchInput.value = '';
  });

  //  Search product when typing

  searchInput.addEventListener('input', () => {
    const inputs = searchInput.value.trim();

    if (inputs) {
      searchProducts(inputs, results);
    } else {
      results.innerHTML = '';
    }
  });
}

//  Helper function

async function searchProducts(inputs, results) {
  try {
    const response = await fetch(`https://dummyjson.com/products/search?q=${inputs}`);
    const data = await response.json();

    results.innerHTML = '';

    if (data.products.length === 0) {
      results.innerHTML = '<p class="text-center text-white text-xl">No Product Found.</p>';
      return;
    }
    results.className = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-center items-center p-4';

    data.products.forEach(product => {
      const productCard = document.createElement('div');
      productCard.className = 'border rounded p-3 bg-white  text-black shadow';

      productCard.innerHTML = `
        <img src="${product.thumbnail}" alt="${product.title}" class="w-full  object-cover mb-2 rounded">
        <h3 class="font-semibold">${product.title}</h3>
        <p class="text-gray-700">Price: $${product.price}</p>
      `;

      results.appendChild(productCard);

    });

  } catch (error) {
    console.error('Search error:', error);
  }
}

