import React from 'react';

import './styles.css';
export const Navbar = () => {
	return (
		<>
			<div className='nav sticky-top'>
				<nav className='sticky-top container d-flex justify-content-between'>
					<div className='d-flex'>
						<h3>GoingOut</h3>
						<div className='navegador'>
							<ul>
								<li>
									<a href='#nosotros'>Sobre nosotros</a>
								</li>
								<li>
									<a href='#producto'>Nuestro producto</a>
								</li>
								<li>
									<a href='#conocimiento'>Equipo</a>
								</li>
								<li>
									<a href='#experiencia'>Contacto</a>
								</li>
								<li>
									<a href='#experiencia'>Clientes</a>
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
			</div>
		</>
	);
};
