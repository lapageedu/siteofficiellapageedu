
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
let actions = [
 "Miauler comme un chat pendant 15 secondes",
 "Japper comme un petit chien pendant 10 secondes",
 "Danser du compas sans musique pendant 30 secondes",
 "Sauter à pas de crapaud pendant 15 secondes",
 "Imiter la marche du canard pendant 20 secondes",
 "Faire un don à LaPageEdu sur moncash-509 3814 6245",
 "Faire une prière pour le monde",
 "Citer 5 pays en 10 secondes",
 "Danser une musique en ignorant son rythme",
 "Dire une blague",
 "Parler avec une voix drôle",
 "Mimer le métier du maçon",
 "Défiler pendant 30 secondes",
 "Marcher comme un robot",
 "Rire comme un fou",
 "Prononcer la phrase suivante: Sur dix-huit huitres huit huitres frites s'enfuient sans bruit",
];	 

	bouton.addEventListener("click", function(){ 
// générer phrase aléatoire entre 1 et 16
    let nombre = Math.floor(Math.random() * actions.length);
    // afficher la phrase dans la page
    correspondance.textContent = actions[nombre];	 
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
openAnnonces.style.opacity="0";
})

closeAnnonces.addEventListener("click", function(){
	contenuAnnonces.style.display="none";
	openAnnonces.style.opacity="1";
})

/* light-box */

let openbox=document.getElementById("maPhoto");
let closeb=document.getElementById("closebox");
let box=document.getElementById("light-box");	
let grandePhoto=document.getElementById("grande");

	openbox.addEventListener("click", function(){
	openbox.style.display="flex";
	grandePhoto.src=this.src;
})	

	/* closeb.addEventListener("click", function(e){
	box.style.display="none";
	if(e.target==grandePhoto){
		box.style.display="none";
	} 
})	*/
	



/* light-box photo ACHCO 
	let openlightbox=document.getElementById("photolightBox");
	let modalLightbox=document.getElementById("modalLightbox");
	let closePhotoLightbox=document.getElementById("closePhoto");
	let grandPhoto=document.getElementById("grandPhoto");
	
	openlightbox.addEventListener("click", function(){
	modalLightbox.style.display="flex";
	grandPhoto.src=this.src;
})

closePhotoLightbox.addEventListener("click", function(){
	modalLightbox.style.display="none";
}) */

 
 /* Message affichant Bientot */
 /* let ouvrirBientot=document.getElementById("openBientot");
 let contenuBientot=document.getElementById("contenuBientot");
 let quitteBientot=document.getElementById("quitte");
 
 ouvrirBientot.addEventListener("click", function(){
	 contenuBientot.style.display="block";
 })
 quitteBientot.addEventListener("click", function(){
	 contenuBientot.style.display="none";
 })
 */
 /* Cookies */
 function accepterCookies(){
	document.getElementById("cookie-banner").style.display="none";
}; 


/* Formulaire 
let formContact = document.querySelector(".form");
let confirmation = document.getElementById("messageConfirmation");

if (formContact) {
    formContact.addEventListener("submit", function() {
        confirmation.style.display = "block";
        
        // Cacher le message après 5 secondes
        setTimeout(function() {
            confirmation.style.display = "none";
        }, 5000);
    });
}*/


// Leçon 15 - Confirmation d'envoi
let form = document.querySelector(".form");
let statusDiv = document.getElementById("formStatus");

if (form) {
    form.addEventListener("submit", function() {
        statusDiv.textContent = "Envoi en cours...";
        statusDiv.style.color = "blue";
        
        // Le message disparaît après l'envoi
        setTimeout(function() {
            statusDiv.textContent = "Message envoyé ! Nous vous répondrons sous 48h.";
            statusDiv.style.color = "green";
        }, 2000);
    });
}

