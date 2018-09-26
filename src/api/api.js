import http from '../http/http'
import qs from 'qs'

let api = ''
let api2
let qiniuimg = ''
if (process.env.NODE_ENV === 'development') {
  
} else {
  // 测试环境
  if (process.env.type === 'test') {
    
  } else if (process.env.type === 'start') {
    
  } else if (process.env.type === 'develop') {
    
  } else {
    
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
// 当前用户未处理的通知
export const notifications = () => {
  return http.get(api + '/common/notification/notifications').then(res => res.data)
}
// 上传营业执照获取token地址
export const uploadLicense = (params) => {
  return http.get(api + '/common/attachment/token?type=' + params).then(res => res.data)
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
// 有验证码是，提交表单前，验证码提交
export const validateCode = (params) => {
  return http.get(api + '/common/captcha/validate/' + params).then(res => res.data)
}
// 注册
export const signup = (params) => {
  return http.post(api + '/common/company/register', qs.stringify(params)).then(res => res.data)
}
// 验证身份-获取短信接口
export const phoneValidateCode = (params) => {
  return http.get(api + '/common/sms/code/verify/' + params).then(res => res.data)
}
// 验证身份-验证短信验证码是否正确
export const phoneValidateCodeIsTrue = (params) => {
  return http.get(api + '/common/sms/validate/' + params).then(res => res.data)
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
// 采购订单--列表
export const purchaseList = (params) => {
  return http.post(api + '/orderinsole/querybyuser', qs.stringify(params)).then(res => res.data)
}
// 采购订单--交货计划
export const deliveryPlan = (params) => {
  return http.post(api + '/orderschedule/save', qs.stringify(params)).then(res => res.data)
}
// 采购订单--获取合同信息
export const contract = (params) => {
  return http.get(api + '/contractinsole/querybyorder/' + params).then(res => res.data)
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
// 个人收货地址
export const addresses = (params) => {
  return http.get(api + '/address/addresses', params).then(res => res.data)
}
// 删除收货地址
export const deleAddress = (id, params) => {
  return http.post(api + '/address/delete/' + id, qs.stringify(params)).then(res => res.data)
}
// 添加收货地址
export const saveAddress = (params) => {
  return http.post(api + '/address/save', qs.stringify(params)).then(res => res.data)
}
// 编辑收货地址
export const updateAddress = (id, params) => {
  return http.post(api + '/address/update/' + id, qs.stringify(params)).then(res => res.data)
}
// 省市区
export const cityPro = (id, params) => {
  return http.get(api + '/common/district/area/' + id, params).then(res => res.data)
}
// 获取仓库地址
export const querybycompany = (params) => {
  return http.get(api + '/storeaddress/querybycompany', params).then(res => res.data)
}
// 删除仓库地址
export const deletecompany = (params) => {
  return http.post(api + '/storeaddress/delete', qs.stringify(params)).then(res => res.data)
}
// 添加本地购物车
export const addmore = (params) => {
  return http.post(api + '/cart/addmore', qs.stringify(params)).then(res => res.data)
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
// 采购单列表
export const shopList = (params) => {
  return http.get(api + '/cart/get/purchase', params).then(res => res.data)
}
// 删除购物车所有有效数据
export const clearCar = (params) => {
  return http.post(api + '/cart/clear', qs.stringify(params)).then(res => res.data)
}
// 删除购物车单条数据
export const deleCar = (params) => {
  return http.post(api + '/cart/del', qs.stringify(params)).then(res => res.data)
}
// 批量删除购物车所以数据
export const delmoreCar = (params) => {
  return http.post(api + '/cart/delmore', qs.stringify(params)).then(res => res.data)
}
// 拿样单数据
export const sampleList = (params) => {
  return http.get(api + '/cart/get/sample', params).then(res => res.data)
}
// 2-10 去拿样
export const saveSampleList = (params) => {
  return http.post(api + '/ordersample/save', qs.stringify(params)).then(res => res.data)
}
// 发起支付
export const createPay = (params) => {
  return http.post(api + '/ordersample/update', qs.stringify(params)).then(res => res.data)
}
// // 支付结果
export const resultPay = (params) => {
  return http.get(api + '/payment/status' + params).then(res => res.data)
}
// 确认采购
export const confirmCar = (params) => {
  return http.post(api + '/purchase/confirm', qs.stringify(params)).then(res => res.data)
}
// 获取size
export const getSize = (id, type, params) => {
  return http.get(api + '/cart/get/purchase/size/' + id + '/' + type, params).then(res => res.data)
}
// 订单信息
export const orderDetail = (id, params) => {
  return http.get(api + '/ordersample/detail/' + id, params).then(res => res.data)
}
// 采购订单--确认合同
export const confirm = (params) => {
  return http.post(api + '/contractinsole/confirm', qs.stringify(params)).then(res => res.data)
}
// 采购订单--试做
export const tryDo = (params) => {
  return http.post(api + '/ordertest/apply', qs.stringify(params)).then(res => res.data)
}
// index-上架中底数据接口
export const indexInsoleNextData = (params) => {
  return http.get(api + '/common/resource/insole/putaway/pages?' + params).then(res => res.data)
}
// index-拿样单和采购单Api
export const cardAdd = (params) => {
  return http.post(api + '/cart/add', qs.stringify(params)).then(res => res.data)
}
// 采购订单--添加交货订单信息
export const orderdeliverySave = (params) => {
  return http.post(api + '/orderdelivery/save', qs.stringify(params)).then(res => res.data)
}
// 采购订单--修改交货订单信息
export const orderdeliveryUpdate = (params) => {
  return http.post(api + '/orderdelivery/update', qs.stringify(params)).then(res => res.data)
}
// 采购订单--获取交货订单信息
export const getorderdelivery = (params) => {
  return http.get(api + '/orderdelivery/getorderdelivery/' + params).then(res => res.data)
}
// 采购订单--获取交货订单信息
export const orderdeliveryDelete = (params) => {
  return http.post(api + '/orderdelivery/delete', qs.stringify(params)).then(res => res.data)
}
// 采购订单--获取样品详细信息
export const resourceDetail = (params) => {
  return http.get(api + '/common/resource/insole/get/' + params).then(res => res.data)
}
// index-拿样单和采购单Api 获取
export const carGet = () => {
  return http.get(api + '/cart/get').then(res => res.data)
}
// 采购订单--获取未排产的订单信息
export const noScheduleMsg = (params) => {
  return http.get(api + '/orderschedule/getordertest/' + params).then(res => res.data)
}
// 采购订单--获取排产订单未交货信息
export const noDeliveryMsg = (params) => {
  return http.get(api + '/orderdelivery/getorderschedule/' + params).then(res => res.data)
}
// 采购订单--物流信息
export const getLogsitics = (params) => {
  return http.get(api + '/orderphysical/distribution/getphysical/' + params).then(res => res.data)
}
// 注册 - 判断公司是否已经注册
export const companyExists = (params) => {
  return http.get(api + '/common/company/exists?companyName=' + encodeURI(params)).then(res => res.data)
}
// 拿样订单--获取订单列表
export const orderSampleList = (params) => {
  return http.post(api + '/ordersample/querybyuser', qs.stringify(params)).then(res => res.data)
}

// 权限公共模块
export const notificationRead = (params) => {
  return http.post(api + '/common/notification/read', qs.stringify(params)).then(res => res.data)
}
// 确定公司邀请
export const companyConfirm = (params) => {
  return http.post(api + '/common/company/confirm', qs.stringify(params)).then(res => res.data)
}
// 发起支付
export const createPayNoUpdate = (params) => {
  return http.post(api + '/payment/create', qs.stringify(params)).then(res => res.data)
}
// 采购订单--删除交货计划
export const deliveryPlanDelete = (params) => {
  return http.post(api + '/orderschedule/delete', qs.stringify(params)).then(res => res.data)
}
// 采购订单--获取排产详情
export const scheduleDetail = (params) => {
  return http.get(api + '/orderschedule/get/' + params).then(res => res.data)
}
// 采购订单--编辑交货计划
export const deliveryPlanUpdate = (params) => {
  return http.post(api + '/orderschedule/update', qs.stringify(params)).then(res => res.data)
}
// 未登录检查是否过期
export const iSCheck = (params) => {
  return http.post(api + '/common/resource/insole/putaway/check', qs.stringify(params)).then(res => res.data)
}
// 4-2-2分页获取上架中底数据接口
export const insoleInsoles = (params) => {
  return http.get(api + '/resource/insole/insoles?' + params).then(res => res.data)
}
// 2-14-1交货通知列表与分页
export const querybyuser = (params) => {
  return http.post(api + '/ordersupplier/querybyuser', qs.stringify(params)).then(res => res.data)
}
// 采购算法
export const getCountNum = (params) => {
  return http.post(api + '/purchase/getCountNum', qs.stringify(params)).then(res => res.data)
}
// 采购算法
export const getData = (params) => {
  return http.get(api + '/purchase/getData/' + params).then(res => res.data)
}

// 4-1-6更新中底名称接口
export const insoleUpdateName = (id, params) => {
  return http.post(api + '/resource/insole/update/name/' + id, qs.stringify(params)).then(res => res.data)
}
// 4-1-6更新中底数据
export const insoleUpdate = (id, params) => {
  return http.post(api + '/resource/insole/update/' + id, qs.stringify(params)).then(res => res.data)
}
// 4-1-10校验中底别名是否存在
export const checkInsoleName = (params) => {
  return http.get(api + `/resource/insole/check/insole/name?insoleName='${encodeURI(params)}'`).then(res => res.data)
}
// 4-1-12根据中底ID获取中底详情接口用于更新页面的回现
export const getInsoleDatil = (params) => {
  return http.get(api + '/resource/insole/get/datil/' + params).then(res => res.data)
}
// 4-1-5删除审核中底资源数据接口
export const removeInsole = (params) => {
  return http.post(api + '/resource/insole/remove/' + params).then(res => res.data)
}
// 4-1-7更新中底日产能接口
export const updateDeilycapacity = (id, params) => {
  return http.post(api + '/resource/insole/update/dailycapacity/' + id, qs.stringify(params)).then(res => res.data)
}
// 4-1-11根据中底ID获取中底日产能接口
export const getDeilycapacity = (params) => {
  return http.get(api + '/resource/insole/get/dailycapacity/' + params).then(res => res.data)
}
// 4-1-7获取中底字典数据资源接口
export const insoleGetDetail = (technology) => {
  return http.get(api + '/resource/insole/get/dict/' + technology).then(res => res.data)
}
// 4-1-8获取中底前掌厚度数据资源接口
export const getInsoleThickness = (technology) => {
  return http.get(api + '/resource/insole/get/thickness/dict/' + technology).then(res => res.data)
}
// 1-3-1默认收货地址
export const updateDefault = (params) => {
  return http.post(api + '/address/update/default', qs.stringify(params)).then(res => res.data)
}
// 交货通知地址
export const address = () => {
  return http.get(api + '/address/fixed').then(res => res.data)
}
// 2-14-03交货接单
export const getReceive = (params) => {
  return http.get(api + '/ordersupplier/receive/' + params).then(res => res.data)
}
// 2-14-04交货拒单
export const getReject = (params) => {
  return http.get(api + '/ordersupplier/reject/' + params).then(res => res.data)
}
// 2-14-02交货出货
export const getTransportation = (params) => {
  return http.get(api + '/ordersupplier/transportation/' + params).then(res => res.data)
}
// 2-15-1收货时间列表
export const datePlan = (params) => {
  return http.post(api + '/receipt/manage/query/datePlan', qs.stringify(params)).then(res => res.data)
}
// 2-25-2某天收货列表
export const queryDay = (params) => {
  return http.post(api + '/receipt/manage/query/day', qs.stringify(params)).then(res => res.data)
}
// 4-3-1交货详情
export const insoleGet = (params) => {
  return http.get(api + '/common/resource/insole/get/' + params).then(res => res.data)
}
// 4-1-1添加中底资源数据接口
export const insoleSave = (params) => {
  return http.post(api + '/resource/insole/save', qs.stringify(params)).then(res => res.data)
}
// 11 index banenr
export const bannerGet = (params) => {
  return http.get(api + '/banner/get').then(res => res.data)
}
// 11 ad
export const adSpaceGet = (params) => {
  return http.get(api + `/space/get/${params}`).then(res => res.data)
}
// 4.2 新品推荐
export const putawayNew = (params) => {
  return http.get(api + `/common/resource/insole/putaway/new?${params}`).then(res => res.data)
}
// 4.2 首页中低列表
export const putawayType = (params) => {
  return http.get(api + `/common/resource/insole/putaway/type?${params}`).then(res => res.data)
}
// 4.2 pdetail详情接口
export const putawayDetail = (params) => {
  return http.get(api + `/common/resource/insole/putaway/detail/${params}`).then(res => res.data)
}
// 4.2 热卖推荐
export const putawayHot = (params) => {
  return http.get(api + `/common/resource/insole/putaway/hot`).then(res => res.data)
}
// 4.2 中低列表数据项
export const insoleQueryCondition = (params) => {
  return http.get(api + `/common/resource/insole/putaway/query/condition`).then(res => res.data)
}
// 4.2 中低列表侧边
export const insolePutawaySide = (params) => {
  return http.get(api + `/common/resource/insole/putaway/side`).then(res => res.data)
}
// 4.2 中低列表分页
export const insolePutawayPages = (params) => {
  return http.get(api + `/common/resource/insole/putaway/pages?${params}`).then(res => res.data)
}
// 4.2 验证是否有采购权限
export const hasPurchasePermission = (params) => {
  return http.get(api + `/route/hasPurchasePermission`).then(res => res.data)
}
