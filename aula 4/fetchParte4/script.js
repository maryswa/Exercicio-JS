//criando a funçao fetch psquisar

 async function fatchPokemon(){
    try {
        const pokemonID = document.getElementById('pokemonID').value
        if(pokemonID == ''){
           alert('Digite um ID valid');
           throw new Error('ID invalido');
        }
    const pokemonNome = document.getElementById('pokemonNome');
    const pokemonType = document.getElementById('pokemonType');
    
    const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonID}`);
         if(!resp.ok){
            throw new Error('Pokemon nao encontrado');
         } else{
            const data = await resp.json();
            console.log(data);
            const pokemonSprite = data.sprites.front_default;
            const imgElemento = document.getElementById('pokemonSprite');

            const pokemonNomeData = data.name.toUpperCase();
            const pokemonTypeData = data.types[0].type.name;
            

            // setando os elementos data no HTML
            imgElemento.src = pokemonSprite;
            imgElemento.style.display = 'block';

            pokemonNome.innerHTML = pokemonNomeData;
            pokemonType.innerHTML = pokemonTypeData;
         }

    } catch (error) {
        console.log(error);
    }
 }