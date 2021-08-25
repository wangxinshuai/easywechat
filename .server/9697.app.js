"use strict";
exports.id = 9697;
exports.ids = [9697];
exports.modules = {

/***/ 40367:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-63971cd5",
  "path": "/5.x/payment/contract.html",
  "title": "签约",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "公众号签约",
      "slug": "公众号签约",
      "children": []
    },
    {
      "level": 2,
      "title": "APP签约",
      "slug": "app签约",
      "children": []
    },
    {
      "level": 2,
      "title": "H5签约",
      "slug": "h5签约",
      "children": []
    },
    {
      "level": 2,
      "title": "小程序签约",
      "slug": "小程序签约",
      "children": []
    },
    {
      "level": 2,
      "title": "申请扣款",
      "slug": "申请扣款",
      "children": []
    },
    {
      "level": 2,
      "title": "申请解约",
      "slug": "申请解约",
      "children": []
    }
  ],
  "filePathRelative": "5.x/payment/contract.md",
  "git": {
    "updatedTime": 1629906046000,
    "contributors": []
  }
}


/***/ }),

/***/ 36835:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ contract_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.vuepress/.temp/pages/5.x/payment/contract.html.vue?vue&type=template&id=d02c3ea2

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="签约" tabindex="-1"><a class="header-anchor" href="#签约" aria-hidden="true">#</a> 签约</h1><h2 id="公众号签约" tabindex="-1"><a class="header-anchor" href="#公众号签约" aria-hidden="true">#</a> 公众号签约</h2><blockquote><p>{info} 参数 <code>appid</code>, <code>version</code>, <code>timestamp</code>, <code>sign</code> 可不用传入</p></blockquote><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$result</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">contract</span><span class="token operator">-&gt;</span><span class="token function">web</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
    <span class="token string single-quoted-string">&#39;mch_id&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;1200009811&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;plan_id&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;12535&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;contract_code&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;100000&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;contract_display_account&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;微信代扣&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;notify_url&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;https://pay.weixin.qq.com/wxpay/pay.action&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="app签约" tabindex="-1"><a class="header-anchor" href="#app签约" aria-hidden="true">#</a> APP签约</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$result</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">contract</span><span class="token operator">-&gt;</span><span class="token function">app</span><span class="token punctuation">(</span><span class="token keyword type-hint">array</span> <span class="token variable">\$params</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="h5签约" tabindex="-1"><a class="header-anchor" href="#h5签约" aria-hidden="true">#</a> H5签约</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$result</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">contract</span><span class="token operator">-&gt;</span><span class="token function">h5</span><span class="token punctuation">(</span><span class="token keyword type-hint">array</span> <span class="token variable">\$params</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="小程序签约" tabindex="-1"><a class="header-anchor" href="#小程序签约" aria-hidden="true">#</a> 小程序签约</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$result</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">jssdk</span><span class="token operator">-&gt;</span><span class="token function">contractConfig</span><span class="token punctuation">(</span><span class="token keyword type-hint">array</span> <span class="token variable">\$params</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="申请扣款" tabindex="-1"><a class="header-anchor" href="#申请扣款" aria-hidden="true">#</a> 申请扣款</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$result</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">contract</span><span class="token operator">-&gt;</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword type-hint">array</span> <span class="token variable">\$params</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="申请解约" tabindex="-1"><a class="header-anchor" href="#申请解约" aria-hidden="true">#</a> 申请解约</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$result</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">contract</span><span class="token operator">-&gt;</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token keyword type-hint">array</span> <span class="token variable">\$params</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><!--]-->`)
}
// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(84103);
;// CONCATENATED MODULE: ./.vuepress/.temp/pages/5.x/payment/contract.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("/home/runner/work/easywechat/easywechat/docs/node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!/home/runner/work/easywechat/easywechat/docs/node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!/home/runner/work/easywechat/easywechat/docs/.vuepress/.temp/pages/5.x/payment/contract.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const contract_html = (script);

/***/ })

};
;
//# sourceMappingURL=9697.app.js.map