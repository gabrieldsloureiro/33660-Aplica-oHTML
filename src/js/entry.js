const veiculosEl = document.getElementById('veiculos');

const api = 'http://cnms-parking-api.net.uztec.com.br/api/v1/'

	const info = () => {

		const formulario = document.getElementById('forms_veiculos');
		
		formulario.addEventListener('submit', function(event) { 
		event.preventDefault();

		axios.get(api + 'active/')
			.then((response) => {

				let out = "";
				response.data.forEach((veiculo) => {
					out += 
						`<tr>
							<td>${veiculo.plate}</td>
							<td>${veiculo.model}</td>
							<td>${veiculo.entryTime}</td>
						</tr>
					`;
				});
				veiculosEl.innerHTML = out;
			})
	    })
    }
	info();
	

