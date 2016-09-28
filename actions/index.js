import axios from 'axios'
import { keys, each } from 'lodash'

export const requestItems = (params) => {
  return {
    type: 'FETCH_ITEMS_REQUEST',
    params
  }
}

export const recieveItems = (params, json) => {
  let items = json.data.matches
  return {
    type: 'RECIEVE_ITEMS',
    params,
    items
  }
}

export const toggleDrawerColumn = (newDrawerColumOpenState) => {
  console.log(newDrawerColumOpenState)
  return {
    type: 'TOGGLE_DRAWER_COLUMN',
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


    return axios.get(`http://api.yummly.com/v1/api/recipes?_app_id=3749ecd0&_app_key=f2d7e42e718a093a05a25d495c821b1f&requirePictures=true&maxResult=10&start=10${queryString}`)
    // .then(response => response.json())
    .then(json =>
      dispatch(recieveItems(params, json))
    )
  }
}

export const requestRecipe = (id) => {
  return {
    type: 'FETCH_RECIPE_REQUEST',
    id
  }
}

export const recieveRecipe = (id, json) => {
  console.log('recieving recipe');
  return {
    type: 'RECIEVE_RECIPE',
    id,
    json
  }
}

export const fetchRecipe = (id) => {
  return function (dispatch) {
    console.log('REQUESTING');
    dispatch(requestRecipe(id))
    return axios.get(`http://api.yummly.com/v1/api/recipe/${id}?_app_id=3749ecd0&_app_key=f2d7e42e718a093a05a25d495c821b1f`).then((json) => {
      dispatch(toggleDrawerColumn(false));
      dispatch(recieveRecipe(id, json));
    })
  }
}

export const unsetSelectedRecipe = (id) => {
  return {
    type: 'UNSET_SELECTED_RECIPE'
  }
}

export const requestSaveRecipe = () => {
  console.log('requesting')
  return {
    type: 'SAVE_RECIPE_REQUEST'
  }
}

export const recipeSaved = () => {
  return {
    type: 'RECIPE_SAVED'
  }
}

export const saveRecipe = (options) => {
  console.log('options', arguments);
  axios.post('/quotes', options)
}
