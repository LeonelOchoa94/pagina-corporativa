import React from 'react';
import './styles.css';
import 'animate.css';

export const Producto = () => {
	return (
		<>
			<div className='title-producto container' data-aos='fade-up' data-aos-duration='4000'>
				<h1>Nuestro Producto</h1>

				<div>
					<h3 className='contenido-producto'>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam ratione ducimus, sint veniam saepe corrupti
						in autem atque, molestias fuga temporibus voluptatum. Ullam accusantium quo culpa id perferendis
						perspiciatis enim. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi assumenda aspernatur ea
						facere voluptates ut sapiente debitis quam hic non officia tempore aliquid, neque deserunt, sequi excepturi
						alias nemo cupiditate.
					</h3>
				</div>
				<div data-aos='fade-down' data-aos-easing='linear' data-aos-duration='1000'>
					<h2 className='title-uso'>Modo de uso</h2>
				</div>
				<div className='paso-izq' data-aos='fade-right' data-aos-offset='300' data-aos-easing='ease-in-sine'>
					<h4 className=''>Paso 1: Seleccioná tu restaurant favorito</h4>
				</div>
				<div className='paso-der' data-aos='fade-left' data-aos-offset='300' data-aos-easing='ease-in-sine'>
					<h4 className=''>Paso 2: Elegí el lugar que más te guste</h4>
				</div>
				<div className='paso-izq' data-aos='fade-right' data-aos-offset='300' data-aos-easing='ease-in-sine'>
					<h4 className=''>Paso 3: Realizá la reserva y abonala por MercadoPago</h4>
				</div>
				<div className='paso-centro' data-aos='fade-up' data-aos-offset='300' data-aos-easing='ease-in-sine'>
					<h4 className=''>LISTO! Tu reserva quedó confirmada y podrás visualizarla en la aplicación</h4>
				</div>
				<h1>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque rerum cumque accusantium rem voluptate
					dolore, maiores expedita atque voluptatem minus ad nobis veritatis. Est nam qui ex reprehenderit sit
					voluptate!
				</h1>
			</div>
		</>
	);
};
