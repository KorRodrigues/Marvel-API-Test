import config from './marvelConfigs'

const CHARACTERS = '/v1/public/characters'

// TODO add fetch polyfill on index or shared file

function getHeroesCatalog(page, callback, callbackError) {
	const apiUrl = `${config.baseUrl}${CHARACTERS}`,
				key = config.apiKey,
				limit = config.itemsPerPage,
				offset = (page - 1) * config.itemsPerPage,
				url = `${apiUrl}?apikey=${key}&limit=${limit}&offset=${offset}`
	fetch(url)
		.then(response => response.json())
		.then((json) => callback(json))
		.catch(callbackError)
}

function getHero(heroId, callback, callbackError) {
	const apiUrl = `${config.baseUrl}${CHARACTERS}/${heroId}`,
				key= config.apiKey,
				url = `${apiUrl}?apikey=${key}`
	fetch(url)
		.then(response => response.json())
		.then((json) => callback(json))
		.catch((e) => callbackError(e))
}

export { getHero }
export default getHeroesCatalog
