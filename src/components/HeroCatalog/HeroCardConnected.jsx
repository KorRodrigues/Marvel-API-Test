import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import HeroCard from './HeroCard'

const mapStateToProps =  ({ heroesData }, ownProps) => {
	let { name, thumbnail } = ownProps

	const heroData = heroesData[ownProps.id]
	if(heroData) {
		name = heroData.name
		thumbnail = heroData.thumbnail
	}

	return {
		name,
		thumbnail,
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
