"use strict";
exports.id = 4253;
exports.ids = [4253];
exports.modules = {

/***/ 25127:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-71cac2c5",
  "path": "/6.x/open-work/oauth.html",
  "title": "OAuth",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "获取 OAuth 模块实例",
      "slug": "获取-oauth-模块实例",
      "children": []
    },
    {
      "level": 2,
      "title": "跳转授权",
      "slug": "跳转授权",
      "children": []
    },
    {
      "level": 2,
      "title": "获取授权用户信息",
      "slug": "获取授权用户信息",
      "children": []
    },
    {
      "level": 2,
      "title": "参考阅读",
      "slug": "参考阅读",
      "children": []
    }
  ],
  "filePathRelative": "6.x/open-work/oauth.md",
  "git": {
    "updatedTime": 1629906046000,
    "contributors": []
  }
}


/***/ }),

/***/ 33989:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ oauth_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(84103);
// EXTERNAL MODULE: external "@vue/server-renderer"
var server_renderer_ = __webpack_require__(32745);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.vuepress/.temp/pages/6.x/open-work/oauth.html.vue?vue&type=template&id=b12c124a



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_OutboundLink = (0,external_vue_.resolveComponent)("OutboundLink")
  const _component_RouterLink = (0,external_vue_.resolveComponent)("RouterLink")

  _push(`<!--[--><h1 id="oauth" tabindex="-1"><a class="header-anchor" href="#oauth" aria-hidden="true">#</a> OAuth</h1><p>第三方服务商网页授权有两种：</p><ul><li><a href="https://open.work.weixin.qq.com/api/doc/90001/90143/91120#%E6%9E%84%E9%80%A0%E7%AC%AC%E4%B8%89%E6%96%B9%E5%BA%94%E7%94%A8oauth2%E9%93%BE%E6%8E%A5" target="_blank" rel="noopener noreferrer">第三方应用网页授权`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li><li><a href="https://open.work.weixin.qq.com/api/doc/90001/90143/91120#%E6%9E%84%E9%80%A0%E4%BC%81%E4%B8%9Aoauth2%E9%93%BE%E6%8E%A5" target="_blank" rel="noopener noreferrer">企业网页授权`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li></ul><p>创建实例：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">EasyWeChat<span class="token punctuation">\\</span>work<span class="token punctuation">\\</span>Application</span><span class="token punctuation">;</span>

<span class="token variable">\$config</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token string single-quoted-string">&#39;corp_id&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;xxxxxxxxxxxxxxxxx&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;secret&#39;</span>   <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;xxxxxxxxxx&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 应用的 secret</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token variable">\$app</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Application</span><span class="token punctuation">(</span><span class="token variable">\$config</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="获取-oauth-模块实例" tabindex="-1"><a class="header-anchor" href="#获取-oauth-模块实例" aria-hidden="true">#</a> 获取 OAuth 模块实例</h2><p>请根据你的场景选择对应的方法获取 OAuth 实例：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token comment"># 第三方应用网页授权</span>
<span class="token variable">\$oauth</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token function">getOAuth</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">\$suiteId</span><span class="token punctuation">,</span> <span class="token class-name type-declaration">AccessTokenInterface</span> <span class="token variable">\$suiteAccessToken</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment"># 企业网页授权</span>
<span class="token variable">\$oauth</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token function">getCorpOAuth</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">\$corpId</span><span class="token punctuation">,</span> <span class="token keyword type-hint">int</span> <span class="token variable">\$agentId</span><span class="token punctuation">,</span> <span class="token class-name type-declaration">AccessTokenInterface</span> <span class="token variable">\$suiteAccessToken</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="跳转授权" tabindex="-1"><a class="header-anchor" href="#跳转授权" aria-hidden="true">#</a> 跳转授权</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token comment">// \$callbackUrl 为授权回调地址</span>
<span class="token variable">\$callbackUrl</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;https://xxx.xxx&#39;</span><span class="token punctuation">;</span> <span class="token comment">// 需设置可信域名</span>

<span class="token comment">// 返回授权跳转链接</span>
<span class="token variable">\$redirectUrl</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token function">getOAuth</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">redirect</span><span class="token punctuation">(</span><span class="token variable">\$callbackUrl</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="获取授权用户信息" tabindex="-1"><a class="header-anchor" href="#获取授权用户信息" aria-hidden="true">#</a> 获取授权用户信息</h2><p>在回调页面中，你可以使用以下方式获取授权者信息：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$code</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;回调URL中的code&quot;</span><span class="token punctuation">;</span>
<span class="token variable">\$user</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token function">getOAuth</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">detailed</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">userFromCode</span><span class="token punctuation">(</span><span class="token variable">\$code</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 获取用户信息</span>
<span class="token variable">\$user</span><span class="token operator">-&gt;</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 对应企业微信英文名（userid）</span>
<span class="token variable">\$user</span><span class="token operator">-&gt;</span><span class="token function">getRaw</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 获取企业微信接口返回的原始信息</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>📖 OAuth 详情请参考：`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_RouterLink, { to: "/6.x/common/oauth.html" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`网页授权`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("网页授权")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</p><p>获取用户其他信息需调用通讯录接口，参考：<a href="https://github.com/EasyWeChat/docs/blob/master/wework/contacts.md" target="_blank" rel="noopener noreferrer">企业微信通讯录API`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></p><h2 id="参考阅读" tabindex="-1"><a class="header-anchor" href="#参考阅读" aria-hidden="true">#</a> 参考阅读</h2><ul><li>本模块基于 <a href="https://github.com/overtrue/socialite/" target="_blank" rel="noopener noreferrer">overtrue/socialite`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> 实现，更多的使用请阅读该扩展包文档。</li><li>state 参数的使用: <a href="https://github.com/overtrue/socialite/#state" target="_blank" rel="noopener noreferrer">overtrue/socialite/#state`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li></ul><!--]-->`)
}
;// CONCATENATED MODULE: ./.vuepress/.temp/pages/6.x/open-work/oauth.html.vue?vue&type=template&id=b12c124a

;// CONCATENATED MODULE: ./.vuepress/.temp/pages/6.x/open-work/oauth.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("/home/runner/work/easywechat/easywechat/docs/node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!/home/runner/work/easywechat/easywechat/docs/node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!/home/runner/work/easywechat/easywechat/docs/.vuepress/.temp/pages/6.x/open-work/oauth.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const oauth_html = (script);

/***/ })

};
;
//# sourceMappingURL=4253.app.js.map