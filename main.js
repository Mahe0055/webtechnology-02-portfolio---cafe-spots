//Render cafeer
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

//Render samtale cafeer - big
fetch('http://localhost:3000/cafeNames')
    .then(response => response.json())
    .then(function (bigCafes) {
        renderDiscribtion(bigCafes);
    });

function renderBigCafes(bigCafes) {
    console.log(bigCafes);
    const ul = document.querySelector('ul#bigCafes');
    console.log(ul);
    for (let i = 0; i < bigCafes.length; i++) {
        if (bigCafes [i].Cafe_size === "big") {
            const big = bigCafes[i];
            console.log(big);
            const li = document.createElement('li');
            li.innerHTML = `
            <p class="text">${big.Cafees_name}</p> 
            <p class="text">${big.Cafe_size}</p> 
            <p class="text">${big.Wifi}</p>`;

            ul.appendChild(li);
        }
    }

}

//Render mellem cafeer - medium
fetch('http://localhost:3000/cafeNames')
    .then(response => response.json())
    .then(function (mediumCafes) {
        renderMediumCafes(mediumCafes);
    });

function renderMediumCafes(mediumCafes) {
    console.log(mediumCafes);
    const ul = document.querySelector('ul#mediumCafes');
    console.log(ul);
    for (let i = 0; i < mediumCafes.length; i++) {
        if (mediumCafes [i].Cafe_size === "medium") {
            const medium = mediumCafes[i];
            const li = document.createElement('li');
            li.innerHTML = `
            <p class="text">${medium.Cafees_name}</p> 
            <p class="text">${medium.Cafe_size}</p> 
            <p class="text">${medium.Wifi}</p>`;

            ul.appendChild(li);
        }
    }

}

//Render stille cafeer - small
fetch('http://localhost:3000/cafeNames')
    .then(response => response.json())
    .then(function (smallCafes) {
        renderBigCafes(smallCafes);
    });

function renderDiscribtion(smallCafes) {
    console.log(smallCafes);
    const ul = document.querySelector('ul#smallCafes');
    console.log(ul);
    for (let i = 0; i < smallCafes.length; i++) {
        if (smallCafes [i].Cafe_size === "small") {
            const small = smallCafes[i];
            console.log(small);
            const li = document.createElement('li');
            li.innerHTML = `
            <p class="text">${small.Cafees_name}</p> 
            <p class="text">${small.Cafe_size}</p> 
            <p class="text">${small.Wifi}</p>`;

            ul.appendChild(li);
        }
    }

}

//søgefelt hvor man kan søge efter adresser
function inputElement(inputText) {
    const listUnderInput = document.querySelector("#cafeAddress");
    listUnderInput.innerHTML = "";
    if(inputText.trim()) { // Findes inputText
        fetch('http://localhost:3000/cafes')
            .then(response => response.json())
            .then(cafeer => {
                for (let i = 0; i < cafeer.length; i++) {
                    if (cafeer[i].Address.toLowerCase().match(inputText.toLowerCase())) {
                        let listOfAddress = document.createElement("li");
                        listOfAddress.innerHTML = cafeer[i].Address + ", " + cafeer[i].Cafees_name;
                        listUnderInput.appendChild(listOfAddress);
                    }
                }
            })
    }
}