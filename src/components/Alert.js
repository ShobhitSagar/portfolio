import React, { useContext } from 'react'
import AppContext from '../StateManagement/AppContext'
import '../assets/styles/Alert.css'

// animate__slideOutUp
function Alert(msg) {
	const [myAlert] = useContext(AppContext)

	return (
		<div className='alert-div'>
			<div
				id='alert-box'
				style={{ display: myAlert }}
				className='animate__animated animate__slideInDown animate__faster'
			>
				<p>{'Mail Sent!'}</p>
			</div>
		</div>
	)
}

export default Alert
