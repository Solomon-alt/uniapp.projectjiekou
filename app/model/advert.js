module.exports = app => {
    let mongoose = app.mongoose
    let Schema = mongoose.Schema
    const AdvertSchema = new Schema({
        // 名称
        name: {
            type: String
        },
        // 描述
        describe: {
            type: String
        },
        // 展示方式
        show: {
            type: String
        },
        // 平台
        platform: {
            type: String
        },
        // 编码
        codes: {
            type: String
        },
        // 宽
        width: {
            type: String
        },
        // 高
        height: {
            type: String
        },
        // 背景色
        backgroundColor: {
            type: String
        },
        // 类型
        types: {
            type: String
        },
        // 图片
        picture: {
            type: String
        },
        // 状态
        state: {
            type: String
        },
    })
    return mongoose.model('Advert', AdvertSchema)
}