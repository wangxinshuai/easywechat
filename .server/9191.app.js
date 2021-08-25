"use strict";
exports.id = 9191;
exports.ids = [9191];
exports.modules = {

/***/ 46785:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-73f5c7ee",
  "path": "/5.x/micro-merchant/submit-application.html",
  "title": "商户入驻",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "申请入驻",
      "slug": "申请入驻",
      "children": []
    },
    {
      "level": 2,
      "title": "查询申请状态",
      "slug": "查询申请状态",
      "children": []
    }
  ],
  "filePathRelative": "5.x/micro-merchant/submit-application.md",
  "git": {
    "updatedTime": 1629906046000,
    "contributors": []
  }
}


/***/ }),

/***/ 95539:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ submit_application_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.vuepress/.temp/pages/5.x/micro-merchant/submit-application.html.vue?vue&type=template&id=2659c50e

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="商户入驻" tabindex="-1"><a class="header-anchor" href="#商户入驻" aria-hidden="true">#</a> 商户入驻</h1><h2 id="申请入驻" tabindex="-1"><a class="header-anchor" href="#申请入驻" aria-hidden="true">#</a> 申请入驻</h2><p>使用申请入驻接口提交你的小微商户资料。</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$result</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token function">submitApplication</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
    <span class="token string single-quoted-string">&#39;business_code&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;123456&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 业务申请编号</span>
    <span class="token string single-quoted-string">&#39;id_card_copy&#39;</span>  <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;media_id&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 身份证人像面照片</span>
    <span class="token comment">// ...</span>
    <span class="token comment">// 参数太多就不一一列出，自行根据 (小微商户专属文档 -&gt; 申请入驻api) 填写</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="查询申请状态" tabindex="-1"><a class="header-anchor" href="#查询申请状态" aria-hidden="true">#</a> 查询申请状态</h2><p>使用申请入驻接口提交小微商户资料后，一般5分钟左右可以通过该查询接口查询具体的申请结果。</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$applymentId</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;商户申请单号(applyment_id 申请入驻接口返回)&#39;</span><span class="token punctuation">;</span>
<span class="token variable">\$businessCode</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;业务申请编号(business_code)&#39;</span><span class="token punctuation">;</span>
<span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token function">getStatus</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">\$applymentId</span><span class="token punctuation">,</span> <span class="token keyword type-hint">string</span> <span class="token variable">\$businessCode</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><blockquote><p>商户申请单号和业务申请编号填写一个就行了，当 <code>applyment_id</code> 已填写时，<code>business_code</code> 字段无效。</p></blockquote><p>当查询申请状态为待签约，接口会一并返回签约二维码，服务商需引导商户使用本人微信扫码完成协议签署。</p><!--]-->`)
}
// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(84103);
;// CONCATENATED MODULE: ./.vuepress/.temp/pages/5.x/micro-merchant/submit-application.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("/home/runner/work/easywechat/easywechat/docs/node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!/home/runner/work/easywechat/easywechat/docs/node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!/home/runner/work/easywechat/easywechat/docs/.vuepress/.temp/pages/5.x/micro-merchant/submit-application.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const submit_application_html = (script);

/***/ })

};
;
//# sourceMappingURL=9191.app.js.map