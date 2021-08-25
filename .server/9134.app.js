"use strict";
exports.id = 9134;
exports.ids = [9134];
exports.modules = {

/***/ 87199:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-922b4e6c",
  "path": "/4.x/payment/reverse.html",
  "title": "撤销订单",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "通过内部订单号撤销订单",
      "slug": "通过内部订单号撤销订单",
      "children": []
    },
    {
      "level": 2,
      "title": "通过微信订单号撤销订单",
      "slug": "通过微信订单号撤销订单",
      "children": []
    }
  ],
  "filePathRelative": "4.x/payment/reverse.md",
  "git": {
    "updatedTime": 1629906046000,
    "contributors": []
  }
}


/***/ }),

/***/ 33895:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ reverse_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.vuepress/.temp/pages/4.x/payment/reverse.html.vue?vue&type=template&id=3133dced

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="撤销订单" tabindex="-1"><a class="header-anchor" href="#撤销订单" aria-hidden="true">#</a> 撤销订单</h1><p>目前只有 <strong>刷卡支付</strong> 有此功能。</p><blockquote><p>调用支付接口后请勿立即调用撤销订单API，建议支付后至少15s后再调用撤销订单接口。</p></blockquote><h2 id="通过内部订单号撤销订单" tabindex="-1"><a class="header-anchor" href="#通过内部订单号撤销订单" aria-hidden="true">#</a> 通过内部订单号撤销订单</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">reverse</span><span class="token operator">-&gt;</span><span class="token function">byOutTradeNumber</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;商户系统内部的订单号（out_trade_no）&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="通过微信订单号撤销订单" tabindex="-1"><a class="header-anchor" href="#通过微信订单号撤销订单" aria-hidden="true">#</a> 通过微信订单号撤销订单</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">reverse</span><span class="token operator">-&gt;</span><span class="token function">byTransactionId</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;微信的订单号（transaction_id）&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><!--]-->`)
}
// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(84103);
;// CONCATENATED MODULE: ./.vuepress/.temp/pages/4.x/payment/reverse.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("/home/runner/work/easywechat/easywechat/docs/node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!/home/runner/work/easywechat/easywechat/docs/node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!/home/runner/work/easywechat/easywechat/docs/.vuepress/.temp/pages/4.x/payment/reverse.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const reverse_html = (script);

/***/ })

};
;
//# sourceMappingURL=9134.app.js.map