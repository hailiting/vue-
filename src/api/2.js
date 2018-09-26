// 2-2-1 获取当前用户订单信息列表
export const purchaseList = (params) => {
  return http.post(api + '/orderinsole/querybyuser', qs.stringify(params)).then(res => res.data)
}

// 2-4-1 申请试做
export const tryDo = (params) => {
  return http.post(api + '/ordertest/apply', qs.stringify(params)).then(res => res.data)
}

// 2-6-1 获取未交货计划的中底订单信息
export const noScheduleMsg = (params) => {
  return http.get(api + '/orderschedule/getordertest/' + params).then(res => res.data)
}

// 2-6-2 添加交货计划
export const deliveryPlan = (params) => {
  return http.post(api + '/orderschedule/save', qs.stringify(params)).then(res => res.data)
}

// 2-6-3 修改交货计划
export const deliveryPlanUpdate = (params) => {
  return http.post(api + '/orderschedule/update', qs.stringify(params)).then(res => res.data)
}

// 2-6-4 删除交货计划
export const deliveryPlanDelete = (params) => {
  return http.post(api + '/orderschedule/delete', qs.stringify(params)).then(res => res.data)
}

// 2-6-5 根据交货计划订单编号获取交货计划详细信息
export const scheduleDetail = (params) => {
  return http.get(api + '/orderschedule/get/' + params).then(res => res.data)
}

// 2-8-1 获取排产订单未交货信息
export const noDeliveryMsg = (params) => {
  return http.get(api + '/orderdelivery/getorderschedule/' + params).then(res => res.data)
}

// 2-8-2 添加交货订单信息
export const orderdeliverySave = (params) => {
  return http.post(api + '/orderdelivery/save', qs.stringify(params)).then(res => res.data)
}

// 2-8-3 修改交货订单信息
export const orderdeliveryUpdate = (params) => {
  return http.post(api + '/orderdelivery/update', qs.stringify(params)).then(res => res.data)
}

// 2-8-4 删除交货订单信息
export const orderdeliveryDelete = (params) => {
  return http.post(api + '/orderdelivery/delete', qs.stringify(params)).then(res => res.data)
}

// 2-8-7 获取交货订单信息
export const getorderdelivery = (params) => {
  return http.get(api + '/orderdelivery/getorderdelivery/' + params).then(res => res.data)
}

// 2-9-2 获取物流信息
export const getLogsitics = (params) => {
  return http.get(api + '/orderphysical/distribution/getphysical/' + params).then(res => res.data)
}

// 2-10-1 添加拿样订单信息
export const saveSampleList = (params) => {
  return http.post(api + '/ordersample/save', qs.stringify(params)).then(res => res.data)
}

// 2-10-2 发起支付
export const createPay = (params) => {
  return http.post(api + '/ordersample/update', qs.stringify(params)).then(res => res.data)
}

// 2-10-3 订单信息
export const orderDetail = (id, params) => {
  return http.get(api + '/ordersample/detail/' + id, params).then(res => res.data)
}

// 2-10-4 获取拿样订单列表
export const orderSampleList = (params) => {
  return http.post(api + '/ordersample/querybyuser', qs.stringify(params)).then(res => res.data)
}

// 2-12-1 获取当前用户的拿样单和采购单
export const carGet = () => {
  return http.get(api + '/cart/get').then(res => res.data)
}

// 2-12-2 删除购物车单条数据
export const deleCar = (params) => {
  return http.post(api + '/cart/del', qs.stringify(params)).then(res => res.data)
}
// 2-12-3 批量删除购物车所以数据
export const delmoreCar = (params) => {
  return http.post(api + '/cart/delmore', qs.stringify(params)).then(res => res.data)
}

// 2-12-4 添加购物车
export const cardAdd = (params) => {
  return http.post(api + '/cart/add', qs.stringify(params)).then(res => res.data)
}

// 2-12-5 批量添加购物车
export const addmore = (params) => {
  return http.post(api + '/cart/addmore', qs.stringify(params)).then(res => res.data)
}

// 2-12-6 清空购物车
export const clearCar = (params) => {
  return http.post(api + '/cart/clear', qs.stringify(params)).then(res => res.data)
}

// 2-12-7 购物车拿样单数据
export const sampleList = (params) => {
  return http.get(api + '/cart/get/sample', params).then(res => res.data)
}

// 2-12-8 购物车采购单列表
export const shopList = (params) => {
  return http.get(api + '/cart/get/purchase', params).then(res => res.data)
}

// 2-12-9 获取某个采购单的尺码类型的尺码信息
export const getSize = (id, type, params) => {
  return http.get(api + '/cart/get/purchase/size/' + id + '/' + type, params).then(res => res.data)
}

// 2-13-1 确认采购订单
export const confirmCar = (params) => {
  return http.post(api + '/purchase/confirm', qs.stringify(params)).then(res => res.data)
}

// 2-13-2 采购算法
export const getData = (params) => {
  return http.get(api + '/purchase/getData/' + params).then(res => res.data)
}

// 2-13-3 采购算法
export const getCountNum = (params) => {
  return http.post(api + '/purchase/getCountNum', qs.stringify(params)).then(res => res.data)
}

// 2-14-1 根据用户所在的公司获取供应商生产订单列表
export const querybyuser = (params) => {
  return http.post(api + '/ordersupplier/querybyuser', qs.stringify(params)).then(res => res.data)
}

// 2-14-2 前置状态：【已接单】，供应商对该条订单进行出库，将货送到翰越太古仓库，并将状态更新为【运输中】
export const getTransportation = (params) => {
  return http.get(api + '/ordersupplier/transportation/' + params).then(res => res.data)
}

// 2-14-3 前置状态：【待接单】，供应商对该条订单进行接单之后，状态更新为【待出库】
export const getReceive = (params) => {
  return http.get(api + '/ordersupplier/receive/' + params).then(res => res.data)
}

// 2-14-4 【待接单】，供应商对该条订单进行拒单之后，状态更新为【已拒单】，并清除相关待处理订单的状态，使可以继续被派单
export const getReject = (params) => {
  return http.get(api + '/ordersupplier/reject/' + params).then(res => res.data)
}

// 2-15-1 查看某时间段内的收货计划
export const datePlan = (params) => {
  return http.post(api + '/receipt/manage/query/datePlan', qs.stringify(params)).then(res => res.data)
}

// 2-25-2 查看某天的数据列表
export const queryDay = (params) => {
  return http.post(api + '/receipt/manage/query/day', qs.stringify(params)).then(res => res.data)
}