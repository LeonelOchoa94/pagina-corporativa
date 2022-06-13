import './styles.css';

export const Contacto = () => {
	return (
		<>
			<div className='container contactos justify-content-center '>
				<h1>Contacto</h1>
				<div className='contacto  d-flex justify-content-center'>
					<form>
						<div class='mb-3'>
							<label for='exampleInputEmail1' class='form-label'>
								Email address
							</label>
							<input type='email' class='form-control' id='exampleInputEmail1' aria-describedby='emailHelp' />
							<div id='emailHelp' class='form-text'>
								We'll never share your email with anyone else.
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
						<button type='submit' class='btn btn-primary'>
							Enviar
						</button>
					</form>
				</div>
			</div>
		</>
	);
};
