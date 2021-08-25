"use strict";
exports.id = 3523;
exports.ids = [3523];
exports.modules = {

/***/ 30322:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-0a89b200",
  "path": "/5.x/payment/bill.html",
  "title": "对账单",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "下载对账单",
      "slug": "下载对账单",
      "children": []
    }
  ],
  "filePathRelative": "5.x/payment/bill.md",
  "git": {
    "updatedTime": 1629906046000,
    "contributors": []
  }
}


/***/ }),

/***/ 97582:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ bill_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.vuepress/.temp/pages/5.x/payment/bill.html.vue?vue&type=template&id=6ddf4020

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="对账单" tabindex="-1"><a class="header-anchor" href="#对账单" aria-hidden="true">#</a> 对账单</h1><h2 id="下载对账单" tabindex="-1"><a class="header-anchor" href="#下载对账单" aria-hidden="true">#</a> 下载对账单</h2><blockquote><p>调用参数正确会返回一个 <code>EasyWeChat\\Kernel\\Http\\StreamResponse</code> 对象，否则会返回相应错误信息</p></blockquote><p>Example:</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$bill</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">bill</span><span class="token operator">-&gt;</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;20140603&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// type: ALL</span>
<span class="token comment">// or</span>
<span class="token variable">\$bill</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">bill</span><span class="token operator">-&gt;</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;20140603&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;SUCCESS&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// type: SUCCESS</span>

<span class="token comment">// 调用正确，\`\$bill\` 为 csv 格式的内容，保存为文件：</span>
<span class="token variable">\$bill</span><span class="token operator">-&gt;</span><span class="token function">saveAs</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;your/path/to&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;file-20140603.csv&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>第二个参数为账单类型，参考：https://pay.weixin.qq.com/wiki/doc/api/jsapi.php?chapter=9_6 中 <code>bill_type</code>，默认为 <code>ALL</code></p><!--]-->`)
}
// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(84103);
;// CONCATENATED MODULE: ./.vuepress/.temp/pages/5.x/payment/bill.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("/home/runner/work/easywechat/easywechat/docs/node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!/home/runner/work/easywechat/easywechat/docs/node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!/home/runner/work/easywechat/easywechat/docs/.vuepress/.temp/pages/5.x/payment/bill.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const bill_html = (script);

/***/ })

};
;
//# sourceMappingURL=3523.app.js.map