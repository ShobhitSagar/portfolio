import React from 'react'
import './About.css'

function About() {
	return (
		<div className="about-div">
			<h1>About</h1>
			<div
				style={{ width: '40px', height: '1px', backgroundColor: '#000' }}
			></div>
			<div style={{ marginTop: '10px', fontSize: '20px' }}>
				<p>
					My name is Shobhit Sagar. I'm a freelancer. I was born and raised in
					Ghaziabad.
				</p>
				<p>
					I like to travel. I believe travelling gives you a new perspective to
					everything. You get to know a lot about the different cultures, their
					history, the language and all the small unique things every place has
					to offer.
				</p>
			</div>
		</div>
	)
}

export default About
