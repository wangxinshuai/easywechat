"use strict";
exports.id = 2012;
exports.ids = [2012];
exports.modules = {

/***/ 72016:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-ebefd11c",
  "path": "/5.x/payment/",
  "title": "支付",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "配置",
      "slug": "配置",
      "children": [
        {
          "level": 3,
          "title": "服务商",
          "slug": "服务商",
          "children": []
        },
        {
          "level": 3,
          "title": "刷卡支付",
          "slug": "刷卡支付",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "授权码查询OPENID接口",
      "slug": "授权码查询openid接口",
      "children": []
    },
    {
      "level": 2,
      "title": "沙箱模式",
      "slug": "沙箱模式",
      "children": []
    }
  ],
  "filePathRelative": "5.x/payment/index.md",
  "git": {
    "updatedTime": 1629906046000,
    "contributors": []
  }
}


/***/ }),

/***/ 94297:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ index_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(84103);
// EXTERNAL MODULE: external "@vue/server-renderer"
var server_renderer_ = __webpack_require__(32745);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.vuepress/.temp/pages/5.x/payment/index.html.vue?vue&type=template&id=02695be0



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_OutboundLink = (0,external_vue_.resolveComponent)("OutboundLink")

  _push(`<!--[--><h1 id="支付" tabindex="-1"><a class="header-anchor" href="#支付" aria-hidden="true">#</a> 支付</h1><p>你在阅读本文之前确认你已经仔细阅读了：<a href="https://pay.weixin.qq.com/wiki/doc/api/index.html" target="_blank" rel="noopener noreferrer">微信支付 | 商户平台开发文档`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>。</p><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2><p>配置在前面的例子中已经提到过了，支付的相关配置如下：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">EasyWeChat<span class="token punctuation">\\</span>Factory</span><span class="token punctuation">;</span>

<span class="token variable">\$config</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token comment">// 必要配置</span>
    <span class="token string single-quoted-string">&#39;app_id&#39;</span>             <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;xxxx&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;mch_id&#39;</span>             <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;your-mch-id&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;key&#39;</span>                <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;key-for-signature&#39;</span><span class="token punctuation">,</span>   <span class="token comment">// API 密钥</span>

    <span class="token comment">// 如需使用敏感接口（如退款、发送红包等）需要配置 API 证书路径(登录商户平台下载 API 证书)</span>
    <span class="token string single-quoted-string">&#39;cert_path&#39;</span>          <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;path/to/your/cert.pem&#39;</span><span class="token punctuation">,</span> <span class="token comment">// XXX: 绝对路径！！！！</span>
    <span class="token string single-quoted-string">&#39;key_path&#39;</span>           <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;path/to/your/key&#39;</span><span class="token punctuation">,</span>      <span class="token comment">// XXX: 绝对路径！！！！</span>

    <span class="token string single-quoted-string">&#39;notify_url&#39;</span>         <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;默认的订单回调地址&#39;</span><span class="token punctuation">,</span>     <span class="token comment">// 你也可以在下单时单独设置来想覆盖它</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token variable">\$app</span> <span class="token operator">=</span> <span class="token class-name static-context">Factory</span><span class="token operator">::</span><span class="token function">payment</span><span class="token punctuation">(</span><span class="token variable">\$config</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h3 id="服务商" tabindex="-1"><a class="header-anchor" href="#服务商" aria-hidden="true">#</a> 服务商</h3><h4 id="设置子商户信息" tabindex="-1"><a class="header-anchor" href="#设置子商户信息" aria-hidden="true">#</a> 设置子商户信息</h4><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token function">setSubMerchant</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;sub-merchant-id&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;sub-app-id&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 子商户 AppID 为可选项</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="刷卡支付" tabindex="-1"><a class="header-anchor" href="#刷卡支付" aria-hidden="true">#</a> 刷卡支付</h3><p><a href="https://pay.weixin.qq.com/wiki/doc/api/micropay.php?chapter=9_10" target="_blank" rel="noopener noreferrer">官方文档`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$result</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token function">pay</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
    <span class="token string single-quoted-string">&#39;body&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;image形象店-深圳腾大- QQ公仔&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;out_trade_no&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;1217752501201407033233368018&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;total_fee&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">888</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;auth_code&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;120061098828009406&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="授权码查询openid接口" tabindex="-1"><a class="header-anchor" href="#授权码查询openid接口" aria-hidden="true">#</a> 授权码查询OPENID接口</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token function">authCodeToOpenid</span><span class="token punctuation">(</span><span class="token variable">\$authCode</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="沙箱模式" tabindex="-1"><a class="header-anchor" href="#沙箱模式" aria-hidden="true">#</a> 沙箱模式</h2><p>微信支付沙箱环境，是提供给微信支付商户的开发者，用于模拟支付及回调通知。以验证商户是否理解回调通知、账单格式，以及是否对异常做了正确的处理。EasyWeChat SDK 对于这一功能进行了封装，开发者只需一步即可在沙箱模式和常规模式间切换，方便开发与最终的部署。</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token comment">// 在实例化的时候传入配置即可</span>
<span class="token variable">\$app</span> <span class="token operator">=</span> <span class="token class-name static-context">Factory</span><span class="token operator">::</span><span class="token function">payment</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
    <span class="token comment">// ...</span>
    <span class="token string single-quoted-string">&#39;sandbox&#39;</span> <span class="token operator">=&gt;</span> <span class="token constant boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 设置为 false 或注释则关闭沙箱模式</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 判断当前是否为沙箱模式：</span>
<span class="token keyword type-declaration">bool</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token function">inSandbox</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><blockquote><p>{warning} 特别注意，沙箱模式对于测试用例有严格要求，若使用的用例与规定不符，将导致测试失败。具体用例要求可关注公众号“微信支付商户接入验收助手”（WXPayAssist）查看。</p></blockquote><!--]-->`)
}
;// CONCATENATED MODULE: ./.vuepress/.temp/pages/5.x/payment/index.html.vue?vue&type=template&id=02695be0

;// CONCATENATED MODULE: ./.vuepress/.temp/pages/5.x/payment/index.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("/home/runner/work/easywechat/easywechat/docs/node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!/home/runner/work/easywechat/easywechat/docs/node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!/home/runner/work/easywechat/easywechat/docs/.vuepress/.temp/pages/5.x/payment/index.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const index_html = (script);

/***/ })

};
;
//# sourceMappingURL=2012.app.js.map