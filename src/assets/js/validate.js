let validates = {
  // 中底名称不能超过25个字或50个字符
  // 测试中文字符的正则  /[\u4E00-\u9FA5]/g
  RegEx: [
    {
      isChina: /[\u4E00-\u9FA5]/g
    },
    // 字符
    {
      isStr: /[^\x00-\xff]/g
    }
  ],
  insoleNameV(val, bol) {
    if (val.length > 0) {
      if (val.replace(validates.RegEx[1].isStr, '**').length > 50) {
        return '中底名称不能超过25个字或50个字符'
      }
    } else {
      if (bol) {
        return '请输入中底名称'
      }
    }
  }
}
export default validates