import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Button from '@material-ui/core/Button'

class Item extends Component {
	changePage = e => {
		const { page, onChangePage, pageLength } = this.props

		if (page <= 0 || page > pageLength) return

		onChangePage(page)
	}

	render() {
		const {
			children,
			curPage,
			page,
		} = this.props
		return (
			<Button
				variant={curPage === page ? "outlined" : "text"}
				onClick={this.changePage}
				itemProp="url"
			>
				{children}
			</Button>
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
