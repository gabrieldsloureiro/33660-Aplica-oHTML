const vagasEl = document.getElementById('vagas');

const api = 'http://cnms-parking-api.net.uztec.com.br/api/v1/'

 const formulario = document.getElementById('form_lvagas');
            
            formulario.addEventListener('submit', function(event) { 
			event.preventDefault();

		axios.get(api + 'slots/')
			.then((response) => {

				vagasEl.innerHTML = 
						`<tr>
							<td>${response.data.totalSlots}</td>
							<td>${response.data.available}</td>
							<td>${response.data.occupied}</td>
						</tr>`;
			})
        })

	info();


	

		
	