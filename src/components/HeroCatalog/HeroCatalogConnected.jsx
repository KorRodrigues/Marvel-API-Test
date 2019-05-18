import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import HeroCatalog from './HeroCatalog'
import {
	requestCatalog,
	changeCatalogPage,
} from '../../redux/heroCatalog'


const mapStateToProps = ({heroCatalog:{ catalog, page, catalogRequestError, isRequestingCatalog }}) => {
	const heroesList = (catalog && catalog.data && catalog.data.results) || [],
				heroesTotal = (catalog && catalog.data && catalog.data.total) || 0,
				attributionHTML = (catalog && catalog.attributionHTML) || ''

	return {
		heroesList,
		heroesTotal,
		attributionHTML,
		page,
		error: catalogRequestError,
		isRequesting: isRequestingCatalog,
	}
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
			requestCatalog,
			changeCatalogPage,
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeroCatalog)
