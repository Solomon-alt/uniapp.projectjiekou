'use strict';

const Controller = require('egg').Controller;

class AdvertController extends Controller {
    async addAdvert() {
        let { ctx } = this
        let { name, describe, show, platform, codes, width, height, backgroundColor, types, picture, state } = ctx.request.body
        let advert = await ctx.model.Advert.findOne({
            name,
            describe,
            show,
            platform,
            codes,
            width,
            height,
            backgroundColor,
            types,
            picture,
            state
        })
        if (!advert) {
            let advert = new this.app.model.Advert(ctx.request.body)
            await advert.save()
            ctx.body = {
                code: 200,
                msg: '新建成功'
            }
        } else {
            ctx.body = {
                code: 500,
                msg: '新建失败'
            }
        }
    }
}

module.exports = AdvertController;