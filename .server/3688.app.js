"use strict";
exports.id = 3688;
exports.ids = [3688];
exports.modules = {

/***/ 19281:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-0587cc86",
  "path": "/3.x/short-url.html",
  "title": "短网址服务",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "获取实例",
      "slug": "获取实例",
      "children": []
    },
    {
      "level": 2,
      "title": "API",
      "slug": "api",
      "children": []
    }
  ],
  "filePathRelative": "3.x/short-url.md",
  "git": {
    "updatedTime": 1629906046000,
    "contributors": []
  }
}


/***/ }),

/***/ 91102:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ short_url_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.vuepress/.temp/pages/3.x/short-url.html.vue?vue&type=template&id=34c8d9ab

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="短网址服务" tabindex="-1"><a class="header-anchor" href="#短网址服务" aria-hidden="true">#</a> 短网址服务</h1><p>主要使用场景： 开发者用于生成二维码的原链接（商品、支付二维码等）太长导致扫码速度和成功率下降，将原长链接通过此接口转成短链接再生成二维码将大大提升扫码速度和成功率。</p><h2 id="获取实例" tabindex="-1"><a class="header-anchor" href="#获取实例" aria-hidden="true">#</a> 获取实例</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token keyword">use</span> <span class="token package">EasyWeChat<span class="token punctuation">\\</span>Foundation<span class="token punctuation">\\</span>Application</span><span class="token punctuation">;</span>
<span class="token comment">// ...</span>
<span class="token variable">\$app</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Application</span><span class="token punctuation">(</span><span class="token variable">\$options</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">\$url</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">url</span><span class="token punctuation">;</span>
</span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2><ul><li><code>shorten(\$url)</code> 长链接转短链接</li></ul><p>example:</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$shortUrl</span> <span class="token operator">=</span> <span class="token variable">\$url</span><span class="token operator">-&gt;</span><span class="token function">shorten</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;http://overtrue.me/open-source&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>微信官方文档：http://mp.weixin.qq.com/wiki/</p><!--]-->`)
}
// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(84103);
;// CONCATENATED MODULE: ./.vuepress/.temp/pages/3.x/short-url.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("/home/runner/work/easywechat/easywechat/docs/node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!/home/runner/work/easywechat/easywechat/docs/node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!/home/runner/work/easywechat/easywechat/docs/.vuepress/.temp/pages/3.x/short-url.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const short_url_html = (script);

/***/ })

};
;
//# sourceMappingURL=3688.app.js.map