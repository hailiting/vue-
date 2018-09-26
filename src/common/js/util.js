var utils = {
  class2type: {},
  /**
     * 如果传递的参数对象中包含数组，调用此方法进行格式化
     */
  formatSpringMVC: function (obj) {
    return this.formatArray({}, obj, '')
  },
  toFixedTwo(Num) {
    if (Num) {
      if (!isNaN(Num)) {
        Num = parseFloat(Num).toFixed(2)
      }
    }
    return Num
  },
  formatArray: function (sourceObj, targetObj, parentKey) {
    if (this.isPlainObject(targetObj)) {
      for (var prop in targetObj) {
        var targetProp = targetObj[prop]
        // 如果是普通对象
        if (this.isPlainObject(targetProp)) {
          if (parentKey) {
            this.formatArray(sourceObj, targetProp, parentKey)
          } else {
            sourceObj[prop] = this.formatArray({}, targetProp)
          }
        } else if (this.isArray(targetProp)) { // 如果属性是一个数组
          for (var i = 0; i < targetProp.length; i++) {
            var parentProp = parentKey + (parentKey ? '.' : '') + prop + '[' + i + ']'
            this.formatArray(sourceObj, targetProp[i], parentProp)
          }
        } else { // 基本属性
          if (parentKey) {
            sourceObj[parentKey + '.' + prop] = targetProp
          } else {
            sourceObj[prop] = targetProp
          }
        }
      }
      return sourceObj
    } else {
      if (parentKey) {
        sourceObj[parentKey] = targetObj
      } else {
        return targetObj
      }
    }
  },
  toNumber: function (str) {
    return str.replace(/[^0-9-.]/g, '')
  },
  getFloat: function (source) {
    source = this.repSpecialCharInNumberStr(source)
    var parseResult = 0
    if (source) {
      parseResult = parseFloat(source)
      if (isNaN(parseResult)) {
        parseResult = 0
      }
    }
    return parseResult
  },
  repSpecialCharInNumberStr: function (source) {
    if (source instanceof String) {
      source = source.replace(',', '').replace('\n', '').replace('\r', '')
      return source
    }
    return source
  },
  clone: function (obj) {
    return JSON.parse(JSON.stringify(obj))
  },
  isArray: function (o) {
    return Object.prototype.toString.call(o) === '[object Array]'
  },
  isPlainObject: function (obj) {
    let hasOwn = this.class2type.hasOwnProperty
    var key
    if (!obj || this.type(obj) !== 'object' || obj.nodeType) {
      return false
    }
    try {
      if (obj.constructor &&
        !hasOwn.call(obj, 'constructor') &&
        !hasOwn.call(obj.constructor.prototype, 'isPrototypeOf')) {
        return false
      }
    } catch (e) {
      return false
    }
    for (key in obj) { }
    return key === undefined || hasOwn.call(obj, key)
  },
  type: function (obj) {
    if (obj == null) {
      return obj + ''
    }
    return typeof obj === 'object' || typeof obj === 'function' ? 'object' : typeof obj
  }
}
export default utils