"use strict";

const Service = require("egg").Service;

class MarketingService extends Service {
  async getCategory() {
    let list = {
      code: 200,
      title: "获取成功",
      res: [
        {
          id: 100,
          title: "热搜推荐",
          children: [
            {
              id: 101,
              title: "猜你想搜",
              children: [
                {
                  title: "饼干蛋糕",
                  img:
                    "http://img10.360buyimg.com/focus/s140x140_jfs/t21448/247/189820564/20127/d5cc76fd/5b024112Nbaa67999.jpg",
                },
                {
                  title: "手机",
                  img:
                    "https://img10.360buyimg.com/focus/s140x140_jfs/t11503/241/2246064496/4783/cea2850e/5a169216N0701c7f1.jpg",
                },
                {
                  title: "口红",
                  img:
                    "https://img10.360buyimg.com/focus/s140x140_jfs/t17503/252/2512889132/27294/443c2fac/5afd3c33N4a033cfa.jpg",
                },
                {
                  title: "空调",
                  img:
                    "https://img14.360buyimg.com/focus/s140x140_jfs/t12058/333/988659369/2356/40b65021/5a17f6f6Ndfe746aa.jpg",
                },
                {
                  title: "冰箱",
                  img:
                    "https://img10.360buyimg.com/focus/s140x140_jfs/t14047/217/992011228/3503/5b1fa21a/5a17f699N94996c85.jpg",
                },
                {
                  title: "板鞋",
                  img:
                    "https://img20.360buyimg.com/focus/s140x140_jfs/t11608/19/2161730920/5152/2fca75c0/5a13945cN82a4c505.jpg",
                },
              ],
            },
            {
              id: "102",
              title: "男士热搜",
              children: [
                {
                  title: "风衣",
                  img:
                    "https://img20.360buyimg.com/focus/s140x140_jfs/t17890/31/1269777779/2792/917e13d0/5ac47830N63e76af2.jpg",
                },
                {
                  title: "卫衣",
                  img:
                    "https://img30.360buyimg.com/focus/s140x140_jfs/t18886/239/1308846966/4452/3baec65f/5ac4782aN695a7262.jpg",
                },
                {
                  title: "牛仔裤",
                  img:
                    "https://img20.360buyimg.com/focus/s140x140_jfs/t19222/87/1339548468/5738/68f3d8aa/5ac47841Nff658599.jpg",
                },
                {
                  title: "休闲裤",
                  img:
                    "https://img20.360buyimg.com/focus/s140x140_jfs/t17758/181/1301850814/2848/ad32e7c9/5ac47845N7374a31d.jpg",
                },
                {
                  title: "棒球服",
                  img:
                    "https://img13.360buyimg.com/focus/s140x140_jfs/t18184/365/779182021/3424/ba6636db/5aa63d4aN9ee1c065.jpg",
                },
                {
                  title: "针扣腰带",
                  img:
                    "https://img10.360buyimg.com/focus/s140x140_jfs/t11122/151/2147124909/1903/e674fad1/5a14d91aN3e24b30c.jpg",
                },
              ],
            },
            {
              id: "103",
              title: "女士热搜",
              children: [
                {
                  title: "白衬衫",
                  img:
                    "https://img11.360buyimg.com/focus/s140x140_jfs/t14266/108/2448202334/2099/c038057b/5a9fbfc7N33c2ad32.jpg",
                },
                {
                  title: "短外套女",
                  img:
                    "https://img12.360buyimg.com/focus/s140x140_jfs/t16960/330/672781171/5066/76e6f8c9/5a9fbfdcNc891be87.jpg",
                },
                {
                  title: "铅笔裤",
                  img:
                    "https://img30.360buyimg.com/focus/s140x140_jfs/t12832/251/703541500/2505/2cb22be9/5a126bcdN5660d28e.jpg",
                },
                {
                  title: "连衣裙",
                  img:
                    "https://img12.360buyimg.com/focus/s140x140_jfs/t12346/326/736792997/3041/8c591fbc/5a1284e4N5f6ac63d.jpg",
                },
                {
                  title: "字母T恤",
                  img:
                    "https://img11.360buyimg.com/focus/s140x140_jfs/t19732/6/697088077/2894/2788a72/5a9fbfd2Ncc01c1b5.jpg",
                },
                {
                  title: "通勤OL",
                  img:
                    "https://img12.360buyimg.com/focus/s140x140_jfs/t14173/278/783151079/2583/827febf/5a13f446N1df58a24.jpg",
                },
              ],
            },
            {
              id: "104",
              title: "生活热搜",
              children: [
                {
                  title: "床",
                  img:
                    "https://img14.360buyimg.com/focus/s140x140_jfs/t12145/4/1320763645/5520/e31a3bec/5a1eb09bNacf0137d.jpg",
                },
                {
                  title: "床垫",
                  img:
                    "https://img10.360buyimg.com/focus/s140x140_jfs/t15505/323/151621271/2774/71549915/5a28e2b3Ncd8a97a2.jpg",
                },
                {
                  title: "沙发",
                  img:
                    "https://img10.360buyimg.com/focus/s140x140_jfs/t11716/42/2660333348/7433/6b0f6f36/5a1eb085N58db3383.jpg",
                },
                {
                  title: "茶壶",
                  img:
                    "https://img10.360buyimg.com/focus/s140x140_jfs/t15886/6/103271394/2815/a5e012b0/5a28b9d6N95b454ed.jpg",
                },
                {
                  title: "卡通娃娃",
                  img:
                    "https://img30.360buyimg.com/focus/s140x140_jfs/t20383/22/187535112/16756/a55aa77/5b029f2dN9bbcb8e0.jpg",
                },
                {
                  title: "游戏耳机",
                  img:
                    "https://img12.360buyimg.com/focus/s140x140_jfs/t11668/226/2397294737/4421/ceffabb5/5a16a013N851d3dbf.jpg",
                },
              ],
            },
          ],
        },
        {
          id: 200,
          title: "食品酒水",
          children: [
            {
              id: "201",
              title: "热销推荐",
              children: [
                {
                  title: "纯净水",
                  img:
                    "https://img14.360buyimg.com/focus/s140x140_jfs/t21745/303/150824439/12821/5782b4f/5afeb92fNddd2c121.jpg",
                },
                {
                  title: "蛋白质饮料",
                  img:
                    "https://img30.360buyimg.com/focus/s140x140_jfs/t19543/4/2568517481/19825/c9d21874/5afeb95bN01221d80.jpg",
                },
                {
                  title: "方便面",
                  img:
                    "https://img10.360buyimg.com/focus/s140x140_jfs/t13960/237/184398959/3756/deb95739/5a0564d3N315cbc9d.jpg",
                },
                {
                  title: "白酒",
                  img:
                    "https://img14.360buyimg.com/focus/s140x140_jfs/t18181/109/2558425270/12312/e383d7f/5afeb44dN71307ca2.jpg",
                },
                {
                  title: "糖巧",
                  img:
                    "https://img12.360buyimg.com/focus/s140x140_jfs/t11890/195/1248876103/12648/403ce46a/59ffd6b9Nc88344b5.png",
                },
              ],
            },
            {
              id: "202",
              title: "休闲食品",
              children: [
                {
                  title: "休闲零食",
                  img:
                    "https://img30.360buyimg.com/focus/s140x140_jfs/t11431/77/1274462175/4200/a52ec5cc/59ffd6e2N287c043d.jpg",
                },
                {
                  title: "坚果炒货",
                  img:
                    "https://img20.360buyimg.com/focus/s140x140_jfs/t11461/336/1331406760/15773/60c49ab7/59ffd6d0Ncb29412d.png",
                },
                {
                  title: "肉干/熟食",
                  img:
                    "https://img11.360buyimg.com/focus/s140x140_jfs/t11749/28/952474396/2583/64b85652/59fc31b6N4feb7d84.jpg",
                },
                {
                  title: "蜜饯果干",
                  img:
                    "https://img11.360buyimg.com/focus/s140x140_jfs/t11275/128/1281544342/3341/64f437e/59ffd6fbN047718c7.jpg",
                },
                {
                  title: "饼干蛋糕",
                  img:
                    "https://img14.360buyimg.com/focus/s140x140_jfs/t11500/115/1293305736/3233/7bb2056a/59ffd6ccNb9875d1d.jpg",
                },
                {
                  title: "膨化食品",
                  img:
                    "https://img12.360buyimg.com/focus/s140x140_jfs/t17260/55/2574012639/24707/25f2869a/5b02609dN8d13b554.jpg",
                },
              ],
            },
            {
              id: "203",
              title: "中外名酒",
              children: [
                {
                  title: "白酒",
                  img:
                    "https://img14.360buyimg.com/focus/s140x140_jfs/t18181/109/2558425270/12312/e383d7f/5afeb44dN71307ca2.jpg",
                },
                {
                  title: "洋酒",
                  img:
                    "https://img13.360buyimg.com/focus/s140x140_jfs/t18709/77/2597376889/8764/51cc996b/5afeb464N9b715679.jpg",
                },
                {
                  title: "葡萄酒",
                  img:
                    "https://img12.360buyimg.com/focus/s140x140_jfs/t18091/200/2563599200/6102/986a556f/5afeb452N6f3b2526.jpg",
                },
                {
                  title: "啤酒",
                  img:
                    "https://img11.360buyimg.com/focus/s140x140_jfs/t18067/158/2576866215/11580/b9ea8d94/5afeb458N157ca653.jpg",
                },
                {
                  title: "黄酒/养生酒",
                  img:
                    "https://img13.360buyimg.com/focus/s140x140_jfs/t21523/358/134606238/35315/41013e8d/5afeb45eNd927ad59.jpg",
                },
              ],
            },
            {
              id: "204",
              title: "水饮茗茶",
              children: [
                {
                  title: "纯净水",
                  img:
                    "https://img14.360buyimg.com/focus/s140x140_jfs/t21745/303/150824439/12821/5782b4f/5afeb92fNddd2c121.jpg",
                },
                {
                  title: "苏打水",
                  img:
                    "https://img30.360buyimg.com/focus/s140x140_jfs/t21253/12/143239486/14399/ce2df304/5afeb934N993638b6.jpg",
                },
                {
                  title: "矿泉水",
                  img:
                    "https://img11.360buyimg.com/focus/s140x140_jfs/t21952/295/134939771/7438/8bd81333/5afeb939N8f997fb7.jpg",
                },
                {
                  title: "母婴水",
                  img:
                    "https://img20.360buyimg.com/focus/s140x140_jfs/t20794/171/143039849/8914/e2a2cfb6/5afeb93eNc223d4a0.jpg",
                },
                {
                  title: "气泡水",
                  img:
                    "https://img13.360buyimg.com/focus/s140x140_jfs/t21931/226/145842465/17743/2c1516dd/5afeb943N9dc11bd5.jpg",
                },
                {
                  title: "碳酸饮料",
                  img:
                    "https://img20.360buyimg.com/focus/s140x140_jfs/t21136/27/148114098/21764/dfe7107f/5afeb956Na0fe3b4c.jpg",
                },
              ],
            },
          ],
        },
        {
          id: "300",
          title: "生鲜果蔬",
          children: [
            {
              id: "301",
              title: "当季热销",
              children: [
                {
                  title: "大闸蟹",
                  img:
                    "https://img10.360buyimg.com/focus/s140x140_jfs/t22021/239/187409363/17310/9b25bbc/5b02aa59N07c651f5.jpg",
                },
                {
                  title: "鸡蛋",
                  img:
                    "https://img30.360buyimg.com/focus/s140x140_jfs/t11731/254/1619959296/10831/7bdc8c60/5a055f0eNbd78b0ca.jpg",
                },
                {
                  title: "牛肉",
                  img:
                    "https://img14.360buyimg.com/focus/s140x140_jfs/t22129/157/182984162/22684/6e892aaa/5b02acbbN17d7e86e.jpg",
                },
                {
                  title: "石榴",
                  img:
                    "https://img11.360buyimg.com/focus/s140x140_jfs/t21757/294/182650983/37555/1de92963/5b02aac1N14069497.png",
                },
                {
                  title: "虾类",
                  img:
                    "https://img20.360buyimg.com/focus/s140x140_jfs/t17821/34/2601881137/15852/b7723df1/5b02aa14Na102d704.jpg",
                },
                {
                  title: "猪肉",
                  img:
                    "https://img30.360buyimg.com/focus/s140x140_jfs/t18883/305/2644182458/20285/3b012a7a/5b02accbNbcd416ef.jpg",
                },
              ],
            },
            {
              id: "302",
              title: "新鲜水果",
              children: [
                {
                  title: "榴莲",
                  img:
                    "https://img14.360buyimg.com/focus/s140x140_jfs/t22285/78/197296411/17965/84d3cc43/5b02a905Nb4d7e0fc.jpg",
                },
                {
                  title: "车厘子/樱桃",
                  img:
                    "https://img14.360buyimg.com/focus/s140x140_jfs/t18604/60/2632919022/35694/d432297c/5b02aab1Nb9d10838.png",
                },
                {
                  title: "苹果",
                  img:
                    "https://img10.360buyimg.com/focus/s140x140_jfs/t20443/269/203426178/16524/dc43796f/5b02a8e4N8f07028e.jpg",
                },
                {
                  title: "香蕉",
                  img:
                    "https://img20.360buyimg.com/focus/s140x140_jfs/t16876/145/2625723845/14034/150ba7f5/5b02a924Ne06099fa.jpg",
                },
                {
                  title: "梨子",
                  img:
                    "https://img14.360buyimg.com/focus/s140x140_jfs/t19909/341/615211239/13258/75bfbe8e/5b02a93eNaadd5ad6.jpg",
                },
                {
                  title: "橙子",
                  img:
                    "https://img10.360buyimg.com/focus/s140x140_jfs/t20605/311/200038705/16787/b2928dc/5b02a8edN568fae09.jpg",
                },
              ],
            },
          ],
        },
        {
          id: 400,
          title: "手机数码",
          children: [
            {
              id: 401,
              title: "热门品牌",
              children: [
                {
                  title: "小米",
                  img:
                    "https://img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png",
                },
                {
                  title: "华为",
                  img:
                    "https://img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg",
                },
                {
                  title: "荣耀",
                  img:
                    "https://img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg",
                },
                {
                  title: "iPhone",
                  img:
                    "https://img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg",
                },
                {
                  title: "vivo",
                  img:
                    "https://img11.360buyimg.com/focus/s140x140_jfs/t11014/359/2341377211/2777/1755c29c/5a169244Nff0179e0.png",
                },
                {
                  title: "OPPO",
                  img:
                    "https://img13.360buyimg.com/focus/s140x140_jfs/t13036/273/932026474/2570/a3517c7d/5a169254N4bbbd9fb.png",
                },
                {
                  title: "魅族",
                  img:
                    "https://img20.360buyimg.com/focus/s140x140_jfs/t12820/326/909017718/7138/68cde747/5a169243N40eca33c.jpg",
                },
                {
                  title: "三星",
                  img:
                    "https://img13.360buyimg.com/focus/s140x140_jfs/t11509/131/2348573811/3425/4f20fe6/5a16925aN8a6dfd03.png",
                },
                {
                  title: "一加",
                  img:
                    "https://img13.360buyimg.com/focus/s140x140_jfs/t11209/71/2351231464/4158/fc0c415c/5a16923fNfc14307e.jpg",
                },
                {
                  title: "努比亚",
                  img:
                    "https://img11.360buyimg.com/focus/s140x140_jfs/t1/108301/34/7712/3254/5e5f0de9E4ca2f4b5/c664966ee1d36d47.jpg",
                },
              ],
            },
            {
              id: 402,
              title: "手机通讯",
              children: [
                {
                  title: "老人机",
                  img:
                    "https://img12.360buyimg.com/focus/s140x140_jfs/t11461/339/2354953633/8254/8c8c50d3/5a169217N5d1b842e.jpg",
                },
                {
                  title: "手机",
                  img:
                    "https://img10.360buyimg.com/focus/s140x140_jfs/t11503/241/2246064496/4783/cea2850e/5a169216N0701c7f1.jpg",
                },
                {
                  title: "全面屏手机",
                  img:
                    "https://img30.360buyimg.com/focus/s140x140_jfs/t18955/187/1309277884/11517/fe100782/5ac48d27N3f5bb821.jpg",
                },
                {
                  title: "游戏手机",
                  img:
                    "https://img11.360buyimg.com/focus/s140x140_jfs/t11470/45/2362968077/2689/fb36d9a0/5a169238Nc8f0882b.jpg",
                },
                {
                  title: "拍照手机",
                  img:
                    "https://img20.360buyimg.com/focus/s140x140_jfs/t12022/66/917351804/2257/7ddc58e5/5a169232Ndf76f53c.jpg",
                },
                {
                  title: "对讲机",
                  img:
                    "https://img30.360buyimg.com/focus/s140x140_jfs/t13255/192/958298391/1687/5c7e3c53/5a169204Nd4aa27bb.jpg",
                },
                {
                  title: "京东回收",
                  img:
                    "https://img30.360buyimg.com/focus/s140x140_jfs/t13246/188/925975876/8794/686dbb9c/5a1691e0N62f626e3.jpg",
                },
                {
                  title: "女性手机",
                  img:
                    "https://img13.360buyimg.com/focus/s140x140_jfs/t1/109596/11/7650/2742/5e5f1074E76a2364e/09b2b19f13691c60.jpg",
                },
                {
                  title: "京东维修",
                  img:
                    "https://img20.360buyimg.com/focus/s140x140_jfs/t11644/236/2358207967/6141/e2d71825/5a169205N84a49a6a.jpg",
                },
              ],
            },
            {
              id: 403,
              title: "影音娱乐",
              children: [
                {
                  title: "便携/无线音箱",
                  img:
                    "https://img11.360buyimg.com/focus/s140x140_jfs/t12931/44/891657494/2295/7609fca6/5a167864Ne52020f2.jpg",
                },
                {
                  title: "音箱/音响",
                  img:
                    "https://img30.360buyimg.com/focus/s140x140_jfs/t11518/28/2381795148/3559/268392b0/5a167859N01d8198b.jpg",
                },
                {
                  title: "MP3/MP4",
                  img:
                    "https://img12.360buyimg.com/focus/s140x140_jfs/t12478/108/888997336/8147/a11bd237/5a16782fN5899ee5e.jpg",
                },
                {
                  title: "耳机/耳麦",
                  img:
                    "https://img12.360buyimg.com/focus/s140x140_jfs/t13510/13/889605109/2757/5594d57f/5a167866N8c853168.jpg",
                },
                {
                  title: "麦克风",
                  img:
                    "https://img13.360buyimg.com/focus/s140x140_jfs/t13153/363/907758425/1791/3138302d/5a167834N97e065bb.jpg",
                },
                {
                  title: "专业音频",
                  img:
                    "https://img12.360buyimg.com/focus/s140x140_jfs/t13600/224/883450494/2256/801f9c0b/5a16782eN9012c0c4.jpg",
                },
              ],
            },
            {
              id: 404,
              title: "数码配件",
              children: [
                {
                  title: "存储卡",
                  img:
                    "https://img20.360buyimg.com/focus/s140x140_jfs/t11806/47/2248616132/4516/e4aec88e/5a1676e9N1ba70a81.jpg",
                },
                {
                  title: "三脚架/云台",
                  img:
                    "https://img14.360buyimg.com/focus/s140x140_jfs/t11122/182/2222069305/1713/af6c4ea3/5a1676d7N70b9300c.jpg",
                },
                {
                  title: "数码支架",
                  img:
                    "https://img11.360buyimg.com/focus/s140x140_jfs/t13960/1/896234990/3495/ba79dcd5/5a16769aNc48193e6.jpg",
                },
                {
                  title: "读卡器",
                  img:
                    "https://img30.360buyimg.com/focus/s140x140_jfs/t12013/240/926457268/3399/b9ae87a7/5a1676f9N0198258e.jpg",
                },
                {
                  title: "滤镜",
                  img:
                    "https://img10.360buyimg.com/focus/s140x140_jfs/t14059/125/899971136/3385/dae73e41/5a1676efN42553f76.jpg",
                },
                {
                  title: "相机清洁/贴膜",
                  img:
                    "https://img12.360buyimg.com/focus/s140x140_jfs/t12184/276/902476544/2247/395ad640/5a1676d4Nb81ebdcb.jpg",
                },
              ],
            },
          ],
        },
        {
          id: "500",
          title: "电脑办公",
          children: [],
        },
        {
          id: "600",
          title: "家用电器",
          children: [],
        },
        {
          id: "700",
          title: "美妆护肤",
          children: [],
        },
        {
          id: "800",
          title: "个护清洁",
          children: [],
        },
        {
          id: "900",
          title: "汽车生活",
          children: [],
        },
        {
          id: "410",
          title: "京东超市",
          children: [],
        },
        {
          id: "420",
          title: "母婴童装",
          children: [],
        },
        {
          id: "430",
          title: "图书音像",
          children: [],
        },
        {
          id: "440",
          title: "运动户外",
          children: [],
        },
        {
          id: "450",
          title: "内衣配饰",
          children: [],
        },
        {
          id: "460",
          title: "家居家装",
          children: [],
        },
        {
          id: "470",
          title: "箱包手袋",
          children: [],
        },
        {
          id: "470",
          title: "钟表珠宝",
          children: [],
        },
        {
          id: "490",
          title: "医药保健",
          children: [],
        },
      ],
    };
    return list;
  }
  async getTabs() {
    let list = {
      code: 200,
      title: "获取成功",
      res: [
        "笔记本",
        "破壁机",
        "跑步机",
        "仙人球防辐射",
        "鱼竿",
        "羽毛球拍",
        "拼装模型",
        "钢笔",
        "电脑散热架",
        "登山帽",
        "智能手机",
        "零食大礼包",
        "星巴克",
        "小米充电宝",
        "热水器",
        "医用口罩",
        "迪奥香水",
        "平板电脑",
        "游戏机",
        "沐浴露",
        "美的冰箱",
        "纯牛奶",
        "马克笔",
        "马克杯",
        "香奈儿",
        "茶叶",
        "爱士堡啤酒",
      ],
    };
    return list;
  }
}

module.exports = MarketingService;
