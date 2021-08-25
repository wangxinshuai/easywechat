"use strict";
exports.id = 7823;
exports.ids = [7823];
exports.modules = {

/***/ 30132:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-b03ca498",
  "path": "/5.x/payment/profit-sharing.html",
  "title": "分账",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 3,
      "title": "添加接收方",
      "slug": "添加接收方",
      "children": []
    },
    {
      "level": 3,
      "title": "删除接收方",
      "slug": "删除接收方",
      "children": []
    },
    {
      "level": 3,
      "title": "单次分账",
      "slug": "单次分账",
      "children": []
    },
    {
      "level": 3,
      "title": "多次分账",
      "slug": "多次分账",
      "children": []
    },
    {
      "level": 3,
      "title": "多次分账完结",
      "slug": "多次分账完结",
      "children": []
    },
    {
      "level": 3,
      "title": "分账查询",
      "slug": "分账查询",
      "children": []
    },
    {
      "level": 3,
      "title": "分账退回",
      "slug": "分账退回",
      "children": []
    }
  ],
  "filePathRelative": "5.x/payment/profit-sharing.md",
  "git": {
    "updatedTime": 1629906046000,
    "contributors": []
  }
}


/***/ }),

/***/ 64110:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ profit_sharing_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.vuepress/.temp/pages/5.x/payment/profit-sharing.html.vue?vue&type=template&id=e60c7be0

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="分账" tabindex="-1"><a class="header-anchor" href="#分账" aria-hidden="true">#</a> 分账</h1><blockquote><p>官方文档 https://pay.weixin.qq.com/wiki/doc/api/allocation.php?chapter=27_1&amp;index=1</p></blockquote><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">EasyWeChat<span class="token punctuation">\\</span>Factory</span><span class="token punctuation">;</span>
<span class="token variable">\$config</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
	<span class="token string single-quoted-string">&#39;app_id&#39;</span>     <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;***&#39;</span><span class="token punctuation">,</span>
	<span class="token string double-quoted-string">&quot;secret&quot;</span>     <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;***&quot;</span><span class="token punctuation">,</span>
	<span class="token string single-quoted-string">&#39;mch_id&#39;</span>     <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;***&#39;</span><span class="token punctuation">,</span>
	<span class="token string single-quoted-string">&#39;key&#39;</span>        <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;***&#39;</span><span class="token punctuation">,</span>
	<span class="token string single-quoted-string">&#39;cert_path&#39;</span>  <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;cert.pem&#39;</span><span class="token punctuation">,</span>
	<span class="token string single-quoted-string">&#39;key_path&#39;</span>   <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;key.pem&#39;</span><span class="token punctuation">,</span>
	<span class="token string single-quoted-string">&#39;notify_url&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;http://***.com/notify.php&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token variable">\$payment</span> <span class="token operator">=</span> <span class="token class-name static-context">Factory</span><span class="token operator">::</span><span class="token function">payment</span><span class="token punctuation">(</span><span class="token variable">\$config</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="添加接收方" tabindex="-1"><a class="header-anchor" href="#添加接收方" aria-hidden="true">#</a> 添加接收方</h3><blockquote><p>商户发起添加分账接收方请求，后续可通过发起分账请求将结算后的钱分到该分账接收方。</p></blockquote><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$receiver</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
	<span class="token string double-quoted-string">&quot;type&quot;</span>          <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;PERSONAL_OPENID&quot;</span><span class="token punctuation">,</span>
	<span class="token string double-quoted-string">&quot;account&quot;</span>       <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;…………&quot;</span><span class="token punctuation">,</span><span class="token comment">//PERSONAL_OPENID：个人openid</span>
	<span class="token string double-quoted-string">&quot;name&quot;</span>          <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;张三&quot;</span><span class="token punctuation">,</span><span class="token comment">//接收方真实姓名</span>
	<span class="token string double-quoted-string">&quot;relation_type&quot;</span> <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;PARTNER&quot;</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token variable">\$payment</span><span class="token operator">-&gt;</span><span class="token property">profit_sharing</span><span class="token operator">-&gt;</span><span class="token function">addReceiver</span><span class="token punctuation">(</span><span class="token variable">\$receiver</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">\$receiver</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
	<span class="token string double-quoted-string">&quot;type&quot;</span>          <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;MERCHANT_ID&quot;</span><span class="token punctuation">,</span>
	<span class="token string double-quoted-string">&quot;account&quot;</span>       <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;132456798&quot;</span><span class="token punctuation">,</span><span class="token comment">//MERCHANT_ID：商户ID</span>
	<span class="token string double-quoted-string">&quot;name&quot;</span>          <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;商户全称&quot;</span><span class="token punctuation">,</span><span class="token comment">//商户全称</span>
	<span class="token string double-quoted-string">&quot;relation_type&quot;</span> <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;PARTNER&quot;</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token variable">\$payment</span><span class="token operator">-&gt;</span><span class="token property">profit_sharing</span><span class="token operator">-&gt;</span><span class="token function">addReceiver</span><span class="token punctuation">(</span><span class="token variable">\$receiver</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h3 id="删除接收方" tabindex="-1"><a class="header-anchor" href="#删除接收方" aria-hidden="true">#</a> 删除接收方</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$payment</span><span class="token operator">-&gt;</span><span class="token property">profit_sharing</span><span class="token operator">-&gt;</span><span class="token function">deleteReceiver</span><span class="token punctuation">(</span><span class="token variable">\$receiver</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="单次分账" tabindex="-1"><a class="header-anchor" href="#单次分账" aria-hidden="true">#</a> 单次分账</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$transaction_id</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;***&quot;</span><span class="token punctuation">;</span>
