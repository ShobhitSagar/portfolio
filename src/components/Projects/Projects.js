import React, { useState } from 'react'
import Project from './Project'

function Projets() {
	const [projects, setProjects] = useState([
		{
			id: '1',
			title: 'Demo Project 1',
			desc: 'This is a demo project 1. I created this on 15th feb 20202.',
		},
		{
			id: '2',
			title: 'Demo Project 2',
			desc: 'This is a demo project 2. I created this on 15th feb 20202.',
		},
		{
			id: '2',
			title: 'Demo Project 2',
			desc: 'This is a demo project 2. I created this on 15th feb 20202.',
		},
		{
			id: '2',
			title: 'Demo Project 2',
			desc: 'This is a demo project 2. I created this on 15th feb 20202.',
		},
		{
			id: '2',
			title: 'Demo Project 2',
			desc: 'This is a demo project 2. I created this on 15th feb 20202.',
		},
		{
			id: '2',
			title: 'Demo Project 2',
			desc: 'This is a demo project 2. I created this on 15th feb 20202.',
		},
		{
			id: '2',
			title: 'Demo Project 2',
			desc: 'This is a demo project 2. I created this on 15th feb 20202.',
		},
		{
			id: '2',
			title: 'Demo Project 2',
			desc: 'This is a demo project 2. I created this on 15th feb 20202.',
		},
	])

	return (
		<div style={projectsStyle}>
			<h1 style={title}>Projects</h1>
			<div style={projList}>
				{projects.map((proj) => (
					<Project proj={proj} />
				))}
			</div>
		</div>
	)
}

const projectsStyle = {
	height: 'auto',
	padding: '80px 0',
	// backgroundImage: 'linear-gradient(to right, #41295a, #2F0743)',
}

const title = {
	margin: '0 0 60px 0',
}

const projList = {
	width: '80%',
	margin: 'auto',

	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	flexFlow: 'row wrap',
}

export default Projets
