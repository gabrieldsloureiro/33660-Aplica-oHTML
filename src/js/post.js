const api = 'http://cnms-parking-api.net.uztec.com.br/api/v1/'

const avisoEl = document.getElementById('aviso');

const cadastro = () => {
		const formulario = document.getElementById('forms');
		
		formulario.addEventListener('submit', function(event) { 
			event.preventDefault();
			
			const placa = document.getElementById('placa').value;
			const modelo = document.getElementById('modelo').value;
			
			const dados = {
				plate: placa,
				model: modelo
			};
			
				axios.post(api + 'entry/', dados)

					.catch(function (error) {
					if (error.response) {
						avisoEl.innerHTML =  `ESTAMOS LOTADOS!`;
						console.log(response.data);
					}
					})
				.then((response) => {
					avisoEl.innerHTML =  `Veículo de placa: [${response.data.plate}] registrado!`;
					console.log(response.data);
				});
		});
	}

	document.getElementById('cadastro').addEventListener('click', cadastro);

	