
// $_GET[] igual ao que existe no php
// param STRING|OPCIONAL parametro que quer trazer no resultado,
//  se não for passado, retorna um array com todos os parametros da url
// url STRING|OPCIONAL url que vai buscar os parametros,
//  se não for passado, usa window.location.href
function _get(param, url) {
	let vars = {};

	if (!url) {
		url = window.location.href;
	}

	//arrumar uma forma de substituir location.hash
	url = url.split('#')[0];
	url = url.split('?')[1];
	if(!url)
		return (param) ? '' : vars
	url = '?' + url;
	url = url.replace(
		/[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
		function(m, key, value) {
			// callback
			vars[key] = value !== undefined ? value : '';
		}
	);

	if (param) return vars[param] ? vars[param] : null;

	return vars;
}

export default _get
