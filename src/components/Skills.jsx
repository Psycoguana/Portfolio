import { Box, Block, Container, Heading, Icon, Image, Section } from 'react-bulma-components';
import styles from '../styles/Skills.module.scss';

export default function Skills() {
	const frontendSkills = [
		'fa-brands fa-html5',
		'fa-brands fa-css3-alt',
		'fa-brands fa-square-js',
		'fa-brands fa-react',
	];

	const backendSkills = ['fa-brands fa-square-js', 'fa-brands fa-node-js', 'fa-solid fa-database'];

	const miscSkills = ['fab fa-linux', 'fa-brands fa-git-alt', 'fab fa-github', 'fa-brands fa-npm'];

	function Skill(title, skills) {
		return (
			<Container className={`${styles.skillsContainer}`}>
				<Heading subtitle className={styles.subtitle}>
					{title}
				</Heading>
				<div className={styles.iconContainer}>
					{skills.length > 0 &&
						skills.map((skill) => {
							return (
								<Icon color="white">
									{/* <a href="https://github.com/Psycoguana/" target="_blank"> */}
									<i className={skill + ' fa-3x'} />
									{/* </a> */}
								</Icon>
							);
						})}
				</div>
			</Container>
		);
	}

	return (
		<Section id="skills" className={`${styles.skillsSection} hidden`}>
			<Heading>Skills</Heading>
			<div>
				{Skill('Frontend', frontendSkills)}
				{Skill('Backend', backendSkills)}
				{Skill('Otras', miscSkills)}
			</div>
		</Section>
	);
}
