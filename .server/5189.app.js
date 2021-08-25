"use strict";
exports.id = 5189;
exports.ids = [5189];
exports.modules = {

/***/ 45391:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-4d5a6bbf",
  "path": "/3.x/merchant_payment.html",
  "title": "企业支付",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "配置",
      "slug": "配置",
      "children": []
    },
    {
      "level": 2,
      "title": "企业付款",
      "slug": "企业付款",
      "children": [
        {
          "level": 3,
          "title": "发送接口",
          "slug": "发送接口",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "查询付款信息",
      "slug": "查询付款信息",
      "children": []
    }
  ],
  "filePathRelative": "3.x/merchant_payment.md",
  "git": {
    "updatedTime": 1629906046000,
    "contributors": []
  }
}


/***/ }),

/***/ 39129:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ merchant_payment_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(84103);
// EXTERNAL MODULE: external "@vue/server-renderer"
var server_renderer_ = __webpack_require__(32745);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.vuepress/.temp/pages/3.x/merchant_payment.html.vue?vue&type=template&id=242e204a



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_OutboundLink = (0,external_vue_.resolveComponent)("OutboundLink")

  _push(`<!--[--><h1 id="企业支付" tabindex="-1"><a class="header-anchor" href="#企业支付" aria-hidden="true">#</a> 企业支付</h1><p>你在阅读本文之前确认你已经仔细阅读了：<a href="https://pay.weixin.qq.com/wiki/doc/api/tools/mch_pay.php?chapter=14_1" target="_blank" rel="noopener noreferrer">微信支付 | 企业付款文档 `)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>。</p><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2><p>与其他支付接口一样，企业支付接口也需要配置如下参数，需要特别注意的是，企业支付相关的全部接口 <strong>都需要使用 SSL 证书</strong>，因此 <strong>cert_path 以及 cert_key 必须正确配置</strong>。</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">use</span> <span class="token package">EasyWeChat<span class="token punctuation">\\</span>Foundation<span class="token punctuation">\\</span>Application</span><span class="token punctuation">;</span>

<span class="token variable">\$options</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token string single-quoted-string">&#39;app_id&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;your-app-id&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">// payment</span>
    <span class="token string single-quoted-string">&#39;payment&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
        <span class="token string single-quoted-string">&#39;merchant_id&#39;</span>        <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;your-mch-id&#39;</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;key&#39;</span>                <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;key-for-signature&#39;</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;cert_path&#39;</span>          <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;path/to/your/cert.pem&#39;</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;key_path&#39;</span>           <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;path/to/your/key&#39;</span><span class="token punctuation">,</span>
        <span class="token comment">// ...</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token variable">\$app</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Application</span><span class="token punctuation">(</span><span class="token variable">\$options</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">\$merchantPay</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">merchant_pay</span><span class="token punctuation">;</span>
</span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h2 id="企业付款" tabindex="-1"><a class="header-anchor" href="#企业付款" aria-hidden="true">#</a> 企业付款</h2><p>企业付款使用的余额跟微信支付的收款并非同一账户，请注意充值。</p><h3 id="发送接口" tabindex="-1"><a class="header-anchor" href="#发送接口" aria-hidden="true">#</a> 发送接口</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token variable">\$merchantPayData</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
        <span class="token string single-quoted-string">&#39;partner_trade_no&#39;</span> <span class="token operator">=&gt;</span> <span class="token function">str_random</span><span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">//随机字符串作为订单号，跟红包和支付一个概念。</span>
        <span class="token string single-quoted-string">&#39;openid&#39;</span> <span class="token operator">=&gt;</span> <span class="token variable">\$openid</span><span class="token punctuation">,</span> <span class="token comment">//收款人的openid</span>
        <span class="token string single-quoted-string">&#39;check_name&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;NO_CHECK&#39;</span><span class="token punctuation">,</span>  <span class="token comment">//文档中有三种校验实名的方法 NO_CHECK OPTION_CHECK FORCE_CHECK</span>
        <span class="token string single-quoted-string">&#39;re_user_name&#39;</span><span class="token operator">=&gt;</span><span class="token string single-quoted-string">&#39;张三&#39;</span><span class="token punctuation">,</span>     <span class="token comment">//OPTION_CHECK FORCE_CHECK 校验实名的时候必须提交</span>
        <span class="token string single-quoted-string">&#39;amount&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">100</span><span class="token punctuation">,</span>  <span class="token comment">//单位为分</span>
        <span class="token string single-quoted-string">&#39;desc&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;企业付款&#39;</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;spbill_create_ip&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;192.168.0.1&#39;</span><span class="token punctuation">,</span>  <span class="token comment">//发起交易的IP地址</span>
    <span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token variable">\$result</span> <span class="token operator">=</span> <span class="token variable">\$merchantPay</span><span class="token operator">-&gt;</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token variable">\$merchantPayData</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><blockquote><p>更多参数请参考官方文档中参数列表。</p></blockquote><h2 id="查询付款信息" tabindex="-1"><a class="header-anchor" href="#查询付款信息" aria-hidden="true">#</a> 查询付款信息</h2><p>用于商户对已发放的企业支付进行查询企业支付的具体信息。</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$partnerTradeNo</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;商户系统内部的订单号（partner_trade_no）&quot;</span><span class="token punctuation">;</span>
<span class="token variable">\$merchantPay</span><span class="token operator">-&gt;</span><span class="token function">query</span><span class="token punctuation">(</span><span class="token variable">\$partnerTradeNo</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><!--]-->`)
}
;// CONCATENATED MODULE: ./.vuepress/.temp/pages/3.x/merchant_payment.html.vue?vue&type=template&id=242e204a

;// CONCATENATED MODULE: ./.vuepress/.temp/pages/3.x/merchant_payment.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("/home/runner/work/easywechat/easywechat/docs/node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!/home/runner/work/easywechat/easywechat/docs/node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!/home/runner/work/easywechat/easywechat/docs/.vuepress/.temp/pages/3.x/merchant_payment.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const merchant_payment_html = (script);

/***/ })

};
;
//# sourceMappingURL=5189.app.js.map