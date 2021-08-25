"use strict";
exports.id = 5495;
exports.ids = [5495];
exports.modules = {

/***/ 95819:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-b62d4c38",
  "path": "/5.x/wework/mini-program.html",
  "title": "小程序",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "登录获取用户信息",
      "slug": "登录获取用户信息",
      "children": []
    }
  ],
  "filePathRelative": "5.x/wework/mini-program.md",
  "git": {
    "updatedTime": 1629906046000,
    "contributors": []
  }
}


/***/ }),

/***/ 87000:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ mini_program_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.vuepress/.temp/pages/5.x/wework/mini-program.html.vue?vue&type=template&id=70f9a830

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="小程序" tabindex="-1"><a class="header-anchor" href="#小程序" aria-hidden="true">#</a> 小程序</h1><h2 id="登录获取用户信息" tabindex="-1"><a class="header-anchor" href="#登录获取用户信息" aria-hidden="true">#</a> 登录获取用户信息</h2><blockquote><p>注意：需要关联小程序，并且使用关联后的小程序AgentId与Secret。</p></blockquote><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$config</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token string single-quoted-string">&#39;corp_id&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;xxxxxxxxxxxxxxxxx&#39;</span><span class="token punctuation">,</span> <span class="token comment">//企业id</span>

    <span class="token string single-quoted-string">&#39;agent_id&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">100020</span><span class="token punctuation">,</span> <span class="token comment">// 企业微信关联后的AgentId</span>
    <span class="token string single-quoted-string">&#39;secret&#39;</span>   <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;xxxxxxxxxx&#39;</span><span class="token punctuation">,</span> <span class="token comment">//企业微信关联后的Secret</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token variable">\$app</span> <span class="token operator">=</span> <span class="token class-name static-context">Factory</span><span class="token operator">::</span><span class="token function">work</span><span class="token punctuation">(</span><span class="token variable">\$config</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">\$miniProgram</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token function">miniProgram</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">\$res</span> <span class="token operator">=</span> <span class="token variable">\$miniProgram</span><span class="token operator">-&gt;</span><span class="token property">auth</span><span class="token operator">-&gt;</span><span class="token function">session</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;js-code&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><!--]-->`)
}
// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(84103);
;// CONCATENATED MODULE: ./.vuepress/.temp/pages/5.x/wework/mini-program.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("/home/runner/work/easywechat/easywechat/docs/node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!/home/runner/work/easywechat/easywechat/docs/node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!/home/runner/work/easywechat/easywechat/docs/.vuepress/.temp/pages/5.x/wework/mini-program.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const mini_program_html = (script);

/***/ })

};
;
//# sourceMappingURL=5495.app.js.map