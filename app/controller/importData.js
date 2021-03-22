"use strict";
//  往数据库导入数据
const Controller = require("egg").Controller;
const path = require("path");
const fs = require("fs");
class ImportDataController extends Controller {
    async index() {
        const { ctx } = this;
        // const res = await ctx.model.Admin.find({});
        // !res.length
        if (1) {
            // 说明数据库没有商品，导入商品
            ctx.body = "导入数据成功";

            // console.log('123123123')

            // 导入用户数据
            fs.readFile(path.resolve(__dirname, '../model/myNews.json'), 'utf8', (err, data) => {
                data = JSON.parse(data)
                let saveCount = 0
                data.map((value, index) => {
                    let newGoods = new ctx.model.Goods(value)
                    newGoods.save().then(() => {
                        saveCount++
                        console.log('数据导入成功' + saveCount + '条')
                    }).catch(error => {
                        console.log('数据导入失败：' + error + '条')
                    })
                })
            })


            // 导入用户数据
            fs.readFile(path.resolve(__dirname, '../model/myNews.json'), 'utf8', (err, data) => {
                data = JSON.parse(data)
                let saveCount = 0
                data.map((value, index) => {
                    let newGoods = new ctx.model.Goods(value)
                    newGoods.save().then(() => {
                        saveCount++
                        console.log('数据导入成功' + saveCount + '条')
                    }).catch(error => {
                        console.log('数据导入失败：' + error + '条')
                    })
                })
            })
        } else {
            ctx.body = "hello egg.js";
        }
    }
}

module.exports = ImportDataController;