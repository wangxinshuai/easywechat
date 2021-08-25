"use strict";
exports.id = 6358;
exports.ids = [6358];
exports.modules = {

/***/ 64126:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-1dc7509e",
  "path": "/4.x/payment/order.html",
  "title": "订单",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "统一下单",
      "slug": "统一下单",
      "children": []
    },
    {
      "level": 2,
      "title": "查询订单",
      "slug": "查询订单",
      "children": [
        {
          "level": 3,
          "title": "根据商户订单号查询",
          "slug": "根据商户订单号查询",
          "children": []
        },
        {
          "level": 3,
          "title": "根据微信订单号查询",
          "slug": "根据微信订单号查询",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "关闭订单",
      "slug": "关闭订单",
      "children": []
    }
  ],
  "filePathRelative": "4.x/payment/order.md",
  "git": {
    "updatedTime": 1629906046000,
    "contributors": []
  }
}


/***/ }),

/***/ 80940:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ order_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(84103);
// EXTERNAL MODULE: external "@vue/server-renderer"
var server_renderer_ = __webpack_require__(32745);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.vuepress/.temp/pages/4.x/payment/order.html.vue?vue&type=template&id=008ed8da



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_OutboundLink = (0,external_vue_.resolveComponent)("OutboundLink")

  _push(`<!--[--><h1 id="订单" tabindex="-1"><a class="header-anchor" href="#订单" aria-hidden="true">#</a> 订单</h1><h2 id="统一下单" tabindex="-1"><a class="header-anchor" href="#统一下单" aria-hidden="true">#</a> 统一下单</h2><p>没错，什么 H5 支付，公众号支付，扫码支付，支付中签约，全部都是用这个接口下单。</p><blockquote><p>{info} 参数 <code>appid</code>, <code>mch_id</code>, <code>nonce_str</code>, <code>sign</code>, <code>sign_type</code> 可不用传入</p></blockquote><blockquote><p>服务商模式下, 需使用 <code>sub_openid</code>, 并传入<code>sub_mch_id</code> 和<code>sub_appid</code></p></blockquote><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$result</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">order</span><span class="token operator">-&gt;</span><span class="token function">unify</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
    <span class="token string single-quoted-string">&#39;body&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;腾讯充值中心-QQ会员充值&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;out_trade_no&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;20150806125346&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;total_fee&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">88</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;spbill_create_ip&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;123.12.12.123&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 可选，如不传该参数，SDK 将会自动获取相应 IP 地址</span>
    <span class="token string single-quoted-string">&#39;notify_url&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;https://pay.weixin.qq.com/wxpay/pay.action&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 支付结果通知网址，如果不设置则会使用配置里的默认地址</span>
    <span class="token string single-quoted-string">&#39;trade_type&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;JSAPI&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 请对应换成你的支付方式对应的值类型</span>
    <span class="token string single-quoted-string">&#39;openid&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;oUpF8uMuAJO_M2pxb1Q9zNjWeS6o&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \$result:</span>
<span class="token comment">//{</span>
<span class="token comment">//    &quot;return_code&quot;: &quot;SUCCESS&quot;,</span>
<span class="token comment">//    &quot;return_msg&quot;: &quot;OK&quot;,</span>
<span class="token comment">//    &quot;appid&quot;: &quot;wx2421b1c4390ec4sb&quot;,</span>
<span class="token comment">//    &quot;mch_id&quot;: &quot;10000100&quot;,</span>
<span class="token comment">//    &quot;nonce_str&quot;: &quot;IITRi8Iabbblz1J&quot;,</span>
<span class="token comment">//    &quot;openid&quot;: &quot;oUpF8uMuAJO_M2pxb1Q9zNjWeSs6o&quot;,</span>
<span class="token comment">//    &quot;sign&quot;: &quot;7921E432F65EB8ED0CE9755F0E86D72F2&quot;,</span>
<span class="token comment">//    &quot;result_code&quot;: &quot;SUCCESS&quot;,</span>
<span class="token comment">//    &quot;prepay_id&quot;: &quot;wx201411102639507cbf6ffd8b0779950874&quot;,</span>
<span class="token comment">//    &quot;trade_type&quot;: &quot;JSAPI&quot;</span>
<span class="token comment">//}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><p><strong>第二个参数</strong>为是否<a href="https://pay.weixin.qq.com/wiki/doc/api/pap.php?chapter=18_13&amp;index=5" target="_blank" rel="noopener noreferrer">支付中签约`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>，默认 <code>false</code></p><blockquote><p>{info} 支付中签约相关参数 <code>contract_mchid</code>, <code>contract_appid</code>, <code>request_serial</code> 可不用传入</p></blockquote><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$isContract</span> <span class="token operator">=</span> <span class="token constant boolean">true</span><span class="token punctuation">;</span>

<span class="token variable">\$result</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">order</span><span class="token operator">-&gt;</span><span class="token function">unify</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
    <span class="token string single-quoted-string">&#39;body&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;腾讯充值中心-QQ会员充值&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;out_trade_no&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;20150806125346&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;total_fee&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">88</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;spbill_create_ip&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;123.12.12.123&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 可选，如不传该参数，SDK 将会自动获取相应 IP 地址</span>
    <span class="token string single-quoted-string">&#39;notify_url&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;https://pay.weixin.qq.com/wxpay/pay.action&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 支付结果通知网址，如果不设置则会使用配置里的默认地址</span>
    <span class="token string single-quoted-string">&#39;trade_type&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;JSAPI&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 请对应换成你的支付方式对应的值类型</span>
    <span class="token string single-quoted-string">&#39;openid&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;oUpF8uMuAJO_M2pxb1Q9zNjWeS6o&#39;</span><span class="token punctuation">,</span>
    
    <span class="token string single-quoted-string">&#39;plan_id&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">123</span><span class="token punctuation">,</span><span class="token comment">// 协议模板id</span>
    <span class="token string single-quoted-string">&#39;contract_code&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">100001256</span><span class="token punctuation">,</span><span class="token comment">// 签约协议号</span>
    <span class="token string single-quoted-string">&#39;contract_display_account&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;腾讯充值中心&#39;</span><span class="token punctuation">,</span><span class="token comment">// 签约用户的名称</span>
    <span class="token string single-quoted-string">&#39;contract_notify_url&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;http://easywechat.org/contract_notify&#39;</span>
<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token variable">\$isContract</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//\$result:</span>
<span class="token comment">//{</span>
<span class="token comment">//  &quot;return_code&quot;: &quot;SUCCESS&quot;,</span>
<span class="token comment">//  &quot;return_msg&quot;: &quot;OK&quot;,</span>
<span class="token comment">//  &quot;appid&quot;: &quot;wx123456&quot;,</span>
<span class="token comment">//  &quot;mch_id&quot;: &quot;10000100&quot;,</span>
<span class="token comment">//  &quot;nonce_str&quot;: &quot;CfOcMkDFblzulYvI&quot;,</span>
<span class="token comment">//  &quot;sign&quot;: &quot;B53F4AFEE7FA6AD5739581486A5CB9C9&quot;,</span>
<span class="token comment">//  &quot;result_code&quot;: &quot;SUCCESS&quot;,</span>
<span class="token comment">//  &quot;prepay_id&quot;: &quot;wx08175759731015754a5c13791522969400&quot;,</span>
<span class="token comment">//  &quot;trade_type&quot;: &quot;JSAPI&quot;,</span>
<span class="token comment">//  &quot;plan_id&quot;: &quot;123&quot;,</span>
<span class="token comment">//  &quot;request_serial&quot;: &quot;1565258279&quot;,</span>
<span class="token comment">//  &quot;contract_code&quot;: &quot;100001256&quot;,</span>
<span class="token comment">//  &quot;contract_display_account&quot;: &quot;腾讯充值中心&quot;,</span>
<span class="token comment">//  &quot;out_trade_no&quot;: &quot;201908088195558331565258279&quot;,</span>
<span class="token comment">//  &quot;contract_result_code&quot;: &quot;SUCCESS&quot;</span>
<span class="token comment">//}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div><h2 id="查询订单" tabindex="-1"><a class="header-anchor" href="#查询订单" aria-hidden="true">#</a> 查询订单</h2><p>该接口提供所有微信支付订单的查询，商户可以通过该接口主动查询订单状态，完成下一步的业务逻辑。</p><p>需要调用查询接口的情况：</p><blockquote><ul><li>当商户后台、网络、服务器等出现异常，商户系统最终未接收到支付通知；</li><li>调用支付接口后，返回系统错误或未知交易状态情况；</li><li>调用被扫支付 API，返回 USERPAYING 的状态；</li><li>调用关单或撤销接口 API 之前，需确认支付状态；</li></ul></blockquote><h3 id="根据商户订单号查询" tabindex="-1"><a class="header-anchor" href="#根据商户订单号查询" aria-hidden="true">#</a> 根据商户订单号查询</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">order</span><span class="token operator">-&gt;</span><span class="token function">queryByOutTradeNumber</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;商户系统内部的订单号（out_trade_no）&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="根据微信订单号查询" tabindex="-1"><a class="header-anchor" href="#根据微信订单号查询" aria-hidden="true">#</a> 根据微信订单号查询</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">order</span><span class="token operator">-&gt;</span><span class="token function">queryByTransactionId</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;微信订单号（transaction_id）&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="关闭订单" tabindex="-1"><a class="header-anchor" href="#关闭订单" aria-hidden="true">#</a> 关闭订单</h2><blockquote><p>{warning} 注意：订单生成后不能马上调用关单接口，最短调用时间间隔为5分钟。</p></blockquote><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">order</span><span class="token operator">-&gt;</span><span class="token function">close</span><span class="token punctuation">(</span>商户系统内部的订单号（out_trade_no）<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><!--]-->`)
}
;// CONCATENATED MODULE: ./.vuepress/.temp/pages/4.x/payment/order.html.vue?vue&type=template&id=008ed8da

;// CONCATENATED MODULE: ./.vuepress/.temp/pages/4.x/payment/order.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("/home/runner/work/easywechat/easywechat/docs/node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!/home/runner/work/easywechat/easywechat/docs/node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!/home/runner/work/easywechat/easywechat/docs/.vuepress/.temp/pages/4.x/payment/order.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const order_html = (script);

/***/ })

};
;
//# sourceMappingURL=6358.app.js.map