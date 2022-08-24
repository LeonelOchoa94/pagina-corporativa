import './styles.css';

export const Contacto = () => {
	const enviar = () => {
		alert('Su consulta ha sido enviada con éxito. Nos contactaremos con usted a la brevedad. GoingOut');
	};

	return (
		<>
			<div
				id='contacto'
				className='container contactos justify-content-center'
				data-aos='flip-left'
				data-aos-easing='ease-out-cubic'
				data-aos-duration='2000'>
				<h1>Contacto</h1>
				<hr />
				<div className='contacto  d-flex justify-content-center'>
					<form>
						<div class='mb-3'>
							<label for='exampleInputEmail1' class='form-label'>
								Email
							</label>
							<input type='email' class='form-control' id='exampleInputEmail1' aria-describedby='emailHelp' />
							<div id='emailHelp' class='form-text'>
								Nunca compartiremos ésta información con nadie
							</div>
						</div>
						<div class='mb-3'>
							<label for='exampleInputEmail1' class='form-label'>
								Tipo de usuario
							</label>
							<select class='form-select' aria-label='Default select example'>
								<option selected>Usuario final</option>
								<option value='1'>Cliente</option>
							</select>
						</div>
						<div class='mb-3'>
							<label for='exampleInputEmail1' class='form-label'>
								Asunto
							</label>
							<input class='form-control form-control-sm' type='text' aria-label='.form-control-sm example' />
						</div>
						<div class='mb-3'>
							<label for='exampleFormControlTextarea1' class='form-label'>
								Texto
							</label>
							<textarea class='form-control' id='exampleFormControlTextarea1' rows='3'></textarea>
						</div>
						<button onClick={enviar} type='submit' class='btn btn-enviar'>
							Enviar
						</button>
					</form>
				</div>
			</div>
		</>
	);
};
