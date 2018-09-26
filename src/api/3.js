// 3-1-1 获取订单合同详情
export const contract = (params) => {
  return http.get(api + '/contractinsole/querybyorder/' + params).then(res => res.data)
}

// 3-1-2 确认合同
export const confirm = (params) => {
  return http.post(api + '/contractinsole/confirm', qs.stringify(params)).then(res => res.data)
}