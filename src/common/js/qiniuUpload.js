let qiNiuImgUpload = {
  // 得到本地图片url
  getObjectURL(file) {
    let url = ''
    if (window.navigator.userAgent.indexOf('Chrome') >= 1 || window.navigator.userAgent.indexOf('Safari') >= 1) {
      url = window.webkitURL.createObjectURL(file)
    } else {
      url = window.URL.createObjectURL(file)
    }
    return url
  },
  // 判断图片类型
  // png
  PNGType(filename) {
    if (!filename.match(/.png/i)) {
      return '仅支持png格式，最多可上传9张图片，每张图片大小不超过5M！'
    }
  },
  // jpg | jpeg | bmp | png | pdf
  moreImgType(filename) {
    if (!filename.match(/.jpg|.jpeg|.png|.bmp|.png|.pdf/i)) {
      return '支持jpg | jpeg | bmp | png | pdf格式! '
    }
  },
  // jpg | jpeg | bmp | png
  moreImgTypes(filename) {
    if (!filename.match(/.jpg|.jpeg|.png|.bmp|.png/i)) {
      return '支持jpg | jpeg | bmp | png格式! '
    }
  },
  // 判断图片大小  最大6M
  ImgSize(filesize) {
    if (filesize > 6291456) {
      return '文件大小不超过5M'
    }
  }
}
export default qiNiuImgUpload
