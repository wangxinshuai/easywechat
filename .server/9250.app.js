"use strict";
exports.id = 9250;
exports.ids = [9250];
exports.modules = {

/***/ 7173:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-21de5c0a",
  "path": "/6.x/official-account/config.html",
  "title": "配置",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "filePathRelative": "6.x/official-account/config.md",
  "git": {
    "updatedTime": 1629906046000,
    "contributors": []
  }
}


/***/ }),

/***/ 17931:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ config_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.vuepress/.temp/pages/6.x/official-account/config.html.vue?vue&type=template&id=309aae32

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h1><p>下面是一个完整的配置样例：</p><blockquote><p>不建议你在配置的时候弄这么多，用到啥就配置啥才是最好的，因为大部分用默认值即可。</p></blockquote><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token punctuation">[</span>
    <span class="token doc-comment comment">/**
     * 账号基本信息，请从微信公众平台/开放平台获取
     */</span>
    <span class="token string single-quoted-string">&#39;app_id&#39;</span>  <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;your-app-id&#39;</span><span class="token punctuation">,</span>         <span class="token comment">// AppID</span>
    <span class="token string single-quoted-string">&#39;secret&#39;</span>  <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;your-app-secret&#39;</span><span class="token punctuation">,</span>     <span class="token comment">// AppSecret</span>
    <span class="token string single-quoted-string">&#39;token&#39;</span>   <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;your-token&#39;</span><span class="token punctuation">,</span>          <span class="token comment">// Token</span>
    <span class="token string single-quoted-string">&#39;aes_key&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;&#39;</span><span class="token punctuation">,</span>                    <span class="token comment">// EncodingAESKey，兼容与安全模式下请一定要填写！！！</span>

    <span class="token doc-comment comment">/**
     * OAuth 配置
     *
     * scopes：公众平台（snsapi_userinfo / snsapi_base），开放平台：snsapi_login
     * callback：OAuth授权完成后的回调页地址
     */</span>
    <span class="token string single-quoted-string">&#39;oauth&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
        <span class="token string single-quoted-string">&#39;scopes&#39;</span>   <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;snsapi_userinfo&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;callback&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;/examples/oauth_callback.php&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>

    <span class="token doc-comment comment">/**
     * 日志配置 (默认不启用日志)
     *
     * level: 日志级别, 可选为：
     *         debug/info/notice/warning/error/critical/alert/emergency
     * path：日志文件位置(绝对路径!!!)，要求可写权限
     */</span>
    <span class="token comment">// &#39;logging&#39; =&gt; [</span>
    <span class="token comment">//     &#39;default&#39; =&gt; &#39;dev&#39;, // 默认使用的 channel，生产环境可以改为下面的 prod</span>
    <span class="token comment">//     &#39;channels&#39; =&gt; [</span>
    <span class="token comment">//         // 测试环境</span>
    <span class="token comment">//         &#39;dev&#39; =&gt; [</span>
    <span class="token comment">//             &#39;driver&#39; =&gt; &#39;single&#39;,</span>
    <span class="token comment">//             &#39;path&#39; =&gt; &#39;/tmp/easywechat.log&#39;,</span>
    <span class="token comment">//             &#39;level&#39; =&gt; &#39;debug&#39;,</span>
    <span class="token comment">//         ],</span>
    <span class="token comment">//         // 生产环境</span>
    <span class="token comment">//         &#39;prod&#39; =&gt; [</span>
    <span class="token comment">//             &#39;driver&#39; =&gt; &#39;daily&#39;,</span>
    <span class="token comment">//             &#39;path&#39; =&gt; &#39;/tmp/easywechat.log&#39;,</span>
    <span class="token comment">//             &#39;level&#39; =&gt; &#39;info&#39;,</span>
    <span class="token comment">//         ],</span>
    <span class="token comment">//     ],</span>
    <span class="token comment">// ],</span>

    <span class="token doc-comment comment">/**
     * 接口请求相关配置，超时时间等，具体可用参数请参考：
     * https://github.com/symfony/symfony/blob/5.3/src/Symfony/Contracts/HttpClient/HttpClientInterface.php
     */</span>
    <span class="token string single-quoted-string">&#39;http&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
        <span class="token string single-quoted-string">&#39;timeout&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">5.0</span><span class="token punctuation">,</span>
        <span class="token comment">// &#39;base_uri&#39; =&gt; &#39;https://api.weixin.qq.com/&#39;, // 如果你在国外想要覆盖默认的 url 的时候才使用，根据不同的模块配置不同的 uri</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br></div></div><blockquote><p>❤️ 安全模式下请一定要填写 <code>aes_key</code></p></blockquote><!--]-->`)
}
// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(84103);
;// CONCATENATED MODULE: ./.vuepress/.temp/pages/6.x/official-account/config.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("/home/runner/work/easywechat/easywechat/docs/node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!/home/runner/work/easywechat/easywechat/docs/node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!/home/runner/work/easywechat/easywechat/docs/.vuepress/.temp/pages/6.x/official-account/config.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const config_html = (script);

/***/ })

};
;
//# sourceMappingURL=9250.app.js.map