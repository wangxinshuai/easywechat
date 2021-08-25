"use strict";
exports.id = 4332;
exports.ids = [4332];
exports.modules = {

/***/ 96727:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-1f14785c",
  "path": "/5.x/customize/replace-service.html",
  "title": "自定义服务模块",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "filePathRelative": "5.x/customize/replace-service.md",
  "git": {
    "updatedTime": 1629906046000,
    "contributors": []
  }
}


/***/ }),

/***/ 80466:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ replace_service_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.vuepress/.temp/pages/5.x/customize/replace-service.html.vue?vue&type=template&id=624bb017

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="自定义服务模块" tabindex="-1"><a class="header-anchor" href="#自定义服务模块" aria-hidden="true">#</a> 自定义服务模块</h1><p>由于使用了容器模式来组织各模块的实例，意味着你可以比较容易的替换掉已经有的服务，以公众号服务为例：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code>
<span class="token operator">&lt;</span><span class="token operator">...</span><span class="token operator">&gt;</span>

<span class="token variable">\$app</span> <span class="token operator">=</span> <span class="token class-name static-context">Factory</span><span class="token operator">::</span><span class="token function">officialAccount</span><span class="token punctuation">(</span><span class="token variable">\$config</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token function">rebind</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;request&#39;</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">MyCustomRequest</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>这里的 <code>request</code> 为 SDK 内部服务名称。</p><!--]-->`)
}
// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(84103);
;// CONCATENATED MODULE: ./.vuepress/.temp/pages/5.x/customize/replace-service.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("/home/runner/work/easywechat/easywechat/docs/node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!/home/runner/work/easywechat/easywechat/docs/node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!/home/runner/work/easywechat/easywechat/docs/.vuepress/.temp/pages/5.x/customize/replace-service.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const replace_service_html = (script);

/***/ })

};
;
//# sourceMappingURL=4332.app.js.map