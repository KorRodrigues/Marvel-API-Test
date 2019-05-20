
const styles = theme => ({
	editIcon: {
		height: '0.9rem',
	},
	editLink: {
		color: 'inherit',
		display: 'block',
		marginBottom: 12,
		textDecoration: 'none',
		[theme.breakpoints.up('sm')]: {
			float: 'right',
			marginLeft: 15,
		}
	},
})

export default styles