<span class="token variable">\$out_trade_no</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;***&quot;</span><span class="token punctuation">;</span>
<span class="token variable">\$receivers</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
	<span class="token punctuation">[</span>
		<span class="token string double-quoted-string">&quot;type&quot;</span>        <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;PERSONAL_OPENID&quot;</span><span class="token punctuation">,</span>
		<span class="token string double-quoted-string">&quot;account&quot;</span>     <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;***&quot;</span><span class="token punctuation">,</span>
		<span class="token string double-quoted-string">&quot;amount&quot;</span>      <span class="token operator">=&gt;</span> <span class="token number">2</span><span class="token punctuation">,</span>
		<span class="token string double-quoted-string">&quot;description&quot;</span> <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;分到个人&quot;</span>
	<span class="token punctuation">]</span><span class="token punctuation">,</span>
	<span class="token punctuation">[</span>
		<span class="token string double-quoted-string">&quot;type&quot;</span>        <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;MERCHANT_ID&quot;</span><span class="token punctuation">,</span>
		<span class="token string double-quoted-string">&quot;account&quot;</span>     <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;***&quot;</span><span class="token punctuation">,</span>
		<span class="token string double-quoted-string">&quot;amount&quot;</span>      <span class="token operator">=&gt;</span> <span class="token number">1</span><span class="token punctuation">,</span>
		<span class="token string double-quoted-string">&quot;description&quot;</span> <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;分到商户&quot;</span>
	<span class="token punctuation">]</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token variable">\$sharing</span> <span class="token operator">=</span> <span class="token variable">\$payment</span><span class="token operator">-&gt;</span><span class="token property">profit_sharing</span><span class="token operator">-&gt;</span><span class="token function">share</span><span class="token punctuation">(</span><span class="token variable">\$transaction_id</span><span class="token punctuation">,</span><span class="token variable">\$out_trade_no</span><span class="token punctuation">,</span><span class="token variable">\$receivers</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h3 id="多次分账" tabindex="-1"><a class="header-anchor" href="#多次分账" aria-hidden="true">#</a> 多次分账</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$payment</span><span class="token operator">-&gt;</span><span class="token property">profit_sharing</span><span class="token operator">-&gt;</span><span class="token function">multiShare</span><span class="token punctuation">(</span><span class="token variable">\$transaction_id</span><span class="token punctuation">,</span><span class="token variable">\$out_trade_no</span><span class="token punctuation">,</span><span class="token variable">\$receivers</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="多次分账完结" tabindex="-1"><a class="header-anchor" href="#多次分账完结" aria-hidden="true">#</a> 多次分账完结</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$params</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
	<span class="token string double-quoted-string">&quot;transaction_id&quot;</span> <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;&quot;</span><span class="token punctuation">,</span>
	<span class="token string double-quoted-string">&quot;out_order_no&quot;</span>   <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;&quot;</span><span class="token punctuation">,</span>
	<span class="token string double-quoted-string">&quot;description&quot;</span>    <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;&quot;</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token variable">\$payment</span><span class="token operator">-&gt;</span><span class="token property">profit_sharing</span><span class="token operator">-&gt;</span><span class="token function">markOrderAsFinished</span><span class="token punctuation">(</span><span class="token variable">\$params</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="分账查询" tabindex="-1"><a class="header-anchor" href="#分账查询" aria-hidden="true">#</a> 分账查询</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$res</span> <span class="token operator">=</span> <span class="token variable">\$payment</span><span class="token operator">-&gt;</span><span class="token property">profit_sharing</span><span class="token operator">-&gt;</span><span class="token function">query</span><span class="token punctuation">(</span><span class="token variable">\$transaction_id</span><span class="token punctuation">,</span><span class="token variable">\$out_trade_no</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><blockquote><p>查询结果</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Array
