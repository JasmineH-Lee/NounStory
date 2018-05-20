import {Request} from '../utils/utils'


const HOST = 'http://suppve.xyz'

// 品牌页数据接口, GET
const Noun = (params) => Request(params, HOST + '/brand')


module.exports = {
  Noun
}
