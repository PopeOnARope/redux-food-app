let initialState = {'foo': 'bar'}

export default (state=initialState, action) => {
  console.log('reducer listening', state, action)
  return state
}
