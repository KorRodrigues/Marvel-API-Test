import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { definePageItemNumberInUrl } from '../services'

class Item extends Component {
	changePage = e => {
		e.preventDefault()
		const { page, onChangePage, pageLength } = this.props

		if (page <= 0 || page > pageLength) return

		onChangePage(page)
	}

	render() {
		const {
			children,
			curPage,
			href,
			isDisabled,
			isPrevNextBtn,
			page,
			pageLength,
		} = this.props
		return (
			<li
				className={
					`bf-pagination__item ${
					!!isPrevNextBtn && 'bf-pagination__item--prevNextBtn'} ${
					curPage === page &&'bf-pagination__item--active'} ${
					!!isDisabled && 'bf-pagination__item--disabled'}`}
				itemProp="url"
			>
				<a
					//rel="next"
					className="bf-pagination__link"
					onClick={this.changePage}
					href={definePageItemNumberInUrl(href, page, pageLength)}
					itemProp="name"
				>
					{children}
				</a>
			</li>
		)
	}
}

Item.propTypes = {
	className: PropTypes.string,
	curPage: PropTypes.number,
	onChangePage: PropTypes.func,
	page: PropTypes.number,
	href: PropTypes.string,
	pageLength: PropTypes.number,
	isPrevNextBtn: PropTypes.bool,
}

export default Item
