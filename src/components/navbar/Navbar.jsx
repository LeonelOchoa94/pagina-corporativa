import React from 'react';

import './styles.css';
export const Navbar = () => {
	return (
		<>
			<nav className='nav container d-flex justify-content-between'>
				<div className='navegador'>
					<ul>
						<li>
							<a href='#'>Home</a>
						</li>
						<li>
							<a href='#conocimiento'>Conocimientos</a>
						</li>
						<li>
							<a href='#experiencia'>Experiencia</a>
						</li>
						<li>
							<a href='#'>Estudios</a>
						</li>
						<li>
							<a href='#'>Proyectos</a>
						</li>
						<li>
							<a href='#'>Contacto</a>
						</li>
					</ul>
				</div>
				<div className='buttons'>
					<button className='btn btn-secondary' disabled>
						Sign In
					</button>
					<button className='btn btn-outline-secondary' disabled>
						Sign Up
					</button>
				</div>
			</nav>
		</>
	);
};
