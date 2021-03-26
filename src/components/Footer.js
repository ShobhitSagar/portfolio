import React from 'react'
import './Footer.css'
import mylogo from './MyLogo2-Recovered.png'
import myIcon from './MyIcon.png'

function Footer() {
	return (
		<footer id="footer" class="container-fluid text-center container-fluid2">
			<div class="row">
				<div class="col-sm-4">
					<h3>Contact Us</h3>
					<br />
					<h4>Our address and contact info here.</h4>
				</div>
				<div class="col-sm-4">
					<h3>Connect</h3>
					<a
						href="https://www.facebook.com/yogesh.sagar.549"
						target="_blank"
						class="fa fa-facebook"
					></a>
					<a
						href="https://twitter.com/shobhitsagar01"
						target="_blank"
						class="fa fa-twitter"
					></a>
					<a href="#" target="_blank" class="fa fa-google"></a>
					<a
						href="https://www.linkedin.com/in/shobhit-sagar-50765414b/"
						target="_blank"
						class="fa fa-linkedin"
					></a>
					<a
						href="https://www.youtube.com/channel/UCyfy7slnkEvjN6Q_ua9XiYg"
						target="_blank"
						class="fa fa-youtube"
					></a>
				</div>
				<div class="col-sm-4">
					<img
						style={{ width: '100px', height: '100px' }}
						src={myIcon}
						class="icon"
					/>
				</div>
			</div>
		</footer>
	)
}

export default Footer
