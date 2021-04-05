import React, { useState } from 'react'
import Project from './Project'
import uuid from 'react-uuid'

function Projets() {
	const [projects] = useState([
		{
			title: 'Vehicle Dealer Record',
			desc:
				'Android app for Two-wheeler dealers. It keep records of all the vehicles purchased and sold.',
			link: 'https://github.com/ShobhitSagar/VehicleSellPurchase',
		},
		{
			title: 'Android Keyboard',
			desc: 'A basic Android keyboard.',
			link: 'https://github.com/ShobhitSagar/Simple-Keybard',
		},
		{
			title: 'Todo React App',
			desc:
				'A todo app. Create, delete, mark completed/not completed and create different Lists.',
			link: 'https://github.com/ShobhitSagar/To-Do-React-App',
		},
		{
			title: 'Popular Movie App',
			desc: 'This is a demo project 2. I created this on 15th feb 2020.',
			link: 'https://github.com/ShobhitSagar/TMDB-App',
		},
		{
			title: 'Meme Generator',
			desc: 'This is a demo project 2. I created this on 15th feb 2020.',
			link: 'https://github.com/ShobhitSagar/Meme-Generator-FCC',
		},
		{
			title: 'Quiz App',
			desc: 'A quiz android app.',
			link: 'https://github.com/ShobhitSagar/Quiz',
		},
		{
			title: 'Wave',
			desc: 'This is a demo project 2. I created this on 15th feb 2020.',
			link: 'https://github.com/ShobhitSagar/Wave',
		},
		{
			title: 'Vehicle Shop',
			desc: 'This is a demo project 2. I created this on 15th feb 2020.',
			link: 'https://github.com/ShobhitSagar/TranspotWeb',
		},
		{
			title: 'Friendly Chat App',
			desc: 'This is a demo project 2. I created this on 15th feb 2020.',
			link: 'https://github.com/ShobhitSagar/FriendlyChat',
		},
		{
			title: 'My College App',
			desc: 'This is a demo project 2. I created this on 15th feb 2020.',
			link: 'https://github.com/ShobhitSagar/MyCollege',
		},
		{
			title: 'Car Pool Website',
			desc: 'This is a demo project 2. I created this on 15th feb 2020.',
			link: 'https://github.com/ShobhitSagar/Car-Pool-Website',
		},
		{
			title: 'Bootstrap Website',
			desc: 'This is a demo project 2. I created this on 15th feb 2020.',
			link: 'https://github.com/ShobhitSagar/ShobhitSagar.github.io',
		},
		{
			title: 'Spin App',
			desc: 'This is a demo project 2. I created this on 15th feb 2020.',
			link: 'https://github.com/ShobhitSagar/Spin',
		},
		{
			title: 'Wallpaper App',
			desc: 'This is a demo project 2. I created this on 15th feb 2020.',
			link: 'https://github.com/ShobhitSagar/WallsS',
		},
		{
			title: 'Destiny App',
			desc: 'This is a demo project 2. I created this on 15th feb 2020.',
			link: 'https://github.com/ShobhitSagar/Destiny',
		},
		{
			title: 'FB Realtime Database',
			desc: 'This is a demo project 2. I created this on 15th feb 2020.',
			link: 'https://github.com/ShobhitSagar/FirebaseTest',
		},
	])

	return (
		<div id='projects-div' style={projectsStyle}>
			<h1 style={title}>Projects</h1>
			<div style={projList}>
				{projects.map((proj) => (
					<Project key={uuid()} proj={proj} />
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
