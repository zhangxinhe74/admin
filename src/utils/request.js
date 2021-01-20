import axios from 'axios'
export default function request(config){
  const instance = axios.create({
      baseURL:'',
      timeout:'',
  })

  instance(config).then(res=>console.log(res))
}