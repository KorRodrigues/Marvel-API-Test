
const COLOR_OUTFOCUS = 'RGBA(240,240,240,0.7)',
			COLOR_INFOCUS = 'RGBA(255,255,255,0.9)'

const styles = theme => ({
  cssLabel: {
		color: COLOR_OUTFOCUS,
    '&$cssFocused': {
      color: COLOR_INFOCUS,
    },
  },
	cssFocused: {
		color: 'white'
	},
  cssUnderline: {
		'&:hover:before': {
			borderBottomColor: COLOR_OUTFOCUS+'!important',
		},
    '&:before': {
      borderBottomColor: COLOR_OUTFOCUS,
    },
    '&:after': {
      borderBottomColor: COLOR_INFOCUS,
    },
	},
	input: {
		color: COLOR_INFOCUS,
	},
	button: {
		color: COLOR_INFOCUS,
		'&:hover': {
			background: 'transparent',
		}
	}
})

export default styles
