import axios from 'axios'
import { keys, each } from 'lodash'

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
    var flavors = params.preferences.flavors
    var query = []

    each(flavors, (el, idx, list) => {
      query.push(`&flavor.${el.flavor}.max=${el.max}&flavor.${el.flavor}.min=${el.min}`)
    })
    query.push(`&q=${params.searchParams}`)
    var queryString = query.join('')


    return axios.get(`http://api.yummly.com/v1/api/recipes?_app_id=3749ecd0&_app_key=f2d7e42e718a093a05a25d495c821b1f&requirePictures=true&maxResult=50&start=10${queryString}`)
    // .then(response => response.json())
    .then(json =>
      dispatch(recieveItems(params, json))
    )
  }
}

export const FETCH_RECIPE_REQUEST = "FETCH_RECIPE_REQUEST"
export const requestRecipe = (id) => {
  return {
    type: FETCH_RECIPE_REQUEST,
    id
  }
}

export const RECIEVE_RECIPE = "RECIEVE_RECIPE"
export const recieveRecipe = (id, json) => {
  return {
    type: RECIEVE_RECIPE,
    id,
    json
  }
}

export const fetchRecipe = (id) => {
  return function (dispatch) {
    dispatch(requestRecipe(id))
    return axios.get(`http://api.yummly.com/v1/api/recipe/${id}?_app_id=3749ecd0&_app_key=f2d7e42e718a093a05a25d495c821b1f`).then((json) => {
      dispatch(recieveRecipe(id, json))
    })
  }
}
