const mobileNav = () => {
	const hamburgerMenu = document.querySelector("#hamburger");
	const mobileMenu = document.querySelector("#mobile-menu");

	const toggleMenu = () => {
		const isOpened = hamburgerMenu.getAttribute("aria-expanded") === "true";
		isOpened ? closeMenu() : openMenu();
	};

	const openMenu = () => {
		mobileMenu.classList.add("active");
		hamburgerMenu.setAttribute("aria-expanded", true);
	};

	const closeMenu = () => {
		mobileMenu.classList.remove("active");
		hamburgerMenu.setAttribute("aria-expanded", false);
	};

	hamburgerMenu.addEventListener("click", toggleMenu);
	mobileMenu.addEventListener("click", toggleMenu);
};

export default mobileNav;
