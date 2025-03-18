import React, { useState } from "react";

// inserisco l'array di oggetti --> associo nome uguale a carte uguali o stabilisco dopo la relazione?
const Images = [
  { id: "0", src: "🐶", nome: "cane", scoperta: false, rimossa:false },
  { id: "1", src: "🐱", nome: "gatto", scoperta: false, rimossa:false },
  { id: "2", src: "🐭", nome: "topo", scoperta: false, rimossa:false },
  { id: "3", src: "🐹", nome: "criceto", scoperta: false, rimossa:false },
  { id: "4", src: "🦊", nome: "volpe", scoperta: false, rimossa:false },
  { id: "5", src: "🐼", nome: "panda", scoperta: false, rimossa:false },
  { id: "6", src: "🐶", nome: "cane", scoperta: false, rimossa:false },
  { id: "7", src: "🐱", nome: "gatto", scoperta: false, rimossa:false },
  { id: "8", src: "🐭", nome: "topo", scoperta: false, rimossa:false },
  { id: "9", src: "🐹", nome: "criceto", scoperta: false, rimossa:false },
  { id: "10", src: "🦊", nome: "volpe", scoperta: false, rimossa:false },
  { id: "11", src: "🐼", nome: "panda", scoperta: false, rimossa:false },
];

const Griglia = () => {
  // qui dovrò mettere i valori e gli use state

  const [carte, setCarte] = useState(Images);
  const [bloccato, setBloccato] = useState(false);

  function Uncover(idCliccato) {
    if (bloccato) return;
    setCarte((prevCarte) => {
      const updateCarte = prevCarte.map((carta) =>
        carta.id === idCliccato
          ? { ...carta, scoperta: !carta.scoperta }
          : carta
      );

      const carteScoperte = updateCarte.filter((carta) => carta.scoperta); //conterrà max due carte perchè viene eseguito quando ne ha 2

      // const cartaSelezionata = carte.find(carta => carta.id === idCliccato);
      // if (cartaSelezionata.scoperta) return bloccato; //--> FUNZIONE X LA CARTA SCOPERTA, NON FUNZIONA PERò

      //da qui le condizioni per eseguire il matching e l'eliminazione o la ricopertura delle carte
      
      if (carteScoperte.length === 2) {
        setBloccato(true); //stoppa la funzione e controlla (nota in fondo *$*)
        setTimeout(() => {

            if (carteScoperte[0].nome === carteScoperte[1].nome) {
                setCarte((prevCarte) => prevCarte.map((carta => 
                (carta.nome === carteScoperte[0].nome)? 
                {...carta, rimossa: true, scoperta: false} : carta
                )));

          } else {  
            setCarte((prev) =>  
              prev.map((carta) =>  
                carta.scoperta ? { ...carta, scoperta: false } : carta  
              )  
            ); 
          }
          setBloccato(false); // dopo 1 secondo (1000) è possibile di nuovo eseguire funzioni, quindi cliccare e girare carte
        }, 1000);
      }

      return updateCarte;
    });
  }

  return (
    <div className="griglia">
      {carte.map((carta) => (
        <button key={carta.id} onClick={() => Uncover(carta.id)}
        disabled= {carta.rimossa}
        style= {{visibility: carta.rimossa? "hidden" : "visible" }}>
          {carta.scoperta ? carta.src : "🔲"}
        </button>
      ))}
    </div>
  );
};

export default Griglia;




// ULTIMI AGGIORNAMENTI !! 


// Ho aggiunto funzione che mantiene la STABILITA' DELLA GRIGLIA(prima la griglia si ricomponeva
// a piacimento ogni volta che un match avveniva). Per mantenere la stabilità ho inserito un nuovo
// valore nell'array images (rimossa:false); e ho scritto una funzione che trasforma il val.
// in True quando avviene il MATCHING tra due carte. Infine ho passato il valore nello style
// del button, determinando la sua visibilità. 

// Da qui però è sorto un problema. l'array in cui sono mappate tutte le carte che vengono scoperte
// non si azzera, ma continua a contare anche quelle invisibili (hanno comunque scoperta: true);
// così accadeva che dopo la prima coppia le carte non scomparivano più (la funzione
// .length ===2 non si attivava più). Per risolvere ho reimpostato 'scoperta:false' nella condizione
// della funzione matching: 
// 
//     if (carteScoperte[0].nome === carteScoperte[1].nome) {
    // setCarte((prevCarte) => prevCarte.map((carta => 
    //     (carta.nome === carteScoperte[0].nome)? 
    //     {...carta, rimossa: true, scoperta: false} : carta
    //     )));



// *$* CONTROLLI CHE IMPEDISCANO DI SCOPRIRE PIU DI DUE CARTE ALLA VOLTA: 
//     Per farlo ho inserito un "const [bloccato, setBloccato] = useState(false);" e subito dopo
//     un if (bloccato:true) return; all'inizio dell'intera funzione. Ho così messo un blocco dentro
//     la funzione timeout che così fa sì che venga eseguita la funzione e che passi un secondo 
//     quando sono scoperte due carte. Quello è anche il tempo necessario perchè si girino di nuovo, 
//     e così non capiterà di poterne premere tre contemporaneamente! 


// *£* Da implementare : CONTROLLO CHE IMPEDISCA ALL UTENTE DI GIRARE PIU VOLTE LA STESSA CARD.



// VECCHI COMMENTI 

// ???????????????????????????????????????????????????????????????????????//

//La funzione Uncover crea una copia dell'array images con map e sostituisce all'interno con lo spread ... soltanto
// i valori boolean di 'scoperta' per le carte cliccate.

// Nel <div> il button passerà alla funzione Onclick la funzione Uncover con parametro l'id della carta specifica:
// per fare questo dobbiamo usare map per mappare un bottone per ogni elemento (oggetto) dell'array 'images'.
// In questo modo a ogni bottone corrisponde un id specifico e una carta specifica.

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!//
