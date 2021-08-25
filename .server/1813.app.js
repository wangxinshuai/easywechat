"use strict";
exports.id = 1813;
exports.ids = [1813];
exports.modules = {

/***/ 46927:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-393a7156",
  "path": "/5.x/wework/corp-group.html",
  "title": "企业互联",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 3,
      "title": "获取应用共享信息",
      "slug": "获取应用共享信息",
      "children": []
    },
    {
      "level": 3,
      "title": "获取下级企业的access_token",
      "slug": "获取下级企业的access-token",
      "children": []
    },
    {
      "level": 3,
      "title": "获取下级企业的小程序session",
      "slug": "获取下级企业的小程序session",
      "children": []
    }
  ],
  "filePathRelative": "5.x/wework/corp-group.md",
  "git": {
    "updatedTime": 1629906046000,
    "contributors": []
  }
}


/***/ }),

/***/ 21432:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ corp_group_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.vuepress/.temp/pages/5.x/wework/corp-group.html.vue?vue&type=template&id=01dff736

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="企业互联" tabindex="-1"><a class="header-anchor" href="#企业互联" aria-hidden="true">#</a> 企业互联</h1><h3 id="获取应用共享信息" tabindex="-1"><a class="header-anchor" href="#获取应用共享信息" aria-hidden="true">#</a> 获取应用共享信息</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$agentId</span> <span class="token operator">=</span> <span class="token number">100001</span><span class="token punctuation">;</span>

<span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">msg_audit</span><span class="token operator">-&gt;</span><span class="token function">getAppShareInfo</span><span class="token punctuation">(</span><span class="token keyword type-hint">int</span> <span class="token variable">\$agentId</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="获取下级企业的access-token" tabindex="-1"><a class="header-anchor" href="#获取下级企业的access-token" aria-hidden="true">#</a> 获取下级企业的access_token</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$corpId</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;wwd216fa8c4c5c0e7x&#39;</span><span class="token punctuation">;</span>
<span class="token variable">\$agentId</span> <span class="token operator">=</span> <span class="token number">100001</span><span class="token punctuation">;</span>

<span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">msg_audit</span><span class="token operator">-&gt;</span><span class="token function">getToken</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">\$corpId</span><span class="token punctuation">,</span> <span class="token keyword type-hint">int</span> <span class="token variable">\$agentId</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="获取下级企业的小程序session" tabindex="-1"><a class="header-anchor" href="#获取下级企业的小程序session" aria-hidden="true">#</a> 获取下级企业的小程序session</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$userId</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;wmAoNVCwAAUrSqEqz7oQpEIEMVWDrPeg&#39;</span><span class="token punctuation">;</span>
<span class="token variable">\$sessionKey</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;n8cnNEoyW1pxSRz6/Lwjwg==&#39;</span><span class="token punctuation">;</span>

<span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">msg_audit</span><span class="token operator">-&gt;</span><span class="token function">getMiniProgramTransferSession</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">\$userId</span><span class="token punctuation">,</span> <span class="token keyword type-hint">string</span> <span class="token variable">\$sessionKey</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><!--]-->`)
}
// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(84103);
;// CONCATENATED MODULE: ./.vuepress/.temp/pages/5.x/wework/corp-group.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("/home/runner/work/easywechat/easywechat/docs/node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!/home/runner/work/easywechat/easywechat/docs/node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!/home/runner/work/easywechat/easywechat/docs/.vuepress/.temp/pages/5.x/wework/corp-group.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const corp_group_html = (script);

/***/ })

};
;
//# sourceMappingURL=1813.app.js.map