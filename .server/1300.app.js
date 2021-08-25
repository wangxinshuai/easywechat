"use strict";
exports.id = 1300;
exports.ids = [1300];
exports.modules = {

/***/ 82211:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-5958fc7e",
  "path": "/5.x/payment/notify.html",
  "title": "通知",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "支付结果通知",
      "slug": "支付结果通知",
      "children": []
    },
    {
      "level": 2,
      "title": "退款结果通知",
      "slug": "退款结果通知",
      "children": []
    },
    {
      "level": 2,
      "title": "扫码支付通知",
      "slug": "扫码支付通知",
      "children": []
    }
  ],
  "filePathRelative": "5.x/payment/notify.md",
  "git": {
    "updatedTime": 1629906046000,
    "contributors": []
  }
}


/***/ }),

/***/ 60715:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ notify_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(84103);
// EXTERNAL MODULE: external "@vue/server-renderer"
var server_renderer_ = __webpack_require__(32745);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.vuepress/.temp/pages/5.x/payment/notify.html.vue?vue&type=template&id=73af596c



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_OutboundLink = (0,external_vue_.resolveComponent)("OutboundLink")

  _push(`<!--[--><h1 id="通知" tabindex="-1"><a class="header-anchor" href="#通知" aria-hidden="true">#</a> 通知</h1><h2 id="支付结果通知" tabindex="-1"><a class="header-anchor" href="#支付结果通知" aria-hidden="true">#</a> 支付结果通知</h2><p>在用户成功支付后，微信服务器会向该 <strong>订单中设置的回调URL</strong> 发起一个 POST 请求，请求的内容为一个 XML。里面包含了所有的详细信息，具体请参考：<a href="https://pay.weixin.qq.com/wiki/doc/api/jsapi.php?chapter=9_7" target="_blank" rel="noopener noreferrer">支付结果通知`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></p><p>而对于用户的退款操作，在退款成功之后也会有一个异步回调通知。</p><p>本 SDK 内预置了相关方法，以方便开发者处理这些通知，具体用法如下：</p><p>只需要在控制器中使用 <code>handlePaidNotify()</code> 方法，在其中对自己的业务进行处理并向微信服务器发送一个响应。</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$response</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token function">handlePaidNotify</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token variable">\$message</span><span class="token punctuation">,</span> <span class="token variable">\$fail</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 你的逻辑</span>
    <span class="token keyword">return</span> <span class="token constant boolean">true</span><span class="token punctuation">;</span>
    <span class="token comment">// 或者错误消息</span>
    <span class="token variable">\$fail</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Order not exists.&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">\$response</span><span class="token operator">-&gt;</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Laravel 里请使用：return \$response;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>这里需要注意的有几个点：</p><ol start="0"><li>退款结果通知和扫码支付通知的使用方法均类似。</li><li><code>handlePaidNotify</code> 只接收一个 <a href="http://php.net/manual/zh/class.closure.php" target="_blank" rel="noopener noreferrer"><code>Closure</code>`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> 匿名函数。</li><li>该匿名函数接收两个参数，这两个参数分别为：</li></ol><blockquote><ul><li><code>\$message</code> 为微信推送过来的通知信息，为一个数组；</li><li><code>\$fail</code> 为一个函数，触发该函数可向微信服务器返回对应的错误信息，<strong>微信会稍后重试再通知</strong>。</li></ul></blockquote><ol start="3"><li><p>该函数返回值就是告诉微信 <strong>“我是否处理完成”</strong>。如果你触发 <code>\$fail</code> 函数，那么微信会在稍后再次继续通知你，直到你明确的告诉它：“我已经处理完成了”，<strong>只有</strong>在函数里 <code>return true;</code> 才代表处理完成。</p></li><li><p><code>handlePaidNotify</code> 返回值 <code>\$response</code> 是一个 Response 对象，如果你要直接输出，使用 <code>\$response-&gt;send()</code>, 在一些框架里（如 Laravel）不是输出而是返回：<code>return \$response</code>。</p></li></ol><p>通常我们的处理逻辑大概是下面这样（<strong>以下只是伪代码</strong>）：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$response</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token function">handlePaidNotify</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token variable">\$message</span><span class="token punctuation">,</span> <span class="token variable">\$fail</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// 使用通知里的 &quot;微信支付订单号&quot; 或者 &quot;商户订单号&quot; 去自己的数据库找到订单</span>
    <span class="token variable">\$order</span> <span class="token operator">=</span> 查询订单<span class="token punctuation">(</span><span class="token variable">\$message</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;out_trade_no&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token variable">\$order</span> <span class="token operator">||</span> <span class="token variable">\$order</span><span class="token operator">-&gt;</span><span class="token property">paid_at</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 如果订单不存在 或者 订单已经支付过了</span>
        <span class="token keyword">return</span> <span class="token constant boolean">true</span><span class="token punctuation">;</span> <span class="token comment">// 告诉微信，我已经处理完了，订单没找到，别再通知我了</span>
    <span class="token punctuation">}</span>

    <span class="token comment">///////////// &lt;- 建议在这里调用微信的【订单查询】接口查一下该笔订单的情况，确认是已经支付 /////////////</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">\$message</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;return_code&#39;</span><span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string single-quoted-string">&#39;SUCCESS&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// return_code 表示通信状态，不代表支付状态</span>
        <span class="token comment">// 用户是否支付成功</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">array_get</span><span class="token punctuation">(</span><span class="token variable">\$message</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;result_code&#39;</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string single-quoted-string">&#39;SUCCESS&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token variable">\$order</span><span class="token operator">-&gt;</span><span class="token property">paid_at</span> <span class="token operator">=</span> <span class="token function">time</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 更新支付时间为当前时间</span>
            <span class="token variable">\$order</span><span class="token operator">-&gt;</span><span class="token property">status</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;paid&#39;</span><span class="token punctuation">;</span>

        <span class="token comment">// 用户支付失败</span>
        <span class="token punctuation">}</span> <span class="token keyword">elseif</span> <span class="token punctuation">(</span><span class="token function">array_get</span><span class="token punctuation">(</span><span class="token variable">\$message</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;result_code&#39;</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string single-quoted-string">&#39;FAIL&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token variable">\$order</span><span class="token operator">-&gt;</span><span class="token property">status</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;paid_fail&#39;</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token variable">\$fail</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;通信失败，请稍后再通知我&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token variable">\$order</span><span class="token operator">-&gt;</span><span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 保存订单</span>

    <span class="token keyword">return</span> <span class="token constant boolean">true</span><span class="token punctuation">;</span> <span class="token comment">// 返回处理完成</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">\$response</span><span class="token operator">-&gt;</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// return \$response;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><blockquote><p>{warning} 注意：请把 “支付成功与否” 与 “是否处理完成” 分开，它俩没有必然关系。 比如：微信通知你用户支付完成，但是支付失败了(result_code 为 &#39;FAIL&#39;)，你应该<strong>更新你的订单为支付失败</strong>，但是要<strong>告诉微信处理完成</strong>。</p></blockquote><h2 id="退款结果通知" tabindex="-1"><a class="header-anchor" href="#退款结果通知" aria-hidden="true">#</a> 退款结果通知</h2><p>使用示例：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$response</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token function">handleRefundedNotify</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token variable">\$message</span><span class="token punctuation">,</span> <span class="token variable">\$reqInfo</span><span class="token punctuation">,</span> <span class="token variable">\$fail</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 其中 \$message[&#39;req_info&#39;] 获取到的是加密信息</span>
    <span class="token comment">// \$reqInfo 为 message[&#39;req_info&#39;] 解密后的信息</span>
    <span class="token comment">// 你的业务逻辑...</span>
    <span class="token keyword">return</span> <span class="token constant boolean">true</span><span class="token punctuation">;</span> <span class="token comment">// 返回 true 告诉微信“我已处理完成”</span>
    <span class="token comment">// 或返回错误原因 \$fail(&#39;参数格式校验错误&#39;);</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">\$response</span><span class="token operator">-&gt;</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="扫码支付通知" tabindex="-1"><a class="header-anchor" href="#扫码支付通知" aria-hidden="true">#</a> 扫码支付通知</h2><p>扫码支付【模式一】：https://pay.weixin.qq.com/wiki/doc/api/native.php?chapter=6_4</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token comment">// 扫码支付通知接收第三个参数 \`\$alert\`，如果触发该函数，会返回“业务错误”到微信服务器，触发 \`\$fail\` 则返回“通信错误”</span>
<span class="token variable">\$response</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token function">handleScannedNotify</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token variable">\$message</span><span class="token punctuation">,</span> <span class="token variable">\$fail</span><span class="token punctuation">,</span> <span class="token variable">\$alert</span><span class="token punctuation">)</span> <span class="token keyword">use</span> <span class="token punctuation">(</span><span class="token variable">\$app</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 如：\$alert(&#39;商品已售空&#39;);</span>
    <span class="token comment">// 如业务流程正常，则要调用“统一下单”接口，并返回 prepay_id 字符串，代码如下</span>
    <span class="token variable">\$result</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">order</span><span class="token operator">-&gt;</span><span class="token function">unify</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
        <span class="token string single-quoted-string">&#39;trade_type&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;NATIVE&#39;</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;product_id&#39;</span> <span class="token operator">=&gt;</span> <span class="token variable">\$message</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;product_id&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token comment">// ...</span>
    <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token variable">\$result</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;prepay_id&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">\$response</span><span class="token operator">-&gt;</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><!--]-->`)
}
;// CONCATENATED MODULE: ./.vuepress/.temp/pages/5.x/payment/notify.html.vue?vue&type=template&id=73af596c

;// CONCATENATED MODULE: ./.vuepress/.temp/pages/5.x/payment/notify.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("/home/runner/work/easywechat/easywechat/docs/node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!/home/runner/work/easywechat/easywechat/docs/node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!/home/runner/work/easywechat/easywechat/docs/.vuepress/.temp/pages/5.x/payment/notify.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const notify_html = (script);

/***/ })

};
;
//# sourceMappingURL=1300.app.js.map