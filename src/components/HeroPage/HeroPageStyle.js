
const styles = theme => ({
	editIcon: {
		height: '0.9rem',
	},
  paper: {
		padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
		marginBottom: theme.spacing.unit*2,
  },
	link: {
		color: 'inherit',
		textDecoration: 'none',
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
