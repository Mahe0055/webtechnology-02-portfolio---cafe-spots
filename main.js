
fetch('http://localhost:3000/cafes')
    .then(response => response.json())
    .then(function (cafeer) {
        renderCafeer(cafeer);
    });
function renderCafeer(cafeer) {
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



fetch('http://localhost:3000/Discribtion')
    .then(response => response.json())
    .then(function (Discribtion) {
        renderDiscribtion(Discribtion);
    });

function renderDiscribtion(Discribtion) {
    console.log(Discribtion);
    const ul = document.querySelector('ul#Discribtion');
    console.log(ul);
    for (let i = 0; i < Discribtion.length; i++) {
        const disc = Discribtion[i];
        console.log(disc);
        const li = document.createElement('li');
        li.innerHTML = `
            <p class="text">${disc.Cafe_size}</p> 
            <p class="text">${disc.Wifi}</p>        
`;
        ul.appendChild(li);
    }

}