const api = 'http://cnms-parking-api.net.uztec.com.br/api/v1/'

const saidaEl = document.getElementById('saida');

const regsaida = () => {
		const formulario = document.getElementById('forms_saida');
		
		formulario.addEventListener('submit', function(event) { 
			event.preventDefault();
			
			const placa = document.getElementById('placa').value;
			
			axios.patch(api + `/exit/${placa}`)
			.catch(function (error) {
					if (error.response) {
						saidaEl.innerHTML =  `Não foi possível registrar a saída do seu veículo.`;
						console.log(response.data);
					}
					})
			.then((response) => {
					saidaEl.innerHTML =  `Veículo de placa: [${response.data.plate}], permaneceu ` + Math.round(response.data.parkedTime) +'min no estacionamento, aproximadamente, '+ Math.round(response.data.parkedTime/60) +'h.';
					console.log(response.data);
				});
		});
	}

	document.getElementById('regsaida').addEventListener('click', regsaida);
