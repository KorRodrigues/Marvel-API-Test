import { getHero } from '../services/getHeroes'

export const HERO_REQUESTED = 'heroesData/HERO_REQUESTED'
export const HERO_REQUESTED_ERROR = 'heroesData/HERO_REQUESTED_ERROR'
export const HERO_ADDED = 'heroesData/HERO_ADDED'
export const HERO_DETAIL_CHANGE = 'heroesData/HERO_DETAIL_CHANGE'

const initialState = {}

export default (state = initialState, action) => {
	const heroesData = {...state}

  switch (action.type) {
    case HERO_REQUESTED:
			heroesData[action.heroId] = { loading: true, error: '' }
      return heroesData
		case HERO_REQUESTED_ERROR:
			heroesData[action.heroId] = { loading: false, error: action.error }
			return heroesData
		case HERO_ADDED:
			heroesData[action.heroId] = { loading: false, error: '', ...action.heroData }
			return heroesData
		case HERO_DETAIL_CHANGE:
			heroesData[action.heroId][action.field] = action.value
			return heroesData

    default:
      return state
  }
}


// TODO maybe is better to put actions on his own file
// ************* //
// ** ACTIONS ** //
// ************* //


export const requestHero = (heroId) => {
  return dispatch => {
    dispatch({
			type: HERO_REQUESTED,
			heroId,
    })

    return getHero(
			heroId,
			(heroData) => {
				dispatch({
					type: HERO_ADDED,
					heroId,
					heroData,
				})
			},
			() => {
				dispatch({
					type: HERO_REQUESTED_ERROR,
					heroId,
					error:
						'Personagem não encontrado! Thanos deve ter estalado '+
						'os dedos e iremos reverter isso de alguma forma!',
				})
		})
  }
}

export const changeHeroDetail = (heroId, field, value) => {
  return dispatch => {
    dispatch({
			type: HERO_DETAIL_CHANGE,
			heroId,
			field,
			value,
    })
  }
}
