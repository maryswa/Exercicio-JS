//Selecionando a div pokeContainer
const pokeContainer = document.getElementById('pokeContainer');
const pokemonCont = 100;

//Função que percorre o objeto do fetch
const fetchPokemon = async() =>{
    for(let i=1; i < pokemonCont; i++){
        await getPokemons(i);
    }
}


//Buscado os pokemons pelo fecth
const getPokemons = async(id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const data =await res.json();
    console.log(data.name);
    createPokemonCard(data);
}

//Criando os cards dinâmicamente
const createPokemonCard = (poke) =>{
    const card = document.createElement('div');
    card.classList.add('pokemon');

    //Inserindo os elementos do card
    const name = poke.name[0] + poke.name.slice(1);
    const id = poke.id.toString();
    const type = poke.types[0].type.name;

    //crindo o card 
    const pokemonInnerHtml =` 
     <div class="imagemContainer">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${poke.id}.png
            " alt="">
            </div>
             <div class="info">
              <span class="number">#${id}</span>
              <h3 class="name">${name}</h3>
              <small class="type">Tipo: <span>${type}</span></small>
            </div>
    `
    card.innerHTML = pokemonInnerHtml;
    pokeContainer.appendChild(card);
}


fetchPokemon();

