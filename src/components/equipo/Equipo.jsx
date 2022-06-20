import './styles.css';

export const Equipo = () => {
	return (
		<>
			<div id='equipo' className='container mb-3' data-aos='fade-up' data-aos-duration='1000'>
				<h1 className='title-equipo'>El equipo detrás de la magia</h1>
				<hr />
				<div className='perfiles container'>
					<div className='perfil-izquierda' data-aos='fade-up' data-aos-anchor-placement='center-center'>
						<img
							src='https://media-exp1.licdn.com/dms/image/C4D03AQHFI-bnvI7Nag/profile-displayphoto-shrink_200_200/0/1650671277114?e=1660176000&v=beta&t=_puVmxniKGWSO5LZimKRV3_m7dT4YO-OvsvKofWWHg4'
							alt='Foto Leo'
						/>
						<div className='info'>
							<h1>Leonel Ochoa</h1>
							<h3>Edad: 27 años</h3>
							<hr />
							<h3>
								Estudiante de la carrera Analista de Sistemas en la escuela de medios audiovisuales Da Vinci.
								Actualmente desempeña la tarea de desarrollador en Mudafy.
							</h3>
						</div>
					</div>
					<div className='perfil-derecha' data-aos='fade-up' data-aos-anchor-placement='center-center'>
						<div className='info'>
							<h1>Lucas Basualdo</h1>
							<h3>Edad: 26 años</h3>
							<hr />
							<h3>
								Estudiante de la carrera Analista de Sistemas en la escuela de medios audiovisuales Da Vinci.
								Actualmente desempeña la tarea de desarrollador en Lisit.
							</h3>
						</div>
						<img
							src='https://media-exp1.licdn.com/dms/image/C4E03AQHzG-OSU040Kg/profile-displayphoto-shrink_200_200/0/1644518766370?e=2147483647&v=beta&t=-1o1XFtko13ahQTs2ucwummF_Mu3QCWOrdDpDRpigrI'
							alt='Foto Leo'
						/>
					</div>
					<div className='perfil-izquierda' data-aos='fade-up' data-aos-anchor-placement='center-center'>
						<img
							src='https://media-exp1.licdn.com/dms/image/C4D03AQHV6vMGXnB2Lw/profile-displayphoto-shrink_200_200/0/1648046606070?e=1660176000&v=beta&t=du4jP6LE3DnAfKq7iTG2WuXS7WylQkBon4-dLPawigs'
							alt='Foto Leo'
						/>
						<div className='info'>
							<h1>Luciano Labudia</h1>
							<h3>Edad: 31 años</h3>
							<hr />
							<h3>
								Estudiante de la carrera Analista de Sistemas en la escuela de medios audiovisuales Da Vinci.
								Actualmente desempeña tareas en el área de gestión en Trasa.
							</h3>
						</div>
					</div>
					<div className='perfil-derecha' data-aos='fade-up' data-aos-anchor-placement='center-center'>
						<div className='info'>
							<h1>Oscar Gimenez</h1>
							<h3>Edad: 25 años</h3>
							<hr />
							<h3>
								Estudiante de la carrera Analista de Sistemas en la escuela de medios audiovisuales Da Vinci.
								Actualmente desempeña la tarea de desarrollador en Nacion Servicios.
							</h3>
						</div>
						<img
							src='data:image/jpeg;base64,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'
							alt='Foto Leo'
						/>
					</div>
				</div>
			</div>
		</>
	);
};
