

module.exports = app => {
  let mongoose = app.mongoose
  let Schema = mongoose.Schema
  const discountSchema = new Schema({
    // 商品介绍信息
    names: {
      type: String
    },
    // 店铺
    shops: {
      type: String
    },
    // 现价
    presentPrice: {
      type: String
    },
    // 原价
    originalPrice: {
      type: String
    },
    // 图片
    img: {
      type: String
    },
    // 标签
    tages: {
      type: String
    }

  })
  return mongoose.model('Discount', discountSchema)
}