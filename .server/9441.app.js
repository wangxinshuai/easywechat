"use strict";
exports.id = 9441;
exports.ids = [9441];
exports.modules = {

/***/ 54574:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-405a6986",
  "path": "/5.x/micro-merchant/material.html",
  "title": "商户信息修改",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "修改结算银行卡",
      "slug": "修改结算银行卡",
      "children": []
    },
    {
      "level": 2,
      "title": "修改联系信息",
      "slug": "修改联系信息",
      "children": []
    }
  ],
  "filePathRelative": "5.x/micro-merchant/material.md",
  "git": {
    "updatedTime": 1629906046000,
    "contributors": []
  }
}


/***/ }),

/***/ 61748:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ material_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.vuepress/.temp/pages/5.x/micro-merchant/material.html.vue?vue&type=template&id=adf9bddc

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="商户信息修改" tabindex="-1"><a class="header-anchor" href="#商户信息修改" aria-hidden="true">#</a> 商户信息修改</h1><h2 id="修改结算银行卡" tabindex="-1"><a class="header-anchor" href="#修改结算银行卡" aria-hidden="true">#</a> 修改结算银行卡</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$response</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">material</span><span class="token operator">-&gt;</span><span class="token function">setSettlementCard</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
    <span class="token comment">// &#39;sub_mch_id&#39; =&gt; &#39;1230000109&#39;,</span>
    <span class="token string single-quoted-string">&#39;account_number&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;银行卡号&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;bank_name&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;开户银行全称（含支行）&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;account_bank&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;开户银行&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;bank_address_code&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;开户银行省市编码&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="修改联系信息" tabindex="-1"><a class="header-anchor" href="#修改联系信息" aria-hidden="true">#</a> 修改联系信息</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$response</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">material</span><span class="token operator">-&gt;</span><span class="token function">updateContact</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
    <span class="token comment">// &#39;sub_mch_id&#39; =&gt; &#39;1230000109&#39;,</span>
    <span class="token string single-quoted-string">&#39;mobile_phone&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;手机号&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;email&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;邮箱&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;merchant_name&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;商户简称&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><blockquote><p>以上接口调用过 <code>setSubMchId</code> 方法则无需传入 <code>sub_mch_id</code> 参数</p></blockquote><!--]-->`)
}
// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(84103);
;// CONCATENATED MODULE: ./.vuepress/.temp/pages/5.x/micro-merchant/material.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("/home/runner/work/easywechat/easywechat/docs/node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!/home/runner/work/easywechat/easywechat/docs/node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!/home/runner/work/easywechat/easywechat/docs/.vuepress/.temp/pages/5.x/micro-merchant/material.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const material_html = (script);

/***/ })

};
;
//# sourceMappingURL=9441.app.js.map