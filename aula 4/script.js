//Fatch Teste 01 Esctudando as Promises 

//const req = fatch('https://pokeapi.co/api/v2/pokemon/pikachu');
//console.log(req);

//Fatch Teste 02 Resolvendo a Promise
// fatch('https://pokeapi.co/api/v2/pokemon/pikachu')
 //.then(resp => console.log(resp))
 //.catch(error => console.log(error))

// Fatch Teste 03 convertendo a resposta em JSON
//fatch('https://pokeapi.co/api/v2/pokemon/pikachu')
//.then(resp => resp.json())
//.then(data => console.log(data))
//.catch(error => console.log(error));

// Fatch Teste 03 convertendo a resposta em JSON
//fatch('https://pokeapi.co/api/v2/pokemon/1')
//.then(resp => resp.json())
//.then(data => console.log(data))
//.catch(error => console.log(error))

// Fatch teste 5 utilizando o try catch
async function fatchpokemon(){ 
    try {
        const resp =  await fatch('https://pokeapi.co/api/v2/pokemon/pikachu');
        if(!resp.ok){
            throw new Error('Pokemon nao encontrado');
        } else{
            const data = await resp.json();
            console.log(data);
        }
    } catch (error) {
        
    }
}

 fatchpokemon(); 

