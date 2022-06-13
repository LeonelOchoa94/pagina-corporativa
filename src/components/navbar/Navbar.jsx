import React from 'react';

import './styles.css';
export const Navbar = () => {
	return (
		<>
			<nav className='nav container d-flex justify-content-between sticky'>
				<div className='d-flex'>
					<h3>GoingOut</h3>
					<div className='navegador'>
						<ul>
							<li>
								<a href='#'>Nuestro producto</a>
							</li>
							<li>
								<a href='#conocimiento'>Equipo</a>
							</li>
							<li>
								<a href='#experiencia'>Contacto</a>
							</li>
						</ul>
					</div>
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
