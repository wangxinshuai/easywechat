"use strict";
exports.id = 8744;
exports.ids = [8744];
exports.modules = {

/***/ 90806:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-3de2318c",
  "path": "/3.x/reply.html",
  "title": "自动回复",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "获取实例",
      "slug": "获取实例",
      "children": []
    },
    {
      "level": 2,
      "title": "获取当前设置的回复规则",
      "slug": "获取当前设置的回复规则",
      "children": []
    }
  ],
  "filePathRelative": "3.x/reply.md",
  "git": {
    "updatedTime": 1629906046000,
    "contributors": []
  }
}


/***/ }),

/***/ 52825:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ reply_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.vuepress/.temp/pages/3.x/reply.html.vue?vue&type=template&id=2b2ce28a

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="自动回复" tabindex="-1"><a class="header-anchor" href="#自动回复" aria-hidden="true">#</a> 自动回复</h1><h2 id="获取实例" tabindex="-1"><a class="header-anchor" href="#获取实例" aria-hidden="true">#</a> 获取实例</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token keyword">use</span> <span class="token package">EasyWeChat<span class="token punctuation">\\</span>Foundation<span class="token punctuation">\\</span>Application</span><span class="token punctuation">;</span>

<span class="token comment">// ...</span>

<span class="token variable">\$app</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Application</span><span class="token punctuation">(</span><span class="token variable">\$options</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">\$reply</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">reply</span><span class="token punctuation">;</span>
</span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="获取当前设置的回复规则" tabindex="-1"><a class="header-anchor" href="#获取当前设置的回复规则" aria-hidden="true">#</a> 获取当前设置的回复规则</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$reply</span><span class="token operator">-&gt;</span><span class="token function">current</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><!--]-->`)
}
// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(84103);
;// CONCATENATED MODULE: ./.vuepress/.temp/pages/3.x/reply.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("/home/runner/work/easywechat/easywechat/docs/node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!/home/runner/work/easywechat/easywechat/docs/node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!/home/runner/work/easywechat/easywechat/docs/.vuepress/.temp/pages/3.x/reply.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const reply_html = (script);

/***/ })

};
;
//# sourceMappingURL=8744.app.js.map