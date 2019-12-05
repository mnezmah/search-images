import axios from 'axios'

export const  GET_IMAGES = 'GET_IMAGES'

function setImages(images) {
  return {
    type: GET_IMAGES,
    payload: images
  }
}

export function getImages() {
  return function(dispatch) {
    const query = this.state.value
    const apiKey = '14512980-f807f7da94eecb11fe86f08e9'
    axios.get(`https://pixabay.com/api/?key=${apiKey}&q=${query}&image_type=photo`)
      .then((response) => {
        console.log('response : ', response)
        console.log('data:', response.data)
        this.setState({ images: response.data.hits })
      }).catch(error => console.log(error))
  }
}