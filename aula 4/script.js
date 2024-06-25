//Realizando o Fatch no endpoint


const pegaPokemon = async () =>{
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const res =  await fatch(url)
    const data = await res.json()
    console.log(data.name);
}

const fatchPokemon = async () =>{
    for(let i = 1; i <= 100; i++){
        await pegaPokemon(i)
    }
}
//Percorrenfo os 100 perimeiros pokemons
const pegaPokemon = async () =>{
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const res =  await fatch(url)
    const data = await res.json()
    //console.log(data.name);
    console.log(data.types[0].type.name);
}
fatchPokemon();



pegaPokemon();