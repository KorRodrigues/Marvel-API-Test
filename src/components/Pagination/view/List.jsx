import React, { Component } from 'react'

class List extends Component {
	render() {
		return (
			<nav className="bf-pagination">
				<ul
					className="bf-pagination__list"
					role="navigation"
					itemScope
					itemType="http://schema.org/SiteNavigationElement"
				>
					{this.props.children}
				</ul>
			</nav>
		)
	}
}

export default List
