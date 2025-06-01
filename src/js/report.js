
const balancoEl = document.getElementById('balanco');

const dataEl = document.getElementById('data');
const lucroEl = document.getElementById('lucro');

const api = 'http://cnms-parking-api.net.uztec.com.br/api/v1/'

        const formulario = document.getElementById('forms_bdiario');
		
		formulario.addEventListener('submit', function(event) { 
		event.preventDefault();

		axios.get(api + 'report/')
			.then((response) => {
				dataEl.innerHTML = response.data.date;
				lucroEl.innerHTML = response.data.totalRevenue.replace('<b>R$</b>', "");
				balancoEl.innerHTML = 
						`<tr>
							<td>${response.data.totalEntries}</td>
							<td>${response.data.totalExits}</td>
							<td>${response.data.currentVehicles}</td>
						</tr>`;
			})
        })
	
	info();
		