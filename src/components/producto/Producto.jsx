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

				{/* inicio del timeline */}

				<h2 className='pasos' data-aos='fade-up' data-aos-duration='4000'>
					Modo de uso
				</h2>

				<div class='timeline'>
					<div
						class='container-timeline left'
						data-aos='fade-right'
						data-aos-offset='300'
						data-aos-easing='ease-in-sine'>
						<div class='content'>
							<h2>Paso 1:</h2>
							<h3>Seleccioná tu restaurant favorito</h3>
						</div>
					</div>
					<div
						class='container-timeline right'
						data-aos='fade-left'
						data-aos-offset='300'
						data-aos-easing='ease-in-sine'>
						<div class='content'>
							<h2>Paso 2:</h2>
							<h3>Elegí el lugar que más te guste</h3>
						</div>
					</div>
					<div
						class='container-timeline left'
						data-aos='fade-right'
						data-aos-offset='300'
						data-aos-easing='ease-in-sine'>
						<div class='content'>
							<h2>Paso 3:</h2>
							<h3>Realizá la reserva y abonala por MercadoPago</h3>
						</div>
					</div>
					<div
						class='container-timeline right'
						data-aos='fade-left'
						data-aos-offset='300'
						data-aos-easing='ease-in-sine'>
						<div class='content'>
							<h2>LISTO!</h2>
							<h2>Tu reserva quedó confirmada y podrás visualizarla en la aplicación</h2>
						</div>
					</div>
				</div>
				{/* Fin del timeline */}
				<div>
					<h3>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum sunt dolores nisi quaerat inventore
						obcaecati! Dolor, assumenda dolores exercitationem sapiente suscipit repudiandae hic. Ratione perferendis
						velit accusantium illum saepe tenetur?
					</h3>
				</div>
			</div>
		</>
	);
};
