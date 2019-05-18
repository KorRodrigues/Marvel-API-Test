//TODO dar um nome melhor à esta função
/*
	NOME: setPaginationUrl
	OBJETIVO: seleciona apenas a parte importante da URL dos itens da paginação ("page={número da página}") para que
	possamos modificá-la
	DESC: usando regex, selecionamos os diferentes padrões de URL e usamos a função 'replacer' para modificar
	apenas a parte que nos interessa (número de páginas)
	PARÂMETROS:
		parâmetro1: a url da página
		parâmetro2: número da página
		parâmetro3: número total de páginas que por default será 'false' caso a paginação não exista.
	REGEXPARAMS:
		parâmetro1: {specialCharacter} ? ou &
		parâmetro2: character 'p' seguido de '=' seguido de um número '0-9'
		parâmetro3: 1 ou nenhum character '&'
		parâmetro4: 1 ou mais de qualquer tipo de character
*/
const definePageItemNumberInUrl = (href, page, pageLength = false) => {
	const rgx = /([?&])(page=\d+)(&)?(.+)?/i

	let nHref = href.replace(rgx, replacer)

	if (page < 1 || (pageLength && page > pageLength)) {
		return
	} else if (page === 1) {
		return nHref
	}

	nHref +=
		nHref.indexOf('?') !== -1
			? nHref[nHref.length - 1] !== '&' && nHref[nHref.length - 1] !== '?'
				? `&`
				: ''
			: nHref[nHref.length - 1] !== '?' ? '?' : ''
	nHref += `page=${page}`
	return nHref
}

const replacer = (match, p1, p2, p3, p4) => {
	if (!p1) return '?'
	if (!p3 || !p4) return p1

	return p1 + p4 + '&'
}

export default definePageItemNumberInUrl
