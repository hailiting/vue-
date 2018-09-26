// 4-1-1 添加中底资源数据接口
export const insoleSave = (params) => {
  return http.post(api + '/resource/insole/save', qs.stringify(params)).then(res => res.data)
}

// 4-1-2 根据传入的参数更新中底资源数据
export const insoleUpdate = (id, params) => {
  return http.post(api + '/resource/insole/update/' + id, qs.stringify(params)).then(res => res.data)
}

// 4-1-3 获取中底列表
export const insoleInsoles = (params) => {
  return http.get(api + '/resource/insole/insoles?' + params).then(res => res.data)
}

// 4-1-4 删除审核中底资源数据接口
export const removeInsole = (params) => {
  return http.post(api + '/resource/insole/remove/' + params).then(res => res.data)
}

// 4-1-5 更新中底名称接口
export const insoleUpdateName = (id, params) => {
  return http.post(api + '/resource/insole/update/name/' + id, qs.stringify(params)).then(res => res.data)
}

// 4-1-7 获取中底字典数据资源接口
export const insoleGetDetail = (technology) => {
  return http.get(api + '/resource/insole/get/dict/' + technology).then(res => res.data)
}

// 4-1-8 获取中底前掌厚度数据资源接口
export const getInsoleThickness = (technology) => {
  return http.get(api + '/resource/insole/get/thickness/dict/' + technology).then(res => res.data)
}

// 4-1-9 校验中底别名是否存在
export const checkInsoleName = (params) => {
  return http.get(api + `/resource/insole/check/insole/name?insoleName='${encodeURI(params)}'`).then(res => res.data)
}

// 4-1-10 根据中底ID获取中底日产能接口
export const getDeilycapacity = (params) => {
  return http.get(api + '/resource/insole/get/dailycapacity/' + params).then(res => res.data)
}

// 4-1-11 根据中底ID获取中底详情接口用于更新页面的回现
export const getInsoleDatil = (params) => {
  return http.get(api + '/resource/insole/get/datil/' + params).then(res => res.data)
}

// 4-2-1 根据传入的上架{putAwayId}参数获取上架中底的详情
export const putawayDetail = (params) => {
  return http.get(api + `/common/resource/insole/putaway/detail/${params}`).then(res => res.data)
}

// 4-2-2 中低列表分页
export const insolePutawayPages = (params) => {
  return http.get(api + `/common/resource/insole/putaway/pages?${params}`).then(res => res.data)
}

export const indexInsoleNextData = (params) => {
  return http.get(api + '/common/resource/insole/putaway/pages?' + params).then(res => res.data)
}

// 4-2-3 根据传入的上架中底id数组数据校验是否上下架接口
export const iSCheck = (params) => {
  return http.post(api + '/common/resource/insole/putaway/check', qs.stringify(params)).then(res => res.data)
}

// 4-2-4 首页中底列表
export const putawayType = (params) => {
  return http.get(api + `/common/resource/insole/putaway/type?${params}`).then(res => res.data)
}

// 4-2-5 新品推荐
export const putawayNew = (params) => {
  return http.get(api + `/common/resource/insole/putaway/new?${params}`).then(res => res.data)
}

// 4-2-6 热卖推荐
export const putawayHot = (params) => {
  return http.get(api + `/common/resource/insole/putaway/hot`).then(res => res.data)
}

// 4-2-8 侧边推荐
export const insolePutawaySide = (params) => {
  return http.get(api + `/common/resource/insole/putaway/side`).then(res => res.data)
}

// 4-2-9 获取列表页查询条件的字典数据，text值用来页面展示，value值用来作为列表页面查询的参数，请看接口（4-2-2）
export const insoleQueryCondition = (params) => {
  return http.get(api + `/common/resource/insole/putaway/query/condition`).then(res => res.data)
}

// 4-3-1交货详情
export const insoleGet = (params) => {
  return http.get(api + '/common/resource/insole/get/' + params).then(res => res.data)
}

export const resourceDetail = (params) => {
  return http.get(api + '/common/resource/insole/get/' + params).then(res => res.data)
}