import React, { useState, useEffect } from "react";

// inserisco l'array di oggetti --> associo nome uguale a carte uguali o stabilisco dopo la relazione?
const Images = [
  { id: "0", src: "/immagin_simpson/barney.jpg", nome: "barney", scoperta: false, rimossa:false },
  { id: "1", src: "/immagin_simpson/barta_lisa.jpg", nome: "bart.lisa", scoperta: false, rimossa:false },
  { id: "2", src: "/immagin_simpson/burns.jpg", nome: "mr.burns", scoperta: false, rimossa:false },
  { id: "3", src: "/immagin_simpson/homer.jpg", nome: "homer", scoperta: false, rimossa:false },
  { id: "4", src: "/immagin_simpson/marge.jpg", nome: "marge", scoperta: false, rimossa:false },
  { id: "5", src: "/immagin_simpson/smithers.jpg", nome: "smithers", scoperta: false, rimossa:false },
  { id: "6", src: "/immagin_simpson/barney.jpg", nome: "barney", scoperta: false, rimossa:false },
  { id: "7", src: "/immagin_simpson/barta_lisa.jpg", nome: "bart.lisa", scoperta: false, rimossa:false },
  { id: "8", src: "/immagin_simpson/burns.jpg", nome: "mr.burns", scoperta: false, rimossa:false },
  { id: "9", src: "/immagin_simpson/homer.jpg", nome: "homer", scoperta: false, rimossa:false },
  { id: "10", src: "/immagin_simpson/marge.jpg", nome: "marge", scoperta: false, rimossa:false },
  { id: "11", src: "/immagin_simpson/smithers.jpg", nome: "smithers", scoperta: false, rimossa:false },
];

//Funzione per mescolare le carte, altrimenti ad ogni refresh restano al solito posto
const randomizeCards = () => {
  const shuffled = [...Images].map(carta => ({...carta})); //copia in modo superficiale l'array iniziale di carte 
  // poi prosegue facendo una copia di ciascun elemento dell'array
  for (let i = (shuffled.length - 1); i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  console.log("Carte mescolate!", shuffled[11]);
  console.log("Carte!", Images[11]);
  return shuffled;
};

const Griglia = () => {
  // qui dovrò mettere i valori e gli use state 
  const [carte, setCarte] = useState(() => randomizeCards()); //Use state prende l'output di RandomizeCards
  console.log("Carte che dovrebbero essere mischiate!", carte[11]);
  const [bloccato, setBloccato] = useState(false);
  const [contaMosse, setContaMosse] = useState(0);
  const [coppieTrovate, setCoppieTrovate] = useState(0);

  function Uncover(idCliccato) {
    if (bloccato) return;
    const cartaGiaScoperta = carte.find(carta => carta.scoperta);
    if (cartaGiaScoperta && cartaGiaScoperta.id === idCliccato) return; //controllo x non poter click 2 volte la stessa
    setCarte((prevCarte) => 
      prevCarte.map((carta) =>
        carta.id === idCliccato
          ? { ...carta, scoperta: !carta.scoperta }
          : carta
      ));
    }

      //da qui le condizioni per eseguire il matching e l'eliminazione o la ricopertura delle carte
      
      useEffect (() => {
        const carteScoperte = carte.filter((carta) => carta.scoperta);
        if (carteScoperte.length !== 2) return;

          setBloccato(true);
          setContaMosse(prev => prev +1);

          setTimeout(() => {
            if (carteScoperte[0].nome === carteScoperte[1].nome) {
                setCoppieTrovate(prev => prev + 1);
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
    }, [carte]);

        
  
  return (
    
      carte.every(carta => carta.rimossa) ? (  //questa if serve per controllare se sono state rimosse tutte le carte
      <div className="victory-screen">
        <h1>🏆 VICT🥴RY 🏆</h1>
        <p> YOUR SCORE: {contaMosse} </p>
      <img src="/immagin_simpson/vittoria.gif"/>
      </div> 
    ) : (
      <div className="game-container"> 
        <div className="griglia">
        {carte.map((carta) => (
        <button key={carta.id} onClick={() => Uncover(carta.id)}
        disabled= {carta.rimossa}
        style= {{visibility: carta.rimossa? "hidden" : "visible" }}>
          {carta.scoperta ? <img src={carta.src}/> : <img src= "/immagin_simpson\duff.jpg"/>}
        </button>
  ))}
    </div> 
    <div className="counter-container">
        <button>Mosse: {contaMosse}</button>
        <button>Coppie trovate: {coppieTrovate}</button>
      </div>
    </div>
    )
);
}
export default Griglia;





// ULTIMI AGGIORNAMENTI !! 


// Ho implementato useEffect che si attiva quando la var. [carte] cambia! Ora Uncover() gestisce solo la scoperta delle carte, 
// useEffect il resto. aggiorna anche il contamosse e il coppietrovate!

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



// VECCHI COMMENTI 

// ???????????????????????????????????????????????????????????????????????//

//La funzione Uncover crea una copia dell'array images con map e sostituisce all'interno con lo spread ... soltanto
// i valori boolean di 'scoperta' per le carte cliccate.

// Nel <div> il button passerà alla funzione Onclick la funzione Uncover con parametro l'id della carta specifica:
// per fare questo dobbiamo usare map per mappare un bottone per ogni elemento (oggetto) dell'array 'images'.
// In questo modo a ogni bottone corrisponde un id specifico e una carta specifica.

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!//
