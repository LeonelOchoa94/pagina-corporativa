import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Navbar } from './components/navbar/Navbar';
import { Intro } from './components/intro/Intro';
import { Producto } from './components/producto/Producto';
import { Equipo } from './components/equipo/Equipo';
import { Contacto } from './components/contacto/Contacto';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<>
		<Navbar />
		<Intro />
		<Producto />
		<Equipo />
		<Contacto />
	</>
);
