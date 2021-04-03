import React, { useContext } from 'react'
import AppContext from '../StateManagement/AppContext'
import emailjs from 'emailjs-com'
import '../assets/styles/Contact.css'

function Contact() {
	const [setMyAlert] = useContext(AppContext)

	function showAlert() {
		setMyAlert('block')
		setTimeout(() => {
			setMyAlert('none')
		}, 1300)
	}

	function sendEmail(e) {
		e.preventDefault()

		emailjs
			.sendForm(
				'gmail_devss',
				'emailjs_gmail_template',
				e.target,
				'user_ivxeQpuPYHryzeUITadwL'
			)
			.then(
				(result) => {
					showAlert()
				},
				(error) => {
					alert('Mail not Sent!')
				}
			)
		e.target.reset()
	}

	return (
		<div id='contact-div' className='contact-div'>
			<h1>Contact</h1>

			<form onSubmit={sendEmail}>
				<input type='text' placeholder='Full Name' name='from_name' />
				<input type='text' placeholder='Email*' name='email' required />
				<input type='text' placeholder='Subject' name='subject' />
				<textarea
					name='message'
					// cols="30"
					rows='10'
					placeholder='Message*'
					required
				></textarea>
				<button style={{ color: 'black' }}>Send</button>
			</form>
		</div>
	)
}

export default Contact
