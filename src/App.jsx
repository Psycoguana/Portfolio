import './App.scss';

import Navbar from './components/Navbar';
import Presentation from './components/Presentation';
import Skills from './components/Skills';
import Proyects from './components/Proyects';
import Contact from './components/Contact';
import { useEffect, useState } from 'react';

import { Icon } from 'react-bulma-components';

function App() {
	const [isOnTop, setIsOnTop] = useState(true);

	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY + window.scrollX > 0) {
				setIsOnTop(false);
			} else {
				setIsOnTop(true);
			}
		});
	});

	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add('show');
			}
		});
	});

	useEffect(() => {
		const hiddenElements = document.querySelectorAll('.hidden');
		hiddenElements.forEach((el) => observer.observe(el));
	}, []);

	return (
		<div className="App">
			<Navbar />
			<Presentation />
			<Skills />
			<Proyects />
			{/* <Contact /> */}
			<Icon
				className={`arrowTopIcon ${isOnTop ? 'arrowHidden' : 'arrowVisible'}`}
				size="large"
				color="white"
				onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
			>
				<i className="fas fa-arrow-circle-up" />
			</Icon>
		</div>
	);
}

export default App;
