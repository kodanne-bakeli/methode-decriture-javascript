//selectionner toute les ligne du tableua
// let tabTr = document.querySelectorAll("tbody tr");

//ajout d'un ecouteur d'evenement au clique sur toutes les lignes
// for(let tr of tabTr){
// tr.addEventListener("click", function(){
//     this.classList.toggle("gris");
// });

// }

// document.querySelector("a").addEventListener("click",function(e){
//     e.preventDefault();
//     let target = this.getAttribute("href");
//     let response = confirm("voulez-vous partir du site ?")
//     if(response == true){
//         window.location = target;//redirection vers autre page
//     }else{
//         alert("merci de rester avec nous")
//     }
// })


// const icon = '<span class="check"><i class="fa-solid fa-check"></i></span>'


// let tabLi =document.querySelectorAll("ul li")
// for(let li of tabLi){
//     li.addEventListener("click", function(){
//         this.classList.toggle("active");
//         if(this.classList.contains("active")){
//             this.innerHTML = this.innerText + icon
//         }else{
//             this.innerHTML = this.innerText;
//         }
//     });
// }

// let titles = document.querySelectorAll("#tabs .tab-titles li");

// for (let title of titles) {

//     title.addEventListener("click", function () {
//         // on recupere le numéro du titre
//         let num = this.getAttribute("data-tabtitle");

//         //on masque la div precedente
//         document.querySelector("#tabs > div.active").classList.remove("active");

//         //on reactive la div voulu
//         document.querySelector("#tab" + num).classList.add("active");


//     });
// }

//apparait toutes les x millisecondes
// window.setInterval(function(){
//     console.log("Set Interval");
// },1000);


// //apparait apres x millisecondes
// window.setTimeout(function(){
//     console.log("Set Interval");
// },3000);

// //horloge - date
// const horloge =function(){
// let date = new Date();

// let heure = date.getHours();

// let minute = date.getMinutes();
// let seconde = date.getSeconds();

// if(seconde < 10){
//     seconde = "0" + seconde
// }
// if(minute < 10){
//     minute = "0" + minute
// }


// let affichage = heure + ":" + minute + ":" + seconde;

// document.querySelector("#horloge").innerText = affichage
// }
// setInterval(horloge,1000)
// const images = document.querySelectorAll("#galerie img");
// let imgActive = 0;
// images[imgActive].classList.add("show");
// //masquer les photo sauf la premiere

// for(let i = 1; i < images.length; i+=1){
//     images[i].classList.add("hidden")
// };
// //variable pour stocker l'interval de temps
// let interval
// //clic sur le boutton play
// document.querySelector("#play").addEventListener("click", function(){
//      interval = setInterval(next,2000)
// });

// //clic sur le boutton pause
// document.querySelector("#pause").addEventListener("click" ,function(){
//     clearInterval(interval);    //destruction de l'interval de temps
// });
// //clic sur le boutton suivant
// document.querySelector("#next").addEventListener("click", function(){
//     next();
// });
// //clic sur le boutton précédent
// document.querySelector("#prev").addEventListener("click", function(){

//     prev()
// });
// //fonction suivante
//     const next = function(){
//         images[imgActive].classList.add("hidden");
//         images[imgActive].classList.remove("show");
//         imgActive +=1;
//         if(imgActive >= images.length){
//             imgActive = 0
//         };
//         images[imgActive].classList.remove("hidden");
//         setTimeout(()=>{
//             images[imgActive].classList.add("show");
//         },100)
//     }

// //fonction précédente
// const prev = function (){
//     images[imgActive].classList.add("hidden");
//     images[imgActive].classList.remove("show");
//     imgActive -=1;
//     if(imgActive <= 0){
//         imgActive = images.length - 1;
//     }

//     images[imgActive].classList.remove("hidden");
//     setTimeout(()=>{
//         images[imgActive].classList.add("show");
//     },100)
// };

// //gestion touche du clavier
// window.addEventListener("keydown", function(e){
//     if( e.key == "ArrowRight"){
//         next()
//     }
//     if( e.key == "ArrowLeft"){
//         prev()
//     }

// })
//création de la promesse
// const promiseGetUsers = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         if(typeof USERS !== "undefined"){
//             resolve(USERS)
//         }else{
//             reject("Accés aux users impossible")
//         }
//     },2000)
// })
// //recuperer l'etat de la promesse

// promiseGetUsers
// .then(function(u){
//     let liste =`<ul>`
//     for(let user of u){
//         liste += `<li>${user.name}</li>`;
//     }
//     liste += `</ul>`
//     document.querySelector("#users").innerHTML =liste

// })
// .catch(function(e){
//     console.log(e);
// })
// //****************NEWS**************/
// //création de la promesse
// const promiseGetNews = new Promise((resolve, reject) =>{
//     setTimeout(function(){
//         if(typeof NEWS !== "undefined"){
//             resolve(NEWS)
//         }else{
//             reject("Accés aux news impossible")
//         }
//     },2000)
// })
// //recuperer l'etat de la promesse

// promiseGetNews
// .then((n) =>{
//     let liste =`<ul>`
//     for(let actu of n){
//         liste += `<li>${actu.title}</li>`;
//     }
//     liste += `</ul>`
//     document.querySelector("#news").innerHTML =liste

// })
// .catch((e) => console.log(e));
// document.querySelector("#cp").addEventListener("input", function () {
//     if (this.value.length == 5) {
//         let url =
//             `https://geo.api.gouv.fr/communes?codePostal=${this.value}&fields=nom,code,codesPostaux,codeDepartement,codeRegion,population&format=json&geometry=centre`;
//         fetch(url).then((response) =>
//             response.json().then((data) => {
//                 console.log(data);
//                 let affichage = '<ul>';
//                 for (let ville of data) {
//                     affichage += `<li><strong>${ville.nom}</strong> - ${ville.population}habitants</li>`
//                 }
//                 affichage += "</ul>";
//                 document.querySelector("#villes").innerHTML = affichage
//             })
//         ).catch(err => console.log("erreur :" + err))
//     }
// });
