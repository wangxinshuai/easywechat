"use strict";
exports.id = 3436;
exports.ids = [3436];
exports.modules = {

/***/ 78918:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-d729825a",
  "path": "/5.x/wework/invoice.html",
  "title": "电子发票",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "查询电子发票",
      "slug": "查询电子发票",
      "children": []
    },
    {
      "level": 2,
      "title": "批量查询电子发票",
      "slug": "批量查询电子发票",
      "children": []
    },
    {
      "level": 2,
      "title": "更新发票状态",
      "slug": "更新发票状态",
      "children": []
    },
    {
      "level": 2,
      "title": "批量更新发票状态",
      "slug": "批量更新发票状态",
      "children": []
    }
  ],
  "filePathRelative": "5.x/wework/invoice.md",
  "git": {
    "updatedTime": 1629906046000,
    "contributors": []
  }
}


/***/ }),

/***/ 25625:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ invoice_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.vuepress/.temp/pages/5.x/wework/invoice.html.vue?vue&type=template&id=07f80cf8

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="电子发票" tabindex="-1"><a class="header-anchor" href="#电子发票" aria-hidden="true">#</a> 电子发票</h1><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$config</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token string single-quoted-string">&#39;corp_id&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;xxxxxxxxxxxxxxxxx&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;secret&#39;</span>   <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;xxxxxxxxxx&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">//...</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token variable">\$app</span> <span class="token operator">=</span> <span class="token class-name static-context">Factory</span><span class="token operator">::</span><span class="token function">work</span><span class="token punctuation">(</span><span class="token variable">\$config</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="查询电子发票" tabindex="-1"><a class="header-anchor" href="#查询电子发票" aria-hidden="true">#</a> 查询电子发票</h2><p>https://work.weixin.qq.com/api/doc#11631</p><p>API:</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token keyword type-declaration">mixed</span> <span class="token function">get</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">\$cardId</span><span class="token punctuation">,</span> <span class="token keyword type-hint">string</span> <span class="token variable">\$encryptCode</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>example:</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">invoice</span><span class="token operator">-&gt;</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;CARDID&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;ENCRYPTCODE&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="批量查询电子发票" tabindex="-1"><a class="header-anchor" href="#批量查询电子发票" aria-hidden="true">#</a> 批量查询电子发票</h2><p>https://work.weixin.qq.com/api/doc#11974</p><p>API:</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token keyword type-declaration">mixed</span> <span class="token function">select</span><span class="token punctuation">(</span><span class="token keyword type-hint">array</span> <span class="token variable">\$invoices</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><blockquote><p>{info} \$invoices: 发票参数列表</p></blockquote><p>example:</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$invoices</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span><span class="token string double-quoted-string">&quot;card_id&quot;</span> <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;CARDID1&quot;</span><span class="token punctuation">,</span> <span class="token string double-quoted-string">&quot;encrypt_code&quot;</span> <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;ENCRYPTCODE1&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token string double-quoted-string">&quot;card_id&quot;</span> <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;CARDID2&quot;</span><span class="token punctuation">,</span> <span class="token string double-quoted-string">&quot;encrypt_code&quot;</span> <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;ENCRYPTCODE2&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">invoice</span><span class="token operator">-&gt;</span><span class="token function">select</span><span class="token punctuation">(</span><span class="token variable">\$invoices</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="更新发票状态" tabindex="-1"><a class="header-anchor" href="#更新发票状态" aria-hidden="true">#</a> 更新发票状态</h2><p>https://work.weixin.qq.com/api/doc#11633</p><p>API:</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token keyword type-declaration">mixed</span> <span class="token function">update</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">\$cardId</span><span class="token punctuation">,</span> <span class="token keyword type-hint">string</span> <span class="token variable">\$encryptCode</span><span class="token punctuation">,</span> <span class="token keyword type-hint">string</span> <span class="token variable">\$status</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><blockquote><p>{warning} \$status: 发报销状态</p><blockquote><ul><li>INVOICE_REIMBURSE_INIT：发票初始状态，未锁定；</li><li>INVOICE_REIMBURSE_LOCK：发票已锁定，无法重复提交报销;</li><li>INVOICE_REIMBURSE_CLOSURE:发票已核销，从用户卡包中移除</li></ul></blockquote></blockquote><h2 id="批量更新发票状态" tabindex="-1"><a class="header-anchor" href="#批量更新发票状态" aria-hidden="true">#</a> 批量更新发票状态</h2><p>https://work.weixin.qq.com/api/doc#11633</p><p>API:</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token keyword type-declaration">mixed</span> <span class="token function">batchUpdate</span><span class="token punctuation">(</span><span class="token keyword type-hint">array</span> <span class="token variable">\$invoices</span><span class="token punctuation">,</span> <span class="token keyword type-hint">string</span> <span class="token variable">\$openid</span><span class="token punctuation">,</span> <span class="token keyword type-hint">string</span> <span class="token variable">\$status</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>example:</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$invoices</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span><span class="token string double-quoted-string">&quot;card_id&quot;</span> <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;CARDID1&quot;</span><span class="token punctuation">,</span> <span class="token string double-quoted-string">&quot;encrypt_code&quot;</span> <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;ENCRYPTCODE1&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token string double-quoted-string">&quot;card_id&quot;</span> <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;CARDID2&quot;</span><span class="token punctuation">,</span> <span class="token string double-quoted-string">&quot;encrypt_code&quot;</span> <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;ENCRYPTCODE2&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token variable">\$openid</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;oV-gpwSU3xlMXbq0PqqRp1xHu9O4&#39;</span><span class="token punctuation">;</span>

<span class="token variable">\$status</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;INVOICE_REIMBURSE_CLOSURE&#39;</span><span class="token punctuation">;</span>

<span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">invoice</span><span class="token operator">-&gt;</span><span class="token function">batchUpdate</span><span class="token punctuation">(</span><span class="token variable">\$invoices</span><span class="token punctuation">,</span> <span class="token variable">\$openid</span><span class="token punctuation">,</span> <span class="token variable">\$status</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><!--]-->`)
}
// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(84103);
;// CONCATENATED MODULE: ./.vuepress/.temp/pages/5.x/wework/invoice.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("/home/runner/work/easywechat/easywechat/docs/node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!/home/runner/work/easywechat/easywechat/docs/node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!/home/runner/work/easywechat/easywechat/docs/.vuepress/.temp/pages/5.x/wework/invoice.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const invoice_html = (script);

/***/ })

};
;
//# sourceMappingURL=3436.app.js.map