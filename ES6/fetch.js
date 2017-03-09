export default async(type='GET',url = '', data = {}, method= 'fetch')=>{
	type = type.toUpperCase();
	if(type === 'GET'){
		let dataStr = '';
		Object.keys(data).forEach(key =>{
			dataStr += key + '=' + data[key] + '&';
		});
		if (dataStr !== '') {
			dataStr = dataStr.substr(0,dataStr.lastIndexOf('&'));
			url = url + '?' + dataStr;
		}
	}


	if(window.fetch && method === 'fetch'){
		
	}else{

	}
}