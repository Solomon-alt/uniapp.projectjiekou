"use strict";

const Service = require("egg").Service;

class MarketingService extends Service {
  async getHomeData() {
    let list = {
      code: "200",
      title: "数据首页",
      data: [
        {
          id: "100",
          title: "统计数据",
          icon: "md-trending-up",
          children: [
            {
              id: "101",
              title: "店铺统计",
              describe: "店铺的基础数据统计",
              icon: "ios-card",
            },
            {
              id: "102",
              title: "商品统计",
              describe: "商品的基础数据统计",
              icon: "md-analytics",
            },
            {
              id: "103",
              title: "订单统计",
              describe: "订单的基础数据统计",
              icon: "ios-analytics",
            },
            {
              id: "104",
              title: "会员统计",
              describe: "会员的基础数据统计",
              icon: "ios-people-outline",
            },
          ],
        },
      ],
    };
    return list
  }
}
