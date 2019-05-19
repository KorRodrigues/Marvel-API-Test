import React from 'react'
import { Link } from 'react-router-dom'

import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import AppBar from '@material-ui/core/AppBar'

import SearchHero from '../SearchHero'
import styles from './SimplePageStyle'

const SimplePage = ({children, classes}) => (
  <div>
		<AppBar position="fixed" color="secondary" className={classes.header}>
			<Grid container>
				<Grid item xs={12} sm={3} md={2}>
					<Link to="/" className={classes.logoLink}>
						<img
							src="//i.annihil.us/u/prod/misc/marvel.svg"
							alt="Marvel"
							className={classes.logo}
						/>
					</Link>
				</Grid>
				<Grid item xs={12} sm>
					<SearchHero />
				</Grid>
			</Grid>
		</AppBar>


		<Grid container>
			<Grid item xs>
				{children}
			</Grid>
		</Grid>

		<footer className={classes.footer}>
			<Grid container>
				<Grid item xs>
					<p>APP created by Tiago A. Rodrigues</p>
					<p>
						<a href="http://marvel.com" className={classes.footerLink}>
							Data provided by Marvel. © 2019 MARVEL
						</a>
					</p>
				</Grid>
			</Grid>
		</footer>
  </div>
)

export default withStyles(styles)(SimplePage)
