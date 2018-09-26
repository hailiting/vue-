import http from '../http/http'
import qs from 'qs'

let api = ''
let api2
let qiniuimg = ''
if (process.env.NODE_ENV === 'development') {
  api = 'http://192.168.1.189:8080'
  // 显贵
  // api = 'http://192.168.1.191:8080'
  api2 = 'http://192.168.1.189:8085'
  qiniuimg = 'http://p8ptqa7an.bkt.clouddn.com'
  // 编译环境
} else {
  // 测试环境
  if (process.env.type === 'test') {
    api = 'http://115.159.84.225/yingke'
    api2 = 'http://115.159.84.225:8085'
    qiniuimg = 'http://p8ptqa7an.bkt.clouddn.com'
    // 正式环境
  } else if (process.env.type === 'start') {
    api = 'http://192.168.1.189:8080'
    api2 = 'http://192.168.1.189:8085'
    qiniuimg = 'http://p8ptqa7an.bkt.clouddn.com'
  } else if (process.env.type === 'develop') {
    api = 'http://212.64.17.160/yingke'
    api2 = 'http://212.64.17.160:8085'
    qiniuimg = 'http://p8ptqa7an.bkt.clouddn.com'
  } else {
    api = 'https://taigu.ink/yingke'
    api2 = 'https://115.159.213.201:8085'
    qiniuimg = 'http://p8ptqa7an.bkt.clouddn.com'
  }
}
export const qiniu = qiniuimg
// 上传监控数据
export const uploadMonitorData = (params) => {
  return http.post(api2 + '/jk/insert', qs.stringify(params)).then(res => res.data)
}
// 上传监控浏览器信息
export const uploadMonitorBrowser = (params) => {
  return http.post(api2 + '/browser/insert ', qs.stringify(params)).then(res => res.data)
}

// let api = 'https://manage.taigu.ink'
// 获取二维码
export const barcodePay = api + '/common/payment/barcode'
// 下载表格
export const applicationformUrl = 'https://taigu.ink/applicationform.docx'
// applicationformUrl = api + '/doc/applicationform.docx'
// 获取验证码url
export const verificationUrl = api
// 登录
export const authtoken = (params) => {
  return http.post(api + '/auth/token', qs.stringify(params)).then(res => res.data)
}
// 登出
export const logout = () => {
  return http.get(api + '/auth/logout').then(res => res.data)
}
// 权限配置
export const getRoute = (params) => {
  return http.get(api + '/route/get?roleId=' + params).then(res => res.data)
}

// 七牛云上传
export const uploadLicenseAddress = (params) => {
  return http.post('https://upload-z2.qiniup.com/', params).then(res => res.data)
}
// 9-3-3校验手机号是否被注册
export const isValidPhone = (params) => {
  return http.get(api + '/common/user/valid/phone/' + params).then(res => res.data)
}
// 9-2-1修改密码 个人
export const uesrModifypwd = (params) => {
  return http.post(api + '/user/modifypwd', qs.stringify(params)).then(res => res.data)
}
// 9-5-1修改密码 公司
export const companyModifypwd = (params) => {
  return http.post(api + '/common/company/reset', qs.stringify(params)).then(res => res.data)
}
// 9-2-8个人资料
export const uesrGet = () => {
  return http.get(api + '/user/get').then(res => res.data)
}
// 注册
export const signup = (params) => {
  return http.post(api + '/common/company/register', qs.stringify(params)).then(res => res.data)
}
// 9-3-2修改密码
export const changePwd = (params) => {
  return http.post(api + '/common/user/resetpwd', qs.stringify(params)).then(res => res.data)
}
// 9-2-2员工管理
export const companyusers = () => {
  return http.get(api + '/user/companyusers').then(res => res.data)
}
// 9-2员工管理--删除
export const userremove = (params) => {
  return http.post(api + '/user/remove', qs.stringify(params)).then(res => res.data)
}
// 9-2-4添加用户--职位
export const userPosts = () => {
  return http.get(api + '/user/posts').then(res => res.data)
}
// 9-2-3添加用户--权限
export const userWbroles = () => {
  return http.get(api + '/user/webroles').then(res => res.data)
}
// 9-2-9添加用户--验证手机号
export const userExits = (params) => {
  return http.post(api + '/user/exits', qs.stringify(params)).then(res => res.data)
}
// 9-2添加用户--添加
export const userSave = (params) => {
  return http.post(api + '/user/save', qs.stringify(params)).then(res => res.data)
}
// 9-2-10添加用户--编辑验证手机号
export const userRepeat = (params) => {
  return http.get(api + '/user/repeat', { params }).then(res => res.data)
}
// 9-2添加用户--编辑
export const userupdate = (params) => {
  return http.post(api + '/user/update', qs.stringify(params)).then(res => res.data)
}


