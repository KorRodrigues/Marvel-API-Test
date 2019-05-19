import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import heroCatalog from './heroCatalog'
import heroesData from './heroesData'

// Todo use fs filelist to autocombine reducers
export default (history) => combineReducers({
  router: connectRouter(history),
  heroCatalog,
  heroesData,
});
