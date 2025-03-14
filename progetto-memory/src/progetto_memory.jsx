import React, { useState } from "react";  

// inserisco l'array di oggetti --> associo nome uguale a carte uguali o stabilisco dopo la relazione?
const Images = [
    {id: "0", src: "🐶", nome: "cane", scoperta: false},
    {id: "1", src: "🐱", nome: "gatto", scoperta: false},
    {id: "2", src: "🐭", nome: "topo", scoperta: false},
    {id: "3", src: "🐹", nome: "criceto", scoperta: false},
    {id: "4", src: "🦊", nome: "volpe", scoperta: false},
    {id: "5", src: "🐼", nome: "panda", scoperta: false},
    {id: "6", src: "🐶", nome: "cane", scoperta: false},
    {id: "7", src: "🐱", nome: "gatto", scoperta: false},
    {id: "8", src: "🐭", nome: "topo", scoperta: false},
    {id: "9", src: "🐹", nome: "criceto", scoperta: false},
    {id: "10", src: "🦊", nome: "volpe", scoperta: false},
    {id: "11", src: "🐼", nome: "panda", scoperta: false},
]

const Griglia= () => {
    // qui dovrò mettere i valori e gli use state

    const [carte, setCarte] = useState(Images);
    // const [matching, riconosciMatching] = useState([]);
    // const [copri, ricopriCarta] = useState([]);
    // const [rimuovi, rimuoviCarte] = useState([]);



function Uncover(idCliccato) {  
    setCarte((carte.map((carta) => carta.id === idCliccato?
    {...carta, scoperta: !carta.scoperta} : carta))
);
}



return ( 
    <div className= "griglia">
        {carte.map((carta) => <button key={carta.id} onClick= {() => Uncover(carta.id)}>
            {carta.scoperta? carta.src : "🔲"}
        </button>
    )}
</div> 

)

}



export default Griglia;




// La funzione Uncover deve prendere in input la carta mappata dall'array
// di oggetti 'Images',  e nel button onClick poi, se lo stato di quella carta 
// (passata tramite nome o id), è TRUE; allora viene mostrata l'immagine
// associata a quella carta. Come la scrivo???

//---------- altra soluzione: mappare in un nuovo array le carte scoperte
// e cambiare lo stato delle carte di quel nuovo array. 

// ???????????????????????????????????????????????????????????????????????// 

//La funzione Uncover crea una copia dell'array images con map e sostituisce all'interno con lo spread ... soltanto
// i valori boolean di 'scoperta' per le carte cliccate. 

// Nel <div> il button passerà alla funzione Onclick la funzione Uncover con parametro l'id della carta specifica: 
// per fare questo dobbiamo usare map per mappare un bottone per ogni elemento (oggetto) dell'array 'images'. 
// In questo modo a ogni bottone corrisponde un id specifico e una carta specifica. 

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!//