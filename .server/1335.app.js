"use strict";
exports.id = 1335;
exports.ids = [1335];
exports.modules = {

/***/ 51135:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-2d67498c",
  "path": "/5.x/micro-merchant/withdraw.html",
  "title": "提现相关",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "查询提现状态",
      "slug": "查询提现状态",
      "children": []
    },
    {
      "level": 2,
      "title": "重新发起提现",
      "slug": "重新发起提现",
      "children": []
    }
  ],
  "filePathRelative": "5.x/micro-merchant/withdraw.md",
  "git": {
    "updatedTime": 1629906046000,
    "contributors": []
  }
}


/***/ }),

/***/ 60718:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ withdraw_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.vuepress/.temp/pages/5.x/micro-merchant/withdraw.html.vue?vue&type=template&id=1b6a6588

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="提现相关" tabindex="-1"><a class="header-anchor" href="#提现相关" aria-hidden="true">#</a> 提现相关</h1><h2 id="查询提现状态" tabindex="-1"><a class="header-anchor" href="#查询提现状态" aria-hidden="true">#</a> 查询提现状态</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$response</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">withdraw</span><span class="token operator">-&gt;</span><span class="token function">queryWithdrawalStatus</span><span class="token punctuation">(</span><span class="token variable">\$date</span><span class="token punctuation">,</span> <span class="token variable">\$subMchId</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="重新发起提现" tabindex="-1"><a class="header-anchor" href="#重新发起提现" aria-hidden="true">#</a> 重新发起提现</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$response</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">withdraw</span><span class="token operator">-&gt;</span><span class="token function">requestWithdraw</span><span class="token punctuation">(</span><span class="token variable">\$date</span><span class="token punctuation">,</span> <span class="token variable">\$subMchId</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><blockquote><p>以上接口调用过 <code>setSubMchId</code> 方法则无需传入 <code>sub_mch_id</code> 参数</p></blockquote><!--]-->`)
}
// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(84103);
;// CONCATENATED MODULE: ./.vuepress/.temp/pages/5.x/micro-merchant/withdraw.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("/home/runner/work/easywechat/easywechat/docs/node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!/home/runner/work/easywechat/easywechat/docs/node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!/home/runner/work/easywechat/easywechat/docs/.vuepress/.temp/pages/5.x/micro-merchant/withdraw.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const withdraw_html = (script);

/***/ })

};
;
//# sourceMappingURL=1335.app.js.map