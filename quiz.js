const toggle = document.getElementById("menu-toggle");
	const nav = document.getElementById("nav");

	toggle.addEventListener("click", () => {
	nav.classList.toggle("active");
	});

		let boite=[
 {
	 question:"1- Farouche défenseur de la liberté, il lutte contre Leclerc avec intelligence et courage. Son nom est?",
	 reponses:["Pétion","Toussaint","Christophe"],
	 correct:1
 },
 
 {
	 question:"2- Elle fut la compagne de Lamartinière. Elle a participé à la bataille de la crête à Pierrot. Son nom est",
	 reponses:["Catherine Flon","Claire Heureuse","Marie-Jeanne"],
	 correct:2
 },
 
 
 {
	 question:"3- Femme de Dessalines, très généreuse. Elle soigne même ses adversaires durant la guerre du Sud. Son nom est",
	 reponses:["Catherine Flon","Claire Heureuse","Marie-Jeanne"],
	 correct:1
 },
 
 {
	 question:"4- Quand a eu lieu le soulèvement général des esclaves dans la colonie de Saint-Domingue?",
	 reponses:["1771","1791","1789"],
	 correct:1
 },
 
  {
	 question:"Quelle est l'haitienne qui a ramporté, en Afrique (Togo), le concours de House of Challenge 2026?",
	 reponses:["Abigaïl Alexandre","Ariana Milagro Lafond","Gesline Pierre"],
	 correct:1
 },
  {
	 question:"6- Elle a fourni des munitions et des informations aux officiers indigènes. Son nom est",
	 reponses:["Sanite Bélair","Henriette Saint-Marc","Marie-Jeanne"],
	 correct:1
 },
  {
	 question:"7- Cette ville est surnomée la cité du drapeau?",
	 reponses:["Saint-Marc","Arcahaie","Port-au-Prince"],
	 correct:1
 },
 
 {
	 question:"8- Les grandes puissances coloniales le reconaissent comme un pays rebel, un mauvais exemple pour leurs esclaves. Son nom est",
	 reponses:["Haïti","Dominicanie","Jamaïque"],
	 correct:0
 },
 
 {
	 question:"9- Quelle est  l'haitienne qui a remporté, en France, le concours de prise de parole en 2026?",
	 reponses:["Abigail Alexandre","Ariana Milagro Lafond","Gesline Pierre"],
	 correct:0
 },
 
 {
	 question:"10- Né à la Grande Rivière du Nord un 20 septembre 1958, il fut proclamé empéreur en 1806. Son Nom est",
	 reponses:["Jean Pierre Booyer","Philippe Guerrier","Jean Jacques Dessalines"],
	 correct:2
 },
 
 ];
 
let index=0;
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
  
  msg=document.getElementById("votreMsg");
  formMsg=document.getElementById("votreMessage")
  msg.addEventListener("click",function(){
	  formMsg.style.display="block";
	  msg.style.display="none";
  });
  
let form = document.querySelector(".form");
let statusDiv = document.getElementById("formStatus");

if (form) {

    let input = form.querySelector("input");
    let textarea = form.querySelector("textarea");

    form.addEventListener("submit", function(e) {
        e.preventDefault(); // empêche le rechargement de la page

        statusDiv.textContent = "Envoi en cours...";
        statusDiv.style.color = "blue";

        // vider les champs
        input.value = "";
        textarea.value = "";

        setTimeout(function() {
            statusDiv.textContent = "Message envoyé ! Nous vous répondrons sous 48h.";
            statusDiv.style.color = "green";
        }, 2000);
    });
}
