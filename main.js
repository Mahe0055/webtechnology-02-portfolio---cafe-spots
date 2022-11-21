fetch('http://localhost:3000/cafes')
    .then(response => response.json())
    .then(function (cafeer) {
        renderWishes(cafeer);
    });

function renderWishes(cafeer) {
    console.log(cafeer);
    const ul = document.querySelector('ul#cafeer');
    console.log(ul);
    for (let i = 0; i < cafeer.length; i++) {
        const cafe = cafeer[i];
        console.log(cafe);
        const li = document.createElement('li');
        li.innerHTML = `
            <p class="text">${cafe.Cafees_name}</p>
        `;
        ul.appendChild(li);
    }
    
}