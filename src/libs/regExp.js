// 正则公共文件

/**
 * IP地址验证
 * @param val
 * @returns {boolean} IP validate
 */
export function IPValidator (val = '') {
  const reg = /^((25[0-5]|2[0-4]\d|[1]\d\d|[1-9]\d|\d)($|(?!\.$)\.)){4}$/
  return reg.test(val)
}

/**
 * 纯数字验证
 * @param val value string
 * @params min min value
 * @param max max value
 */
export function numberValidate (val = '', min = 0, max = 1000) {
  const reg = new RegExp(`^[0-9]{${min},${max}}$`)
  return reg.test(val)
}

/**
 * 邮箱验证
 * @param val
 * @returns {*|boolean}
 */
export function emailValidator (val = '') {
  const reg = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}/
  return reg.test(val)
}

/**
 * 手机号验证
 * @param val
 * @returns {*|boolean}
 */
export function phoneValidator (val = '') {
  const reg = /^((13[0-9])|(14[0-9])|(15[0-9])|(16[0-9])|(17[0-9])|(18[0-9])|(19[0-9]))\d{8}$/
  return reg.test(val)
}

/**
 * 中英文（大小写）验证
 * @param val
 * @param min
 * @param max
 * @returns {boolean}
 */
export function zhCNenUSValidator (val = '', min = 2, max = 50) {
  const reg = new RegExp(`^[\u4e00-\u9fa5a-zA-Z]{${min},${max}}$`)
  return reg.test(val)
}

/**
 * 英文（大小写）数字验证
 * @param val
 * @param min
 * @param max
 * @returns {boolean}
 */
export function enUSNumValidator (val = '', min = 2, max = 50) {
  const reg = new RegExp(`^[a-zA-Z0-9]{${min},${max}}$`)
  return reg.test(val)
}

/**
 * 纯中文验证
 * @param val
 * @param min
 * @param max
 * @returns {boolean}
 */
export function zhCNValidator (val = '', min = 2, max = 50) {
  const reg = new RegExp(`^[\u4e00-\u9fa5]{${min},${max}}$`)
  return reg.test(val)
}

/**
 * @description 数字和大写英文字母验证
 * @param val
 * @returns {boolean}
 */
export function taxNumValidator (val = '', min = 18, max = 18) {
  const reg = new RegExp(`^[A-Z0-9]{${min},${max}}$`)
  return reg.test(val)
}

/**
 * @description 英文 数字 下划线
 * @param val
 * @returns {boolean}
 */
export function keyValidator (val = '') {
  const reg = new RegExp(`^[0-9A-Za-z_]*$`)
  return reg.test(val)
}
