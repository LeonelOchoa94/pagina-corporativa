import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';
export const Navbar = () => {
	return (
		<>
			<div className='nav sticky-top'>
				<nav className='nav container d-flex justify-content-between'>
					<div className='d-flex'>
						<h3>GoingOut</h3>
						<div className='navegador'>
							<ul>
								<li>
									<a href='#home'>Home</a>
								</li>
								<li>
									<a href='#nosotros'>Sobre nosotros</a>
								</li>
								<li>
									<a href='#producto'>Nuestro producto</a>
								</li>
								<li>
									<a href='#contacto'>Contacto</a>
								</li>
							</ul>
						</div>
					</div>
					<Link to='signIn' className='btn btn-secondary'>
						Sign In
					</Link>
				</nav>
			</div>
		</>
	);
};
