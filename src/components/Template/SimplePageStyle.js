const styles = theme => ({
	header: {
		paddingTop: '15px',
		paddingBottom: '15px',
	},
	logoLink: {
		display: 'block',
	},
	logo: {
		display: 'block',
		maxHeight: '27px',
		[theme.breakpoints.up('xs')]: {
			maxHeight: '50px',
		},
	},
	content: {
		paddingTop: '130px',
		paddingBottom: '50px',
		[theme.breakpoints.up('xs')]: {
			paddingTop: '100px',
		},
	},
	footer: {
		background: theme.palette.secondary.main,
		color: theme.palette.secondary.contrastText+'!important',
	},
	footerLink: {
		color: theme.palette.secondary.contrastText,
		textDecoration: 'none',
	}
})

export default styles
