'use strict';
// 店铺首页信息
const Controller = require('egg').Controller;

class ShopController extends Controller {
  async shopList() {
    // this.ctx.body = '店铺详情'
    let listtwo = await this.service.shop.getShopData()
    this.ctx.body = listtwo
  }
}

module.exports = ShopController;