//Quiz pqrtie 1
	
		let boite=[
 {
	 question:"1- Comment s'appelle la première république noire indépendante?",
	 reponses:["Haïti","Sénégal","Mali"],
	 correct:0
 },
 
 {
	 question:"2- En quelle année Haïti a-t-elle proclamé son indépendance?",
	 reponses:["1801","1804","1806"],
	 correct:1
 },
 
 
 {
	 question:"3- Quand a eu lieu la dernière bataille menant à la proclamation de l'indépendance d'Haïti?",
	 reponses:["1806","1804","1803"],
	 correct:2
 },
 
 {
	 question:"4- Où a eu lieu la dernière bataille conduisant à l'indépendance d'Haïti?",
	 reponses:["Vertière(Cap-haitien)","Delmas(Port-au-Prince)","Castel Père,(Cayes)"],
	 correct:0
 },
 
  {
	 question:"5- Qui a cousu le drapeau haitien?",
	 reponses:["Sanite Bélair","Catrine Flon","Lamartinière"],
	 correct:1
 },
  {
	 question:"6- Qui a écrit l'acte de l'indépedance d'Haïti?",
	 reponses:["Bois-Rond Tonerre","Pétion","Lamarre"],
	 correct:0
 },
  {
	 question:"7- En quel département se trouve la Citadele Laferrière?",
	 reponses:["Grand'Anse","Sud","Nord"],
	 correct:2
 },
 
 {
	 question:"8- En combien de départements Haïti est-elle divisée?",
	 reponses:["11","10","8"],
	 correct:1
 },
 
 {
	 question:"9- Quelle est la plus petite division administrative d'Haïti?",
	 reponses:["La Commune","Le Département","La Section communale"],
	 correct:2
 },
 
 {
	 question:"10- En Haïti, on fête le drapeau le?",
	 reponses:["18 janvier","18 mai","18 novembre"],
	 correct:1
 },
 
 ];
 
// let index=0;
 let score=0;
 let tepms=10;
 //let interval;
 let reponseDonnee=false;
 
 //dom
 //let timerElement = document.getElementById("timer");
 let question1=document.getElementById("questions");
 let reponse1=document.getElementById("reponses");
 let message1=document.getElementById("messages");
 let boutonSuivant=document.getElementById("suivant");
 let boutonRejouer=document.getElementById("rejouer");
 
 function affichage(){
	 /* clearInterval(interval);
	 demarrerTimer()  */
	 let q=boite[index];
	 question1.textContent=q.question;
	 reponse1.innerHTML="";
	 message1.textContent="";
	 
	 q.reponses.forEach((rep,i)=>{
		 let boutons=document.createElement("button");
		 boutons.textContent=rep;
		 boutons.addEventListener("click",()=>verification(i,boutons));
		 reponse1.appendChild(boutons);
		
		
	 });
	
 }
 
 
 //verification
 function verification(indexReponse,boutonCliquee){
	 //clearInterval(interval);
	 let q=boite[index];
	 let bonneReponse=q.correct;
	 let boutons=reponse1.querySelectorAll("button");
	 boutons.forEach(btn=>btn.disabled=true);
	 
	 if(indexReponse===bonneReponse){
		score++;
		boutonCliquee.classList.add("vrai");
		message1.textContent="Bravo, bonne réponse ✅!";
		
	 }
	 else{
		 
		 boutonCliquee.classList.add("faux");
		 message1.textContent="désolé, mauvaise réponse ❌!";
	 }
	 
 }
 
 //question suivante;
	 boutonSuivant.addEventListener("click",()=>{
	 index++;
	 q=boite;
	 
	 if(index<q.length){
		 affichage();
	 }
	 else{
		  finQuiz(); 
		  boutonRejouer.style.display="block";
	 }
	 
 });
 
 function finQuiz(){
	 reponse1.innerHTML="";
	 question1.textContent="Merci de jouer!";
	 message1.textContent=`score:${score}/${q.length}`;
	 boutonSuivant.style.display="none";
	 boutonRejouer.display="block";
 }
 
	boutonRejouer.addEventListener("click",()=>{
	index=0;
	score=0;
	boutonSuivant.style.display="block";
	boutonRejouer.style.display="none";
 
	affichage(); 
 
 });
  affichage(); 
 
