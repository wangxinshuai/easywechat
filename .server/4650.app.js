"use strict";
exports.id = 4650;
exports.ids = [4650];
exports.modules = {

/***/ 83273:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-50321608",
  "path": "/6.x/mini-app/",
  "title": "小程序",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "API",
      "slug": "api",
      "children": [
        {
          "level": 3,
          "title": "服务端",
          "slug": "服务端",
          "children": []
        },
        {
          "level": 3,
          "title": "API Client",
          "slug": "api-client",
          "children": []
        },
        {
          "level": 3,
          "title": "配置",
          "slug": "配置",
          "children": []
        },
        {
          "level": 3,
          "title": "AccessToken",
          "slug": "accesstoken",
          "children": []
        },
        {
          "level": 3,
          "title": "小程序账户",
          "slug": "小程序账户",
          "children": []
        }
      ]
    }
  ],
  "filePathRelative": "6.x/mini-app/index.md",
  "git": {
    "updatedTime": 1629906046000,
    "contributors": []
  }
}


/***/ }),

/***/ 78898:
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
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.vuepress/.temp/pages/6.x/mini-app/index.html.vue?vue&type=template&id=56bce96e



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_OutboundLink = (0,external_vue_.resolveComponent)("OutboundLink")
  const _component_RouterLink = (0,external_vue_.resolveComponent)("RouterLink")

  _push(`<!--[--><h1 id="小程序" tabindex="-1"><a class="header-anchor" href="#小程序" aria-hidden="true">#</a> 小程序</h1><blockquote><p>🚨 使用前建议熟读 <a href="https://developers.weixin.qq.com/doc/offiaccount/Getting_Started/Overview.html" target="_blank" rel="noopener noreferrer">微信官方文档: 小程序`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></p></blockquote><p>常用的配置参数会比较少，因为除非你有特别的定制，否则基本上默认值就可以了：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">EasyWeChat<span class="token punctuation">\\</span>OfficialAccount<span class="token punctuation">\\</span>Application</span><span class="token punctuation">;</span>

<span class="token variable">\$config</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token string single-quoted-string">&#39;app_id&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;wx3cf0f39249eb0exx&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;secret&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;f1c242f4f28f735d4687abb469072axx&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;token&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;easywechat&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;aes_key&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;......&#39;</span>
    <span class="token comment">//...</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token variable">\$app</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Application</span><span class="token punctuation">(</span><span class="token variable">\$config</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>📖 更多配置项请参考：`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_RouterLink, { to: "/6.x/mini-app/config.html" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`配置`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("配置")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</p><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2><p>Application 就是一个工厂类，所有的模块都是从 <code>\$app</code> 中访问，并且几乎都提供了协议和 setter 可自定义修改。</p><h3 id="服务端" tabindex="-1"><a class="header-anchor" href="#服务端" aria-hidden="true">#</a> 服务端</h3><p>服务端模块封装了服务端相关的便捷操作，隐藏了部分复杂的细节，基于中间件模式可以更方便的处理消息推送和服务端验证。</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token function">getServer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>📖 更多说明请参阅：`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_RouterLink, { to: "/6.x/mini-app/server.html" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`服务端使用文档`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("服务端使用文档")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</p><h3 id="api-client" tabindex="-1"><a class="header-anchor" href="#api-client" aria-hidden="true">#</a> API Client</h3><p>封装了多种模式的 API 调用类，你可以选择自己喜欢的方式调用小程序任意 API，默认自动处理了 access_token 相关的逻辑。</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token function">getClient</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>📖 更多说明请参阅：`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_RouterLink, { to: "/6.x/mini-app/client.html" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`API调用`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("API调用")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</p><h3 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$config</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token function">getConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>你可以轻松使用 <code>\$config-&gt;get(\$key, \$default)</code> 读取配置，或使用 <code>\$config-&gt;set(\$key, \$value)</code> 在调用前修改配置项。</p><h3 id="accesstoken" tabindex="-1"><a class="header-anchor" href="#accesstoken" aria-hidden="true">#</a> AccessToken</h3><p>access_token 是小程序 API 调用的必备条件，如果你想获取它的值，你可以通过以下方式拿到当前的 access_token：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$accessToken</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token function">getAccessToken</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">\$accessToken</span><span class="token operator">-&gt;</span><span class="token function">getToken</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// string</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>当然你也可以使用自己的 AccessToken 类：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$accessToken</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyCustomAccessToken</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token function">setAccessToken</span><span class="token punctuation">(</span><span class="token variable">\$accessToken</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="小程序账户" tabindex="-1"><a class="header-anchor" href="#小程序账户" aria-hidden="true">#</a> 小程序账户</h3><p>小程序账号类，提供一系列 API 获取小程序的基本信息：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$account</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token function">getAccount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">\$account</span><span class="token operator">-&gt;</span><span class="token function">getAppId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">\$account</span><span class="token operator">-&gt;</span><span class="token function">getSecret</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">\$account</span><span class="token operator">-&gt;</span><span class="token function">getToken</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">\$account</span><span class="token operator">-&gt;</span><span class="token function">getAesKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><!--]-->`)
}
;// CONCATENATED MODULE: ./.vuepress/.temp/pages/6.x/mini-app/index.html.vue?vue&type=template&id=56bce96e

;// CONCATENATED MODULE: ./.vuepress/.temp/pages/6.x/mini-app/index.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("/home/runner/work/easywechat/easywechat/docs/node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!/home/runner/work/easywechat/easywechat/docs/node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!/home/runner/work/easywechat/easywechat/docs/.vuepress/.temp/pages/6.x/mini-app/index.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const index_html = (script);

/***/ })

};
;
//# sourceMappingURL=4650.app.js.map