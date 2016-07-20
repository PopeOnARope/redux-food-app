import { clone } from 'lodash'
let initialState = {'foo': 'bar'}

export default (state=initialState, action) => {
  console.log('reducer listening', state, action)
  var _state = clone(state)
  switch(action.type) {
    case "RECIEVE_ITEMS":
      for (var item of action.items) {
        item.key = item.id
      }
      _state.searchResults = action.items
      _state.isFetching = false
      console.log('_state from reducer', _state)
      return _state
    case "FETCH_ITEMS_REQUEST":
      _state.isFetching = true
      return _state
    default:
      return _state
  }
}
