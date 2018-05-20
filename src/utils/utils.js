import wepy from 'wepy'
import 'wepy-async-function'
import fb from './feedback'

// 网络请求
const Request = async(params = {}, url) => {
  let data = params.query || {}
  let result = await wepy.request({
    url: url,
    method: params.method || 'GET',
    data: data,
    header: { 'Content-Type': 'application/json' }
  })
  console.log(result)
  if (result.statusCode !== 200) {
    fb.alert('网络不太好哦')
    return 0
  } else if (result.data.errorCode === 4060002) {
    // TODO:global.CheckToken()
  } else {
    return result
  }
}

module.exports = {
  Request
}
