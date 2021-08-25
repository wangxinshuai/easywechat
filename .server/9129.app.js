"use strict";
exports.id = 9129;
exports.ids = [9129];
exports.modules = {

/***/ 36903:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-12514a46",
  "path": "/5.x/customize/access_token.html",
  "title": "Access Token",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "修改 $app 的 Access Token",
      "slug": "修改-app-的-access-token",
      "children": []
    }
  ],
  "filePathRelative": "5.x/customize/access_token.md",
  "git": {
    "updatedTime": 1629906046000,
    "contributors": []
  }
}


/***/ }),

/***/ 89295:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ access_token_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.vuepress/.temp/pages/5.x/customize/access_token.html.vue?vue&type=template&id=20095590

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="access-token" tabindex="-1"><a class="header-anchor" href="#access-token" aria-hidden="true">#</a> Access Token</h1><p>我们一个 SDK 应用在初始化以后，你可以在任何时机从应用中拿到该配置下的 Access Token 实例：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">EasyWeChat<span class="token punctuation">\\</span>Factory</span><span class="token punctuation">;</span>

<span class="token variable">\$config</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token comment">//...</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token variable">\$app</span> <span class="token operator">=</span> <span class="token class-name static-context">Factory</span><span class="token operator">::</span><span class="token function">officialAccount</span><span class="token punctuation">(</span><span class="token variable">\$config</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 获取 access token 实例</span>
<span class="token variable">\$accessToken</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">access_token</span><span class="token punctuation">;</span>
<span class="token variable">\$token</span> <span class="token operator">=</span> <span class="token variable">\$accessToken</span><span class="token operator">-&gt;</span><span class="token function">getToken</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// token 数组  token[&#39;access_token&#39;] 字符串</span>
<span class="token variable">\$token</span> <span class="token operator">=</span> <span class="token variable">\$accessToken</span><span class="token operator">-&gt;</span><span class="token function">getToken</span><span class="token punctuation">(</span><span class="token constant boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 强制重新从微信服务器获取 token.</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="修改-app-的-access-token" tabindex="-1"><a class="header-anchor" href="#修改-app-的-access-token" aria-hidden="true">#</a> 修改 <code>\$app</code> 的 Access Token</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;access_token&#39;</span><span class="token punctuation">]</span><span class="token operator">-&gt;</span><span class="token function">setToken</span><span class="token punctuation">(</span><span class="token variable">\$newAccessToken</span><span class="token punctuation">,</span> <span class="token number">7200</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>例如：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;access_token&#39;</span><span class="token punctuation">]</span><span class="token operator">-&gt;</span><span class="token function">setToken</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;ccfdec35bd7ba359f6101c2da321d675&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 或者指定过期时间</span>
<span class="token variable">\$app</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;access_token&#39;</span><span class="token punctuation">]</span><span class="token operator">-&gt;</span><span class="token function">setToken</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;ccfdec35bd7ba359f6101c2da321d675&#39;</span><span class="token punctuation">,</span> <span class="token number">3600</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 单位：秒</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><!--]-->`)
}
// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(84103);
;// CONCATENATED MODULE: ./.vuepress/.temp/pages/5.x/customize/access_token.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("/home/runner/work/easywechat/easywechat/docs/node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!/home/runner/work/easywechat/easywechat/docs/node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!/home/runner/work/easywechat/easywechat/docs/.vuepress/.temp/pages/5.x/customize/access_token.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const access_token_html = (script);

/***/ })

};
;
//# sourceMappingURL=9129.app.js.map