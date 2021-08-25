"use strict";
exports.id = 6446;
exports.ids = [6446];
exports.modules = {

/***/ 85149:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-62b73ec6",
  "path": "/3.x/message-transfer.html",
  "title": "多客服消息转发",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "filePathRelative": "3.x/message-transfer.md",
  "git": {
    "updatedTime": 1629906046000,
    "contributors": []
  }
}


/***/ }),

/***/ 34464:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ message_transfer_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(84103);
// EXTERNAL MODULE: external "@vue/server-renderer"
var server_renderer_ = __webpack_require__(32745);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.vuepress/.temp/pages/3.x/message-transfer.html.vue?vue&type=template&id=3b8e96e3



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_OutboundLink = (0,external_vue_.resolveComponent)("OutboundLink")

  _push(`<!--[--><h1 id="多客服消息转发" tabindex="-1"><a class="header-anchor" href="#多客服消息转发" aria-hidden="true">#</a> 多客服消息转发</h1><p>多客服的消息转发绝对是超级的简单，转发的消息类型为 <code>transfer</code>：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code>

  <span class="token comment">// 转发收到的消息给客服</span>
  <span class="token variable">\$server</span><span class="token operator">-&gt;</span><span class="token function">setMessageHandler</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token variable">\$message</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name class-name-fully-qualified"><span class="token punctuation">\\</span>EasyWeChat<span class="token punctuation">\\</span>Message<span class="token punctuation">\\</span>Transfer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token variable">\$result</span> <span class="token operator">=</span> <span class="token variable">\$server</span><span class="token operator">-&gt;</span><span class="token function">serve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">echo</span> <span class="token variable">\$result</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>当然，你也可以指定转发给某一个客服：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$server</span><span class="token operator">-&gt;</span><span class="token function">setMessageHandler</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token variable">\$message</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token variable">\$transfer</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name class-name-fully-qualified"><span class="token punctuation">\\</span>EasyWeChat<span class="token punctuation">\\</span>Message<span class="token punctuation">\\</span>Transfer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token variable">\$transfer</span><span class="token operator">-&gt;</span><span class="token function">account</span><span class="token punctuation">(</span><span class="token variable">\$account</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 或者 \$transfer-&gt;to(\$account);</span>

    <span class="token keyword">return</span> <span class="token variable">\$transfer</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>更多请参考 <a href="http://mp.weixin.qq.com/wiki/" target="_blank" rel="noopener noreferrer">微信官方文档`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> <strong>多客服消息转发</strong> 章节</p><!--]-->`)
}
;// CONCATENATED MODULE: ./.vuepress/.temp/pages/3.x/message-transfer.html.vue?vue&type=template&id=3b8e96e3

;// CONCATENATED MODULE: ./.vuepress/.temp/pages/3.x/message-transfer.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("/home/runner/work/easywechat/easywechat/docs/node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!/home/runner/work/easywechat/easywechat/docs/node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!/home/runner/work/easywechat/easywechat/docs/.vuepress/.temp/pages/3.x/message-transfer.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const message_transfer_html = (script);

/***/ })

};
;
//# sourceMappingURL=6446.app.js.map