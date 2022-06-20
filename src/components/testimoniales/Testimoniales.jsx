import React from 'react';
import './styles.css';

export const Testimoniales = () => {
	return (
		<>
			<div className='container titulo-testimonial'>
				<h1>Testimonios</h1>
				<hr />
				<div
					id='carouselExampleControlsNoTouching'
					className='container testimonial carousel slide'
					data-bs-touch='false'
					data-bs-interval='false'>
					<div className='carousel-inner'>
						<div className='carousel-item active'>
							<figure class='text-start'>
								<blockquote class='blockquote'>
									<p>¡Genial! La aplicación super practica. No salgo mas sin usar ésta aplicacion</p>
								</blockquote>
								<figcaption class='blockquote-footer'>
									Exequiel Suarez<cite title='Source Title'></cite>
								</figcaption>
							</figure>
						</div>
						<div className='carousel-item'>
							<figure class='text-end'>
								<blockquote class='blockquote'>
									<p>Simple, rápido y efectivo. Buenisima esta aplicacion</p>
								</blockquote>
								<figcaption class='blockquote-footer'>
									Quelito Garcia<cite title='Source Title'></cite>
								</figcaption>
							</figure>
						</div>
						<div className='carousel-item'>
							<figure class='text-start'>
								<blockquote class='blockquote'>
									<p>Me encanto la variedad de restaurantes que hay. Muy recomendado</p>
								</blockquote>
								<figcaption class='blockquote-footer'>
									Ariana Ochoa<cite title='Source Title'></cite>
								</figcaption>
							</figure>
						</div>
						<div className='carousel-item'>
							<figure class='text-end'>
								<blockquote class='blockquote'>
									<p>La mejor opcion para reservar mesa desde la comodidad de tu casa</p>
								</blockquote>
								<figcaption class='blockquote-footer'>
									Marcela Garofalo<cite title='Source Title'></cite>
								</figcaption>
							</figure>
						</div>
					</div>
					<button
						className='carousel-control-prev'
						type='button'
						data-bs-target='#carouselExampleControlsNoTouching'
						data-bs-slide='prev'>
						<span className='carousel-control-prev-icon' aria-hidden='true'></span>
						<span className='visually-hidden'>Previous</span>
					</button>
					<button
						className='carousel-control-next'
						type='button'
						data-bs-target='#carouselExampleControlsNoTouching'
						data-bs-slide='next'>
						<span className='carousel-control-next-icon' aria-hidden='true'></span>
						<span className='visually-hidden'>Next</span>
					</button>
				</div>
			</div>
		</>
	);
};
