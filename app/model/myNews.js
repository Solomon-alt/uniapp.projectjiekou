module.exports = app => {
    let mongoose = app.mongoose
    let Schema = mongoose.Schema
    const MyNewsSchema = new Schema({
        // 标题
        titles: {
            type: String,
            // required:true
        },
        // 类型
        types: {
            type: String,
        },
        // 日期
        dates: {
            type: String,
        },
        // 详情  填写地址，点击查看详情时跳转路由至详情页
        details: {
            type: String,
        },
        // 热门
        hot: {
            type: String,
        },
        // 链接
        link: {
            type: String,
        },
        // 内容
        content: {
            type: String,
        }
    })
    return mongoose.model('ShopNews', MyNewsSchema)
}