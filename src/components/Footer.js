import React from 'react'
import '../assets/styles/Footer.css'
import myIcon from '../assets/images/MyIcon.png'

function Footer() {
	return (
		<footer
			id='footer'
			className='container-fluid text-center container-fluid2'
		>
			<div className='row'>
				<div className='col-sm-4'>
					<h3>Contact Us</h3>
					<br />
					<h4>Our address and contact info here.</h4>
				</div>
				<div className='col-sm-4'>
					<h3>Connect</h3>
					<a
						href='https://www.facebook.com/yogesh.sagar.549'
						target='_blank'
						className='fa fa-facebook'
					></a>
					<a
						href='https://twitter.com/shobhitsagar01'
						target='_blank'
						className='fa fa-twitter'
					></a>
					<a
						href='https://www.instagram.com/sudo_codes.ig/'
						target='_blank'
						className='fa fa-instagram'
					></a>
					<a
						href='https://www.linkedin.com/in/shobhit-sagar-50765414b/'
						target='_blank'
						className='fa fa-linkedin'
					></a>
					<a
						href='https://www.youtube.com/channel/UCyfy7slnkEvjN6Q_ua9XiYg'
						target='_blank'
						className='fa fa-youtube'
					></a>
				</div>
				<div className='col-sm-4'>
					<img
						style={{ width: '100px', height: '100px' }}
						src={myIcon}
						className='icon'
					/>
				</div>
			</div>
		</footer>
	)
}

export default Footer
