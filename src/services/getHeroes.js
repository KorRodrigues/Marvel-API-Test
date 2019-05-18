import config from './marvelConfigs'

const CHARACTERS = '/v1/public/characters'

// TODO add fetch polyfill on index or shared file
// TODO Get data from local if has changes (?)
function getHeroesCatalog(page, callback, callbackError) {
	const apiUrl = `${config.baseUrl}${CHARACTERS}?apikey=${config.apiKey}`,
				limit = config.itemsPerPage,
				offset = (page - 1) * config.itemsPerPage,
				url = `${apiUrl}&limit=${limit}&offset=${offset}`
	fetch(url)
		.then(response => response.json())
		.then((json) => callback(json))
		.catch(callbackError)
}

export default getHeroesCatalog
