"use strict";
exports.id = 6731;
exports.ids = [6731];
exports.modules = {

/***/ 33253:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-833a9ca4",
  "path": "/3.x/configuration.html",
  "title": "配置",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "日志文件",
      "slug": "日志文件",
      "children": []
    }
  ],
  "filePathRelative": "3.x/configuration.md",
  "git": {
    "updatedTime": 1629906046000,
    "contributors": []
  }
}


/***/ }),

/***/ 56289:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ configuration_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.vuepress/.temp/pages/3.x/configuration.html.vue?vue&type=template&id=f497ea38

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h1><p>在前面我们已经讲过，初始化 SDK 的时候方法就是创建一个 <code>EasyWeChat\\Foundation\\Application</code> 实例：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">EasyWeChat<span class="token punctuation">\\</span>Foundation<span class="token punctuation">\\</span>Application</span><span class="token punctuation">;</span>

<span class="token variable">\$options</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
   <span class="token comment">// ...</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token variable">\$app</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Application</span><span class="token punctuation">(</span><span class="token variable">\$options</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
* 如果想要在Application实例化完成之后, 修改某一个options的值,
* 比如服务商+子商户支付回调场景, 所有子商户订单支付信息都是通过同一个服务商的\$option 配置进来的,
* 当oauth在微信端验证完成之后, 可以通过动态设置merchant_id来区分具体是哪个子商户
*/</span>
<span class="token variable">\$app</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;config&#39;</span><span class="token punctuation">]</span><span class="token operator">-&gt;</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;oauth.callback&#39;</span><span class="token punctuation">,</span><span class="token string single-quoted-string">&#39;wechat/oauthcallback/&#39;</span><span class="token operator">.</span> <span class="token variable">\$sub_merchant_id</span><span class="token operator">-&gt;</span><span class="token property">id</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>那么配置的具体选项有哪些，下面是一个完整的列表：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">return</span> <span class="token punctuation">[</span>
    <span class="token doc-comment comment">/**
     * Debug 模式，bool 值：true/false
     *
     * 当值为 false 时，所有的日志都不会记录
     */</span>
    <span class="token string single-quoted-string">&#39;debug&#39;</span>  <span class="token operator">=&gt;</span> <span class="token constant boolean">true</span><span class="token punctuation">,</span>

    <span class="token doc-comment comment">/**
     * 账号基本信息，请从微信公众平台/开放平台获取
     */</span>
    <span class="token string single-quoted-string">&#39;app_id&#39;</span>  <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;your-app-id&#39;</span><span class="token punctuation">,</span>         <span class="token comment">// AppID</span>
    <span class="token string single-quoted-string">&#39;secret&#39;</span>  <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;your-app-secret&#39;</span><span class="token punctuation">,</span>     <span class="token comment">// AppSecret</span>
    <span class="token string single-quoted-string">&#39;token&#39;</span>   <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;your-token&#39;</span><span class="token punctuation">,</span>          <span class="token comment">// Token</span>
    <span class="token string single-quoted-string">&#39;aes_key&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;&#39;</span><span class="token punctuation">,</span>                    <span class="token comment">// EncodingAESKey，安全模式与兼容模式下请一定要填写！！！</span>

    <span class="token doc-comment comment">/**
     * 日志配置
     *
     * level: 日志级别, 可选为：
     *         debug/info/notice/warning/error/critical/alert/emergency
     * permission：日志文件权限(可选)，默认为null（若为null值,monolog会取0644）
     * file：日志文件位置(绝对路径!!!)，要求可写权限
     */</span>
    <span class="token string single-quoted-string">&#39;log&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
        <span class="token string single-quoted-string">&#39;level&#39;</span>      <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;debug&#39;</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;permission&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">0777</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;file&#39;</span>       <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;/tmp/easywechat.log&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>

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
     * 微信支付
     */</span>
    <span class="token string single-quoted-string">&#39;payment&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
        <span class="token string single-quoted-string">&#39;merchant_id&#39;</span>        <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;your-mch-id&#39;</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;key&#39;</span>                <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;key-for-signature&#39;</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;cert_path&#39;</span>          <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;path/to/your/cert.pem&#39;</span><span class="token punctuation">,</span> <span class="token comment">// XXX: 绝对路径！！！！</span>
        <span class="token string single-quoted-string">&#39;key_path&#39;</span>           <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;path/to/your/key&#39;</span><span class="token punctuation">,</span>      <span class="token comment">// XXX: 绝对路径！！！！</span>
        <span class="token comment">// &#39;device_info&#39;     =&gt; &#39;013467007045764&#39;,</span>
        <span class="token comment">// &#39;sub_app_id&#39;      =&gt; &#39;&#39;,</span>
        <span class="token comment">// &#39;sub_merchant_id&#39; =&gt; &#39;&#39;,</span>
        <span class="token comment">// ...</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>

    <span class="token doc-comment comment">/**
     * Guzzle 全局设置
     *
     * 更多请参考： http://docs.guzzlephp.org/en/latest/request-options.html
     */</span>
    <span class="token string single-quoted-string">&#39;guzzle&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
        <span class="token string single-quoted-string">&#39;timeout&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">3.0</span><span class="token punctuation">,</span> <span class="token comment">// 超时时间（秒）</span>
        <span class="token comment">//&#39;verify&#39; =&gt; false, // 关掉 SSL 认证（强烈不建议！！！）</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
</span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br></div></div><blockquote><p>❤️ 安全模式下请一定要填写 <code>aes_key</code></p></blockquote><h2 id="日志文件" tabindex="-1"><a class="header-anchor" href="#日志文件" aria-hidden="true">#</a> 日志文件</h2><p>配置文件里的<code>/tmp/...</code>是绝对路径</p><p>如果在 windows 下，去把它改成<code>C:\\foo\\bar</code>的形式， 如果是 Linux ，你已经懂了……</p><p>如果需要按日独立存储，可以配置成<code>&#39;file&#39; =&gt; storage_path(&#39;/tmp/easywechat/easywechat_&#39;.date(&#39;Ymd&#39;).&#39;.log&#39;),</code></p><p>其它同理……</p><!--]-->`)
}
// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(84103);
;// CONCATENATED MODULE: ./.vuepress/.temp/pages/3.x/configuration.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("/home/runner/work/easywechat/easywechat/docs/node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!/home/runner/work/easywechat/easywechat/docs/node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!/home/runner/work/easywechat/easywechat/docs/.vuepress/.temp/pages/3.x/configuration.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const configuration_html = (script);

/***/ })

};
;
//# sourceMappingURL=6731.app.js.map