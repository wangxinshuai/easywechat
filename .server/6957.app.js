"use strict";
exports.id = 6957;
exports.ids = [6957];
exports.modules = {

/***/ 33728:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-b5dda9dc",
  "path": "/4.x/basic-services/url.html",
  "title": "短网址服务",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "长链接转短链接",
      "slug": "长链接转短链接",
      "children": []
    }
  ],
  "filePathRelative": "4.x/basic-services/url.md",
  "git": {
    "updatedTime": 1629906046000,
    "contributors": []
  }
}


/***/ }),

/***/ 15255:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ url_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.vuepress/.temp/pages/4.x/basic-services/url.html.vue?vue&type=template&id=c8a72942

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="短网址服务" tabindex="-1"><a class="header-anchor" href="#短网址服务" aria-hidden="true">#</a> 短网址服务</h1><p>主要使用场景： 开发者用于生成二维码的原链接（商品、支付二维码等）太长导致扫码速度和成功率下降，将原长链接通过此接口转成短链接再生成二维码将大大提升扫码速度和成功率。</p><h2 id="长链接转短链接" tabindex="-1"><a class="header-anchor" href="#长链接转短链接" aria-hidden="true">#</a> 长链接转短链接</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$shortUrl</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">url</span><span class="token operator">-&gt;</span><span class="token function">shorten</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;https://easywechat.com&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//</span>
<span class="token punctuation">(</span>
    <span class="token punctuation">[</span>errcode<span class="token punctuation">]</span> <span class="token operator">=&gt;</span> <span class="token number">0</span>
    <span class="token punctuation">[</span>errmsg<span class="token punctuation">]</span> <span class="token operator">=&gt;</span> ok
    <span class="token punctuation">[</span>short_url<span class="token punctuation">]</span> <span class="token operator">=&gt;</span> https<span class="token punctuation">:</span><span class="token comment">//w.url.cn/s/Aq7jWrd</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><!--]-->`)
}
// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(84103);
;// CONCATENATED MODULE: ./.vuepress/.temp/pages/4.x/basic-services/url.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("/home/runner/work/easywechat/easywechat/docs/node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!/home/runner/work/easywechat/easywechat/docs/node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!/home/runner/work/easywechat/easywechat/docs/.vuepress/.temp/pages/4.x/basic-services/url.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const url_html = (script);

/***/ })

};
;
//# sourceMappingURL=6957.app.js.map