import {Request} from '../utils/utils'


const HOST = 'https://wrnan.com'

// 品牌页数据接口, GET
const Noun = (params) => Request(params, HOST + '/brand/detail')

const LikeBrand = (params) => Request(params, HOST + '/user/brand/_like')

const UnLikeBrand = (params) => Request(params, HOST + '/user/brand/_unlike')

const LikeArticle = (params) => Request(params, HOST + '/user/article/_like')

const UnLikeArticle = (params) => Request(params, HOST + '/user/article/_unlike')

const UserArticle = (params) => Request(params, HOST + '/user/article')

const UserBrand = (params) => Request(params, HOST + '/user/brand')

const BrandListByLetter = (params) => Request(params, HOST + '/brand/menu')

const BrandList = (params) => Request(params, HOST + '/brand')

const TodayInfo = (params) => Request(params, HOST + '/date')

const ArticleList = (params) => Request(params, HOST + '/article')

module.exports = {
  Noun,
  LikeBrand,
  UnLikeBrand,
  LikeArticle,
  UnLikeArticle,
  UserArticle,
  UserBrand,
  BrandList,
  BrandListByLetter,
  TodayInfo,
  ArticleList
}
