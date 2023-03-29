import { Heading, Section, Card, Container, Icon } from 'react-bulma-components';
import styles from '../styles/Proyects.module.scss';
import ghibli from '../assets/projects/ghibli.png';
import sakura from '../assets/projects/sakura.png';
import pushshift from '../assets/projects/pushshift.png';

export default function Proyects() {
	const projects = [
		{
			title: 'Exploraror de Películas de Ghibli',
			image: ghibli,
			content: "Explore the different Ghibli Movies, it's characters and species",
			footer: 'Footer!',
			url: 'https://github.com/Psycoguana/Ghibli-Explorer',
		},
		{
			title: 'Sakura Cards Displayer',
			image: sakura,
			content: 'Sakura Card Captor beautiful card art displayed onto a 3D object',
			footer: 'Footer!',
			url: 'https://github.com/Psycoguana/Sakura-Card-Captor-Displayer',
		},
		{
			title: 'PushShift User Searcher',
			image: pushshift,
			content: "Easily scan through a reddit's user submission's history 😎",
			footer: '',
			url: 'https://github.com/Psycoguana/Pushift-User-Searcher',
		},
	];

	function ProjectFooter(project) {
		const proj = project['project'];

		return (
			<Card.Footer className={styles.footer}>
				<Icon size="large">
					<a href={proj.url} target="_blank">
						<i className="fa-brands fa-github" />
						<strong>Código</strong>
					</a>
				</Icon>
				<Icon size="large">
					<a href={proj.url} target="_blank">
						<i className="fas fa-globe-americas" />
						<strong>Website</strong>
					</a>
				</Icon>
				{project.footer}
			</Card.Footer>
		);
	}

	return (
		<Section id="projects" className={`${styles.projects} hidden`}>
			<Heading>Proyectos</Heading>
			<Container className={styles.projectsContainer}>
				{projects.length > 0 &&
					projects.map((project) => {
						return (
							<Card className={styles.card}>
								<Card.Header.Title className={styles.cardHeaderTitle}>
									{project.title}
								</Card.Header.Title>
								<Card.Image src={project.image} />
								<Card.Content>{project.content}</Card.Content>
								{<ProjectFooter project={project} />}
							</Card>
						);
					})}
			</Container>
		</Section>
	);
}
