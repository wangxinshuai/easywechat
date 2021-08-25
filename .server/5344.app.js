"use strict";
exports.id = 5344;
exports.ids = [5344];
exports.modules = {

/***/ 783:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-2478ea60",
  "path": "/3.x/access_token.html",
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
    },
    {
      "level": 2,
      "title": "设置 AccessToken 的缓存",
      "slug": "设置-accesstoken-的缓存",
      "children": []
    }
  ],
  "filePathRelative": "3.x/access_token.md",
  "git": {
    "updatedTime": 1629906046000,
    "contributors": []
  }
}


/***/ }),

/***/ 33827:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ access_token_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(84103);
// EXTERNAL MODULE: external "@vue/server-renderer"
var server_renderer_ = __webpack_require__(32745);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.vuepress/.temp/pages/3.x/access_token.html.vue?vue&type=template&id=878d5866



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_OutboundLink = (0,external_vue_.resolveComponent)("OutboundLink")

  _push(`<!--[--><h1 id="access-token" tabindex="-1"><a class="header-anchor" href="#access-token" aria-hidden="true">#</a> Access Token</h1><p>SDK 中有一个 <a href="https://github.com/overtrue/wechat/blob/master/src/Core/AccessToken.php" target="_blank" rel="noopener noreferrer">Access Token`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> 对象，它是一个全局使用的东西，请把它与 OAuth 中的 code 换取的 Access Token 区别开。</p><p>我们一个 SDK 应用在初始化以后，你可以在任何时机从应用中拿到该配置下的 Access Token 实例：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">EasyWeChat<span class="token punctuation">\\</span>Foundation<span class="token punctuation">\\</span>Application</span><span class="token punctuation">;</span>

<span class="token variable">\$options</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token comment">//...</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token variable">\$app</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Application</span><span class="token punctuation">(</span><span class="token variable">\$options</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 获取 access token 实例</span>
<span class="token variable">\$accessToken</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">access_token</span><span class="token punctuation">;</span> <span class="token comment">// EasyWeChat\\Core\\AccessToken 实例</span>
<span class="token variable">\$token</span> <span class="token operator">=</span> <span class="token variable">\$accessToken</span><span class="token operator">-&gt;</span><span class="token function">getToken</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// token 字符串</span>
<span class="token variable">\$token</span> <span class="token operator">=</span> <span class="token variable">\$accessToken</span><span class="token operator">-&gt;</span><span class="token function">getToken</span><span class="token punctuation">(</span><span class="token constant boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 强制重新从微信服务器获取 token.</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="修改-app-的-access-token" tabindex="-1"><a class="header-anchor" href="#修改-app-的-access-token" aria-hidden="true">#</a> 修改 <code>\$app</code> 的 Access Token</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;access_token&#39;</span><span class="token punctuation">]</span><span class="token operator">-&gt;</span><span class="token function">setToken</span><span class="token punctuation">(</span><span class="token variable">\$newAccessToken</span><span class="token punctuation">,</span> <span class="token variable">\$expires</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>例如：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;access_token&#39;</span><span class="token punctuation">]</span><span class="token operator">-&gt;</span><span class="token function">setToken</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;ccfdec35bd7ba359f6101c2da321d675&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 或者指定过期时间</span>
<span class="token variable">\$app</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;access_token&#39;</span><span class="token punctuation">]</span><span class="token operator">-&gt;</span><span class="token function">setToken</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;ccfdec35bd7ba359f6101c2da321d675&#39;</span><span class="token punctuation">,</span> <span class="token number">3600</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 单位：秒</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="设置-accesstoken-的缓存" tabindex="-1"><a class="header-anchor" href="#设置-accesstoken-的缓存" aria-hidden="true">#</a> 设置 AccessToken 的缓存</h2><p>你也可以自定义 token 的缓存方式，把一个实现了 <code>Doctrine\\Common\\Cache\\Cache</code> 缓存接口的实例作为 AccessToken 构造函数的第三个参数传入即可：</p><p>本项目使用 <a href="https://github.com/doctrine/cache" target="_blank" rel="noopener noreferrer">doctrine/cache`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> 来完成缓存工作，它支持几乎目前所有的缓存引擎。</p><p>以 Redis 为例：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code>
<span class="token keyword">use</span> <span class="token package">Doctrine<span class="token punctuation">\\</span>Common<span class="token punctuation">\\</span>Cache<span class="token punctuation">\\</span>RedisCache</span><span class="token punctuation">;</span> <span class="token comment">// RedisCache 实例了 \`Doctrine\\Common\\Cache\\Cache\` 接口</span>

<span class="token variable">\$cache</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RedisCache</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 创建 redis 实例</span>
<span class="token variable">\$redis</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Redis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">\$redis</span><span class="token operator">-&gt;</span><span class="token function">connect</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;redis_host&#39;</span><span class="token punctuation">,</span> <span class="token number">6379</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">\$cache</span><span class="token operator">-&gt;</span><span class="token function">setRedis</span><span class="token punctuation">(</span><span class="token variable">\$redis</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">access_token</span><span class="token operator">-&gt;</span><span class="token function">setCache</span><span class="token punctuation">(</span><span class="token variable">\$cache</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><!--]-->`)
}
;// CONCATENATED MODULE: ./.vuepress/.temp/pages/3.x/access_token.html.vue?vue&type=template&id=878d5866

;// CONCATENATED MODULE: ./.vuepress/.temp/pages/3.x/access_token.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("/home/runner/work/easywechat/easywechat/docs/node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!/home/runner/work/easywechat/easywechat/docs/node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!/home/runner/work/easywechat/easywechat/docs/.vuepress/.temp/pages/3.x/access_token.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const access_token_html = (script);

/***/ })

};
;
//# sourceMappingURL=5344.app.js.map