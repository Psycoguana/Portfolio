import { useState, useEffect } from 'react';
import { Button, Box, Form, Icon, Heading, Section } from 'react-bulma-components';
import styles from '../styles/Contact.module.scss';

export default function Contact() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [subject, setSubject] = useState('');
	const [formReady, setFormReady] = useState(true);

	useEffect(() => {
		validateForm();
	}, [name, email, message, subject]);

	function isEmailValid(email) {
		const regex =
			/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
		if (!email || regex.test(email) === false) {
			return false;
		}
		return true;
	}

	function validateForm() {
		if (name.length > 0 && subject.length > 0 && isEmailValid(email) && message.length > 0) {
			console.log('Ready');
			setFormReady(false);
		}
	}

	function getEmailFieldColor() {
		if (email.length === 0) {
			return '';
		} else if (isEmailValid(email)) {
			return 'success';
		} else {
			return 'danger';
		}
	}

	return (
		<Section className={`${styles.contactContainer} hidden`}>
			<Heading id="contact">Contactame</Heading>
			<form>
				<Form.Field>
					<Form.Control>
						<Form.Input
							color={name.length > 0 ? 'success' : ''}
							value={name}
							placeholder="Nombre"
							onChange={(e) => {
								return setName(e.target.value);
							}}
						/>
						<Icon align="left" size="small">
							<i className="fas fa-user" />
						</Icon>
						{name.length > 0 && (
							<Icon align="right" size="small" color="primary">
								<i className="fas fa-check" />
							</Icon>
						)}
					</Form.Control>
				</Form.Field>

				<Form.Field>
					<Form.Control>
						<Form.Input
							color={getEmailFieldColor()}
							value={email}
							placeholder="Tu Email"
							onChange={(e) => setEmail(e.target.value)}
						/>
						<Icon align="left" size="small">
							<i className="fas fa-envelope" />
						</Icon>
						{isEmailValid(email) && (
							<Icon align="right" size="small" color="success">
								<i className="fas fa-check" />
							</Icon>
						)}
					</Form.Control>
				</Form.Field>

				<Form.Field>
					<Form.Control>
						<Form.Input
							color={subject.length > 0 ? 'success' : ''}
							value={subject}
							placeholder="Asunto"
							onChange={(e) => {
								return setSubject(e.target.value);
							}}
						/>
						<Icon align="left" size="small">
							<i className="fas fa-comment" />
						</Icon>
						{subject.length > 0 && (
							<Icon align="right" size="small" color="primary">
								<i className="fas fa-check" />
							</Icon>
						)}
					</Form.Control>
				</Form.Field>

				<Form.Field>
					<Form.Textarea
						value={message}
						placeholder="Mensaje"
						onChange={(e) => {
							return setMessage(e.target.value);
						}}
					/>
				</Form.Field>

				<Form.Field>
					<Form.Control>
						<Button color="link" disabled={formReady}>
							Submit
						</Button>
					</Form.Control>
				</Form.Field>
			</form>
		</Section>
	);
}
