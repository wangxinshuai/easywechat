"use strict";
exports.id = 9036;
exports.ids = [9036];
exports.modules = {

/***/ 45478:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-f432eeca",
  "path": "/4.x/payment/transfer.html",
  "title": "企业付款",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "企业付款到用户零钱",
      "slug": "企业付款到用户零钱",
      "children": []
    },
    {
      "level": 2,
      "title": "查询付款到零钱的订单",
      "slug": "查询付款到零钱的订单",
      "children": []
    },
    {
      "level": 2,
      "title": "企业付款到银行卡",
      "slug": "企业付款到银行卡",
      "children": []
    },
    {
      "level": 2,
      "title": "查询付款到银行卡的订单",
      "slug": "查询付款到银行卡的订单",
      "children": []
    }
  ],
  "filePathRelative": "4.x/payment/transfer.md",
  "git": {
    "updatedTime": 1629906046000,
    "contributors": []
  }
}


/***/ }),

/***/ 84515:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ transfer_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(84103);
// EXTERNAL MODULE: external "@vue/server-renderer"
var server_renderer_ = __webpack_require__(32745);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.vuepress/.temp/pages/4.x/payment/transfer.html.vue?vue&type=template&id=0bd85c1c



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_OutboundLink = (0,external_vue_.resolveComponent)("OutboundLink")

  _push(`<!--[--><h1 id="企业付款" tabindex="-1"><a class="header-anchor" href="#企业付款" aria-hidden="true">#</a> 企业付款</h1><blockquote><p>EasyWeChat 4.0.7+</p></blockquote><p>该模块需要用到双向证书，请参考：https://pay.weixin.qq.com/wiki/doc/api/tools/mch_pay.php?chapter=4_3</p><h2 id="企业付款到用户零钱" tabindex="-1"><a class="header-anchor" href="#企业付款到用户零钱" aria-hidden="true">#</a> 企业付款到用户零钱</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">transfer</span><span class="token operator">-&gt;</span><span class="token function">toBalance</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
    <span class="token string single-quoted-string">&#39;partner_trade_no&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;1233455&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 商户订单号，需保持唯一性(只能是字母或者数字，不能包含有符号)</span>
    <span class="token string single-quoted-string">&#39;openid&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;oxTWIuGaIt6gTKsQRLau2M0yL16E&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;check_name&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;FORCE_CHECK&#39;</span><span class="token punctuation">,</span> <span class="token comment">// NO_CHECK：不校验真实姓名, FORCE_CHECK：强校验真实姓名</span>
    <span class="token string single-quoted-string">&#39;re_user_name&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;王小帅&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 如果 check_name 设置为FORCE_CHECK，则必填用户真实姓名</span>
    <span class="token string single-quoted-string">&#39;amount&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">10000</span><span class="token punctuation">,</span> <span class="token comment">// 企业付款金额，单位为分</span>
    <span class="token string single-quoted-string">&#39;desc&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;理赔&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 企业付款操作说明信息。必填</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="查询付款到零钱的订单" tabindex="-1"><a class="header-anchor" href="#查询付款到零钱的订单" aria-hidden="true">#</a> 查询付款到零钱的订单</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$partnerTradeNo</span> <span class="token operator">=</span> <span class="token number">1233455</span><span class="token punctuation">;</span>
<span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">transfer</span><span class="token operator">-&gt;</span><span class="token function">queryBalanceOrder</span><span class="token punctuation">(</span><span class="token variable">\$partnerTradeNo</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="企业付款到银行卡" tabindex="-1"><a class="header-anchor" href="#企业付款到银行卡" aria-hidden="true">#</a> 企业付款到银行卡</h2><p>企业付款到银行卡需要对银行卡号与姓名进行 RSA 加密，所以这里需要先下载 RSA 公钥到本地（服务器），我们提供了一个命令行工具：<a href="https://github.com/EasyWeChat/console" target="_blank" rel="noopener noreferrer">EasyWeChat/console`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>，请使用 composer 安装完成。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>\$ <span class="token function">composer</span> require easywechat/console -vvv
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>然后，在项目根目录执行以下命令下载公钥：</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>\$ ./vendor/bin/easywechat payment:rsa_public_key <span class="token punctuation">\\</span>
  <span class="token operator">&gt;</span>  --mch_id<span class="token operator">=</span><span class="token number">14339221228</span> <span class="token punctuation">\\</span>
  <span class="token operator">&gt;</span>  --api_key<span class="token operator">=</span>36YTbDmLgyQ52noqdxgwGiYy <span class="token punctuation">\\</span>
  <span class="token operator">&gt;</span>  --cert_path<span class="token operator">=</span>/Users/overtrue/www/demo/apiclient_cert.pem <span class="token punctuation">\\</span>
  <span class="token operator">&gt;</span>  --key_path<span class="token operator">=</span>/Users/overtrue/www/demo/apiclient_key.pem
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>将会在当前目录生成一个 <code>./public-14339221228.pem</code> 文件，你可以将它移动到敏感目录，然后在支付配置文件中加如以下选项：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">EasyWeChat<span class="token punctuation">\\</span>Factory</span><span class="token punctuation">;</span>

<span class="token variable">\$config</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token comment">// 必要配置</span>
    <span class="token string single-quoted-string">&#39;app_id&#39;</span>             <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;xxxx&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;mch_id&#39;</span>             <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;your-mch-id&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;key&#39;</span>                <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;key-for-signature&#39;</span><span class="token punctuation">,</span>   <span class="token comment">// API 密钥</span>

    <span class="token comment">// 如需使用敏感接口（如退款、发送红包等）需要配置 API 证书路径(登录商户平台下载 API 证书)</span>
    <span class="token string single-quoted-string">&#39;cert_path&#39;</span>          <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;/path/to/your/cert.pem&#39;</span><span class="token punctuation">,</span> <span class="token comment">// XXX: 绝对路径！！！！</span>
    <span class="token string single-quoted-string">&#39;key_path&#39;</span>           <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;/path/to/your/key&#39;</span><span class="token punctuation">,</span>      <span class="token comment">// XXX: 绝对路径！！！！</span>

    <span class="token comment">// 将上面得到的公钥存放路径填写在这里</span>
    <span class="token string single-quoted-string">&#39;rsa_public_key_path&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;/path/to/your/rsa/publick/key/public-14339221228.pem&#39;</span><span class="token punctuation">,</span> <span class="token comment">// &lt;&lt;&lt;------------------------</span>

    <span class="token string single-quoted-string">&#39;notify_url&#39;</span>         <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;默认的订单回调地址&#39;</span><span class="token punctuation">,</span>     <span class="token comment">// 你也可以在下单时单独设置来想覆盖它</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token variable">\$app</span> <span class="token operator">=</span> <span class="token class-name static-context">Factory</span><span class="token operator">::</span><span class="token function">payment</span><span class="token punctuation">(</span><span class="token variable">\$config</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$result</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">transfer</span><span class="token operator">-&gt;</span><span class="token function">toBankCard</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
    <span class="token string single-quoted-string">&#39;partner_trade_no&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;1229222022&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;enc_bank_no&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;6214830901234564&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 银行卡号</span>
    <span class="token string single-quoted-string">&#39;enc_true_name&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;安正超&#39;</span><span class="token punctuation">,</span>   <span class="token comment">// 银行卡对应的用户真实姓名</span>
    <span class="token string single-quoted-string">&#39;bank_code&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;1001&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 银行编号</span>
    <span class="token string single-quoted-string">&#39;amount&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">100</span><span class="token punctuation">,</span>  <span class="token comment">// 单位：分</span>
    <span class="token string single-quoted-string">&#39;desc&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;测试&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="查询付款到银行卡的订单" tabindex="-1"><a class="header-anchor" href="#查询付款到银行卡的订单" aria-hidden="true">#</a> 查询付款到银行卡的订单</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$partnerTradeNo</span> <span class="token operator">=</span> <span class="token number">1233455</span><span class="token punctuation">;</span>
<span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">transfer</span><span class="token operator">-&gt;</span><span class="token function">queryBankCardOrder</span><span class="token punctuation">(</span><span class="token variable">\$partnerTradeNo</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><!--]-->`)
}
;// CONCATENATED MODULE: ./.vuepress/.temp/pages/4.x/payment/transfer.html.vue?vue&type=template&id=0bd85c1c

;// CONCATENATED MODULE: ./.vuepress/.temp/pages/4.x/payment/transfer.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("/home/runner/work/easywechat/easywechat/docs/node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!/home/runner/work/easywechat/easywechat/docs/node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!/home/runner/work/easywechat/easywechat/docs/.vuepress/.temp/pages/4.x/payment/transfer.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const transfer_html = (script);

/***/ })

};
;
//# sourceMappingURL=9036.app.js.map