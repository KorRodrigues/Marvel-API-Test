import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import HeroPage from './HeroPage'
import {
	requestHero,
} from '../../redux/heroesData'

const mapStateToProps = ({ heroesData }, ownProps) => {
	const heroId =
		(ownProps && ownProps.match && ownProps.match.params && ownProps.match.params.heroId)
		|| null
	const heroData = heroesData[heroId] //TODO

	return {
		...heroData,
		heroId,
		alreadyFetched: !!heroData
	}
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
			requestHero,
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeroPage)
