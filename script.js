/* menu-toggle */

	const toggle = document.getElementById("menu-toggle");
	const nav = document.getElementById("nav");

	toggle.addEventListener("click", () => {
	nav.classList.toggle("active");
	});


/*Les lettres de LaPageEdu*/

	const letters = document.querySelectorAll('.figure');
	let index = 0;

	const interval = setInterval(() => {
	if (index < letters.length) {
		letters[index].classList.add('show');
		index++;
	} else {
	clearInterval(interval);
	}
	}, 100); // 1 seconde = 1000 ms


// Jeu deviner le nombre 
// on sélectionne le bouton
 let bouton = document.getElementById("bouton");

// on sélectionne la zone résultat
let resultat = document.getElementById("resultat");
let correspondance=document.getElementById("correspondance");
// quand on clique sur le bouton
bouton.addEventListener("click", function(){

    // générer un nombre aléatoire entre 1 et 10
    let nombre = Math.floor(Math.random() * 10) + 1;
    // afficher le nombre dans la page
    resultat.textContent = nombre;
if(nombre==1){
	correspondance.textContent="Miauler comme un chat pendant 15 secondes";
}
else if(nombre==2){
	correspondance.textContent="japper comme un petit chien pendant 10 secondes";
}
else if(nombre==3){
	correspondance.textContent="Danser du compas sans de la music pendant 30 secondes";
}
else if(nombre==4){
	correspondance.textContent="Sauter à pas de crapaud pendant 15 secondes";
}
else if(nombre==5){
	correspondance.textContent="Imiter la marche du canard en cancanant pendant 20 secondes";
}
else if(nombre==6){
	correspondance.textContent="Faire un don à LaPageEdu(Mon Cash:3814 6245)";
}
else if(nombre==7){
	correspondance.textContent="Faire une prière pour le monde";
}
else if(nombre==8){
	correspondance.textContent="Citer 5 pays en 10 secondes";
}
else if(nombre==9){
	correspondance.textContent="Danser du compas sans de la music";
}
else if(nombre==10){
	correspondance.textContent="Dire une blague";
}
else if(nombre==11){
	correspondance.textContent="Parler avec une voix drôle pendant 30 secondes";
}
else if(nombre==12){
	correspondance.textContent="Mimer le métier du macon entrain de crépir";
}
else if(nombre==13){
	correspondance.textContent="Défiler pendant 30 secondes";
}
else if(nombre==14){
	correspondance.textContent="Marcher comme un robot pendant 30 secondes";
}
else if(nombre==15){
	correspondance.textContent="Donner 3 qualités que tu apprécies chez";
}
else if(nombre==16){
	correspondance.textContent="Prononcer: Sur dix-huit huitres huit huitres frites senfuient sans bruit";
}


}); 
/* modal pour le jeu */
let notice=document.getElementById("notice"); 
let conteneurNotice=document.getElementById("conteneurNotice");
let fermeture=document.getElementById("fermeture");

	notice.addEventListener("click", function(){
	conteneurNotice.style.display="block";	
}
);
	fermeture.addEventListener("click", function(){
	conteneurNotice.style.display="none";
}
);



/* fin */


let ouvrir=document.getElementById("ouvrir");
let modal=document.getElementById("modal");
let fermer=document.getElementById("fermer");

ouvrir.addEventListener("click", function(){
	modal.style.display="block";
}
)

fermer.addEventListener("click", function(){
	modal.style.display="none";
}
)

/* Annonces */
let openAnnonces=document.getElementById("openAnnonces");
let closeAnnonces=document.getElementById("closeAnnonces");
let contenuAnnonces=document.getElementById("contenuAnnonces");

openAnnonces.addEventListener("click", function(){
	contenuAnnonces.style.display="block";
})

closeAnnonces.addEventListener("click", function(){
	contenuAnnonces.style.display="none";
})

/* ACHCO */

const btn=document.getElementById("btn-1");
const achco=document.getElementById("achco");
const closeachco=document.getElementById("closeAchco");

btn.addEventListener("click",function(){
	achco.style.display="block";
})
closeachco.addEventListener("click",function(){
	achco.style.display="none";
})




 
