import Axios from 'axios'

const DetailList = (url, params) => {
  return Axios.get(url, {
    params
  })
}
export {
  DetailList
}
