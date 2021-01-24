import axios from 'axios'
export default function request (config) {
  const instance = axios.create({
    baseURL: 'http://ttapi.research.itcast.cn/' // 请求的基础路径
  })

  instance(config)
    .then(
      res => console.log(res)
    ).catch(err => console.log(err))
}
