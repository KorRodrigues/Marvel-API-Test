import config from './marvelConfigs'

const CHARACTERS = '/v1/public/characters'

// TODO add fetch polyfill on index or shared file

function getHeroesCatalog(page, searchTerm, callback, callbackError) {
	const apiUrl = `${config.baseUrl}${CHARACTERS}`,
				key = `?apikey=${config.apiKey}`,
				limit = `&limit=${config.itemsPerPage}`,
				offset = `&offset=${(page - 1) * config.itemsPerPage}`,
				nameStartsWith = searchTerm ? `&nameStartsWith=${searchTerm}` : '',
				url = `${apiUrl}${key}${limit}${offset}${searchTerm}${nameStartsWith}`
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
