"use strict";
exports.id = 1164;
exports.ids = [1164];
exports.modules = {

/***/ 21897:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-487bbe1a",
  "path": "/5.x/payment/jssdk.html",
  "title": "JSSDK",
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
      "title": "生成支付 JS 配置",
      "slug": "生成支付-js-配置",
      "children": []
    },
    {
      "level": 2,
      "title": "生成共享收货地址 JS 配置",
      "slug": "生成共享收货地址-js-配置",
      "children": []
    },
    {
      "level": 2,
      "title": "生成 APP 支付配置",
      "slug": "生成-app-支付配置",
      "children": []
    }
  ],
  "filePathRelative": "5.x/payment/jssdk.md",
  "git": {
    "updatedTime": 1629906046000,
    "contributors": []
  }
}


/***/ }),

/***/ 62142:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ jssdk_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(84103);
// EXTERNAL MODULE: external "@vue/server-renderer"
var server_renderer_ = __webpack_require__(32745);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.vuepress/.temp/pages/5.x/payment/jssdk.html.vue?vue&type=template&id=36b0f1c2



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_OutboundLink = (0,external_vue_.resolveComponent)("OutboundLink")

  _push(`<!--[--><h1 id="jssdk" tabindex="-1"><a class="header-anchor" href="#jssdk" aria-hidden="true">#</a> JSSDK</h1><p>JSSDK 模块用于生成调起微信支付以及共享收货地址的调用所需的配置参数。</p><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">EasyWeChat<span class="token punctuation">\\</span>Factory</span><span class="token punctuation">;</span>

<span class="token variable">\$config</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token comment">// 前面的appid什么的也得保留哦</span>
    <span class="token string single-quoted-string">&#39;app_id&#39;</span>             <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;xxxx&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;mch_id&#39;</span>             <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;your-mch-id&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;key&#39;</span>                <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;key-for-signature&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;cert_path&#39;</span>          <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;path/to/your/cert.pem&#39;</span><span class="token punctuation">,</span> <span class="token comment">// XXX: 绝对路径！！！！</span>
    <span class="token string single-quoted-string">&#39;key_path&#39;</span>           <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;path/to/your/key&#39;</span><span class="token punctuation">,</span>      <span class="token comment">// XXX: 绝对路径！！！！</span>
    <span class="token string single-quoted-string">&#39;notify_url&#39;</span>         <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;默认的订单回调地址&#39;</span><span class="token punctuation">,</span>     <span class="token comment">// 你也可以在下单时单独设置来想覆盖它</span>
    <span class="token comment">// &#39;device_info&#39;     =&gt; &#39;013467007045764&#39;,</span>
    <span class="token comment">// &#39;sub_app_id&#39;      =&gt; &#39;&#39;,</span>
    <span class="token comment">// &#39;sub_merchant_id&#39; =&gt; &#39;&#39;,</span>
    <span class="token comment">// ...</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token variable">\$payment</span> <span class="token operator">=</span> <span class="token class-name static-context">Factory</span><span class="token operator">::</span><span class="token function">payment</span><span class="token punctuation">(</span><span class="token variable">\$config</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">\$jssdk</span> <span class="token operator">=</span> <span class="token variable">\$payment</span><span class="token operator">-&gt;</span><span class="token property">jssdk</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h2 id="生成支付-js-配置" tabindex="-1"><a class="header-anchor" href="#生成支付-js-配置" aria-hidden="true">#</a> 生成支付 JS 配置</h2><p>有三种发起支付的方式：<a href="https://pay.weixin.qq.com/wiki/doc/api/jsapi.php?chapter=7_7&amp;index=6" target="_blank" rel="noopener noreferrer">WeixinJSBridge`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>, <a href="https://pay.weixin.qq.com/wiki/doc/api/H5.php?chapter=15_1" target="_blank" rel="noopener noreferrer">JSSDK`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>, <a href="https://pay.weixin.qq.com/wiki/doc/api/wxa/wxa_api.php?chapter=7_7" target="_blank" rel="noopener noreferrer">小程序`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></p><ol><li><p>WeixinJSBridge:</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$json</span> <span class="token operator">=</span> <span class="token variable">\$jssdk</span><span class="token operator">-&gt;</span><span class="token function">bridgeConfig</span><span class="token punctuation">(</span><span class="token variable">\$prepayId</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 返回 json 字符串，如果想返回数组，传第二个参数 false</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>javascript:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">...</span>
WeixinJSBridge<span class="token punctuation">.</span><span class="token function">invoke</span><span class="token punctuation">(</span>
       <span class="token string">&#39;getBrandWCPayRequest&#39;</span><span class="token punctuation">,</span> <span class="token operator">&lt;</span><span class="token operator">?</span><span class="token operator">=</span> \$json <span class="token operator">?</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>
       <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
           <span class="token keyword">if</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>err_msg <span class="token operator">==</span> <span class="token string">&quot;get_brand_wcpay_request:ok&quot;</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// 使用以上方式判断前端返回,微信团队郑重提示：</span>
                <span class="token comment">// res.err_msg将在用户支付成功后返回</span>
                <span class="token comment">// ok，但并不保证它绝对可靠。</span>
           <span class="token punctuation">}</span>
       <span class="token punctuation">}</span>
   <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token operator">...</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div></li><li><p>JSSDK:</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$config</span> <span class="token operator">=</span> <span class="token variable">\$jssdk</span><span class="token operator">-&gt;</span><span class="token function">sdkConfig</span><span class="token punctuation">(</span><span class="token variable">\$prepayId</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 返回数组</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>javascript:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>wx<span class="token punctuation">.</span><span class="token function">chooseWXPay</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    timestamp<span class="token operator">:</span> <span class="token operator">&lt;</span><span class="token operator">?</span><span class="token operator">=</span> \$config<span class="token punctuation">[</span><span class="token string">&#39;timestamp&#39;</span><span class="token punctuation">]</span> <span class="token operator">?</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>
    nonceStr<span class="token operator">:</span> <span class="token string">&#39;&lt;?= \$config[&#39;</span>nonceStr<span class="token string">&#39;] ?&gt;&#39;</span><span class="token punctuation">,</span>
    <span class="token keyword">package</span><span class="token operator">:</span> <span class="token string">&#39;&lt;?= \$config[&#39;</span><span class="token keyword">package</span><span class="token string">&#39;] ?&gt;&#39;</span><span class="token punctuation">,</span>
    signType<span class="token operator">:</span> <span class="token string">&#39;&lt;?= \$config[&#39;</span>signType<span class="token string">&#39;] ?&gt;&#39;</span><span class="token punctuation">,</span>
    paySign<span class="token operator">:</span> <span class="token string">&#39;&lt;?= \$config[&#39;</span>paySign<span class="token string">&#39;] ?&gt;&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 支付签名</span>
    <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 支付成功后的回调函数</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div></li><li><p>小程序:</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$config</span> <span class="token operator">=</span> <span class="token variable">\$jssdk</span><span class="token operator">-&gt;</span><span class="token function">bridgeConfig</span><span class="token punctuation">(</span><span class="token variable">\$prepayId</span><span class="token punctuation">,</span> <span class="token constant boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 返回数组</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>javascript:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>wx<span class="token punctuation">.</span><span class="token function">requestPayment</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    timeStamp<span class="token operator">:</span> <span class="token operator">&lt;</span><span class="token operator">?</span><span class="token operator">=</span> \$config<span class="token punctuation">[</span><span class="token string">&#39;timeStamp&#39;</span><span class="token punctuation">]</span> <span class="token operator">?</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> <span class="token comment">//注意 timeStamp 的格式</span>
    nonceStr<span class="token operator">:</span> <span class="token string">&#39;&lt;?= \$config[&#39;</span>nonceStr<span class="token string">&#39;] ?&gt;&#39;</span><span class="token punctuation">,</span>
    <span class="token keyword">package</span><span class="token operator">:</span> <span class="token string">&#39;&lt;?= \$config[&#39;</span><span class="token keyword">package</span><span class="token string">&#39;] ?&gt;&#39;</span><span class="token punctuation">,</span>
    signType<span class="token operator">:</span> <span class="token string">&#39;&lt;?= \$config[&#39;</span>signType<span class="token string">&#39;] ?&gt;&#39;</span><span class="token punctuation">,</span>
    paySign<span class="token operator">:</span> <span class="token string">&#39;&lt;?= \$config[&#39;</span>paySign<span class="token string">&#39;] ?&gt;&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 支付签名</span>
    <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 支付成功后的回调函数</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div></li></ol><h2 id="生成共享收货地址-js-配置" tabindex="-1"><a class="header-anchor" href="#生成共享收货地址-js-配置" aria-hidden="true">#</a> 生成共享收货地址 JS 配置</h2><ol><li><p>发起 OAuth 授权，获取用户 <code>\$accessToken</code>,参考网页授权章节。</p></li><li><p>使用 <code>\$accessToken</code> 获取配置</p></li></ol><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$configForPickAddress</span> <span class="token operator">=</span> <span class="token variable">\$jssdk</span><span class="token operator">-&gt;</span><span class="token function">shareAddressConfig</span><span class="token punctuation">(</span><span class="token variable">\$token</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 拿着这个生成好的配置 \$configForPickAddress 去订单页（或者直接显示订单页）写 js 调用了</span>
<span class="token comment">// ...</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="生成-app-支付配置" tabindex="-1"><a class="header-anchor" href="#生成-app-支付配置" aria-hidden="true">#</a> 生成 APP 支付配置</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$config</span> <span class="token operator">=</span> <span class="token variable">\$jssdk</span><span class="token operator">-&gt;</span><span class="token function">appConfig</span><span class="token punctuation">(</span><span class="token variable">\$prepayId</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><code>\$config</code> 为数组格式，你可以用 API 返回给客户端</p><h1 id="二维码生成工具推荐" tabindex="-1"><a class="header-anchor" href="#二维码生成工具推荐" aria-hidden="true">#</a> 二维码生成工具推荐</h1><p>你也许需要生成二维码，那么以下这些供参考：</p><blockquote><ul><li>https://github.com/endroid/QrCode</li><li>https://github.com/Bacon/BaconQrCode</li><li>https://github.com/SimpleSoftwareIO/simple-qrcode (Bacon/BaconQrCode 的 Laravel 版本)</li><li>https://github.com/aferrandini/PHPQRCode</li></ul></blockquote><!--]-->`)
}
;// CONCATENATED MODULE: ./.vuepress/.temp/pages/5.x/payment/jssdk.html.vue?vue&type=template&id=36b0f1c2

;// CONCATENATED MODULE: ./.vuepress/.temp/pages/5.x/payment/jssdk.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("/home/runner/work/easywechat/easywechat/docs/node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!/home/runner/work/easywechat/easywechat/docs/node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!/home/runner/work/easywechat/easywechat/docs/.vuepress/.temp/pages/5.x/payment/jssdk.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const jssdk_html = (script);

/***/ })

};
;
//# sourceMappingURL=1164.app.js.map