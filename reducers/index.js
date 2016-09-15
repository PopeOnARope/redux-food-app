import { clone } from 'lodash'
let initialState = {
  'drawerColumnIsOpen': false,
  'preferences': {
    'flavors': []
  },
  'searchUrl': 'http://api.yummly.com/v1/api/recipes?_app_id=3749ecd0&_app_key=f2d7e42e718a093a05a25d495c821b1f&q=${params.searchParams}&requirePictures=true',
  'searchParams': ''
}

export default (state=initialState, action) => {
  var _state = clone(state)
  switch(action.type) {
    case "RECIEVE_ITEMS":
      for (var item of action.items) {
        item.key = item.id
      }
      _state.searchResults = action.items
      _state.isFetching = false
      return _state
    case "FETCH_ITEMS_REQUEST":
      _state.isFetching = true
      _state.searchParams = action.params.searchParams
      return _state
    case "TOGGLE_DRAWER_COLUMN":
      _state.drawerColumnIsOpen = action.newDrawerColumOpenState
      return _state
    case "UPDATE_PREFERENCES_REQUEST":
      _state.isFetching = true
      return _state
    case "FETCH_RECIPE_REQUEST":
      _state.isFetching = true
      return _state
    case "RECIEVE_RECIPE":
      _state.isFetching = false
      _state.currentRecipe = action.json
      return _state
    default:
      return _state
  }
}
