import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { definePageItemNumberInUrl } from '../services'

class PaginationContainer extends Component {
	state = {
		initPage: 0,
		pageLength: 0,
		midPages: [],
	}
	//page Position define se está no inicio (4 primeiras páginas), meio ou final (4 últimas)
	//utilizado por enquanto para exibir os '...'
	definePages = (curPage, maxLength, lastPage) => {
		let pages = []

		const pagesBetweenActive = Math.floor(maxLength / 2),
			minPageBetweenActive = curPage - pagesBetweenActive,
			maxPageBetweenActive =
				minPageBetweenActive >= 1
					? curPage + pagesBetweenActive + 1
					: curPage + pagesBetweenActive - minPageBetweenActive + 1

		for (let i = minPageBetweenActive; i < maxPageBetweenActive; i++) {
			if (i <= lastPage && i > 0) pages.push(i)
		}

		if (pages[0] !== 1) pages[0] = 1
		if (pages[pages.length - 1] !== lastPage) pages[pages.length - 1] = lastPage

		return pages
	}

	configuration = () => {
		const {
			curPage,
			paginationLength,
			itemsPerPage,
			itemsMax,
		} = this.props

		// numero de paginas
		const pageLength = Math.ceil(itemsMax / itemsPerPage)

		// gerando array com qtdade de páginas
		let definedPages = this.definePages(curPage, paginationLength, pageLength)

		this.changeHrefLinkRel()
		this.setState({
			pageLength,
			midPages: definedPages,
		})
	}

	//TODO tornar essa função mais simples e funcional
	/*
		NOME: changeHrefLinkRel
		OBJETIVO: criar elemento HTML <link rel="#"> em cada página, para indicar qual a próxima página e a anterior
		DESCRIÇÃO: em todas as páginas serão adicionados um <link rel="prev"> e <link rel="next"> que indicam a
		página anterior e posterior respectivamente. Todas as páginas maiores que 1 recebem o atributo rel="prev"
		e todas as páginas menores que o total de páginas recebem rel="next". Portanto a página 1 não recebe 'prev'
		e a página final não recebe 'next', o que é ótimo!
	*/
	changeHrefLinkRel = () => {
		const { curPage, itemsPerPage, itemsMax, href } = this.props

		let max = Math.ceil(itemsMax / itemsPerPage),
			prev = document.querySelector('link[rel=prev]'),
			next = document.querySelector('link[rel=next]'),
			prevHref = definePageItemNumberInUrl(href, curPage - 1),
			nextHref = definePageItemNumberInUrl(href, curPage + 1)

		if (curPage > 1) {
			if (!prev) {
				prev = document.createElement('link')
				prev.rel = 'prev'
				document.getElementsByTagName('head')[0].appendChild(prev)
			}
			prev.href = prevHref
		} else {
			prev && prev.parentNode.removeChild(prev)
		}

		if (curPage < max) {
			if (!next) {
				next = document.createElement('link')
				next.rel = 'next'
				document.getElementsByTagName('head')[0].appendChild(next)
			}
			next.href = nextHref
		} else {
			next && next.parentNode.removeChild(next)
		}
	}

	componentDidUpdate(prevProps, prevState) {
		if (
			prevProps.curPage !== this.props.curPage ||
			prevProps.itemsMax !== this.props.itemsMax ||
			prevProps.paginationLength !== this.props.paginationLength
		) {
			this.configuration()
		}
	}

	componentDidMount() {
		this.configuration()
	}

	render() {
		const {
			Item,
			List,
			changePage,
			curPage,
			href,
			PageAbreviation,
			PrevContent,
			NextContent,
		} = this.props
		const { pageLength, midPages } = this.state

		const commonAttrsToItem = {
			onChangePage: changePage,
			changeHrefLinkRel: this.changeHrefLinkRel,
			curPage,
			href,
			pageLength,
		}

		//usado na criação dos items para controlar o 'anterior'
		let lastItemPage = 0

		return (
			<List>
				{PrevContent && (
					<Item
						{...commonAttrsToItem}
						page={curPage - 1}
						isDisabled={curPage === 1 ? true : false}
						isPrevNextBtn
					>
						<PrevContent />
					</Item>
				)}
				{midPages.reduce((prev, cur) => {
					let ret = []
					if (lastItemPage !== cur - 1)
						ret.push(<PageAbreviation key={`abv-${lastItemPage}`} />)

					ret.push(
						<Item
							{...commonAttrsToItem}
							page={cur}
							key={cur}
							midItemIndex={cur}
						>
							{cur}
						</Item>,
					)
					lastItemPage = cur

					return prev.concat(ret)
				}, [])}
				{NextContent && (
					<Item
						{...commonAttrsToItem}
						page={curPage + 1}
						isDisabled={curPage === pageLength ? true : false}
						isPrevNextBtn
					>
						<NextContent />
					</Item>
				)}
			</List>
		)
	}
}

PaginationContainer.defaultProps = {
	paginationLength: 5,
	itemsPerPage: 12,
	showPrevNext: true,
	PrevContent: () => (
		<svg className="icon icon-arrow-left">
			<use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#icon-arrow-left" />
		</svg>
	),
	NextContent: () => (
		<svg className="icon icon-arrow-right">
			<use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#icon-arrow-right" />
		</svg>
	),
	PageAbreviation: key => (
		<li
			className="bf-pagination__item bf-pagination__item--abreviation"
			key={key}
		>
			<span className="bf-pagination__link">…</span>
		</li>
	),
}

PaginationContainer.propTypes = {
	paginationLength: PropTypes.number,
	curPage: PropTypes.number,
	Item: PropTypes.func, //PropTypes.element,
	List: PropTypes.func, //PropTypes.element,
	PageAbreviation: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.func,
		PropTypes.bool,
	]),
	changePage: PropTypes.func,
	itemsMax: PropTypes.number,
	itemsPerPage: PropTypes.number,
	href: PropTypes.string,
	prevContent: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.func,
		PropTypes.bool,
	]),
	nextContent: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.func,
		PropTypes.bool,
	]),
}

export default PaginationContainer
