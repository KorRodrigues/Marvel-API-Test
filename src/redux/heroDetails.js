import getHeroes from '../services/getHeroes'
import _get from '../services/_get'


export const HERO_REQUESTED = 'catalog/HERO_REQUESTED'
export const HERO = 'counter/HERO'
export const HERO_DETAIL_CHANGE = 'counter/HERO_DETAIL_CHANGE'

const initialState = {
  catalog: null,
	isRequestingCatalog: false,
	catalogRequestError: null,
	page: parseInt(_get('page')) || 1
}

// export default (state = initialState, action) => {
//   switch (action.type) {
//     case CATALOG_REQUESTED:
//       return {
//         ...state,
//         isRequestingCatalog: true
//       }

//     case CATALOG:
//       return {
//         ...state,
//         catalog: action.catalog,
//         isRequestingCatalog: false
//       }

// 		case CATALOG_REQUEST_ERROR:
// 			return {
// 				...state,
// 				catalog: action.catalog,
// 				catalogRequestError: action.catalogRequestError
// 			}

// 		case CATALOG_PAGE:
// 			return {
// 				...state,
// 				page: action.page,
// 			}

//     default:
//       return state
//   }
// }


// // TODO maybe is better to put actions on his own file
// // ************* //
// // ** ACTIONS ** //
// // ************* //


// export const requestCatalog = (page = 1) => {
//   return dispatch => {
//     dispatch({
//       type: CATALOG_REQUESTED
//     })

//     return getHeroes(
// 			page,
// 			(catalog) => {
// 				dispatch({
// 					type: CATALOG,
// 					catalog,
// 				})
// 			},
// 			() => {
// 				dispatch({
// 					type: CATALOG_REQUEST_ERROR,
// 					catalogRequestError:
// 						'Houve um erro ao buscar os herois, Tony Stark logo resolverá isso :D',
// 				})
// 		})
//   }
// }

// export const changeCatalogPage = (page) => {
//   return dispatch => {
//     dispatch({
// 			type: CATALOG_REQUESTED,
// 			page,
//     })
//   }
// }