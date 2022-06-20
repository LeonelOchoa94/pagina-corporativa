import React from 'react';
import './styles.css';
import 'animate.css';

export const Nosotros = () => {
	return (
		<>
			<div id='nosotros' className='container title-nosotros' data-aos='fade-up' data-aos-duration='4000'>
				<h1>Sobre nosotros</h1>
				<hr />
				<h3 className='contenido-nosotros'>
					<h4>Nuestra misión </h4>
					<p>
						A partir de la pandemia, fue necesario adaptar todo para hacerlo a distancia. Es por esto que optamos por
						una aplicación que facilitara tanto, la disponibilidad de lugares dentro de un restaurante, así como también
						poder pedir a distancia, poder reservar por medios de pago electrónicos y funciones variadas para hacer de
						la app una aplicación integral que abarque todos los aspectos que el restaurante y el cliente necesitan.
					</p>
					<h4>Nuestro objetivo</h4>
					<p>
						Facilitar la experiencia de reservar una mesa en un bar o restaurant, desde la comodidad de tu casa. Nuestra
						motivación principal es generar una excelente experiencia de usuario al automatizar el proceso de reserva de
						mesas.{' '}
					</p>
				</h3>
			</div>
		</>
	);
};
