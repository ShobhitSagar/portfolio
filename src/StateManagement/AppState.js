import React, { useState, useEffect } from 'react'
import AppContext from './AppContext'

function AppState(props) {
	const [myAlert, setMyAlert] = useState('none')

	const [width, setWidth] = useState(window.innerWidth)
	const updateDimensions = () => {
		setWidth(window.innerWidth)
	}

	useEffect(() => {
		window.addEventListener('resize', updateDimensions)
		return () => window.removeEventListener('resize', updateDimensions)
	}, [])

	return (
		<AppContext.Provider value={([myAlert, setMyAlert], [width, setWidth])}>
			{props.children}
		</AppContext.Provider>
	)
}

export default AppState
