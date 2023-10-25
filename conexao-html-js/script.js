//console.log("Olá Mundo!")

let logo = document.getElementById("logo");
//console.log(logo)

let postAutor = document.getElementsByClassName("post-autor");
//console.log(postAutor)

let texto02 = document.querySelector("#post02 .post-texto")
//console.log(texto02)

let redesFooter = document.querySelectorAll("footer .lista_redes li")
//console.log(redesFooter)


/*for(let i = 0; i < redesFooter.length; i++){
    console.log(redesFooter[1]);
}*/

/*for(let i = 0; i < postAutor.length; i++){
    console.log("Lista post número: " + i);
}*/
function percorrerArray(lista){
    for(let i = 0; i < lista.length; i++){
        console.log(lista[1]);
    }
}

percorrerArray(postAutor)
percorrerArray(redesFooter)