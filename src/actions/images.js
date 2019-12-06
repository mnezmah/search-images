import axios from 'axios'

export const GET_IMAGES = 'GET_IMAGES'

function setImages(images) {
  return {
    type: GET_IMAGES,
    payload: images
  }
}

export function getImages(query) {
  return function (dispatch) {
    axios.get(`https://pixabay.com/api/?key=${process.env.REACT_APP_API_KEY}&q=${query}&image_type=photo&per_page=9`)
      .then((response) => {
        console.log('response : ', response)
        dispatch(setImages(response.data.hits))
      }).catch(error => console.log(error))
  }
}