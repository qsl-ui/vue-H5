// 此文件放置公共工具
import WXAPI from '@/libs/wxAPI'
// 获取地址栏数据
export const getRequest = () => {
  let url = location.search
  let theRequest = {}
  if (url.indexOf('?') !== -1) {
    let str = url.substr(1)
    let strs = str.split('&')
    for (let i = 0; i < strs.length; i++) {
      theRequest[strs[i].split('=')[0]] = unescape(strs[i].split('=')[1])
    }
  }
  return theRequest
}

// webapp微信分享处理标题和显示图片(产品详情页isProductDetail: true, 否则默认false)
export const wxRegister = (isProductDetail = false, shareConfig = {}) => {
  const { proTitle, proDesc, proImg } = shareConfig // proTitle: 分享标题 proDesc: 分享描述 proImg: 分享封面
  let params = {
    link: window.location.href, // 分享的链接,为当前页面地址
    success: function (res) {
      console.log(res)
    },
    fail: function (err) {
      console.log(err)
    }
  }
  // 产品详情页分享直接使用传入的标题、描述和封面,其他页面自定义
  let extraParams = isProductDetail
    ? { title: `${proTitle}`, imgUrl: proImg, desc: proDesc }
    : { title: '自定义标题', imgUrl: '自定义图片', desc: '自定义描述' }
  let wx = new WXAPI(Object.assign({}, params, extraParams))
  wx.bootWx()
}
