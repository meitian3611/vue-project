import axios from 'axios'
/**
 * 获取首页数据
 * @param {*} params
 */
const getBannerList = () => {
  return axios.get('../../../HomeApi/Header.json')
}
export { getBannerList }
