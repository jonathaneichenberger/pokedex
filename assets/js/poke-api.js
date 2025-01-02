

const pokeApi = {}

// offset e limit recebidos como paramentros estão com valores para serem valores default, caso não seja passado nenhum parametro.
pokeApi.getPokemons = (offset = 0, limit = 10) => {

    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    
    return fetch(url)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results)
        .catch((error) => console.error(error))
}