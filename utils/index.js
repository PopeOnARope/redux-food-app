import axios from 'axios'


axios.get('http://api.yummly.com/v1/api/recipes?_app_id=3749ecd0&_app_key=f2d7e42e718a093a05a25d495c821b1f').then((response) => {console.log(response)})

export const
