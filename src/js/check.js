const api = 'http://cnms-parking-api.net.uztec.com.br/api/v1/'

const mensagemEl = document.getElementById('mensagem');

const checagem = () => {
		const formulario = document.getElementById('forms_checagem');
		
		formulario.addEventListener('submit', function(event) { 
			event.preventDefault();
			
			const placa = document.getElementById('placa').value;
			
			const dados = {
				plate: placa
			};
			
			axios.get(api + `check/${placa}`, dados)
				 .catch(function (error) {
					if (error.response) {
						mensagemEl.innerHTML =  `Veículo de placa (${placa}) não encontrado!`;
						console.log(response.data);
					}
					})
				.then((response) => {
					mensagemEl.innerHTML =  `Veículo de placa [${response.data.plate}], com horário de entrada (${response.data.entryTime}), encontrado!`;
					console.log(response.data);
				});
		});
	}
	document.getElementById('checagem').addEventListener('click', checagem);

	