"use strict";
exports.id = 985;
exports.ids = [985];
exports.modules = {

/***/ 68905:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-743015e8",
  "path": "/6.x/",
  "title": "EasyWeChat",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "环境需求",
      "slug": "环境需求",
      "children": []
    },
    {
      "level": 2,
      "title": "加入我们",
      "slug": "加入我们",
      "children": [
        {
          "level": 3,
          "title": "开始之前",
          "slug": "开始之前",
          "children": []
        }
      ]
    }
  ],
  "filePathRelative": "6.x/README.md",
  "git": {
    "updatedTime": 1629906046000,
    "contributors": []
  }
}


/***/ }),

/***/ 22634:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ index_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(84103);
// EXTERNAL MODULE: external "@vue/server-renderer"
var server_renderer_ = __webpack_require__(32745);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.vuepress/.temp/pages/6.x/index.html.vue?vue&type=template&id=24b43079



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_OutboundLink = (0,external_vue_.resolveComponent)("OutboundLink")
  const _component_RouterLink = (0,external_vue_.resolveComponent)("RouterLink")

  _push(`<!--[--><h1 id="easywechat" tabindex="-1"><a class="header-anchor" href="#easywechat" aria-hidden="true">#</a> EasyWeChat</h1><p>EasyWeChat 是一个开源的 <a href="http://www.wechat.com" target="_blank" rel="noopener noreferrer">微信`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> 非官方 SDK。</p><p>EasyWeChat 的安装非常简单，因为它是一个标准的 <a href="https://getcomposer.org/" target="_blank" rel="noopener noreferrer">Composer`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> 包，这意味着任何满足下列安装条件的 PHP 项目支持 Composer 都可以使用它。</p><h2 id="环境需求" tabindex="-1"><a class="header-anchor" href="#环境需求" aria-hidden="true">#</a> 环境需求</h2><ul><li>PHP &gt;= 8.0</li><li><a href="http://php.net/manual/en/book.curl.php" target="_blank" rel="noopener noreferrer">PHP cURL 扩展`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li><li><a href="http://php.net/manual/en/book.openssl.php" target="_blank" rel="noopener noreferrer">PHP OpenSSL 扩展`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li><li><a href="http://php.net/manual/en/book.simplexml.php" target="_blank" rel="noopener noreferrer">PHP SimpleXML 扩展`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li><li><a href="http://php.net/manual/en/book.fileinfo.php" target="_blank" rel="noopener noreferrer">PHP fileinfo 拓展`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li></ul><h2 id="加入我们" tabindex="-1"><a class="header-anchor" href="#加入我们" aria-hidden="true">#</a> 加入我们</h2><p><a href="http://shang.qq.com/wpa/qunwpa?idkey=b4dcf3ec51a7e8c3c3a746cf450ce59895e5c4ec4fbcb0f80c2cd97c3c6e63e9" target="_blank" rel="noopener noreferrer">EasyWeChat SDK 交流群`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> ID: 319502940</p><blockquote><p>{warning} 请认真阅读微信官方文档与 SDK 使用文档再使用，否则提的低级问题不会有人理你</p></blockquote><p>你有以下两种方式加入到我们中来，为广大开发者提供更优质的免费开源的服务：</p><ul><li><strong>贡献代码</strong>：我们的代码都在 <a href="https://github.com/w7corp/easywechat" target="_blank" rel="noopener noreferrer">w7corp/easywechat`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> ，你可以提交 PR 到任何一个项目，当然，前提是代码质量必须是 OK 的。</li><li><strong>完善文档</strong>：我们的文档在：<a href="https://github.com/w7corp/easywechat/docs/" target="_blank" rel="noopener noreferrer">w7corp/EasyWeChat/docs`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>，你可以提交对应的 PR 到目标分支参与完善工作。</li></ul><h3 id="开始之前" tabindex="-1"><a class="header-anchor" href="#开始之前" aria-hidden="true">#</a> 开始之前</h3><p>本 SDK 不是一个全新再造的东西，你完全有必要在使用本 SDK 前做好以下工作：</p><ul><li>熟悉 PHP 常见的知识：自动加载、Composer 的使用、JSON 处理、cURL 的使用等；</li><li><strong>仔细阅读并看懂</strong> <a href="https://developers.weixin.qq.com/doc/" target="_blank" rel="noopener noreferrer">微信官方文档`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>；</li><li>明白微信接口的组成，自有服务器、微信服务器、公众号（还有其它各种号）、测试号、以及通信原理（交互过程）；</li><li>了解基本的 HTTP 协议，Header 头、请求方式（GET\\POST\\PUT\\PATCH\\DELETE）等；</li><li>基本的 debug 技能，查看 PHP 日志，Nginx 日志等。</li></ul><p>另外请正确提问：</p><ul><li><a href="https://learnku.com/laravel/t/535/assertion-people-who-do-not-understand-the-wisdom-of-asking-questions-will-not-graduate-from-junior-programmers" target="_blank" rel="noopener noreferrer">断言：不懂《提问的智慧》的人不会从初级程序员水平毕业`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li><li><a href="http://laravel-china.github.io/php-the-right-way/" target="_blank" rel="noopener noreferrer">PHP 之道`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li></ul><p>我们专门针对一些容易出现的通用问题已经做了汇总： `)
  _push((0,server_renderer_.ssrRenderComponent)(_component_RouterLink, { to: "/troubleshooting.html" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`疑难解答`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("疑难解答")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(` ，如果你在问题疑难解答没找到你出现的问题，那么可以在这里提问 <a href="https://github.com/overtrue/wechat/issues" target="_blank" rel="noopener noreferrer">GitHub`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>，提问请描述清楚你用的版本，你的做法是什么，不然别人没法帮你。</p><blockquote><p>{warning} 最后，请有问题先审查代码，看文档, 再 Google，然后去群里提问题，带上你的代码，重现流程，大家有空的会帮忙你解答。谢谢合作！🙏</p></blockquote><!--]-->`)
}
;// CONCATENATED MODULE: ./.vuepress/.temp/pages/6.x/index.html.vue?vue&type=template&id=24b43079

;// CONCATENATED MODULE: ./.vuepress/.temp/pages/6.x/index.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("/home/runner/work/easywechat/easywechat/docs/node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!/home/runner/work/easywechat/easywechat/docs/node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!/home/runner/work/easywechat/easywechat/docs/.vuepress/.temp/pages/6.x/index.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const index_html = (script);

/***/ })

};
;
//# sourceMappingURL=985.app.js.map