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

let titles = document.querySelectorAll("#tabs .tab-titles li");

for (let title of titles) {

    title.addEventListener("click", function () {
        // on recupere le numéro du titre
        let num = this.getAttribute("data-tabtitle");

        //on masque la div precedente
        document.querySelector("#tabs > div.active").classList.remove("active");

        //on reactive la div voulu
        document.querySelector("#tab" + num).classList.add("active");

    
    });
}

