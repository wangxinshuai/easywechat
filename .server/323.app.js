"use strict";
exports.id = 323;
exports.ids = [323];
exports.modules = {

/***/ 19751:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-72951b7d",
  "path": "/4.x/official-account/configuration.html",
  "title": "配置",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "日志配置",
      "slug": "日志配置",
      "children": [
        {
          "level": 3,
          "title": "自定义日志驱动",
          "slug": "自定义日志驱动",
          "children": []
        }
      ]
    }
  ],
  "filePathRelative": "4.x/official-account/configuration.md",
  "git": {
    "updatedTime": 1629906046000,
    "contributors": []
  }
}


/***/ }),

/***/ 82855:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ configuration_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(84103);
// EXTERNAL MODULE: external "@vue/server-renderer"
var server_renderer_ = __webpack_require__(32745);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.vuepress/.temp/pages/4.x/official-account/configuration.html.vue?vue&type=template&id=58c081de



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_OutboundLink = (0,external_vue_.resolveComponent)("OutboundLink")

  _push(`<!--[--><h1 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h1><p>常用的配置参数会比较少，因为除非你有特别的定制，否则基本上默认值就可以了：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">EasyWeChat<span class="token punctuation">\\</span>Factory</span><span class="token punctuation">;</span>

<span class="token variable">\$config</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token string single-quoted-string">&#39;app_id&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;wx3cf0f39249eb0exx&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;secret&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;f1c242f4f28f735d4687abb469072axx&#39;</span><span class="token punctuation">,</span>

    <span class="token comment">// 指定 API 调用返回结果的类型：array(default)/collection/object/raw/自定义类名</span>
    <span class="token string single-quoted-string">&#39;response_type&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;array&#39;</span><span class="token punctuation">,</span>
    
    <span class="token comment">//...</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token variable">\$app</span> <span class="token operator">=</span> <span class="token class-name static-context">Factory</span><span class="token operator">::</span><span class="token function">officialAccount</span><span class="token punctuation">(</span><span class="token variable">\$config</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>下面是一个完整的配置样例：</p><blockquote><p>不建议你在配置的时候弄这么多，用到啥就配置啥才是最好的，因为大部分用默认值即可。</p></blockquote><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">return</span> <span class="token punctuation">[</span>
    <span class="token doc-comment comment">/**
     * 账号基本信息，请从微信公众平台/开放平台获取
     */</span>
    <span class="token string single-quoted-string">&#39;app_id&#39;</span>  <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;your-app-id&#39;</span><span class="token punctuation">,</span>         <span class="token comment">// AppID</span>
    <span class="token string single-quoted-string">&#39;secret&#39;</span>  <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;your-app-secret&#39;</span><span class="token punctuation">,</span>     <span class="token comment">// AppSecret</span>
    <span class="token string single-quoted-string">&#39;token&#39;</span>   <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;your-token&#39;</span><span class="token punctuation">,</span>          <span class="token comment">// Token</span>
    <span class="token string single-quoted-string">&#39;aes_key&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;&#39;</span><span class="token punctuation">,</span>                    <span class="token comment">// EncodingAESKey，兼容与安全模式下请一定要填写！！！</span>

     <span class="token doc-comment comment">/**
      * 指定 API 调用返回结果的类型：array(default)/collection/object/raw/自定义类名
      * 使用自定义类名时，构造函数将会接收一个 \`EasyWeChat\\Kernel\\Http\\Response\` 实例
      */</span>
    <span class="token string single-quoted-string">&#39;response_type&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;array&#39;</span><span class="token punctuation">,</span>

    <span class="token doc-comment comment">/**
     * 日志配置
     *
     * level: 日志级别, 可选为：
     *         debug/info/notice/warning/error/critical/alert/emergency
     * path：日志文件位置(绝对路径!!!)，要求可写权限
     */</span>
    <span class="token string single-quoted-string">&#39;log&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
        <span class="token string single-quoted-string">&#39;default&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;dev&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 默认使用的 channel，生产环境可以改为下面的 prod</span>
        <span class="token string single-quoted-string">&#39;channels&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
            <span class="token comment">// 测试环境</span>
            <span class="token string single-quoted-string">&#39;dev&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
                <span class="token string single-quoted-string">&#39;driver&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;single&#39;</span><span class="token punctuation">,</span>
                <span class="token string single-quoted-string">&#39;path&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;/tmp/easywechat.log&#39;</span><span class="token punctuation">,</span>
                <span class="token string single-quoted-string">&#39;level&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;debug&#39;</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token comment">// 生产环境</span>
            <span class="token string single-quoted-string">&#39;prod&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
                <span class="token string single-quoted-string">&#39;driver&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;daily&#39;</span><span class="token punctuation">,</span>
                <span class="token string single-quoted-string">&#39;path&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;/tmp/easywechat.log&#39;</span><span class="token punctuation">,</span>
                <span class="token string single-quoted-string">&#39;level&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;info&#39;</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>

    <span class="token doc-comment comment">/**
     * 接口请求相关配置，超时时间等，具体可用参数请参考：
     * http://docs.guzzlephp.org/en/stable/request-config.html
     *
     * - retries: 重试次数，默认 1，指定当 http 请求失败时重试的次数。
     * - retry_delay: 重试延迟间隔（单位：ms），默认 500
     * - log_template: 指定 HTTP 日志模板，请参考：https://github.com/guzzle/guzzle/blob/master/src/MessageFormatter.php
     */</span>
    <span class="token string single-quoted-string">&#39;http&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
        <span class="token string single-quoted-string">&#39;max_retries&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;retry_delay&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">500</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;timeout&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">5.0</span><span class="token punctuation">,</span>
        <span class="token comment">// &#39;base_uri&#39; =&gt; &#39;https://api.weixin.qq.com/&#39;, // 如果你在国外想要覆盖默认的 url 的时候才使用，根据不同的模块配置不同的 uri</span>
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
<span class="token punctuation">]</span><span class="token punctuation">;</span>
</span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br></div></div><blockquote><p>❤️ 安全模式下请一定要填写 <code>aes_key</code></p></blockquote><h2 id="日志配置" tabindex="-1"><a class="header-anchor" href="#日志配置" aria-hidden="true">#</a> 日志配置</h2><p>你可以配置多个日志的 channel，每个 channel 里的 <code>driver</code> 对应不同的日志驱动，内置可用的 <code>driver</code> 如下表：</p><table><thead><tr><th>名称</th><th>描述</th></tr></thead><tbody><tr><td><code>stack</code></td><td>复合型，可以包含下面多种驱动的混合模式</td></tr><tr><td><code>single</code></td><td>基于 <code>StreamHandler</code> 的单一文件日志，参数有 <code>path</code>，<code>level</code></td></tr><tr><td><code>daily</code></td><td>基于 <code>RotatingFileHandler</code> 按日期生成日志文件，参数有 <code>path</code>，<code>level</code>，<code>days</code>(默认 7 天)</td></tr><tr><td><code>slack</code></td><td>基于 <code>SlackWebhookHandler</code> 的 Slack 组件，参数请参考源码：<a href="https://github.com/overtrue/wechat/blob/master/src/Kernel/Log/LogManager.php#L247" target="_blank" rel="noopener noreferrer">LogManager.php`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></td></tr><tr><td><code>syslog</code></td><td>基于 <code>SyslogHandler</code> Monolog 驱动，参数有 <code>facility</code> 默认为 <code>LOG_USER</code>，<code>level</code></td></tr><tr><td><code>errorlog</code></td><td>记录日志到系统错误日志，基于 <code>ErrorLogHandler</code>，参数有 <code>type</code>，默认为 <code>ErrorLogHandler::OPERATING_SYSTEM</code></td></tr></tbody></table><h3 id="自定义日志驱动" tabindex="-1"><a class="header-anchor" href="#自定义日志驱动" aria-hidden="true">#</a> 自定义日志驱动</h3><p>由于日志使用的是 <a href="https://github.com/Seldaek/monolog" target="_blank" rel="noopener noreferrer">Monolog`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>，所以，除了默认的文件式日志外，你可以自定义日志处理器：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">Monolog<span class="token punctuation">\\</span>Logger</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Monolog<span class="token punctuation">\\</span>Handler<span class="token punctuation">\\</span>RotatingFileHandler</span><span class="token punctuation">;</span>


<span class="token comment">// 注册自定义日志</span>
<span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">logger</span><span class="token operator">-&gt;</span><span class="token function">extend</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;mylog&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token variable">\$app</span><span class="token punctuation">,</span> <span class="token variable">\$config</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Logger</span><span class="token punctuation">(</span><span class="token variable">\$this</span><span class="token operator">-&gt;</span><span class="token function">parseChannel</span><span class="token punctuation">(</span><span class="token variable">\$config</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>
        <span class="token variable">\$this</span><span class="token operator">-&gt;</span><span class="token function">prepareHandler</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">RotatingFileHandler</span><span class="token punctuation">(</span>
            <span class="token variable">\$config</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;path&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token variable">\$config</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;days&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token variable">\$this</span><span class="token operator">-&gt;</span><span class="token function">level</span><span class="token punctuation">(</span><span class="token variable">\$config</span><span class="token punctuation">)</span>
        <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><blockquote><p>{info} 在你自定义的闭包函数中，可以使用 <code>EasyWeChat\\Kernel\\Log\\LogManager</code> 中的方法，具体请查看 SDK 源代码。</p></blockquote><p>配置文件中在 <code>driver</code> 部分即可使用你自定义的驱动了：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token string single-quoted-string">&#39;log&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
    <span class="token string single-quoted-string">&#39;default&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;dev&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 默认使用的 channel，生产环境可以改为下面的 prod</span>
    <span class="token string single-quoted-string">&#39;channels&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
        <span class="token comment">// 测试环境</span>
        <span class="token string single-quoted-string">&#39;dev&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
            <span class="token string single-quoted-string">&#39;driver&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;mylog&#39;</span><span class="token punctuation">,</span>
            <span class="token string single-quoted-string">&#39;path&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;/tmp/easywechat.log&#39;</span><span class="token punctuation">,</span>
            <span class="token string single-quoted-string">&#39;level&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;debug&#39;</span><span class="token punctuation">,</span> 
            <span class="token string single-quoted-string">&#39;days&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">5</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>

        <span class="token comment">//...</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><!--]-->`)
}
;// CONCATENATED MODULE: ./.vuepress/.temp/pages/4.x/official-account/configuration.html.vue?vue&type=template&id=58c081de

;// CONCATENATED MODULE: ./.vuepress/.temp/pages/4.x/official-account/configuration.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("/home/runner/work/easywechat/easywechat/docs/node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!/home/runner/work/easywechat/easywechat/docs/node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!/home/runner/work/easywechat/easywechat/docs/.vuepress/.temp/pages/4.x/official-account/configuration.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const configuration_html = (script);

/***/ })

};
;
//# sourceMappingURL=323.app.js.map