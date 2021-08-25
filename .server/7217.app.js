"use strict";
exports.id = 7217;
exports.ids = [7217];
exports.modules = {

/***/ 67885:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-51ff1a71",
  "path": "/5.x/micro-merchant/certficates.html",
  "title": "获取平台证书",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "filePathRelative": "5.x/micro-merchant/certficates.md",
  "git": {
    "updatedTime": 1629906046000,
    "contributors": []
  }
}


/***/ }),

/***/ 87337:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ certficates_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.vuepress/.temp/pages/5.x/micro-merchant/certficates.html.vue?vue&type=template&id=8fedfce4

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="获取平台证书" tabindex="-1"><a class="header-anchor" href="#获取平台证书" aria-hidden="true">#</a> 获取平台证书</h1><p>调用获取平台证书接口之前，请前往微信支付商户平台升级API证书，升级后才可成功调用本接口。</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token comment">// 获取到证书后可以做缓存处理，无需每次重新获取</span>
<span class="token variable">\$response</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">certficates</span><span class="token operator">-&gt;</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token keyword type-hint">bool</span> <span class="token variable">\$returnRaw</span> <span class="token operator">=</span> <span class="token constant boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 获取到平台证书后，可以直接使用 setCertificate 方法把证书配置追加到配置项里面去</span>
<span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token function">setCertificate</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">\$certificate</span><span class="token punctuation">,</span> <span class="token keyword type-hint">string</span> <span class="token variable">\$serialNo</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><blockquote><p>\$returnRaw 不填默认为false时，请确保你的PHP已安装了sodium扩展<br> 返回值：固定array格式的解密后的证书信息</p></blockquote><blockquote><p>\$returnRaw 传入true时<br> 返回值：Response对象<code>\$response-&gt;getBody()-&gt;getContents();</code>获取到微信返回xml原始数据</p></blockquote><!--]-->`)
}
// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(84103);
;// CONCATENATED MODULE: ./.vuepress/.temp/pages/5.x/micro-merchant/certficates.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("/home/runner/work/easywechat/easywechat/docs/node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!/home/runner/work/easywechat/easywechat/docs/node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!/home/runner/work/easywechat/easywechat/docs/.vuepress/.temp/pages/5.x/micro-merchant/certficates.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const certficates_html = (script);

/***/ })

};
;
//# sourceMappingURL=7217.app.js.map