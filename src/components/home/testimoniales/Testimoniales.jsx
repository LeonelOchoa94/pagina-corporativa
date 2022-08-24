import React from 'react';
import './styles.css';

export const Testimoniales = () => {
	return (
		<>
			<div className='container titulo-testimonial' data-aos='fade-up' data-aos-duration='4000'>
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
									<p>¡Genial! La aplicación súper práctica. No salgo más sin usar ésta aplicación</p>
								</blockquote>
								<figcaption class='blockquote-footer'>
									Exequiel Suarez<cite title='Source Title'></cite>
								</figcaption>
							</figure>
						</div>
						<div className='carousel-item'>
							<figure class='text-end'>
								<blockquote class='blockquote'>
									<p>Simple, rápido y efectivo. Buenísima ésta aplicación</p>
								</blockquote>
								<figcaption class='blockquote-footer'>
									Quelito García<cite title='Source Title'></cite>
								</figcaption>
							</figure>
						</div>
						<div className='carousel-item'>
							<figure class='text-start'>
								<blockquote class='blockquote'>
									<p>Me encantó la variedad de restaurantes que hay. Muy recomendado</p>
								</blockquote>
								<figcaption class='blockquote-footer'>
									Ariana Ochoa<cite title='Source Title'></cite>
								</figcaption>
							</figure>
						</div>
						<div className='carousel-item'>
							<figure class='text-end'>
								<blockquote class='blockquote'>
									<p>La mejor opción para reservar mesa desde la comodidad de tu casa</p>
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
