import React, { Component } from 'react'

import Grid from '@material-ui/core/Grid'

class List extends Component {
	render() {
		return (
			<nav>
				<Grid
					container
					spacing={8}
					justify="flex-end"
					role="navigation"
					itemScope
					itemType="http://schema.org/SiteNavigationElement"
				>
					{this.props.children}
				</Grid>
			</nav>
		)
	}
}

export default List
