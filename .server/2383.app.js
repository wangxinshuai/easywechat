"use strict";
exports.id = 2383;
exports.ids = [2383];
exports.modules = {

/***/ 65042:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-4f16f598",
  "path": "/4.x/micro-merchant/",
  "title": "小微商户",
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
      "title": "使用时值得注意的地方：",
      "slug": "使用时值得注意的地方",
      "children": []
    }
  ],
  "filePathRelative": "4.x/micro-merchant/index.md",
  "git": {
    "updatedTime": 1629906046000,
    "contributors": []
  }
}


/***/ }),

/***/ 86427:
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
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.vuepress/.temp/pages/4.x/micro-merchant/index.html.vue?vue&type=template&id=f44db354



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_OutboundLink = (0,external_vue_.resolveComponent)("OutboundLink")

  _push(`<!--[--><h1 id="小微商户" tabindex="-1"><a class="header-anchor" href="#小微商户" aria-hidden="true">#</a> 小微商户</h1><p>你在阅读本文之前确认你已经仔细阅读了：<a href="https://pay.weixin.qq.com/wiki/doc/api/xiaowei.php?chapter=19_2" target="_blank" rel="noopener noreferrer">微信小微商户专属接口文档`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>。</p><p>PS: ⚠️ 因系统升级，腾讯暂时关闭了小微商户接口，恢复时间未定。调用提交申请接口会提示「PARAM_ERROR」，详细说明可参见<a href="https://developers.weixin.qq.com/community/develop/doc/0000a0ffc9ce28bd4bc9999ba5b800" target="_blank" rel="noopener noreferrer">微信开放平台相关帖子`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></p><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2><p>小微商户整体接口调用方式相对于其他微信接口略有不同，配置时请勿填错，相关配置如下：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">EasyWeChat<span class="token punctuation">\\</span>Factory</span><span class="token punctuation">;</span>

<span class="token variable">\$config</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token comment">// 必要配置</span>
    <span class="token string single-quoted-string">&#39;mch_id&#39;</span>           <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;your-mch-id&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 服务商的商户号</span>
    <span class="token string single-quoted-string">&#39;key&#39;</span>              <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;key-for-signature&#39;</span><span class="token punctuation">,</span> <span class="token comment">// API 密钥</span>
    <span class="token string single-quoted-string">&#39;apiv3_key&#39;</span>        <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;APIv3-key-for-signature&#39;</span><span class="token punctuation">,</span> <span class="token comment">// APIv3 密钥</span>
    <span class="token comment">// API 证书路径(登录商户平台下载 API 证书)</span>
    <span class="token string single-quoted-string">&#39;cert_path&#39;</span>        <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;path/to/your/cert.pem&#39;</span><span class="token punctuation">,</span> <span class="token comment">// XXX: 绝对路径！！！！</span>
    <span class="token string single-quoted-string">&#39;key_path&#39;</span>         <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;path/to/your/key&#39;</span><span class="token punctuation">,</span> <span class="token comment">// XXX: 绝对路径！！！！</span>
    <span class="token comment">// 以下两项配置在获取证书接口时可为空，在调用入驻接口前请先调用获取证书接口获取以下两项配置,如果获取过证书可以直接在这里配置，也可参照本文档获取平台证书章节中示例</span>
    <span class="token comment">// &#39;serial_no&#39;     =&gt; &#39;获取证书接口获取到的平台证书序列号&#39;,</span>
    <span class="token comment">// &#39;certificate&#39;   =&gt; &#39;获取证书接口获取到的证书内容&#39;</span>
    
    <span class="token comment">// 以下为可选项</span>
    <span class="token comment">// 指定 API 调用返回结果的类型：array(default)/collection/object/raw/自定义类名</span>
    <span class="token string single-quoted-string">&#39;response_type&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;array&#39;</span>
    <span class="token string single-quoted-string">&#39;appid&#39;</span>            <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;wx931386123456789e&#39;</span> <span class="token comment">// 服务商的公众账号 ID</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token variable">\$app</span> <span class="token operator">=</span> <span class="token class-name static-context">Factory</span><span class="token operator">::</span><span class="token function">microMerchant</span><span class="token punctuation">(</span><span class="token variable">\$config</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><p><code>\$app</code> 在所有相关小微商户的文档都是指 <code>Factory::microMerchant</code> 得到的实例，就不在每个页面单独写了。</p><h2 id="使用时值得注意的地方" tabindex="-1"><a class="header-anchor" href="#使用时值得注意的地方" aria-hidden="true">#</a> 使用时值得注意的地方：</h2><p>1、小微商户所有接口中以下列出参数 <code>version</code>, <code>mch_id</code>, <code>nonce_str</code>, <code>sign</code>, <code>sign_type</code>, <code>cert_sn</code> 可不用传入。</p><p>2、所有敏感信息无需手动加密，sdk会在调用接口前自动完成加密</p><p>3、在调用入驻等需要敏感信息加密的接口前请先调用获取证书接口然后把配置填入配置项</p><p>4、入驻成功获取到子商户号后需帮助子商户调用配置修改等接口可以先调用以下方法，方便调用修改等接口时无需再次传入子商户号</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token comment">// \$subMchId 为子商户号</span>
<span class="token comment">// \$appid    服务商的公众账号 ID</span>
<span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token function">setSubMchId</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">\$subMchId</span><span class="token punctuation">,</span> <span class="token keyword type-hint">string</span> <span class="token variable">\$appId</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><!--]-->`)
}
;// CONCATENATED MODULE: ./.vuepress/.temp/pages/4.x/micro-merchant/index.html.vue?vue&type=template&id=f44db354

;// CONCATENATED MODULE: ./.vuepress/.temp/pages/4.x/micro-merchant/index.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("/home/runner/work/easywechat/easywechat/docs/node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!/home/runner/work/easywechat/easywechat/docs/node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!/home/runner/work/easywechat/easywechat/docs/.vuepress/.temp/pages/4.x/micro-merchant/index.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const index_html = (script);

/***/ })

};
;
//# sourceMappingURL=2383.app.js.map