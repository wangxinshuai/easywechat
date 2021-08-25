"use strict";
exports.id = 4802;
exports.ids = [4802];
exports.modules = {

/***/ 60170:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-248eb6f1",
  "path": "/5.x/wework/msg-audit.html",
  "title": "会话内容存档",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 3,
      "title": "获取会话内容存档开启成员列表",
      "slug": "获取会话内容存档开启成员列表",
      "children": []
    },
    {
      "level": 3,
      "title": "获取会话同意情况",
      "slug": "获取会话同意情况",
      "children": []
    },
    {
      "level": 3,
      "title": "获取会话内容存档内部群信息",
      "slug": "获取会话内容存档内部群信息",
      "children": []
    }
  ],
  "filePathRelative": "5.x/wework/msg-audit.md",
  "git": {
    "updatedTime": 1629906046000,
    "contributors": []
  }
}


/***/ }),

/***/ 67254:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ msg_audit_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.vuepress/.temp/pages/5.x/wework/msg-audit.html.vue?vue&type=template&id=b4dbcb50

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="会话内容存档" tabindex="-1"><a class="header-anchor" href="#会话内容存档" aria-hidden="true">#</a> 会话内容存档</h1><blockquote><p>企业需要使用会话内容存档应用secret所获取的accesstoken来调用。 原文: https://work.weixin.qq.com/api/doc/90000/90135/91614</p></blockquote><h3 id="获取会话内容存档开启成员列表" tabindex="-1"><a class="header-anchor" href="#获取会话内容存档开启成员列表" aria-hidden="true">#</a> 获取会话内容存档开启成员列表</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$type</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>

<span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">msg_audit</span><span class="token operator">-&gt;</span><span class="token function">getPermitUsers</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">\$type</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="获取会话同意情况" tabindex="-1"><a class="header-anchor" href="#获取会话同意情况" aria-hidden="true">#</a> 获取会话同意情况</h3><ul><li>单聊</li></ul><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$info</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span>
        <span class="token string double-quoted-string">&quot;userid&quot;</span> <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;XuJinSheng1&quot;</span><span class="token punctuation">,</span>
        <span class="token string double-quoted-string">&quot;exteranalopenid&quot;</span> <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;wmeDKaCQAAGd9oGiQWxVsAKwV2HxNAAA1&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>
        <span class="token string double-quoted-string">&quot;userid&quot;</span> <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;XuJinSheng2&quot;</span><span class="token punctuation">,</span>
        <span class="token string double-quoted-string">&quot;exteranalopenid&quot;</span> <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;wmeDKaCQAAGd9oGiQWxVsAKwV2HxNAAA2&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>
        <span class="token string double-quoted-string">&quot;userid&quot;</span> <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;XuJinSheng3&quot;</span><span class="token punctuation">,</span>
        <span class="token string double-quoted-string">&quot;exteranalopenid&quot;</span> <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;wmeDKaCQAAGd9oGiQWxVsAKwV2HxNAAA3&quot;</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">msg_audit</span><span class="token operator">-&gt;</span><span class="token function">getSingleAgreeStatus</span><span class="token punctuation">(</span><span class="token keyword type-hint">array</span> <span class="token variable">\$info</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><ul><li>群聊</li></ul><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$roomId</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;wrjc7bDwAASxc8tZvBErFE02BtPWyAAA&#39;</span><span class="token punctuation">;</span>

<span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">msg_audit</span><span class="token operator">-&gt;</span><span class="token function">getRoomAgreeStatus</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">\$roomId</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="获取会话内容存档内部群信息" tabindex="-1"><a class="header-anchor" href="#获取会话内容存档内部群信息" aria-hidden="true">#</a> 获取会话内容存档内部群信息</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$roomId</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;wrjc7bDwAASxc8tZvBErFE02BtPWyAAA&#39;</span><span class="token punctuation">;</span>

<span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">msg_audit</span><span class="token operator">-&gt;</span><span class="token function">getRoom</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">\$roomId</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><!--]-->`)
}
// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(84103);
;// CONCATENATED MODULE: ./.vuepress/.temp/pages/5.x/wework/msg-audit.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("/home/runner/work/easywechat/easywechat/docs/node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!/home/runner/work/easywechat/easywechat/docs/node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!/home/runner/work/easywechat/easywechat/docs/.vuepress/.temp/pages/5.x/wework/msg-audit.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const msg_audit_html = (script);

/***/ })

};
;
//# sourceMappingURL=4802.app.js.map