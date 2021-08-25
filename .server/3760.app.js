"use strict";
exports.id = 3760;
exports.ids = [3760];
exports.modules = {

/***/ 32945:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-05ea211e",
  "path": "/4.x/micro-merchant/upgrade.html",
  "title": "商户升级",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "提交升级申请单",
      "slug": "提交升级申请单",
      "children": []
    },
    {
      "level": 2,
      "title": "查询升级申请单状态",
      "slug": "查询升级申请单状态",
      "children": []
    }
  ],
  "filePathRelative": "4.x/micro-merchant/upgrade.md",
  "git": {
    "updatedTime": 1629906046000,
    "contributors": []
  }
}


/***/ }),

/***/ 34396:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ upgrade_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.vuepress/.temp/pages/4.x/micro-merchant/upgrade.html.vue?vue&type=template&id=a9628aa0

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="商户升级" tabindex="-1"><a class="header-anchor" href="#商户升级" aria-hidden="true">#</a> 商户升级</h1><h2 id="提交升级申请单" tabindex="-1"><a class="header-anchor" href="#提交升级申请单" aria-hidden="true">#</a> 提交升级申请单</h2><p>使用“提交升级申请单”接口为小微商户发起升级流程，根据商户实际情况可升级为个体户、企业、党政、机关及事业单位、其他组织。。</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$result</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token function">upgrade</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
    <span class="token string single-quoted-string">&#39;organization_type&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;2&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 主体类型</span>
    <span class="token string single-quoted-string">&#39;business_license_copy&#39;</span>  <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;media_id&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 营业执照扫描件</span>
    <span class="token comment">// ...</span>
    <span class="token comment">// 参数太多就不一一列出，自行根据 (小微商户专属文档 -&gt; 提交升级申请单API) 填写</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="查询升级申请单状态" tabindex="-1"><a class="header-anchor" href="#查询升级申请单状态" aria-hidden="true">#</a> 查询升级申请单状态</h2><p>使用“提交升级申请单”接口后，可不定期调用此接口查询申请单状态（建议提交申请后1分钟查询），直至申请单为“完成”状态。</p><p>1)若申请状态为待账户验证，请按接口中的指引完成账户验证</p><p>2)若申请状态为审核中，微信支付会在2个工作日内完成资料审核</p><p>3)若申请状态为待签约，接口会返回签约二维码</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token function">getUpgradeStatus</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">\$subMchId</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><blockquote><p>调用该接口前调用过 <code>setSubMchId</code> 方法则无需传入 <code>\$subMchId</code> 参数</p></blockquote><!--]-->`)
}
// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(84103);
;// CONCATENATED MODULE: ./.vuepress/.temp/pages/4.x/micro-merchant/upgrade.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("/home/runner/work/easywechat/easywechat/docs/node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!/home/runner/work/easywechat/easywechat/docs/node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!/home/runner/work/easywechat/easywechat/docs/.vuepress/.temp/pages/4.x/micro-merchant/upgrade.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const upgrade_html = (script);

/***/ })

};
;
//# sourceMappingURL=3760.app.js.map