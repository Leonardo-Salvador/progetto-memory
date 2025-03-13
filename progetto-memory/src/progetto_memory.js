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

function Griglia() {
    // qui dovrò mettere i valori e gli use state

    const [carte, setCarte] = useState(Images);
    // const [matching, riconosciMatching] = useState([]);
    // const [copri, ricopriCarta] = useState([]);
    // const [rimuovi, rimuoviCarte] = useState([]);




function Uncover(nome) {  
    const [scoperte, setScoperte] = useState(Images);
    setScoperte((scoperte.map((carta) => carta.scoperta = true)))


}

}

// La funzione Uncover deve prendere in input la carta mappata dall'array
// di oggetti 'Images',  e nel button onClick poi, se lo stato di quella carta 
// (passata tramite nome o id), è TRUE; allora viene mostrata l'immagine
// associata a quella carta. Come la scrivo???

//---------- altra soluzione: mappare in un nuovo array le carte scoperte
// e cambiare lo stato delle carte di quel nuovo array. (?)
