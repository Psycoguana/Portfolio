import { useEffect } from 'react';
import { Navbar as BNavbar, Image } from 'react-bulma-components';

import styles from '../styles/Navbar.module.scss';

export default function Navbar() {
	useEffect(() => {
		// Close navbar when it loses focus.
		const nav = document.getElementById('navMenu');

		document.addEventListener('click', (e) => {
			if (nav.classList.contains('is-active')) {
				if (!e.target.classList.contains('navbar-burger') && !e.target.classList.contains('navbar-item')) {
					toggleActive();
				}
			}
		});
	}, []);

	function toggleActive() {
		const navbarMenu = document.getElementById('navMenu');

		if (navbarMenu.classList.contains('is-active')) {
			navbarMenu.classList.remove('is-active');
		} else {
			navbarMenu.classList.add('is-active');
		}
	}

	function scrollTo(id) {
		const element = document.querySelector(`#${id}`);
		const topPos = element.getBoundingClientRect().top + window.pageYOffset;

		window.scrollTo({
			top: topPos, // Scroll so that the element is at the top of the view
			behavior: 'smooth', // Smooth scroll
		});

		toggleActive();
	}

	return (
		<BNavbar id={styles.nav} fixed="top">
			<BNavbar.Brand>
				<BNavbar.Item href="/">
					<Image
						src="https://em-content.zobj.net/thumbs/120/google/350/man-technologist_1f468-200d-1f4bb.png"
						alt="Man Technologist Emoji"
					></Image>
				</BNavbar.Item>

				<BNavbar.Burger
					onClick={() => {
						toggleActive();
					}}
				></BNavbar.Burger>
			</BNavbar.Brand>

			<BNavbar.Menu id="navMenu">
				<BNavbar.Container>
					<BNavbar.Item onClick={() => scrollTo('skills')}>Skills</BNavbar.Item>
					<BNavbar.Item onClick={() => scrollTo('projects')}>Proyectos</BNavbar.Item>
					{/* <BNavbar.Item href="/">Sobre mi</BNavbar.Item> */}
					{/* <BNavbar.Item onClick={() => scrollTo('contact')}>Contacto</BNavbar.Item> */}
				</BNavbar.Container>
			</BNavbar.Menu>
		</BNavbar>
	);
}
