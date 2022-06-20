import React from 'react';
import './styles.css';
import 'animate.css';

export const Producto = () => {
	return (
		<>
			<div id='producto' className='title-producto container' data-aos='fade-up' data-aos-duration='4000'>
				<h1>Nuestro Producto</h1>
				<hr />
				<div>
					<h3 className='contenido-producto'>
						Producto de la pandemia, muchas actividades se hicieron de forma digital y se explotaron mercados que hasta
						ese momento no habian sido explotados. En corcodancia con esta situacion, decidimos crear esta aplicación
						para satisfacer una necesidad que hasta hoy, no ha sido satisfecha. Por esta razon creamos GoingOut, la
						nueva aplicación que te permite reservar una mesa en tu bar o restaurant favorito ¡sin moverte de la
						comodidad de tu sillón!
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
			</div>
		</>
	);
};
