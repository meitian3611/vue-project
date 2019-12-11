import axios from 'axios'

const getBannerList = () => {
  return axios.get('../../../HomeApi/Header.json')
}
const getMiddle = () => {
  return axios.get('../../../HomeApi/Middle.json')
}
const getList = () => {
  return axios.get('../../../HomeApi/List.json')
}
export { getBannerList, getMiddle, getList }
