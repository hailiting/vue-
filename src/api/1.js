// 1-1-1 附件上传,获取上传的Token值
export const uploadLicense = (params) => {
  return http.get(api + '/common/attachment/token?type=' + params).then(res => res.data)
}

// 1-2-1 用于获取省市级地区信息
export const cityPro = (id, params) => {
  return http.get(api + '/common/district/area/' + id, params).then(res => res.data)
}

// 1-3-1 添加收货地址
export const saveAddress = (params) => {
  return http.post(api + '/address/save', qs.stringify(params)).then(res => res.data)
}

// 1-3-2 删除收货地址
export const deleAddress = (id, params) => {
  return http.post(api + '/address/delete/' + id, qs.stringify(params)).then(res => res.data)
}

// 1-3-3 更新收货地址
export const updateAddress = (id, params) => {
  return http.post(api + '/address/update/' + id, qs.stringify(params)).then(res => res.data)
}

// 1-3-4 个人的收货地址管理
export const addresses = (params) => {
  return http.get(api + '/address/addresses', params).then(res => res.data)
}

// 1-3-5 获取固定的瀚越太古的收货地址
export const address = () => {
  return http.get(api + '/address/fixed').then(res => res.data)
}

// 1-3-6 默认收货地址
export const updateDefault = (params) => {
  return http.post(api + '/address/update/default', qs.stringify(params)).then(res => res.data)
}

// 1-4-3 根据传入的手机号{phone}发送验证码
export const phoneValidateCode = (params) => {
  return http.get(api + '/common/sms/code/verify/' + params).then(res => res.data)
}

// 1-4-4 根据传入的手机号{phone}和{code}验证码来校验信息,返回true说明校验成功false表示失败,验证码有效期为1分钟
export const phoneValidateCodeIsTrue = (params) => {
  return http.get(api + '/common/sms/validate/' + params).then(res => res.data)
}

// 1-5-2 根据传入的{uuid}，（获取图形验证码时的uuid值）{code}参数判断验证码是否相等,返回true代表验证成功,false代表验证失败,验证码的有效时间为2分钟,超过时间请重新获取
export const validateCode = (params) => {
  return http.get(api + '/common/captcha/validate/' + params).then(res => res.data)
}

// 1-8-1 当前用户未处理的通知
export const notifications = () => {
  return http.get(api + '/common/notification/notifications').then(res => res.data)
}

// 1-8-2 设置通知为已读
export const notificationRead = (params) => {
  return http.post(api + '/common/notification/read', qs.stringify(params)).then(res => res.data)
}