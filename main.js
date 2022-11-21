fetch('http://localhost:3000/cafes')
    .then(response => response.json())
    .then(function (wishes) {
        renderWishes(wishes);
    });

function renderWishes(wishes) {
    console.log(wishes);
    const ul = document.querySelector('ul#wishes');
    console.log(ul);
    for (let i = 0; i < wishes.length; i++) {
        const wish = wishes[i];
        console.log(wish);
        const li = document.createElement('li');
        li.innerHTML = `
            <p class="text">${wish.text}</p>
            <p class="price">${wish.price}</p>
        `;
        ul.appendChild(li);
    }

    // lave et loop
    // create element

}