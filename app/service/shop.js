'use strict';

const Service = require('egg').Service;

class shopService extends Service {
  async getShopData() {
    let listtwo = {
      code: '200',
      data: [{
        id: '800',
        authname: '消息管理',
        icon: 'ios-notifications-outline',
        children: [
          {
            id: '801',
            describe: '接受系统发过来的消息',
            authname: '我的消息',
            icon: 'ios-mail-outline',
            path: '',
          },
          {
            id: '802',
            describe: '对外发布消息',
            authname: '发布消息',
            icon: 'ios-mail-open-outline',
          }
        ]
      }, {
        id: '810',
        authname: '广告发布',
        icon: 'ios-aperture-outline',
        children: [
          {
            id: '811',
            describe: '广告位置是广告列表的母版',
            authname: '广告位置',
            icon: 'ios-podium-outline',
          },
          {
            id: '812',
            describe: '可单独发布或归类到广告位',
            authname: '广告列表',
            icon: 'md-reorder',
          },
        ]
      }, {
        id: '820',
        authname: '文章发布',
        icon: 'md-paper',
        children: [
          {
            id: '821',
            describe: '添加新的文章',
            authname: '新增文章',
            icon: 'ios-easel-outline',
          },
          {
            id: '822',
            describe: '管理文章的增、删、改等',
            authname: '文章管理',
            icon: 'ios-paper-outline',
          },
          {
            id: '823',
            describe: '为文章分配可归类的分类',
            authname: '文章分类',
            icon: 'ios-git-merge',
          },
        ]
      }, {
        id: '830',
        authname: '专题发布',
        icon: 'logo-buffer',
        children: [
          {
            id: '831',
            describe: '添加新的专题',
            authname: '新增专题',
            icon: 'ios-log-in',
          },
          {
            id: '832',
            describe: '管理专题的增、删、改等',
            authname: '专题管理',
            icon: 'md-analytics',
          },
        ]
      }, {
        id: '840',
        authname: '附件资源',
        icon: 'md-attach',
        children: [
          {
            id: '841',
            describe: '对已上传的资源进行管理',
            authname: '资源管理',
            icon: 'md-images',
          },
          {
            id: '842',
            describe: '动态分配、管理资源样式',
            authname: '资源样式',
            icon: 'md-appstore',
          },
        ]
      }, {
        id: '850',
        authname: '辅助管理',
        icon: 'ios-desktop',
        children: [
          {
            id: '851',
            describe: '添加自定义代码，供前端调',
            authname: '客服人员',
            icon: 'logo-whatsapp',
          },
          {
            id: '852',
            describe: '物流轨迹流水记录操作',
            authname: '配送轨迹',
            icon: 'ios-pin-outline',
          },
          {
            id: '853',
            describe: '友情链接管理',
            authname: '友情链接',
            icon: 'ios-link',
          },
          {
            id: '854',
            describe: '可做物料的发布与管理',
            authname: '二维码',
            icon: 'md-qr-scanner',
          },
        ]
      }]
    }
    return listtwo
  }
}

module.exports = shopService;