(
    [return_code] =&gt; SUCCESS
    [result_code] =&gt; SUCCESS
    [mch_id] =&gt; ***
    [nonce_str] =&gt; 38e92cbe2790642f
    [sign] =&gt; 8904B6440C58785540950F2911500F55C9A94CAC75790B0721B9AA470E6BF9A8
    [transaction_id] =&gt; 4200000589202007249764665257
    [out_order_no] =&gt; 202007241544057945
    [order_id] =&gt; 30000103702020072402011591464
    [status] =&gt; FINISHED
    [receivers] =&gt; [{&quot;type&quot;:&quot;MERCHANT_ID&quot;,&quot;account&quot;:&quot;***&quot;,&quot;amount&quot;:7,&quot;description&quot;:&quot;解冻给分账方&quot;,&quot;result&quot;:&quot;SUCCESS&quot;,&quot;finish_time&quot;:&quot;20200724172033&quot;},{&quot;type&quot;:&quot;PERSONAL_OPENID&quot;,&quot;account&quot;:&quot;***&quot;,&quot;amount&quot;:2,&quot;description&quot;:&quot;分到个人1&quot;,&quot;result&quot;:&quot;SUCCESS&quot;,&quot;finish_time&quot;:&quot;20200724172033&quot;},{&quot;type&quot;:&quot;PERSONAL_OPENID&quot;,&quot;account&quot;:&quot;***-g4&quot;,&quot;amount&quot;:1,&quot;description&quot;:&quot;分到郭&quot;,&quot;result&quot;:&quot;SUCCESS&quot;,&quot;finish_time&quot;:&quot;20200724172034&quot;}]
)
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h3 id="分账退回" tabindex="-1"><a class="header-anchor" href="#分账退回" aria-hidden="true">#</a> 分账退回</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$out_trade_no</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;***&quot;</span><span class="token punctuation">;</span><span class="token comment">//退款订单号</span>
<span class="token variable">\$out_return_no</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;***&quot;</span><span class="token punctuation">;</span><span class="token comment">//系统内部退款单号</span>
<span class="token variable">\$return_amount</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token variable">\$return_account</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;***-g4&quot;</span><span class="token punctuation">;</span>
<span class="token variable">\$description</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;订单取消&quot;</span><span class="token punctuation">;</span>
<span class="token variable">\$payment</span><span class="token operator">-&gt;</span><span class="token property">profit_sharing</span><span class="token operator">-&gt;</span><span class="token function">returnShare</span><span class="token punctuation">(</span><span class="token variable">\$out_trade_no</span><span class="token punctuation">,</span><span class="token variable">\$out_return_no</span><span class="token punctuation">,</span><span class="token variable">\$return_amount</span><span class="token punctuation">,</span><span class="token variable">\$return_account</span><span class="token punctuation">,</span><span class="token variable">\$description</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><!--]-->`)
}
// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(84103);
;// CONCATENATED MODULE: ./.vuepress/.temp/pages/5.x/payment/profit-sharing.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("/home/runner/work/easywechat/easywechat/docs/node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!/home/runner/work/easywechat/easywechat/docs/node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!/home/runner/work/easywechat/easywechat/docs/.vuepress/.temp/pages/5.x/payment/profit-sharing.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const profit_sharing_html = (script);

/***/ })

};
;
//# sourceMappingURL=7823.app.js.map