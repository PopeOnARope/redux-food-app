let initialState = {'foo': 'bar'}

export default (state=initialState, action) => {
  console.log('reducer listening', state, action)

  switch(action.type) {
    case "RECIEVE_ITEMS":
      console.log('items:', action)
      state.searchResults = action.items
      state.isFetching = false
      return state
    case "FETCH_ITEMS_REQUEST":
      state.isFetching = true
      return state
    default:
      return state
  }
  return state
}
