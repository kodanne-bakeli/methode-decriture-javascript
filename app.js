//une ligne de commentaire

/*un commentaire sur
 plusieurs lignes*/

//ouvrir une boite de dialogue

//  alert ('Bonjour je suis le fichier javascript');

//text en console

console.log('Texte en console');


//Declaration +affectation

let prenom = "kitty"; //String

let age = 21; //Number

let enligne = true; //Boolean

let choix = null; //Null


console.log(typeof prenom);
console.log(typeof age);
console.log(typeof enligne);
console.log(typeof choix);

//concatenation

console.log(prenom + " " + age + " ans");
console.log(`Je m'appelle ${prenom}, j'ai ${age} ans`);

//Echapper un caracteres antislash
console.log("Il fait beau aujourd\'hui");


//Declaration et affectation d'une constante
const VILLE = " Hotel";


//Array
let tab = ["pommes", 30, true, ['vert', 'jaune'], prenom];

//Grandeur du tableau
console.log(tab.length);
//Index 1
console.log(tab[1]);
//Mot vert
console.log(tab[3][0]);

//Object
let personnes = {
    prenom: "kitty",
    age: 21,
    enligne: {
        rue: "12 rue Grand yoff",
        ville: "rouen"
    }
}
console.log(personnes.prenom)
console.log(personnes["age"])
console.log(personnes.enligne.rue)

let a = 6;
let b = 2;

//Addition
console.log(a + b);
//Soustraction
console.log(a - b);
//Multiplication
console.log(a * b);
//Division
console.log(a / b);
//Module
console.log(a % b);

//Incrementation
a += 1 //a++ équivaut à: a = a + 1 
console.log(a);
//Decrementation
b -= 1 //b-- équivaut à: b = b - 1 
console.log(b);

//condition IF
// let ages = prompt("Saisir votre age");

//  if(age < 18){
//      alert("Vous etes un mineur");
//  } else if (age >= 70){
//      alert("Vous etes Senior");
//  } else {
//      alert("Vous etes Majeur");
//  }

//condition switch
// let vehicule = prompt("Quel vehicule souhaitez-vous ? Peugeot, BMW, ferrari").toLowerCase();

//  let km = prompt("Combien de KM souhaitez vous faire ?");
//  const prix = {
//      peugeot: 0.4,
//      bmw: 0.6,
//      ferrari: 0.8
//  };

//  switch (véhicule) {
//      case "peugeot": {
//          alert("vous payerez ! " + prix.peugeot + km + "$")
//      }
//      case "bmw": {
//          alert("vous payerez ! " + prix.bmw + km + "$")
//      }
//      case "ferrari": {
//          alert("vous payerez ! " + prix.ferrari + km + "$")
//      }
//      default:
//          alert("Veuillez choisir un vehicule proposé dans la liste")
//  }

//  const message = function(){
//      let texte ="Bonjour";
//      alert(texte);
//  }
//  message();
//  console.log(texte)
//  const messages = function(textes){
   
//      alert(textes);
//  }
//  messages("je suis le texte en paramètre");

//  const Messages = function(Textes = "texte par defaut"){
   
//      alert(Textes);
//  }
//  messages();

//  const somme = (a , b ) => {
//      alert("result " + (a + b))
//  };
//  somme(10, 2);



 //boucles
 for (let i =0; i < 3; i++){
     console.log("boucle: " + i)
 };

 // parcourir un tableau
let tabl = ["orange", "mangue", "ananas"]
console.log("---For---")
for( let i = 0; i < tabl.length; i+=1){
    console.log(tabl[i])
}
console.log("---while----")

let j =0;
while(j <tabl.length){
    console.log(tabl[j]);
    j+= 1;
};
console.log("---Do while----")

let k =0;
do{
    console.log(tabl[k]);
    k+= 1;
}while( k <tabl.length);

// //FOR IN : itérer sur les clés d'un objet
 let voiture = { marque: "peugeot", moteur:"essence"}
 console.log("---for in----")
 for(let k in voiture){
     console.log(k)
 }

// FOR OF : itérer sur les valeurs d'un tableau
 let tab2 = ["orange", "blanc", "vert"]
 console.log("---For of---")
 for( let v of tab2){
     console.log(v)
 }



//Questionnaire interactif


 //mon questionnaire

//  let question1 = prompt("A quel compositeur est consacré le film Amadeus ?\n1. Beethoven\n2. Mozart")

//  if( question1 == 2){
   
//          alert ("Bonne réponse")
//      }
//      else{
//          alert ("Mauvaise réponse")
//      };
  
//   let question2 = prompt("Quelle la capitale de l'Autriche ?\n1. Vienne\n2. Oslo")

//   if( question2 == 1){
   
//       alert ("Bonne réponse")
//   }
//   else{
//       alert ("Mauvaise réponse")
//   };
//   let question3 = prompt("Quel organe est pertubé par les acouphènes ?\n1. Les Pieds\n2. Les Oreilles")

//   if( question3 == 2){
   
//       alert ("Bonne réponse")
//   }
//   else{
//       alert ("Mauvaise réponse")
//   };




 //correction de la vidéo

  const questions = [
     {
         question:
         "A quel compositeur est consacré le film Amadeus ?\n1. Beethoven\n2. Mozart",
         reponse: 2
     },
     {
         question:
         "Quelle la capitale de l'Autriche ?\n1. Vienne\n2. Oslo",
         reponse: 1
     },
     {
         question:
         "Quel organe est pertubé par les acouphènes ?\n1. Les Pieds\n2. Les Oreilles",
         reponse: 2
     }
  ]
// //  /***************Debut du jeu*********/
//   let nbBonneReponse = 0;

//   for(let i = 0; i < questions.length; i += 1){
//      let repUser = prompt(questions[i].question);
//      if( repUser == questions[i].reponse){
//          alert("Reponse Bonne")
//          nbBonneReponse += 1;
//      }else{
//          alert("Reponse Fausse");
//      }
//   }
//   if(nbBonneReponse <= 1){
//      alert(`vous avez ${nbBonneReponse} Bonne reponse sur ${questions.length}`)
//   }else{
//   alert(`vous avez ${nbBonneReponse} Bonnes reponses sur ${questions.length}`)
//   }


  


