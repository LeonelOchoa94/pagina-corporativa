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
							src='https://media-exp2.licdn.com/dms/image/C4D03AQEU9ie6SGSGSw/profile-displayphoto-shrink_800_800/0/1648051434961?e=1660780800&v=beta&t=8ThtNZaMWrSFuMC4b2wPU08ZZuD2F_helyVJSPbwTts'
							alt='Foto Leo'
						/>
					</div>
				</div>
			</div>
		</>
	);
};
