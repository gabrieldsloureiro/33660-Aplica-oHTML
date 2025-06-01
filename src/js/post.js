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
				.then((response) => {
					console.log(response.data.error);
					if(response.data.error)
					{
						avisoEl.innerHTML =  `Estacionamento lotado.`;
						console.log(response.data);
					}
					else
					{
						avisoEl.innerHTML =  `Carro de placa '${response.data.plate}' cadastrada com sucesso!`;
						info();
						console.log(response.data);
					}
				});
		});
	}

	document.getElementById('cadastro').addEventListener('click', cadastro);

	