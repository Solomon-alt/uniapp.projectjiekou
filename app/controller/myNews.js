'use strict';
// 我的消息
const Controller = require('egg').Controller;

class MyNewsController extends Controller {
  async shopnews() {
    let { ctx } = this
    let { titles } = ctx.request.body
    let news = await ctx.model.MyNews.findOne({
      titles
    })
    if (!news) {
      let news = new this.app.model.MyNews(ctx.request.body)
      await news.save()
      ctx.body = {
        code: 200,
        msg: '添加成功'
      }
    } else {
      ctx.body = {
        code: 500,
        msg: '添加失败'
      }
    }
  }
  // 全部消息接口
  async findnews() {
    let data = await this.ctx.model.MyNews.find()
    this.ctx.body = {
      data
    }
  }

  // 系统消息接口
  async findtypes() {

    let { ctx } = this
    let { types } = ctx.request.body
    let typesnotice = await ctx.model.MyNews.find({
      types
    })
    if (typesnotice) {
      ctx.body = {
        code: 200,
        msg: '请求成功',
        data: typesnotice
        // token
      }
    } else {
      ctx.body = {
        code: 500,
        msg: '请求失败'
      }
    }
  }
  async findOneNews() {

    let { ctx } = this
    let { _id } = ctx.request.body
    let newsId = await ctx.model.MyNews.findOne({
      _id
    })
    if (newsId) {
      ctx.body = {
        code: 200,
        msg: '请求成功',
        newsId
        // token
      }
    } else {
      ctx.body = {
        code: 500,
        msg: '请求失败'
      }
    }
  }


}

module.exports = MyNewsController;
