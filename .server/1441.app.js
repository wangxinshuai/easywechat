"use strict";
exports.id = 1441;
exports.ids = [1441];
exports.modules = {

/***/ 80118:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-5fbb7705",
  "path": "/4.x/wework/agents.html",
  "title": "应用管理",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "应用列表",
      "slug": "应用列表",
      "children": []
    },
    {
      "level": 2,
      "title": "应用详情",
      "slug": "应用详情",
      "children": []
    },
    {
      "level": 2,
      "title": "设置应用",
      "slug": "设置应用",
      "children": []
    }
  ],
  "filePathRelative": "4.x/wework/agents.md",
  "git": {
    "updatedTime": 1629906046000,
    "contributors": []
  }
}


/***/ }),

/***/ 56336:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ agents_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.vuepress/.temp/pages/4.x/wework/agents.html.vue?vue&type=template&id=0fe83317

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="应用管理" tabindex="-1"><a class="header-anchor" href="#应用管理" aria-hidden="true">#</a> 应用管理</h1><blockquote><p>{warning} 企业微信在17年11月对 API 进行了大量的改动，应用管理部分已经没啥用了</p></blockquote><p>应用管理是企业微信中比较特别的地方，因为它的使用是不基于应用的，或者说基于任何一个应用都能访问这些 API，所以在用法上是直接调用 work 实例的 <code>agent</code> 属性。</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$config</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token operator">...</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token variable">\$app</span> <span class="token operator">=</span> <span class="token class-name static-context">Factory</span><span class="token operator">::</span><span class="token function">work</span><span class="token punctuation">(</span><span class="token variable">\$config</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="应用列表" tabindex="-1"><a class="header-anchor" href="#应用列表" aria-hidden="true">#</a> 应用列表</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$agents</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">agent</span><span class="token operator">-&gt;</span><span class="token function">list</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 测试拿不到内容</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="应用详情" tabindex="-1"><a class="header-anchor" href="#应用详情" aria-hidden="true">#</a> 应用详情</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$agents</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">agent</span><span class="token operator">-&gt;</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token variable">\$agentId</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 只能传配置文件中的 id，API 改动所致</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="设置应用" tabindex="-1"><a class="header-anchor" href="#设置应用" aria-hidden="true">#</a> 设置应用</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$agents</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">agent</span><span class="token operator">-&gt;</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token variable">\$agentId</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;foo&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;bar&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><!--]-->`)
}
// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(84103);
;// CONCATENATED MODULE: ./.vuepress/.temp/pages/4.x/wework/agents.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("/home/runner/work/easywechat/easywechat/docs/node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!/home/runner/work/easywechat/easywechat/docs/node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!/home/runner/work/easywechat/easywechat/docs/.vuepress/.temp/pages/4.x/wework/agents.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const agents_html = (script);

/***/ })

};
;
//# sourceMappingURL=1441.app.js.map