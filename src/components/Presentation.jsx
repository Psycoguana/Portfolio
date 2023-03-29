import { Box, Block, Heading, Icon, Image, Section } from 'react-bulma-components';
import styles from '../styles/Presentation.module.scss';
import profilePic from '../assets/profile_pic.png';

export default function Presentation() {
	return (
		<Section className={styles.container}>
			<Block className={styles.profilePic}>
				{/* <Image
					src="https://marketplace.canva.com/EAFEits4-uw/1/0/1600w/canva-boy-cartoon-gamer-animated-twitch-profile-photo-oEqs2yqaL8s.jpg"
					alt="Profile picture"
					rounded
				/> */}
				<Image src={profilePic} alt="Profile picture" rounded />
				<Heading>Hola, soy Nico 👋</Heading>
				<div className={styles.iconContainer}>
					<Icon size="large" color="white">
						<a href="https://github.com/Psycoguana/" target="_blank">
							<i className="fab fa-github" />
						</a>
					</Icon>
					<Icon size="large" color="white">
						<a href="https://www.linkedin.com/in/sanchez-nico/" target="_blank">
							<i className="fab fa-linkedin" />
						</a>
					</Icon>
					<Icon size="large" color="white">
						<a href="mailto:nico@nicodev.me" target="_blank">
							<i className="fas fa-envelope" />
						</a>
					</Icon>
				</div>
			</Block>

			<Block className={styles.introduction}>
				<Box>
					<p>
						Fullstack Software Developer, amante de la tecnología, y con gran determinación por la
						resolución de problemas.
					</p>
					<br />
					<p>
						Como dev freelance y autodidacta, poseo gran iniciativa, capacidad para aprender de manera
						independiente y trabajar bajo presión.
					</p>
				</Box>
			</Block>
		</Section>
	);
}
