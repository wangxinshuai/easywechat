"use strict";
exports.id = 8898;
exports.ids = [8898];
exports.modules = {

/***/ 86138:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-9324c92e",
  "path": "/5.x/wework/oauth.html",
  "title": "OAuth",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
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
  "filePathRelative": "5.x/wework/oauth.md",
  "git": {
    "updatedTime": 1629906046000,
    "contributors": []
  }
}


/***/ }),

/***/ 34005:
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
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.vuepress/.temp/pages/5.x/wework/oauth.html.vue?vue&type=template&id=5b48c7f4



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_OutboundLink = (0,external_vue_.resolveComponent)("OutboundLink")

  _push(`<!--[--><h1 id="oauth" tabindex="-1"><a class="header-anchor" href="#oauth" aria-hidden="true">#</a> OAuth</h1><blockquote><p>{warning} 此文档为企业微信内部应用开发的网页授权</p></blockquote><p><a href="https://work.weixin.qq.com/api/doc#90000/90135/91020" target="_blank" rel="noopener noreferrer">企业微信官方文档`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></p><p>创建实例：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$config</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token string single-quoted-string">&#39;corp_id&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;xxxxxxxxxxxxxxxxx&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;secret&#39;</span>   <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;xxxxxxxxxx&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 应用的 secret</span>
    <span class="token string single-quoted-string">&#39;agent_id&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">100001</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token variable">\$app</span> <span class="token operator">=</span> <span class="token class-name static-context">Factory</span><span class="token operator">::</span><span class="token function">work</span><span class="token punctuation">(</span><span class="token variable">\$config</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="跳转授权" tabindex="-1"><a class="header-anchor" href="#跳转授权" aria-hidden="true">#</a> 跳转授权</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token comment">// \$callbackUrl 为授权回调地址</span>
<span class="token variable">\$callbackUrl</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;https://xxx.xxx&#39;</span><span class="token punctuation">;</span> <span class="token comment">// 需设置可信域名</span>

<span class="token comment">// 返回一个 redirect 实例</span>
<span class="token variable">\$redirect</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">oauth</span><span class="token operator">-&gt;</span><span class="token function">redirect</span><span class="token punctuation">(</span><span class="token variable">\$callbackUrl</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 获取企业微信跳转目标地址</span>
<span class="token variable">\$targetUrl</span> <span class="token operator">=</span> <span class="token variable">\$redirect</span><span class="token operator">-&gt;</span><span class="token function">getTargetUrl</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 直接跳转到企业微信授权</span>
<span class="token variable">\$redirect</span><span class="token operator">-&gt;</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="获取授权用户信息" tabindex="-1"><a class="header-anchor" href="#获取授权用户信息" aria-hidden="true">#</a> 获取授权用户信息</h2><p>在回调页面中，你可以使用以下方式获取授权者信息：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$code</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;回调URL中的code&quot;</span><span class="token punctuation">;</span>
<span class="token variable">\$user</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">oauth</span><span class="token operator">-&gt;</span><span class="token function">detailed</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">userFromCode</span><span class="token punctuation">(</span><span class="token variable">\$code</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 获取用户信息</span>
<span class="token variable">\$user</span><span class="token operator">-&gt;</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 对应企业微信英文名（userid）</span>
<span class="token variable">\$user</span><span class="token operator">-&gt;</span><span class="token function">getRaw</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 获取企业微信接口返回的原始信息</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>获取用户其他信息需调用通讯录接口，参考：<a href="https://github.com/EasyWeChat/docs/blob/master/wework/contacts.md" target="_blank" rel="noopener noreferrer">企业微信通讯录API`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></p><h2 id="参考阅读" tabindex="-1"><a class="header-anchor" href="#参考阅读" aria-hidden="true">#</a> 参考阅读</h2><ul><li>本模块基于 <a href="https://github.com/overtrue/socialite/" target="_blank" rel="noopener noreferrer">overtrue/socialite`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> 实现，更多的使用请阅读该扩展包文档。</li><li>state 参数的使用: <a href="https://github.com/overtrue/socialite/#state" target="_blank" rel="noopener noreferrer">overtrue/socialite/#state`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li></ul><!--]-->`)
}
;// CONCATENATED MODULE: ./.vuepress/.temp/pages/5.x/wework/oauth.html.vue?vue&type=template&id=5b48c7f4

;// CONCATENATED MODULE: ./.vuepress/.temp/pages/5.x/wework/oauth.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("/home/runner/work/easywechat/easywechat/docs/node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!/home/runner/work/easywechat/easywechat/docs/node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!/home/runner/work/easywechat/easywechat/docs/.vuepress/.temp/pages/5.x/wework/oauth.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const oauth_html = (script);

/***/ })

};
;
//# sourceMappingURL=8898.app.js.map