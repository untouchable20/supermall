import axios from 'axios'

//1
export function request(config){
  // 创建实例
  const instance = axios.create({
    baseURL:'http://123.207.32.32:8000',
    timeout:5000
  })

  //拦截器

  //   console.log(config)
  //   return config
  // },err=>{
  //   console.log(err)
  // })
  //
  // instance.interceptors.response.use(res=>{
  //   return res.data
  // },err => {
  //   console.log(err)
  // })

  //发送请求
  return instance(config)

}





//回调方式
//2
// export function request(config){
//   // 创建实例
//   const instance = axios.create({
//     baseURL:'http://123.207.32.32:8000',
//     timeout:5000
//   })
//   //发送请求
//   instance(config.baseConfig).
//   then(res=>{
//     config.success(res)
//   },err=>{
//     config.failure(err)
//   })
// }
//request({} => baseConfig)
// request({
//   baseConfig:{},
//   success(res){},
//   failure(err){}
// })
//

//3
// export function request(config,success,failure){
//   // 创建实例
//   const instance = axios.create({
//     baseURL:'http://123.207.32.32:8000',
//     timeout:5000
//   })
//   //发送请求
//   instance(config).
//   then(res=>{
//     success(res)
//   },err=>{
//     failure(err)
//   })
// }
// request({},res=>{},err=>{})



