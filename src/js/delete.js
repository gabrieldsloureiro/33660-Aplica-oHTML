const api = 'http://cnms-parking-api.net.uztec.com.br/api/v1/'

const canceladoEl = document.getElementById('cancelado');

const cancelar = () => {
		const formulario = document.getElementById('forms_cancelar');
		
		formulario.addEventListener('submit', function(event) { 
			event.preventDefault();
			
			const placa = document.getElementById('placa').value;
			
			const dados = {
				plate: placa,
			};
			
			axios.delete(api + `cancel/${placa}`, dados)
			.catch(function (error) {
					if (error.response) {
						canceladoEl.innerHTML =  `Não foi possível deletar seu carro do estacionamento.`;
						console.log(response.data);
					}
					})
				.then((response) => {
					canceladoEl.innerHTML =  `Carro de placa: (${response.data.plate}) foi deletado!`;
					console.log(response.data);
				});
		});
	}

	document.getElementById('cancelar').addEventListener('click', cancelar);