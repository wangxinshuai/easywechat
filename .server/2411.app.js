"use strict";
exports.id = 2411;
exports.ids = [2411];
exports.modules = {

/***/ 88624:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-bfcad9c8",
  "path": "/3.x/open_platform.html",
  "title": "微信开放平台",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 3,
      "title": "实例化",
      "slug": "实例化",
      "children": []
    },
    {
      "level": 3,
      "title": "监听微信服务器推送事件",
      "slug": "监听微信服务器推送事件",
      "children": []
    },
    {
      "level": 3,
      "title": "调用 API",
      "slug": "调用-api",
      "children": []
    },
    {
      "level": 3,
      "title": "授权 API",
      "slug": "授权-api",
      "children": []
    }
  ],
  "filePathRelative": "3.x/open_platform.md",
  "git": {
    "updatedTime": 1629906046000,
    "contributors": []
  }
}


/***/ }),

/***/ 66628:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ open_platform_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.vuepress/.temp/pages/3.x/open_platform.html.vue?vue&type=template&id=01d659ba

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="微信开放平台" tabindex="-1"><a class="header-anchor" href="#微信开放平台" aria-hidden="true">#</a> 微信开放平台</h1><h3 id="实例化" tabindex="-1"><a class="header-anchor" href="#实例化" aria-hidden="true">#</a> 实例化</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token keyword">use</span> <span class="token package">EasyWeChat<span class="token punctuation">\\</span>Foundation<span class="token punctuation">\\</span>Application</span><span class="token punctuation">;</span>

<span class="token variable">\$options</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token comment">// ...</span>
    <span class="token string single-quoted-string">&#39;open_platform&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
        <span class="token string single-quoted-string">&#39;app_id&#39;</span>   <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;component-app-id&#39;</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;secret&#39;</span>   <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;component-app-secret&#39;</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;token&#39;</span>    <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;component-token&#39;</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;aes_key&#39;</span>  <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;component-aes-key&#39;</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// ...</span>
    <span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token variable">\$app</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Application</span><span class="token punctuation">(</span><span class="token variable">\$options</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">\$openPlatform</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">open_platform</span><span class="token punctuation">;</span>
