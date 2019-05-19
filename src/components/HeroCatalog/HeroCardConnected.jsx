import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import HeroCard from './HeroCard'

const mapStateToProps =  ({ heroesData }, ownProps) => {
	let name = ownProps.name

	const heroData = heroesData[ownProps.id]
	if(heroData) {
		name = heroData.name
	}

	return {
		name,
	}
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {},
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeroCard)
