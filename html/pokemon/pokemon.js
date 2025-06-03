/* async function info(event) {
   
    try{
    const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${name.value}`);
    //Response
    const data = await result.json();
    console.log(data);
}
catch(error){
    console.error(error);
    
}
}
 */

let yes = false ;
function random(){
    const pokemon = [
    "pikachu",
    "charizard",
    "eevee",
    "lucario",
    "gengar",
    "mewtwo",
    "greninja",
    "snorlax",
    "bulbasaur",
    "squirtle",
    "dragonite",
    "arcanine",
    "umbreon",
    "sylveon",
    "jigglypuff",
    "ditto",
    "tyranitar",
    "gardevoir",
    "blaziken",
    "garchomp",
    "infernape",     // fire
    "blastoise",     // water
    "sceptile",      // grass
    "zapdos",        // electric
    "garchomp",      // dragon (ถ้าซ้ำเอา salamence แทนได้)
    "gallade",       // psychic
    "lucario",       // fighting
    "gengar",        // ghost
    "crobat",        // poison
    "gliscor",       // ground
    "aegislash",     // steel
    "weavile",       // dark
    "togekiss",      // fairy
    "noivern",       // flying
    "tyranitar",     // rock
    "scizor",        // bug
    "mamoswine",     // ice
    "duraludon",     // dual steel/dragon, representative of steel (or dragon)
    "bewear",        // normal
    "runerigus"      // ghost/ground, but used here to round out unique typing
    ];

    return pokemon[Math.floor(Math.random()*19)+1];
}

async function test(){
    const name = document.getElementById('name').value.toLowerCase();
    try {
        const result = await fetch (`https://pokeapi.co/api/v2/pokemon/${name}`);
        if(!result.ok){
            throw new Error("can't find");
        }
        const pic = document.getElementById('pokemon');
        const data = await result.json();
        pic.src = data.sprites.front_default ;
        const type = data.types[0].type.name ;
        document.getElementById('namepokemon').textContent = data.name;
        document.getElementById('idpokemon').textContent = `id : ${data.order}`;
        document.getElementById('card').classList = `card center`;
        document.getElementById('card').classList.add(type);
        yes = true;
    }
    catch(error){
        console.log(error);
    }
}

async function show(){
    try {
        const result = await fetch (`https://pokeapi.co/api/v2/pokemon/${random()}`);
        if(!result.ok){
            throw new Error("can't find");
        }
        const pic = document.getElementById('pokemon');
        const data = await result.json();
        pic.src = data.sprites.front_default ;
        const type = data.types[0].type.name ;
        document.getElementById('namepokemon').textContent = data.name;
        document.getElementById('idpokemon').textContent = `id : ${data.order}`;
        document.getElementById('card').classList = `card center`;
        document.getElementById('card').classList.add(type);
        
        

    }
    catch(error){
        console.log(error);
    }
}

function done(){
    setInterval(()=>{
        if(!yes){
            show();
        }
        
    },5000);
}
