/**2. Abre el archivo "index.html". En la página, encontrarás un selector que te 
 permite elegir un Pokémon (Bulbasaur, Charmander o Squirtle) y un botón "Obtener Información".

3. Cuando selecciones un Pokémon y hagas clic en el botón "Obtener Información", 
se tendrá que mostrar la información en pantalla del Pokémon, incluyendo su nombre, imagen, tipo, 
altura y peso.

value="bulbasaur"
value="charmander"
value="squirtle"
*/

// fecht para traer los datos
const Pockemons=["bulbasaur","charmander","squirtle"];
const buttonSelePockemon=document.getElementById('get-pokemon');

//Obtenemos los pockemons al clickar


buttonSelePockemon.addEventListener('click',()=>{
    let pockoption=document.getElementById('pokemon-select')
        let pockdato=''
        //console.log(pockoption.value)
        if(pockoption.value == Pockemons[0]){
            //console.log("bulabsur")
            pockdato="bulbasaur"
        }else if (pockoption.value == Pockemons[1]){
            //console.log("charmander")
            pockdato="charmander"
        }else{
            //console.log("squirtle")
            pockdato="squirtle"
        }
        buscarPockemon(pockdato);
        //debemos pintar el nombre

    })

    //Busco el Pockemon y obtenemos sus datos
    
function buscarPockemon(nomPck){
    fetch("https://pokeapi.co/api/v2/pokemon/"+nomPck)
    .then((response)=>{
        if (!response.ok) {
            //If response dont throw the request send a responsive not work
            throw new Error('La solicitud no fué exitosa');
          }
          return response.json(); //Return the request
    })
    .then((datas)=>{
        console.log(datas);
        pintarElementos(datas,nomPck)
    })
    .catch((error) => {
        //buttonSelePockemon.innerText = 'Error: No se pudo obtener la pockemon';
      });
    }

    //sacamos la imagen sprites: front_shiny
function pintarElementos(dato,Pockemon){
    const pintar=document.getElementsByClassName('container')[0] //accedemos a HTML
    const pintarp=document.createElement('section') //Creamos un elemento p
    pintar.appendChild(pintarp) //Hacemos que p pertenezca a contido
    pintarp.innerHTML=`
    <div class=Pockemon>
        <p>El nombre del Pockemon es:<strong> ${Pockemon}</strong></p><br>
        <p>El peso del Pockemon es de:<strong> ${dato.weight}</strong></p><br>
        <img src=${dato.sprites.front_shiny} alt="${Pockemon}"><br>
    </div>
    
    `

}