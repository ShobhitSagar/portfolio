import React, { useRef, useState } from 'react'
import '../assets/styles/Navbar.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import myLogo from '../assets/images/MyLogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
	const [dropdown, setDropdown] = useState(false)
	const dropdownBtnRef = useRef()
	const linkSectionRef = useRef()

	const handleDropdown = () => {
		linkSectionRef.current.style.display = dropdown ? 'none' : 'flex'
		setDropdown(!dropdown)
	}

	return (
		<nav>
			{/* <strong>Shobhit Sagar</strong> */}
			<div className='left-nav-div'>
				<img src={myLogo} alt='logo' />
				<button ref={dropdownBtnRef} onClick={handleDropdown}>
					<FontAwesomeIcon
						style={{ height: '30px', width: '30px' }}
						icon={dropdown ? faTimes : faBars}
					/>
				</button>
			</div>
			<section ref={linkSectionRef} className='link-section'>
				<AnchorLink onClick={handleDropdown} href='#about-div'>
					About
				</AnchorLink>
				<AnchorLink onClick={handleDropdown} href='#projects-div'>
					Projects
				</AnchorLink>
				<AnchorLink onClick={handleDropdown} href='#contact-div'>
					Contact
				</AnchorLink>
			</section>
		</nav>
	)
}

export default Navbar
