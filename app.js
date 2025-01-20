const responses = ["c", "a", "b", "a", "c"];
const emojis = ["✔️", "✨", "👀", "😭", "👎"];

// Objet questions / réponses
const dataQuizz = {
    questionUn : {
        libelle :"Qui est sacré empereur de France le 2vdécemb re 1804",
        choix : ["clovis", "Abraham Lincoln", "Napoleon Bonaparte"],
        reponse : 1
    },
    questionDeux : {
        libelle :"Quand la déclaration d'indépendance des USA a t'elle été voté",
        choix : ["4 Juillet 2018", "18 avril 2012", "5 mai 1789"],
        reponse : 2
    },
}

// Itération sur un objet
for (let numQuestion in dataQuizz.questionUn){

    console.log(numQuestion)
    // for (let element in numQuestion.questionUn){
    //     console.log(element);
    // }

}