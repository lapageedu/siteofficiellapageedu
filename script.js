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
