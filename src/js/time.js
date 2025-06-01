const api = 'http://cnms-parking-api.net.uztec.com.br/api/v1/'
	
	const checagemEl = document.getElementById('checagem');
	
	const tempo_veiculo = () => {
		const formulario = document.getElementById('forms_permanencia');
		
		formulario.addEventListener('submit', function(event) { 
			event.preventDefault();
			
			const placa = document.getElementById('placa').value;
			
			const dados = {
				plate: placa
			};
			
			axios.get(api + `time/${placa}`, dados)
				 .catch(function (error) {
					if (error.response) {
						checagemEl.innerHTML =  `Veículo de placa '${placa}' não foi encontrada!`;
						console.log(response.data);
					}
					})
				.then((response) => {
					checagemEl.innerHTML =  `Veículo de placa '${response.data.plate}', que permaneceu `+ Math.round(response.data.parkedTime) +'min (~'+ Math.round(response.data.parkedTime/60) +'h) , encontrada com sucesso!';
					console.log(response.data);
				});
		});
	}

	document.getElementById('tempo_veiculo').addEventListener('click', tempo_veiculo);