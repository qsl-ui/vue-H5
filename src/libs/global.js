// 注册在vue实例上的方法(通过this直接调用)
export default {
  install (Vue) {
    // 金额格式化
    Vue.prototype.formatCurrency = function formatCurrency (money) {
      if (money && money != null) {
        money = String(money)
        let left = money.split('.')[0]
        let right = money.split('.')[1]
        right = right ? (right.length >= 2 ? '.' + right.substr(0, 2) : '.' + right + '0') : '.00'
        let temp = left.split('').reverse().join('').match(/(\d{1,3})/g)
        return (Number(money) < 0 ? '-' : '') + temp.join(',').split('').reverse().join('') + right
      } else if (money === 0) { // 注意===在这里的使用，如果传入的money为0,if中会将其判定为boolean类型，故而要另外做===判断
        return '0.00'
      } else {
        return ''
      }
    }

    // 屏幕卷曲
    Vue.prototype.scrollTo = (element, to, duration) => {
      if (duration <= 0) return
      const difference = to - element.scrollTop
      const perTick = difference / duration * 10
      setTimeout(() => {
        element.scrollTop = element.scrollTop + perTick
        if (element.scrollTop === to) return
        scrollTo(element, to, duration - 10)
      }, 10)
    }

    // 时间戳转为时分秒
    Vue.prototype.formatSeconds = (value) => {
      var secondTime = parseInt(value) // 秒
      var minuteTime = 0 // 分
      var hourTime = 0 // 小时
      if (secondTime > 60) {
        // 如果秒数大于60，将秒数转换成整数
        // 获取分钟，除以60取整数，得到整数分钟
        minuteTime = parseInt(secondTime / 60)
        // 获取秒数，秒数取佘，得到整数秒数
        secondTime = parseInt(secondTime % 60)
        // 如果分钟大于60，将分钟转换成小时
        if (minuteTime > 60) {
          // 获取小时，获取分钟除以60，得到整数小时
          hourTime = parseInt(minuteTime / 60)
          // 获取小时后取佘的分，获取分钟除以60取佘的分
          minuteTime = parseInt(minuteTime % 60)
        }
      }
      var result = '' + parseInt(secondTime) + '秒'
      if (minuteTime > 0) {
        result = '' + parseInt(minuteTime) + '分' + result
      }
      if (hourTime > 0) {
        result = '' + parseInt(hourTime) + '小时' + result
      }
      return result
    }
  }
}
