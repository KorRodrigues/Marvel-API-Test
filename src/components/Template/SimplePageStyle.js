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
		[theme.breakpoints.up('sm')]: {
			maxHeight: '50px',
		},
	},
	content: {
		minHeight: 'calc(100vh - 85px)',
		paddingTop: '130px',
		paddingBottom: '50px',
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
