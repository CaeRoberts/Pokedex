
interface getPokemonTypes {
    limit: number;
    offset: number;
}

export const getPokemon = async(limit:Number, offset:Number|undefined) => {
    let url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
    try {

        const response = await fetch(url);
        return await response.json()
    } catch (error) {
        console.log(`Error: ${error}`);
    }
}


export const findPokemon = async (pokemon:string) => {
    let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    try {
        const response = await fetch(url)
        return await response.json()
    } catch (error) {
        console.log(`Error: ${error}`)
    }
}

export const getPokemonDetails = async (pokemon:string) => {
    let url = `https://pokeapi.co/api/v2/pokemon-species/${pokemon}`;
    try {
        const response = await fetch(url)
        return await response.json()
    } catch (error) {
        console.log(`Error: ${error}`)
    }
}

