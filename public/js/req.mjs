const fetchPokemon = async (id) => {
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const pokemon = await res.json();
        const pokeObject = {
            "photo": pokemon.sprites.other["official-artwork"].front_default,
            "name": pokemon.name,
            "order": pokemon.id,
            "HP": pokemon.stats[0].base_stat,
            "attack": pokemon.stats[1].base_stat,
            "defense": pokemon.stats[2].base_stat,
            "types": pokemon.types
        }
        return pokeObject;
    } catch (err) {
        console.error(err);
    }
}

export default fetchPokemon;