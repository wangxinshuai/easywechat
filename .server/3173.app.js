"use strict";
exports.id = 3173;
exports.ids = [3173];
exports.modules = {

/***/ 63270:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-e9a05b16",
  "path": "/5.x/mini-program/live.html",
  "title": "订阅消息",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "获取直播房间列表",
      "slug": "获取直播房间列表",
      "children": []
    },
    {
      "level": 2,
      "title": "获取回放源视频",
      "slug": "获取回放源视频",
      "children": []
    }
  ],
  "filePathRelative": "5.x/mini-program/live.md",
  "git": {
    "updatedTime": 1629906046000,
    "contributors": []
  }
}


/***/ }),

/***/ 60788:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ live_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.vuepress/.temp/pages/5.x/mini-program/live.html.vue?vue&type=template&id=5ee7711d

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="订阅消息" tabindex="-1"><a class="header-anchor" href="#订阅消息" aria-hidden="true">#</a> 订阅消息</h1><blockquote><p>微信文档：https://developers.weixin.qq.com/miniprogram/dev/framework/liveplayer/live-player-plugin.html</p></blockquote><blockquote><p>tips:微信规定以下两个接口调用限制共享 <strong>500次/天</strong> 建议开发者自己做缓存，合理分配调用频次。</p></blockquote><h2 id="获取直播房间列表" tabindex="-1"><a class="header-anchor" href="#获取直播房间列表" aria-hidden="true">#</a> 获取直播房间列表</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">live</span><span class="token operator">-&gt;</span><span class="token function">getRooms</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="获取回放源视频" tabindex="-1"><a class="header-anchor" href="#获取回放源视频" aria-hidden="true">#</a> 获取回放源视频</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$roomId</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>    <span class="token comment">//直播房间id</span>

<span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">live</span><span class="token operator">-&gt;</span><span class="token function">getPlaybacks</span><span class="token punctuation">(</span><span class="token variable">\$roomId</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><!--]-->`)
}
// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(84103);
;// CONCATENATED MODULE: ./.vuepress/.temp/pages/5.x/mini-program/live.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("/home/runner/work/easywechat/easywechat/docs/node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!/home/runner/work/easywechat/easywechat/docs/node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!/home/runner/work/easywechat/easywechat/docs/.vuepress/.temp/pages/5.x/mini-program/live.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const live_html = (script);

/***/ })

};
;
//# sourceMappingURL=3173.app.js.map