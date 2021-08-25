"use strict";
exports.id = 3598;
exports.ids = [3598];
exports.modules = {

/***/ 14367:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-6242cfbc",
  "path": "/5.x/open-platform/",
  "title": "微信开放平台第三方平台",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "实例化",
      "slug": "实例化",
      "children": []
    },
    {
      "level": 2,
      "title": "获取用户授权页 URL",
      "slug": "获取用户授权页-url",
      "children": []
    },
    {
      "level": 2,
      "title": "使用授权码换取接口调用凭据和授权信息",
      "slug": "使用授权码换取接口调用凭据和授权信息",
      "children": []
    },
    {
      "level": 2,
      "title": "获取授权方的帐号基本信息",
      "slug": "获取授权方的帐号基本信息",
      "children": []
    },
    {
      "level": 2,
      "title": "获取授权方的选项设置信息",
      "slug": "获取授权方的选项设置信息",
      "children": []
    },
    {
      "level": 2,
      "title": "设置授权方的选项信息",
      "slug": "设置授权方的选项信息",
      "children": []
    },
    {
      "level": 2,
      "title": "获取已授权的授权方列表",
      "slug": "获取已授权的授权方列表",
      "children": []
    }
  ],
  "filePathRelative": "5.x/open-platform/index.md",
  "git": {
    "updatedTime": 1629906046000,
    "contributors": []
  }
}


/***/ }),

/***/ 34046:
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
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.vuepress/.temp/pages/5.x/open-platform/index.html.vue?vue&type=template&id=7988ac1d



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_OutboundLink = (0,external_vue_.resolveComponent)("OutboundLink")

  _push(`<!--[--><h1 id="微信开放平台第三方平台" tabindex="-1"><a class="header-anchor" href="#微信开放平台第三方平台" aria-hidden="true">#</a> 微信开放平台第三方平台</h1><p>此页涉及接口信息与说明请参见：<a href="https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&amp;t=resource/res_list&amp;verify=1&amp;id=open1453779503&amp;token=&amp;lang=" target="_blank" rel="noopener noreferrer">授权流程技术说明 - 官方文档`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></p><h1 id="微信开放平台第三方平台-1" tabindex="-1"><a class="header-anchor" href="#微信开放平台第三方平台-1" aria-hidden="true">#</a> 微信开放平台第三方平台</h1><h2 id="实例化" tabindex="-1"><a class="header-anchor" href="#实例化" aria-hidden="true">#</a> 实例化</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token keyword">use</span> <span class="token package">EasyWeChat<span class="token punctuation">\\</span>Factory</span><span class="token punctuation">;</span>

<span class="token variable">\$config</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token string single-quoted-string">&#39;app_id&#39;</span>   <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;开放平台第三方平台 APPID&#39;</span><span class="token punctuation">,</span>
  <span class="token string single-quoted-string">&#39;secret&#39;</span>   <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;开放平台第三方平台 Secret&#39;</span><span class="token punctuation">,</span>
  <span class="token string single-quoted-string">&#39;token&#39;</span>    <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;开放平台第三方平台 Token&#39;</span><span class="token punctuation">,</span>
  <span class="token string single-quoted-string">&#39;aes_key&#39;</span>  <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;开放平台第三方平台 AES Key&#39;</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token variable">\$openPlatform</span> <span class="token operator">=</span> <span class="token class-name static-context">Factory</span><span class="token operator">::</span><span class="token function">openPlatform</span><span class="token punctuation">(</span><span class="token variable">\$config</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="获取用户授权页-url" tabindex="-1"><a class="header-anchor" href="#获取用户授权页-url" aria-hidden="true">#</a> 获取用户授权页 URL</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$openPlatform</span><span class="token operator">-&gt;</span><span class="token function">getPreAuthorizationUrl</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;https://easywechat.com/callback&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 传入回调URI即可</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="使用授权码换取接口调用凭据和授权信息" tabindex="-1"><a class="header-anchor" href="#使用授权码换取接口调用凭据和授权信息" aria-hidden="true">#</a> 使用授权码换取接口调用凭据和授权信息</h2><p>在用户在授权页授权流程完成后，授权页会自动跳转进入回调URI，并在URL参数中返回授权码和过期时间，如：(https://easywechat.com/callback?auth_code=xxx&amp;expires_in=600)</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$openPlatform</span><span class="token operator">-&gt;</span><span class="token function">handleAuthorize</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">\$authCode</span> <span class="token operator">=</span> <span class="token constant">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><blockquote><p>\$authCode 不传的时候会获取 url 中的 auth_code 参数值</p></blockquote><h2 id="获取授权方的帐号基本信息" tabindex="-1"><a class="header-anchor" href="#获取授权方的帐号基本信息" aria-hidden="true">#</a> 获取授权方的帐号基本信息</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$openPlatform</span><span class="token operator">-&gt;</span><span class="token function">getAuthorizer</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">\$appId</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="获取授权方的选项设置信息" tabindex="-1"><a class="header-anchor" href="#获取授权方的选项设置信息" aria-hidden="true">#</a> 获取授权方的选项设置信息</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$openPlatform</span><span class="token operator">-&gt;</span><span class="token function">getAuthorizerOption</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">\$appId</span><span class="token punctuation">,</span> <span class="token keyword type-hint">string</span> <span class="token variable">\$name</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="设置授权方的选项信息" tabindex="-1"><a class="header-anchor" href="#设置授权方的选项信息" aria-hidden="true">#</a> 设置授权方的选项信息</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$openPlatform</span><span class="token operator">-&gt;</span><span class="token function">setAuthorizerOption</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">\$appId</span><span class="token punctuation">,</span> <span class="token keyword type-hint">string</span> <span class="token variable">\$name</span><span class="token punctuation">,</span> <span class="token keyword type-hint">string</span> <span class="token variable">\$value</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><blockquote><p>该API用于获取授权方的公众号或小程序的选项设置信息，如：地理位置上报，语音识别开关，多客服开关。注意，获取各项选项设置信息，需要有授权方的授权，详见权限集说明。</p></blockquote><h2 id="获取已授权的授权方列表" tabindex="-1"><a class="header-anchor" href="#获取已授权的授权方列表" aria-hidden="true">#</a> 获取已授权的授权方列表</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$openPlatform</span><span class="token operator">-&gt;</span><span class="token function">getAuthorizers</span><span class="token punctuation">(</span><span class="token keyword type-hint">int</span> <span class="token variable">\$offset</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token keyword type-hint">int</span> <span class="token variable">\$count</span> <span class="token operator">=</span> <span class="token number">500</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><!--]-->`)
}
;// CONCATENATED MODULE: ./.vuepress/.temp/pages/5.x/open-platform/index.html.vue?vue&type=template&id=7988ac1d

;// CONCATENATED MODULE: ./.vuepress/.temp/pages/5.x/open-platform/index.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("/home/runner/work/easywechat/easywechat/docs/node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!/home/runner/work/easywechat/easywechat/docs/node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!/home/runner/work/easywechat/easywechat/docs/.vuepress/.temp/pages/5.x/open-platform/index.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const index_html = (script);

/***/ })

};
;
//# sourceMappingURL=3598.app.js.map