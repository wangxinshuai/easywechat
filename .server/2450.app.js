"use strict";
exports.id = 2450;
exports.ids = [2450];
exports.modules = {

/***/ 53108:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-3f2d9164",
  "path": "/4.x/payment/scan-pay.html",
  "title": "",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "扫码支付",
      "slug": "扫码支付",
      "children": [
        {
          "level": 3,
          "title": "模式一：先生成产品二维码，扫码下单后支付",
          "slug": "模式一-先生成产品二维码-扫码下单后支付",
          "children": []
        },
        {
          "level": 3,
          "title": "模式二：先下单，生成订单后创建二维码",
          "slug": "模式二-先下单-生成订单后创建二维码",
          "children": []
        }
      ]
    }
  ],
  "filePathRelative": "4.x/payment/scan-pay.md",
  "git": {
    "updatedTime": 1629906046000,
    "contributors": []
  }
}


/***/ }),

/***/ 8965:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ scan_pay_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(84103);
// EXTERNAL MODULE: external "@vue/server-renderer"
var server_renderer_ = __webpack_require__(32745);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.vuepress/.temp/pages/4.x/payment/scan-pay.html.vue?vue&type=template&id=24bb63f8



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_OutboundLink = (0,external_vue_.resolveComponent)("OutboundLink")

  _push(`<!--[--><h2 id="扫码支付" tabindex="-1"><a class="header-anchor" href="#扫码支付" aria-hidden="true">#</a> 扫码支付</h2><h3 id="模式一-先生成产品二维码-扫码下单后支付" tabindex="-1"><a class="header-anchor" href="#模式一-先生成产品二维码-扫码下单后支付" aria-hidden="true">#</a> 模式一：先生成产品二维码，扫码下单后支付</h3><blockquote><p>{warning} 请务必先熟悉流程：https://pay.weixin.qq.com/wiki/doc/api/native.php?chapter=6_4</p></blockquote><h4 id="生成产品二维码内容" tabindex="-1"><a class="header-anchor" href="#生成产品二维码内容" aria-hidden="true">#</a> 生成产品二维码内容</h4><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$content</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token function">scheme</span><span class="token punctuation">(</span><span class="token variable">\$productId</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \$productId 为你的产品/商品ID，用于回调时带回，自己识别即可</span>

<span class="token comment">//结果示例：weixin://wxpay/bizpayurl?sign=XXXXX&amp;appid=XXXXX&amp;mch_id=XXXXX&amp;product_id=XXXXXX&amp;time_stamp=XXXXXX&amp;nonce_str=XXXXX</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>将 <code>\$content</code> 生成二维码，SDK 并不内置二维码生成库，使用你熟悉的工具创建二维码即可，比如 PHP 部分有以下工具可以选择：</p><blockquote><ul><li>https://github.com/endroid/qr-code</li><li>https://github.com/SimpleSoftwareIO/simple-qrcode</li><li>https://github.com/aferrandini/PHPQRCode</li></ul></blockquote><h4 id="处理回调" tabindex="-1"><a class="header-anchor" href="#处理回调" aria-hidden="true">#</a> 处理回调</h4><p>当用户扫码时，你的回调接口会收到一个通知，调用<a href="https://www.easywechat.com/docs/master/zh-CN/payment/order" target="_blank" rel="noopener noreferrer">统一下单接口`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>创建订单后返回 <code>prepay_id</code>，你可以使用下面的代码处理扫码通知：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token comment">// 扫码支付通知接收第三个参数 \`\$alert\`，如果触发该函数，会返回“业务错误”到微信服务器，触发 \`\$fail\` 则返回“通信错误”</span>
<span class="token variable">\$response</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token function">handleScannedNotify</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token variable">\$message</span><span class="token punctuation">,</span> <span class="token variable">\$fail</span><span class="token punctuation">,</span> <span class="token variable">\$alert</span><span class="token punctuation">)</span> <span class="token keyword">use</span> <span class="token punctuation">(</span><span class="token variable">\$app</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 如：\$alert(&#39;商品已售空&#39;);</span>
    <span class="token comment">// 如业务流程正常，则要调用“统一下单”接口，并返回 prepay_id 字符串，代码如下</span>
    <span class="token variable">\$result</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">order</span><span class="token operator">-&gt;</span><span class="token function">unify</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
        <span class="token string single-quoted-string">&#39;trade_type&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;NATIVE&#39;</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;product_id&#39;</span> <span class="token operator">=&gt;</span> <span class="token variable">\$message</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;product_id&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// \$message[&#39;product_id&#39;] 则为生成二维码时的产品 ID</span>
        <span class="token comment">// ...</span>
    <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token variable">\$result</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;prepay_id&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">\$response</span><span class="token operator">-&gt;</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>用户在手机上付完钱以后，你会再收到<strong>付款结果通知</strong>，这时候请参考：<a href="https://www.easywechat.com/docs/master/zh-CN/payment/notify" target="_blank" rel="noopener noreferrer">处理微信支付通知`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> 更新您的订单状态。</p><h3 id="模式二-先下单-生成订单后创建二维码" tabindex="-1"><a class="header-anchor" href="#模式二-先下单-生成订单后创建二维码" aria-hidden="true">#</a> 模式二：先下单，生成订单后创建二维码</h3><blockquote><p>{warning} 请务必先熟悉流程：https://pay.weixin.qq.com/wiki/doc/api/native.php?chapter=6_5</p></blockquote><h4 id="根据用户选购的商品生成订单" tabindex="-1"><a class="header-anchor" href="#根据用户选购的商品生成订单" aria-hidden="true">#</a> 根据用户选购的商品生成订单</h4><p>调用<a href="https://www.easywechat.com/docs/master/zh-CN/payment/order" target="_blank" rel="noopener noreferrer">统一下单接口`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>创建订单：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$result</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">order</span><span class="token operator">-&gt;</span><span class="token function">unify</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
      <span class="token string single-quoted-string">&#39;trade_type&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;NATIVE&#39;</span><span class="token punctuation">,</span>
      <span class="token string single-quoted-string">&#39;product_id&#39;</span> <span class="token operator">=&gt;</span> <span class="token variable">\$message</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;product_id&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// \$message[&#39;product_id&#39;] 则为生成二维码时的产品 ID</span>
      <span class="token comment">// ...</span>
  <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h4 id="生成二维码" tabindex="-1"><a class="header-anchor" href="#生成二维码" aria-hidden="true">#</a> 生成二维码</h4><blockquote><p>{info} 版本 4.1.7+ 支持</p></blockquote><p>从上一步得到的 <code>\$result[&#39;code_url&#39;]</code> 得到二维码内容：</p><p>将 <code>\$result[&#39;code_url&#39;]</code> 生成二维码图片向用户展示即可扫码，生成工具上面自己找一下即可。 SDK 不内置</p><h4 id="支付通知" tabindex="-1"><a class="header-anchor" href="#支付通知" aria-hidden="true">#</a> 支付通知</h4><p>这种方式的通知就只有<strong>付款结果通知</strong>了，这时候请参考：<a href="https://www.easywechat.com/docs/master/zh-CN/payment/notify" target="_blank" rel="noopener noreferrer">处理微信支付通知`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> 更新您的订单状态。</p><!--]-->`)
}
;// CONCATENATED MODULE: ./.vuepress/.temp/pages/4.x/payment/scan-pay.html.vue?vue&type=template&id=24bb63f8

;// CONCATENATED MODULE: ./.vuepress/.temp/pages/4.x/payment/scan-pay.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("/home/runner/work/easywechat/easywechat/docs/node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!/home/runner/work/easywechat/easywechat/docs/node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!/home/runner/work/easywechat/easywechat/docs/.vuepress/.temp/pages/4.x/payment/scan-pay.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const scan_pay_html = (script);

/***/ })

};
;
//# sourceMappingURL=2450.app.js.map