/*
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
 */

/*
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
 */

/*
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
 */

/*
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
 */




//søgefelt hvor man kan søge efter cafeer
function inputElement(inputText) {
    const listUnderInput = document.querySelector("#cafeNames");
    listUnderInput.innerHTML = "";
    if (inputText.trim()) { // Findes inputText
        fetch('http://localhost:3000/cafes')
            .then(response => response.json())
            .then(cafeer => {
                for (let i = 0; i < cafeer.length; i++) {
                    if (cafeer[i].Cafees_name.toLowerCase().match(inputText.toLowerCase())) {
                        let listOfCafeNames = document.createElement("li");
                        listOfCafeNames.innerHTML = cafeer[i].Cafees_name + ", " + cafeer[i].Address;
                        listUnderInput.appendChild(listOfCafeNames);
                    }
                }
            })
    }
}


// data bliver forbundet med input felterne på html
const button = document.querySelector("#button");
console.log()
button.addEventListener('click', function (event) {
    event.preventDefault();

    fetch('http://localhost:3000/cafeNames')
        .then(response => response.json())
        .then(function (cafeSize) {
            renderCafeSize(cafeSize);
        })
});

function renderCafeSize(cafeer) {
    const searchResults = document.querySelector("#searchResultList");
    searchResults.innerHTML = ""; //

    let cafeSizeDropDown = document.getElementById("cafeSize");
    let chosenSize = cafeSizeDropDown.options[cafeSizeDropDown.selectedIndex].value;

    let cafePriceDropDown = document.getElementById("priceRange");
    let chosenPrice = cafePriceDropDown.options[cafePriceDropDown.selectedIndex].value;



    let cafeLightDropDown = document.getElementById("lightning_level");
    let chosenLight = cafeLightDropDown.options[cafeLightDropDown.selectedIndex].value;

    let cafeSoundDropDown = document.getElementById("sound_level");
    let chosenSound = cafeSoundDropDown.options[cafeSoundDropDown.selectedIndex].value;

    let chosenWifi
    if(document.querySelector("#wifiYes").checked === true) {
        chosenWifi = 1
    }
    else {
        chosenWifi = 0
    }

    let chosenStudyDiscount
    if(document.querySelector("#studyDiscountYes").checked === true) {
        chosenStudyDiscount = 1
    }
    else {
        chosenStudyDiscount = 0
    }

    for (let i = 0; i < cafeer.length; i++) {
        if (cafeer [i].Cafe_size === chosenSize
            && cafeer[i].Price_range === chosenPrice
            && cafeer[i].Lightning_level === chosenLight
            && cafeer[i].Sound_level === chosenSound
            && cafeer[i].Wifi === chosenWifi
            && cafeer[i].Study_discount === chosenStudyDiscount){
            const size = cafeer[i];
            console.log(size);
            const li = document.createElement('li');
            li.innerHTML = `
            <p class="text">${size.Cafees_name}</p>`;

            searchResults.appendChild(li);
        }
    }

}
