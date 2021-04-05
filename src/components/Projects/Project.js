import React from 'react'
import '../../assets/styles/Project.css'

function Project({ proj }) {
	return (
		<div class='proj-div'>
			<h5 class=''>{proj.title}</h5>
			<section>
				<hr />
				<p>{proj.desc}</p>
				<a target='_blank' href={proj.link}>
					View Project
				</a>
			</section>
		</div>
	)
}

export default Project
