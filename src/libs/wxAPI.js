'use strict'
import wx from 'wx'
import { Notify } from 'vant'
import { getWechatConfig } from '@api/api-common' // 获取微信配置

const jsApiList = [
  'onMenuShareAppMessage',
  'onMenuShareTimeline',
  'updateAppMessageShareData',
  'updateTimelineShareData',
  'openLocation'
]

class WXAPI {
  constructor (shareConfig) {
    this.shareConfig = shareConfig
  }

  setWxConfig (config) {
    wx.config(config)
    this.shareHook()
  }

  getWeChatConfig () {
    let params = {
      wxUrl: encodeURIComponent(location.href)
    }
    getWechatConfig(params).then(res => {
      if (res.data.code === 200) {
        this.setWxConfig({
          debug: false,
          appId: res.data.data.appId,
          timestamp: res.data.data.timestamp,
          nonceStr: res.data.data.noncestr,
          signature: res.data.data.signature,
          jsApiList: jsApiList
        })
      } else {
        Notify({ type: 'danger', message: '当前网页不能进行微信分享，请刷新重试' })
      }
    })
  }

  shareHook () {
    wx.ready(function () {
      wx.updateAppMessageShareData(this.shareConfig)
      wx.updateTimelineShareData(this.shareConfig)
    })
  }

  bootWx () {
    this.getWeChatConfig()
  }
}
export default WXAPI
