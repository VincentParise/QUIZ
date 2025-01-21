//const responses = ["1", "2", "0", "1"];
const emojis = ["✔️", "✨", "👀", "😭", "👎"];

// Objet questions / réponses
const dataQuizz = {
  q0: {
    libelle: "Qui est sacré empereur de France le 2 décembre 1804",
    choix: [
      ["clovis", "clovis"],
      ["lincoln", "Abraham Lincoln"],
      ["napoleon", "Napoleon Bonaparte"],
    ],
    reponse: 1,
  },
  q1: {
    libelle: "Quand la déclaration d'indépendance des USA a t'elle été voté",
    choix: [
      ["2018", "4 Juillet 2018"],
      ["2012", "18 avril 2012"],
      ["1789", "5 mai 1789"],
    ],
    reponse: 2,
  },
  q2: {
    libelle: "Quand a eu lieu la chute des Romains",
    choix: [
      ["15", "15 ap JC"],
      ["476", "476 ap JC"],
      ["-780", "-780 AV JC"],
    ],
    reponse: 2,
  },
  q3: {
    libelle: "Quelle est la capitale de la slovenie",
    choix: [
      ["Libjona", "libjona"],
      ["tirana", "Tirana"],
      ["Paris", "Paris"],
    ],
    reponse: 0,
  },
};

// -------------------------------------------------------------
// Recuperation des reponses juste dans un tableau sur l'objet :
// -------------------------------------------------------------
const reponse = [];
for (const key in dataQuizz) {
  //console.log(`Clé: ${key}, Valeur: ${dataQuizz[key].reponse}`);
  reponse.push([`${key}`, `${dataQuizz[key].reponse}`]);
}
//console.log(reponse)

// for (const key in dataQuizz) {
//     if (dataQuizz.hasOwnProperty(key)) {
//       console.log(`Clé: ${key}, Valeur: ${dataQuizz[key]}`);
//     }
//   }

// const keys = Object.keys(dataQuizz);
// console.log(keys.length);
// keys.forEach((key) => {
//   console.log(`Clé: ${key}, Valeur: ${dataQuizz[key].choix}`);
// });

// const values = Object.values(dataQuizz);

// values.forEach((value) => {
//    console.log(`Valeur: ${value.reponse}`);
// });

// -----------------------------------------

let nbreQuestion = 0;

const form = document.querySelector("form");

// --------------------
// Construction du DOM en fonction de l'objet : dataQuizz
// --------------------
Object.entries(dataQuizz).forEach(([index, values]) => {
  // Renvoie un tableau des valeurs de l'objet.

  const block = document.createElement("div");
  block.className = "question-block";
  const h4 = document.createElement("h4");
  h4.textContent = values.libelle;

  for (const key in values.choix) {
    //consruction du div
    const div = document.createElement("div");

    //Construction du input
    const input = document.createElement("input");
    input.type = "radio";
    input.id = `${values.choix[key][0]}`;
    input.name = `q${nbreQuestion}`;
    input.value = `${key}`;

    //construction du label
    const label = document.createElement("label");
    label.textContent = `${values.choix[key][1]}`;
    label.setAttribute("for", `${values.choix[key][0]}`);

    // Integration du DOM
    div.insertAdjacentElement("afterbegin", input);
    input.after(label);
    block.insertAdjacentElement("afterbegin", div);
    block.insertAdjacentElement("afterbegin", h4);
  }
  nbreQuestion = nbreQuestion + 1;
  // Integration dans le DOM
  form.insertAdjacentElement("afterbegin", block);
});

// On ecoute l'evenement submit afin de récuperer les réponses.
const inputs = document.querySelectorAll("input");
//console.log(inputs);
let results = [];

// On change la couleur desinput des que la souris clique dessus :
inputs.forEach((input) => {
    input.addEventListener("click",()=>{
        input.parentElement.parentElement.style.background="#f1f1f1";
    });
    
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  results = [];
  inputs.forEach((input) => {
    if (input.checked) {
      results.push([input.name, input.value]);
    }
  });

  // Inverse les valeurs dans le tableau
  results.reverse();
  afficheResultat(results);

});

// -----------------------------------------------------------
// Fonction affichage des résultats et intégration dans le DOM
// -----------------------------------------------------------
function afficheResultat(tableau) {
 
let bonneReponse=0;
let nbreReponse= 0;
console.log(reponse)
console.log(tableau)

  for (const key in tableau) {
    nbreReponse=nbreReponse+1;
    // Si réponse juste
    if (tableau[key][1] === reponse[key][1]) {
        bonneReponse=bonneReponse+1;
      // on récupère le input du DOM en question :
      const divJuste = document.querySelector(
        `input[name=${tableau[key][0]}`
      ).parentElement.parentElement; //on recupere l'élément div avec la class 'question-block'
      divJuste.style.background = "green";
    } else {
        const divJuste = document.querySelector(
            `input[name=${tableau[key][0]}`
          ).parentElement.parentElement;
          divJuste.style.background = "red";
    }
  }
  // Affichage du resultat dans la barre résultat.
  // ---------------------------------------------
  const mark = document.querySelector('.mark');
  const help = document.querySelector('.help');
  const result = document.querySelector('.results')

     result.firstElementChild.textContent="";
   
     console.log(bonneReponse)

  if (bonneReponse==nbreReponse) {
    mark.textContent="Bravo c'est un sans faute";
    help.textContent=`Score : ${bonneReponse} / ${nbreReponse}`;

  } else {
    mark.textContent="Ré essayez";
    help.textContent=`Score : ${bonneReponse} / ${nbreReponse}`;
  }

}
