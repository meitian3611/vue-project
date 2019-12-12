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
const getDrama = () => {
  return axios.get('../../../json/drama.json')
}
const getConcert = () => {
  return axios.get('../../../json/concert.json')
}
export { getBannerList, getMiddle, getList, getDrama, getConcert }
