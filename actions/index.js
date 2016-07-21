import axios from 'axios'


export const FETCH_ITEMS_REQUEST = "FETCH_ITEMS_REQUEST"
export const requestItems = (params) => {
  return {
    type: FETCH_ITEMS_REQUEST,
    params
  }
}

export const RECIEVE_ITEMS = "RECIEVE_ITEMS"
export const recieveItems = (params, json) => {
  let items = json.data.matches
  return {
    type: RECIEVE_ITEMS,
    params,
    items
  }
}

export const TOGGLE_DRAWER_COLUMN = "TOGGLE_DRAWER_COLUMN"
export const toggleDrawerColumn = (newDrawerColumOpenState) => {
  return {
    type: TOGGLE_DRAWER_COLUMN,
    newDrawerColumOpenState
  }
}

export const fetchItems = (params) => {
  return function (dispatch) {
    dispatch(requestItems(params))

    return axios.get(`http://api.yummly.com/v1/api/recipes?_app_id=3749ecd0&_app_key=f2d7e42e718a093a05a25d495c821b1f&q=${params}&requirePictures=true`)
    // .then(response => response.json())
    .then(json =>
      dispatch(recieveItems(params, json))
    )
  }
}
