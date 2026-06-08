	const openLiensAchco=document.getElementById("menuAchco");
				const liensachco=document.getElementById("liens_Achco");
				
				openLiensAchco.addEventListener("click", function(){
				liensachco.style.display="block";
				
				})
				
				liensachco.addEventListener("click", function(){
				liensachco.style.display="none";
				})	
			
			
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
					})
		
			
			

const images = document.querySelectorAll('.gallery img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

const closeBtn = document.querySelector('.close');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;

// Ouvrir image
images.forEach((img, index) => {
    img.addEventListener('click', () => {
        currentIndex = index;
        showImage();
        lightbox.classList.add('active');
    });
});

function showImage(){
    lightboxImg.src = images[currentIndex].src;
}

// Fermer
closeBtn.addEventListener('click', () => {
    lightbox.classList.remove('active');
});

// Suivant
nextBtn.addEventListener('click', () => {
   currentIndex = (currentIndex + 1) % images.length;
    showImage();
});

// Précédent
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage();
});

// Fermer avec ESC
document.addEventListener('keydown', (e) => {
    if(e.key === 'Escape'){
        lightbox.classList.remove('active');
    }

    if(e.key === 'ArrowRight'){
        currentIndex = (currentIndex + 1) % images.length;
        showImage();
    }

    if(e.key === 'ArrowLeft'){
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage();
    }
});
