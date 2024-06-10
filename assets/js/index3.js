import { animales } from "./animales.js";

export function getAnimalesCard(animales){
    let animalesRow = document.getElementById("animalesRow")

    return animales.map(function(animal){
        const animalCol = document.createElement("div");

        animalCol.classList.add(`col-xl-4`);
        animalCol.classList.add(`col-lg-4`);
        animalCol.classList.add(`col-md-4`);
        animalCol.classList.add(`col-sm-10`);
        animalCol.classList.add(`col-xs-10`);

        const card = document.createElement("div");

        card.classList.add("card");
        card.classList.add("mt-2");
        card.classList.add("mb-2");

        const imgCard = document.createElement("img")

        imgCard.src = animal.img
        imgCard.classList.add("card-img-top");
        imgCard.classList.add("mt-2");
        imgCard.classList.add("mx-auto");
        imgCard.classList.add("w-75");
        imgCard.style.width ="380px";
        imgCard.style.height = "400px";

        const divBody = document.createElement("div");

        
        divBody.classList.add("card-title");

        const title = document.createElement("h5");

        title.classList.add("card-title")
        title.textContent = animal.name
        title.style.textAlign = "center"

        const text = document.createElement("p");

        text.classList.add("card-text")
        text.textContent = `Raza: ${animal.raza}`;
        text.style.textAlign = "center" 
        
        const text2 = document.createElement("p");

        text2.classList.add("card-title");
        text2.textContent = `Edad: ${animal.edad}`;
        text2.style.textAlign = "center"

        const text3 = document.createElement("p");

        text3.classList.add("card-title");
        text3.textContent = `Sexo: ${animal.sexo}`;
        text3.style.textAlign = "center"

        const text4 = document.createElement("p");

        text4.classList.add("card-title");
        text4.textContent = `Tamaño: ${animal.tamaño}`;
        text4.style.textAlign = "center"


    

        const btnAdoptar = document.createElement(`button`);

        btnAdoptar.classList.add(`btn`)
        btnAdoptar.classList.add(`btn-danger`)
        btnAdoptar.textContent = 'Adoptar';
        btnAdoptar.style.textAlign = "center";
        btnAdoptar.style.margin = "auto";
        btnAdoptar.style.display = "flex"

        divBody.appendChild(title)
        

        divBody.appendChild(text)
        divBody.appendChild(text2)
        divBody.appendChild(text3)
        divBody.appendChild(text4)
        divBody.appendChild(btnAdoptar)

        card.appendChild(imgCard)
        card.appendChild(divBody)

        animalCol.appendChild(card)

        animalesRow.appendChild(animalCol)


    })
}