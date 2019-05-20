import { createMuiTheme } from '@material-ui/core/styles'

export function getCustomTheme() {
	let theme = createMuiTheme({});

	// Name of the component ⚛️ / style sheet
	theme.overrides.MuiGrid = {
		// Name of the rule
		container: {
			// Some CSS
			width: '100%',
			paddingRight: '15px',
			paddingLeft: '15px',
			marginRight: 'auto',
			marginLeft: 'auto',

			[theme.breakpoints.up('xs')]: {
				maxWidth: '540px',
			},
			[theme.breakpoints.up('sm')]: {
				maxWidth: '720px',
			},
			[theme.breakpoints.up('md')]: {
				maxWidth: '960px',
			},
			[theme.breakpoints.up('lg')]: {
				maxWidth: '1140px',
			},
			[theme.breakpoints.up('xl')]: {
				maxWidth: '1300px',
			},
		},
	};

	return theme;
}

export default getCustomTheme
