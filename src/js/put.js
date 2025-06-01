const api = 'http://cnms-parking-api.net.uztec.com.br/api/v1/'

const atualizadoEl = document.getElementById('atualizado');

const atualize = () => {
		const formulario = document.getElementById('forms_atualizar');
		
		formulario.addEventListener('submit', function(event) { 
			event.preventDefault();
			
			const placa = document.getElementById('placa').value;
            const novaplaca = document.getElementById('novaplaca').value;
            const novomodelo = document.getElementById('novomodelo').value;
            
			
			const dados = {
				plate: placa,
                		newPlate: novaplaca,
                		newModel: novomodelo
			};
			
			axios.put(api + `update/${placa}`, dados)
			.catch(function (error) {
					if (error.response) {
						atualizadoEl.innerHTML =  `Não foi possível atualizar as informações do seu carro.`;
						console.log(response.data);
					}
					})
				.then((response) => {
					atualizadoEl.innerHTML =  `Informações do Carro com horário de entrada '${response.data.entryTime}', atualizado!`;
					console.log(response.data);
				});
		});
	}

	document.getElementById('atualize').addEventListener('click', atualize);