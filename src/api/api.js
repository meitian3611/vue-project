import Axios from 'axios'

const home = () => {
  return Axios.get(
    'https://mtop.damai.cn/h5/mtop.damai.wireless.configure.msite.list/1.0/?jsv=2.5.1&appKey=12574478&t=1576200955862&sign=f7c33b54d179fa7e5d7f4ef234176706&type=originaljson&dataType=json&v=1.0&H5Request=true&AntiCreep=true&AntiFlood=true&api=mtop.damai.wireless.configure.msite.list&data=%7B%22cityId%22%3A310100%2C%22dmChannel%22%3A%22damai%40damaih5_h5%22%7D'
  )
}
export { home }
