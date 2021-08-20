import fetchPokemon from "./req.mjs";

const generateCard = async (pokemon) => {
    const container = document.querySelector('.container');
    const template = document.getElementById('template');
    const clone = template.cloneNode(true);
    const fragment = document.createDocumentFragment();

    setValues(clone, pokemon);

    fragment.appendChild(clone);
    container.appendChild(fragment);
}

const loadTemplate = async () => {
    try {
        const template = await fetch('template/card.html');
        const container = document.querySelector('.container');
        container.innerHTML = await template.text();

        const pokemon = await fetchPokemon(1);
        const card = document.getElementById('template');
        setValues(card, pokemon);
    } catch (err) {
        console.error(err);
    }
}

const setValues = async (HTMLElement, pokemon) => {
    let types = "";
    HTMLElement.querySelector('.img').setAttribute('src', 'img/pokeball.gif');
    HTMLElement.querySelector('.img').setAttribute('alt', 'Loading...');
    
    HTMLElement.querySelector('#name').innerHTML = pokemon.name;
    HTMLElement.querySelector('#order').innerHTML = pokemon.order;
    HTMLElement.querySelector('#HP').innerHTML = pokemon.HP;
    HTMLElement.querySelector('#attack').innerHTML = pokemon.attack;
    HTMLElement.querySelector('#defense').innerHTML = pokemon.defense;

    HTMLElement.querySelector('.img').setAttribute('src', pokemon.photo);
    HTMLElement.querySelector('.img').setAttribute('alt', pokemon.name);

    if (pokemon.types.length == 2) {

        types = pokemon.types[0].type.name + ' & ' + pokemon.types[1].type.name;
    } else {
        types = pokemon.types[0].type.name;
    }

    HTMLElement.querySelector('#types').innerHTML = types;
}



export const card = {
    "generateCard": generateCard,
    "loadTemplate": loadTemplate,
};
