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
						saidaEl.innerHTML =  `Não foi possível registrar a saída do seu carro.`;
						console.log(response.data);
					}
					})
			.then((response) => {
					saidaEl.innerHTML =  `Carro de placa '${response.data.plate}', com horário de saída ` + Math.round(response.data.parkedTime) +'min (~'+ Math.round(response.data.parkedTime/60) +'h) , saiu do estacionamento';
					console.log(response.data);
				});
		});
	}

	document.getElementById('regsaida').addEventListener('click', regsaida);