// 9-4-2公司资料-根据当前用户获取其所属公司详细信息
export const companyGet = () => {
  return http.get(api + '/company/get').then(res => res.data)
}
// 公司资料-获取生产范围
export const companyScope = () => {
  return http.get(api + '/common/dict/company_scope').then(res => res.data)
}
// 9-4-3公司资料-修改
export const companySave = (params) => {
  return http.post(api + '/company/save', qs.stringify(params)).then(res => res.data)
}
// 获取仓库地址
export const querybycompany = (params) => {
  return http.get(api + '/storeaddress/querybycompany', params).then(res => res.data)
}
// 删除仓库地址
export const deletecompany = (params) => {
  return http.post(api + '/storeaddress/delete', qs.stringify(params)).then(res => res.data)
}

// 添加仓库地址
export const addCompany = (params) => {
  return http.post(api + '/storeaddress/save', qs.stringify(params)).then(res => res.data)
}
// 修改仓库地址
export const updateCompany = (params) => {
  return http.post(api + '/storeaddress/update', qs.stringify(params)).then(res => res.data)
}
// 添加收货仓库片区
export const addArea = (params) => {
  return http.post(api + '/storeaddress/area/save', qs.stringify(params)).then(res => res.data)
}
// 删除收货仓库片区
export const deleArea = (params) => {
  return http.post(api + '/storeaddress/area/delete', qs.stringify(params)).then(res => res.data)
}
// 添加片区收货人
export const recipient = (params) => {
  return http.post(api + '/storeaddress/recipient/save', qs.stringify(params)).then(res => res.data)
}
// 编辑片区收货人
export const updateRecipient = (params) => {
  return http.post(api + '/storeaddress/recipient/update', qs.stringify(params)).then(res => res.data)
}
// 删除片区收货人
export const deleteRecipient = (params) => {
  return http.post(api + '/storeaddress/recipient/delete', qs.stringify(params)).then(res => res.data)
}






// // 支付结果
export const resultPay = (params) => {
  return http.get(api + '/payment/status' + params).then(res => res.data)
}





// index-上架中底数据接口






// 采购订单--获取样品详细信息





// 注册 - 判断公司是否已经注册
export const companyExists = (params) => {
  return http.get(api + '/common/company/exists?companyName=' + encodeURI(params)).then(res => res.data)
}


// 确定公司邀请
export const companyConfirm = (params) => {
  return http.post(api + '/common/company/confirm', qs.stringify(params)).then(res => res.data)
}
// 发起支付
export const createPayNoUpdate = (params) => {
  return http.post(api + '/payment/create', qs.stringify(params)).then(res => res.data)
}














// 4-1-7更新中底日产能接口
export const updateDeilycapacity = (id, params) => {
  return http.post(api + '/resource/insole/update/dailycapacity/' + id, qs.stringify(params)).then(res => res.data)
}







// 11 index banenr
export const bannerGet = (params) => {
  return http.get(api + '/banner/get').then(res => res.data)
}
// 11 ad
export const adSpaceGet = (params) => {
  return http.get(api + `/space/get/${params}`).then(res => res.data)
}







// 4.2 验证是否有采购权限
export const hasPurchasePermission = (params) => {
  return http.get(api + `/route/hasPurchasePermission`).then(res => res.data)
}
