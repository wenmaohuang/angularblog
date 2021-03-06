import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-search-url',
  templateUrl: './search-url.component.html',
  styleUrls: ['./search-url.component.less']
})


export class SearchUrlComponent implements OnInit {
  keyword: String = ''
  urlresult: Object = {}
  urlKey: any = []
  urlKeyList: any = []
  urlresultValue: any = []
  newurls: Object = {}
  urls: Object = {
    github: "https://github.com/",

    mongoosejs: "https://mongoosejs.com/docs/guide.html",
    npmjs: "https://www.npmjs.com/",
    element:
      "https://element.eleme.cn/#/zh-CN/component/installation",
    vuejs: "https://vuejs.org/",
    layui: "https://www.layui.com/",
    qqMusic: "https://y.qq.com/portal/player.html",
    aliyun: "https://www.aliyun.com/",
    iconfont:
      "https://www.iconfont.cn/manage/index?manage_type=myprojects&projectId=1811983",
    fanyi: "https://fanyi.baidu.com/?aldtype=16047#auto/zh",
    photoGirls: "https://www.umei.cc/bizhitupian/meinvbizhi/",
    yinshi:
      "https://www.shiguangkey.com/video/1346?videoId=141606&classId=9262&playback=1",
    afei:
      "https://www.shiguangkey.com/video/5404?classId=13017&videoId=221997",
    remi:
      "https://www.shiguangkey.com/video/903?videoId=242629&classId=17830&playback=1",
    zhuimeng:
      "https://www.shiguangkey.com/video/1561?videoId=53934&classId=4298&playback=1",
    haiwen:
      "https://www.shiguangkey.com/video/1561?videoId=86919&classId=6240&playback=1",
    wanzhang1:
      "https://www.shiguangkey.com/video/5404?videoId=125677&classId=8638&playback=1",
    wanZhang2:
      "https://www.shiguangkey.com/video/903?videoId=191211&classId=12327&playback=1",
    cctv: "http://tv.cctv.com/live/",
    yanshisan: "https://www.yanshisan.cn/Blog/Article",
    afeifeifei:
      "https://github.com/afeifeifei/front-end-interview-handbook/blob/master/Translations/Chinese/README.md",
    lagou: "https://www.lagou.com/resume/myresume.html",
    "51job": "https://i.51job.com/userset/my_51job.php?lang=c",
    zhaopin: "https://i.zhaopin.com/",
    "58tongcheng":
      "https://my.58.com/pro/myjob/index/?PGTID=0d000000-0000-05c4-710e-6428d7138f3a&ClickID=1",
    zhipin:
      "https://www.zhipin.com/web/geek/recommend?ka=header-personal",
    weixin:
      "https://developers.weixin.qq.com/miniprogram/en/dev/framework/",
    weixinAdmin:
      "https://mp.weixin.qq.com/wxamp/wacodepage/getcodepage?token=174094833&lang=zh_CN",
    bilibiliweixin: "https://www.bilibili.com/video/BV1nE41117BQ?p=9",
    movie: "http://27k.cc/?m=vod-play-id-37805-src-1-num-1.html",
    flutter:
      "https://flutter.dev/docs/development/tools/android-studio",
    typescript:
      "https://www.typescriptlang.org/docs/handbook/gulp.html",
    node: "https://nodejs.org/dist/latest-v14.x/docs/api/",
    webpack:
      "https://webpack.js.org/concepts/entry-points/#single-entry-shorthand-syntax",
    react: "https://reactjs.org/docs/getting-started.html",
    angular: "https://angular.io/docs",
    angularblog: "http://www.fyyd.vip:3003",
    nginx: "http://nginx.org/en/docs/",
    centos: "https://www.linuxidc.com/Linux/2018-06/152959.htm",
    express: "https://www.expressjs.com.cn/5x/api.html",
    blogadmin: "http://www.fyyd.vip:3002/",
    reactblog: "http://www.fyyd.vip:3001/",
    mysql: "https://dev.mysql.com/doc/refman/8.0/en/connection-options.html",
    apache: "http://httpd.apache.org/docs/2.4/",
    gulpjs: "https://gulpjs.com/docs/en/api/registry",
    babel: "https://babeljs.io/docs/en/",
    less: "http://lesscss.org/",
    meinv: "https://www.tupianzj.com/meinv/mm/",
    mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    threejs: "http://www.webgl3d.cn/",
    bootCDN: "https://www.bootcdn.cn/",
    bilibiliangualar: "https://www.bilibili.com/video/BV1bt411e71b?from=search&seid=15562787847422779010",
    angularcn: "https://angular.cn/tutorial/toh-pt3",
    angulartantui: "https://ng.ant.design/components/collapse/en#ng-content"
  }





  constructor() {
    console.log(this.keyword, 'b');
  }

  handleSearchUrl() {
    this.urlKeyList = []
    for (var key in this.newurls) {
      if (this.keyword) {

        var reg = new RegExp("^" + this.keyword);
        this.urlKey = key.match(reg);
        if (this.urlKey !== null) {
          var urlResultKey = this.urlKey["input"];
          this.urlresult[urlResultKey] = this.newurls[urlResultKey]
        }
      }
      if(this.keyword === ''){
        this.urlresult = {}
      }
    }
    let arr: any = Object.keys(this.urlresult)
    for (let key of Object.keys(this.urlresult)) {
      if (arr.length > this.urlKeyList.length) {
        this.urlKeyList.push(key)
      }
      if (this.keyword === "") {
        this.urlKeyList = []
      }
    }
  }
  handleSearchDelete() {
    // this.urlresult = Object.assign({});

    


    if (this.keyword === '') {
      this.urlKeyList = Object.keys(this.newurls)
    }



  }

  handleFocus() {

    this.urlKeyList = Object.keys(this.newurls)

    console.log(this.urlresult, 'a#');

  }

  ngOnInit(): void {

    Object.keys(this.urls)
      .sort()
      .map(key => {
        this.newurls[key] = this.urls[key];
      });
    // console.log(this, 'a!');
  }
}
