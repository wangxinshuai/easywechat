"use strict";
exports.id = 37;
exports.ids = [37];
exports.modules = {

/***/ 49670:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-2113998f",
  "path": "/5.x/wework/server.html",
  "title": "",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "服务端",
      "slug": "服务端",
      "children": []
    }
  ],
  "filePathRelative": "5.x/wework/server.md",
  "git": {
    "updatedTime": 1629906046000,
    "contributors": []
  }
}


/***/ }),

/***/ 85839:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ server_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.vuepress/.temp/pages/5.x/wework/server.html.vue?vue&type=template&id=7abc685c

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h2 id="服务端" tabindex="-1"><a class="header-anchor" href="#服务端" aria-hidden="true">#</a> 服务端</h2><p>我们在企业微信应用开启接收消息的功能，将设置页面的 token 与 aes key 配置到 agents 下对应的应用内：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$config</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token string single-quoted-string">&#39;corp_id&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;xxxxxxxxxxxxxxxxx&#39;</span><span class="token punctuation">,</span>

    <span class="token string single-quoted-string">&#39;agent_id&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">100022</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;secret&#39;</span>   <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;xxxxxxxxxx&#39;</span><span class="token punctuation">,</span>

    <span class="token comment">// server config</span>
    <span class="token string single-quoted-string">&#39;token&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;xxxxxxxxx&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;aes_key&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;xxxxxxxxxxxxxxxxxx&#39;</span><span class="token punctuation">,</span>

    <span class="token comment">//...</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token variable">\$app</span> <span class="token operator">=</span> <span class="token class-name static-context">Factory</span><span class="token operator">::</span><span class="token function">work</span><span class="token punctuation">(</span><span class="token variable">\$config</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>接着配置服务端与公众号的服务端用法一样：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">server</span><span class="token operator">-&gt;</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token variable">\$message</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
   <span class="token comment">// \$message[&#39;FromUserName&#39;] // 消息来源</span>
   <span class="token comment">// \$message[&#39;MsgType&#39;] // 消息类型：event ....</span>
    
    <span class="token keyword">return</span> <span class="token string single-quoted-string">&#39;Hello easywechat.&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">\$response</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">server</span><span class="token operator">-&gt;</span><span class="token function">serve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">\$response</span><span class="token operator">-&gt;</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p><code>\$response</code> 为 <code>Symfony\\Component\\HttpFoundation\\Response</code> 实例，根据你的框架情况来决定如何处理响应。</p><!--]-->`)
}
// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(84103);
;// CONCATENATED MODULE: ./.vuepress/.temp/pages/5.x/wework/server.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("/home/runner/work/easywechat/easywechat/docs/node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!/home/runner/work/easywechat/easywechat/docs/node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!/home/runner/work/easywechat/easywechat/docs/.vuepress/.temp/pages/5.x/wework/server.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const server_html = (script);

/***/ })

};
;
//# sourceMappingURL=37.app.js.map