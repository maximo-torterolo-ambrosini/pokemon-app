import fetchPokemon from "./req.mjs";
import { card } from "./card.mjs";

const MAX_POKEMON = 151;
let counter = 2;

document.addEventListener('DOMContentLoaded', async () => {
    await card.loadTemplate();
    for (counter; counter < 14; counter++) {
        await card.generateCard(await fetchPokemon(counter));
    }
})

const loadPokemon = async num => {
    if (counter != MAX_POKEMON) {
        if (counter + num > MAX_POKEMON + 1) {
            const dif = counter + num - MAX_POKEMON + 1;
            num -= dif;
            observer.unobserve(document.querySelector('footer'));
        }

        for (let i = 0; i < num; i++) {
            await card.generateCard(await fetchPokemon(counter));
            counter++;
        }
    } else return;
}

const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
        loadPokemon(3);
    }
});

observer.observe(document.querySelector('footer'));