</span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h3 id="监听微信服务器推送事件" tabindex="-1"><a class="header-anchor" href="#监听微信服务器推送事件" aria-hidden="true">#</a> 监听微信服务器推送事件</h3><p>公众号第三方平台推送的有四个事件：授权成功(<code>authorized</code>)，授权更新(<code>updateauthorized</code>)，授权取消（<code>unauthorized</code>），以及 <code>component_verify_ticket</code>。</p><p>本 SDK 默认处理方式为：</p><ul><li><code>authorized</code> / <code>updateauthorized</code>: 获取授权方(Authorizer)的所有信息，并缓存 <code>authorizer_access_token</code> 和 <code>authorizer_refresh_token</code>，授权方的信息则需要开发者手动处理。</li><li><code>unauthorized</code>: 删除 <code>authorizer_access_token</code> 和 <code>authorizer_refresh_token</code> 的缓存。</li><li><code>component_verify_ticket</code>: 缓存 <code>component_veirfy_ticket</code>。</li></ul><p>当然也允许自定义处理这些事件，不过以上默认处理仍然会先执行，为的是帮助开发者免去缓存的困扰。</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token comment">// 默认处理方式</span>
<span class="token variable">\$openPlatform</span><span class="token operator">-&gt;</span><span class="token property">server</span><span class="token operator">-&gt;</span><span class="token function">serve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 自定义处理</span>
<span class="token variable">\$openPlatform</span><span class="token operator">-&gt;</span><span class="token property">server</span><span class="token operator">-&gt;</span><span class="token function">setMessageHandler</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token variable">\$event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 事件类型常量定义在 \\EasyWeChat\\OpenPlatform\\Guard 类里</span>
    <span class="token keyword">switch</span> <span class="token punctuation">(</span><span class="token variable">\$event</span><span class="token operator">-&gt;</span><span class="token property">InfoType</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">case</span> <span class="token string single-quoted-string">&#39;authorized&#39;</span><span class="token punctuation">:</span>
            <span class="token comment">// ...</span>
        <span class="token keyword">case</span> <span class="token string single-quoted-string">&#39;unauthorized&#39;</span><span class="token punctuation">:</span>
            <span class="token comment">// ...</span>
        <span class="token keyword">case</span> <span class="token string single-quoted-string">&#39;updateauthorized&#39;</span><span class="token punctuation">:</span>
            <span class="token comment">// ...</span>
        <span class="token keyword">case</span> <span class="token string single-quoted-string">&#39;component_verify_ticket&#39;</span><span class="token punctuation">:</span>
            <span class="token comment">// ...</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">\$openPlatform</span><span class="token operator">-&gt;</span><span class="token property">server</span><span class="token operator">-&gt;</span><span class="token function">serve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 或者</span>
<span class="token variable">\$openPlatform</span><span class="token operator">-&gt;</span><span class="token property">server</span><span class="token operator">-&gt;</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token variable">\$event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">switch</span> <span class="token punctuation">(</span><span class="token variable">\$event</span><span class="token operator">-&gt;</span><span class="token property">InfoType</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// ...</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><h4 id="授权成功-授权更新" tabindex="-1"><a class="header-anchor" href="#授权成功-授权更新" aria-hidden="true">#</a> 授权成功，授权更新</h4><p>这两个事件下，SDK 默认抓取了所有授权方所有的信息，并缓存 <code>authorizer_access_token</code> 和 <code>authorizer_refresh_token</code>，授权方的信息为原微信 API 的返回结果，由开发者自行处理，比如保存到数据库。</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token comment">// 自定义处理</span>
<span class="token comment">// 其中 \$event 变量里有微信推送事件本身的信息，也有授权方所有的信息。</span>
<span class="token variable">\$openPlatform</span><span class="token operator">-&gt;</span><span class="token property">server</span><span class="token operator">-&gt;</span><span class="token function">setMessageHandler</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token variable">\$event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 事件类型常量定义在 \\EasyWeChat\\OpenPlatform\\Guard 类里</span>
    <span class="token keyword">switch</span> <span class="token punctuation">(</span><span class="token variable">\$event</span><span class="token operator">-&gt;</span><span class="token property">InfoType</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">case</span> <span class="token string single-quoted-string">&#39;authorized&#39;</span><span class="token punctuation">:</span>
            <span class="token comment">// 授权信息，主要是 token 和授权域</span>
            <span class="token variable">\$info1</span> <span class="token operator">=</span> <span class="token variable">\$event</span><span class="token operator">-&gt;</span><span class="token property">authorization_info</span><span class="token punctuation">;</span>
            <span class="token comment">// 授权方信息，就是授权方公众号的信息了</span>
            <span class="token variable">\$info2</span> <span class="token operator">=</span> <span class="token variable">\$event</span><span class="token operator">-&gt;</span><span class="token property">authorizer_info</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>目前 SDK 对这两个事件的处理方式没有区别。</p><h4 id="授权取消" tabindex="-1"><a class="header-anchor" href="#授权取消" aria-hidden="true">#</a> 授权取消</h4><p>SDK 默认处理：删除 <code>authorizer_access_token</code> 和 <code>authorizer_refresh_token</code> 的缓存。开发者可以自行处理数据库删除授权方信息等操作。</p><h4 id="推送-component-verify-ticket" tabindex="-1"><a class="header-anchor" href="#推送-component-verify-ticket" aria-hidden="true">#</a> 推送 component_verify_ticket</h4><p>在公众号第三方平台创建审核通过后，微信服务器会向其“授权事件接收URL”每隔10分钟定时推送 <code>component_verify_ticket</code>。SDK 内部已实现缓存 <code>component_veirfy_ticket</code>，无需开发者另行缓存。</p><p>注：需要在URL路由中写上触发代码，并且注册路由后需要等待微信服务器推送 <code>component_verify_ticket</code>，才能进行后续操作，否则报&quot;Component verify ticket does not exists.&quot;</p><h3 id="调用-api" tabindex="-1"><a class="header-anchor" href="#调用-api" aria-hidden="true">#</a> 调用 API</h3><h4 id="设置授权方的-app-id" tabindex="-1"><a class="header-anchor" href="#设置授权方的-app-id" aria-hidden="true">#</a> 设置授权方的 App Id</h4><p>开发者必须设置授权方来调用 API。</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$openPlatform</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Application</span><span class="token punctuation">(</span><span class="token variable">\$options</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token property">open_platform</span><span class="token punctuation">;</span>

<span class="token comment">// 加载授权方信息，比如 \$authorizer = Authorizer::find(\$id);</span>
<span class="token variable">\$authorizerAppId</span> <span class="token operator">=</span> <span class="token variable">\$authorizer</span><span class="token operator">-&gt;</span><span class="token property">app_id</span><span class="token punctuation">;</span>
<span class="token variable">\$authorizerRefreshToken</span> <span class="token operator">=</span> <span class="token variable">\$authorizer</span><span class="token operator">-&gt;</span><span class="token property">refresh_token</span><span class="token punctuation">;</span>

<span class="token variable">\$app</span> <span class="token operator">=</span> <span class="token variable">\$openPlatform</span><span class="token operator">-&gt;</span><span class="token function">createAuthorizerApplication</span><span class="token punctuation">(</span><span class="token variable">\$authorizerAppId</span><span class="token punctuation">,</span> <span class="token variable">\$authorizerRefreshToken</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 然后调用方法和普通调用一致。</span>
<span class="token comment">// ...</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="授权-api" tabindex="-1"><a class="header-anchor" href="#授权-api" aria-hidden="true">#</a> 授权 API</h3><h4 id="获取预授权网址" tabindex="-1"><a class="header-anchor" href="#获取预授权网址" aria-hidden="true">#</a> 获取预授权网址</h4><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token comment">// 直接跳转</span>
<span class="token variable">\$response</span> <span class="token operator">=</span> <span class="token variable">\$openPlatform</span><span class="token operator">-&gt;</span><span class="token property">pre_auth</span><span class="token operator">-&gt;</span><span class="token function">redirect</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;https://domain.com/callback&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 获取跳转的链接</span>
<span class="token variable">\$response</span><span class="token operator">-&gt;</span><span class="token function">getTargetUrl</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>用户授权后会带上 <code>code</code> 跳转到 <code>redirect</code> 指定的链接。</p><h4 id="使用授权码换取公众号的接口调用凭据和授权信息" tabindex="-1"><a class="header-anchor" href="#使用授权码换取公众号的接口调用凭据和授权信息" aria-hidden="true">#</a> 使用授权码换取公众号的接口调用凭据和授权信息</h4><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token comment">// 使用授权码换取公众号的接口调用凭据和授权信息</span>
<span class="token comment">// Optional: \$authorizationCode 不传值时会自动获取 URL 中 auth_code 值</span>
<span class="token variable">\$openPlatform</span><span class="token operator">-&gt;</span><span class="token function">getAuthorizationInfo</span><span class="token punctuation">(</span><span class="token variable">\$authorizationCode</span> <span class="token operator">=</span> <span class="token constant">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h4 id="获取授权方的公众号帐号基本信息" tabindex="-1"><a class="header-anchor" href="#获取授权方的公众号帐号基本信息" aria-hidden="true">#</a> 获取授权方的公众号帐号基本信息</h4><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$openPlatform</span><span class="token operator">-&gt;</span><span class="token function">getAuthorizerInfo</span><span class="token punctuation">(</span><span class="token variable">\$authorizerAppId</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h4 id="获取授权方的选项设置信息" tabindex="-1"><a class="header-anchor" href="#获取授权方的选项设置信息" aria-hidden="true">#</a> 获取授权方的选项设置信息</h4><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$openPlatform</span><span class="token operator">-&gt;</span><span class="token function">getAuthorizerOption</span><span class="token punctuation">(</span><span class="token variable">\$authorizerAppId</span><span class="token punctuation">,</span> <span class="token variable">\$optionName</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h4 id="设置授权方的选项信息" tabindex="-1"><a class="header-anchor" href="#设置授权方的选项信息" aria-hidden="true">#</a> 设置授权方的选项信息</h4><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$openPlatform</span><span class="token operator">-&gt;</span><span class="token function">setAuthorizerOption</span><span class="token punctuation">(</span><span class="token variable">\$authorizerAppId</span><span class="token punctuation">,</span> <span class="token variable">\$optionName</span><span class="token punctuation">,</span> <span class="token variable">\$optionValue</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><!--]-->`)
}
// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(84103);
;// CONCATENATED MODULE: ./.vuepress/.temp/pages/3.x/open_platform.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("/home/runner/work/easywechat/easywechat/docs/node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!/home/runner/work/easywechat/easywechat/docs/node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!/home/runner/work/easywechat/easywechat/docs/.vuepress/.temp/pages/3.x/open_platform.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const open_platform_html = (script);

/***/ })

};
;
//# sourceMappingURL=2411.app.js.map