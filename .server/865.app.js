"use strict";
exports.id = 865;
exports.ids = [865];
exports.modules = {

/***/ 86383:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-1e07e06e",
  "path": "/4.x/payment/refund.html",
  "title": "退款",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "申请退款",
      "slug": "申请退款",
      "children": [
        {
          "level": 3,
          "title": "根据微信订单号退款",
          "slug": "根据微信订单号退款",
          "children": []
        },
        {
          "level": 3,
          "title": "根据商户订单号退款",
          "slug": "根据商户订单号退款",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "查询退款",
      "slug": "查询退款",
      "children": []
    }
  ],
  "filePathRelative": "4.x/payment/refund.md",
  "git": {
    "updatedTime": 1629906046000,
    "contributors": []
  }
}


/***/ }),

/***/ 73569:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ refund_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.vuepress/.temp/pages/4.x/payment/refund.html.vue?vue&type=template&id=e9bd14c6

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="退款" tabindex="-1"><a class="header-anchor" href="#退款" aria-hidden="true">#</a> 退款</h1><h2 id="申请退款" tabindex="-1"><a class="header-anchor" href="#申请退款" aria-hidden="true">#</a> 申请退款</h2><p>当交易发生之后一段时间内，由于买家或者卖家的原因需要退款时，卖家可以通过退款接口将支付款退还给买家，微信支付将在收到退款请求并且验证成功之后，按照退款规则将支付款按原路退到买家帐号上。</p><p>注意：</p><blockquote><p>1、交易时间超过一年的订单无法提交退款； 2、微信支付退款支持单笔交易分多次退款，多次退款需要提交原支付订单的商户订单号和设置不同的退款单号。一笔退款失败后重新提交，要采用原来的退款单号。总退款金额不能超过用户实际支付金额。</p></blockquote><p>参考：https://pay.weixin.qq.com/wiki/doc/api/jsapi.php?chapter=9_4</p><h3 id="根据微信订单号退款" tabindex="-1"><a class="header-anchor" href="#根据微信订单号退款" aria-hidden="true">#</a> 根据微信订单号退款</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token comment">// 参数分别为：微信订单号、商户退款单号、订单金额、退款金额、其他参数</span>
<span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">refund</span><span class="token operator">-&gt;</span><span class="token function">byTransactionId</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">\$transactionId</span><span class="token punctuation">,</span> <span class="token keyword type-hint">string</span> <span class="token variable">\$refundNumber</span><span class="token punctuation">,</span> <span class="token keyword type-hint">int</span> <span class="token variable">\$totalFee</span><span class="token punctuation">,</span> <span class="token keyword type-hint">int</span> <span class="token variable">\$refundFee</span><span class="token punctuation">,</span> <span class="token keyword type-hint">array</span> <span class="token variable">\$config</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Example:</span>
<span class="token variable">\$result</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">refund</span><span class="token operator">-&gt;</span><span class="token function">byTransactionId</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;transaction-id-xxx&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;refund-no-xxx&#39;</span><span class="token punctuation">,</span> <span class="token number">10000</span><span class="token punctuation">,</span> <span class="token number">10000</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>
    <span class="token comment">// 可在此处传入其他参数，详细参数见微信支付文档</span>
    <span class="token string single-quoted-string">&#39;refund_desc&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;商品已售完&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="根据商户订单号退款" tabindex="-1"><a class="header-anchor" href="#根据商户订单号退款" aria-hidden="true">#</a> 根据商户订单号退款</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token comment">// 参数分别为：商户订单号、商户退款单号、订单金额、退款金额、其他参数</span>
<span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">refund</span><span class="token operator">-&gt;</span><span class="token function">byOutTradeNumber</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">\$number</span><span class="token punctuation">,</span> <span class="token keyword type-hint">string</span> <span class="token variable">\$refundNumber</span><span class="token punctuation">,</span> <span class="token keyword type-hint">int</span> <span class="token variable">\$totalFee</span><span class="token punctuation">,</span> <span class="token keyword type-hint">int</span> <span class="token variable">\$refundFee</span><span class="token punctuation">,</span> <span class="token keyword type-hint">array</span> <span class="token variable">\$config</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Example:</span>
<span class="token variable">\$result</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">refund</span><span class="token operator">-&gt;</span><span class="token function">byOutTradeNumber</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;out-trade-no-xxx&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;refund-no-xxx&#39;</span><span class="token punctuation">,</span> <span class="token number">20000</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>
    <span class="token comment">// 可在此处传入其他参数，详细参数见微信支付文档</span>
    <span class="token string single-quoted-string">&#39;refund_desc&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;退运费&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><blockquote><p>\$refundNumber 为商户退款单号，自己生成用于自己识别即可。</p></blockquote><h2 id="查询退款" tabindex="-1"><a class="header-anchor" href="#查询退款" aria-hidden="true">#</a> 查询退款</h2><p>提交退款申请后，通过调用该接口查询退款状态。退款有一定延时，用零钱支付的退款20分钟内到账，银行卡支付的退款3个工作日后重新查询退款状态。</p><p>可通过 4 种不同类型的单号查询：</p><blockquote><ul><li>微信订单号 =&gt; <code>queryByTransactionId(\$transactionId)</code></li><li>商户订单号 =&gt; <code>queryByOutTradeNumber(\$outTradeNumber)</code></li><li>商户退款单号 =&gt; <code>queryByOutRefundNumber(\$outRefundNumber)</code></li><li>微信退款单号 =&gt; <code>queryByRefundId(\$refundId)</code></li></ul></blockquote><!--]-->`)
}
// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(84103);
;// CONCATENATED MODULE: ./.vuepress/.temp/pages/4.x/payment/refund.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("/home/runner/work/easywechat/easywechat/docs/node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!/home/runner/work/easywechat/easywechat/docs/node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!/home/runner/work/easywechat/easywechat/docs/.vuepress/.temp/pages/4.x/payment/refund.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const refund_html = (script);

/***/ })

};
;
//# sourceMappingURL=865.app.js.map