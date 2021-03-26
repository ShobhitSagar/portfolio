import React from 'react'
import './Contact.css'

function Contact() {
	const handleSubmit = (e) => {
		e.preventDefault()
		console.log('Message')
	}
	return (
		<div className="contact-div">
			<h1>Contact</h1>

			<form onSubmit={handleSubmit}>
				<input type="text" placeholder="Email" />
				<input type="text" placeholder="Subject" />
				<textarea
					name="msg"
					// cols="30"
					rows="10"
					placeholder="Message"
				></textarea>
				<button style={{ color: 'black' }}>Send</button>
			</form>
		</div>
	)
}

export default Contact
