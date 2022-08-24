import React from 'react';
import { Navbar } from './navbar/Navbar';
import { Intro } from './intro/Intro';
import { Nosotros } from './nosotros/Nosotros';
import { Equipo } from './equipo/Equipo';
import { Producto } from './producto/Producto';
import { Testimoniales } from './testimoniales/Testimoniales';
import { Contacto } from './contacto/Contacto';

export const Home = () => {
	return (
		<React.StrictMode>
			<Navbar />
			<Intro />
			<Nosotros />
			<Equipo />
			<Producto />
			<Testimoniales />
			<Contacto />
		</React.StrictMode>
	);
};
