import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import heroCatalog from './heroCatalog'

// Todo use fs filelist to autocombine reducers
export default (history) => combineReducers({
  router: connectRouter(history),
  heroCatalog,
});
