'use strict';

const Controller = require('egg').Controller;

class DiscountFlowerController extends Controller {
  // 储存劲爆数据
  async Discounts() {
    let { ctx } = this
    let { names } = ctx.request.body
    let dis = await ctx.model.Discount.findOne({
      names
    })
    if (!dis) {
      let dis = new this.app.model.Discount(ctx.request.body)
      await dis.save()
      ctx.body = {
        code: 200,
        msg: '储存成功',
        data: dis
      }
    } else {
      ctx.body = {
        code: 200,
        msg: '已有该商品'
      }
    }
  }
  // 获取劲爆数据
  async GetDiscounts() {
    let data = await this.ctx.model.Discount.find()
    this.ctx.body = {
      data
    }
  }
}
module.exports = DiscountFlowerController;