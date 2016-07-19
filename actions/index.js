// import axios from 'axios'

export const fetchItems = (params) => {
  console.log('search action dispatched')
  //TODO: update this to handle errors
  let data = response.data
  return {
    type: "FETCH_ITEMS_REQUEST",
    params
  }
}

export const recieveItems = (json) => {
  console.log(json)
  return {
    type: "RECIEVE_ITEMS",
    json
  }
}
