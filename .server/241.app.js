"use strict";
exports.id = 241;
exports.ids = [241];
exports.modules = {

/***/ 1757:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-7fec7a39",
  "path": "/5.x/wework/message.html",
  "title": "消息",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "主动发送消息",
      "slug": "主动发送消息",
      "children": []
    },
    {
      "level": 2,
      "title": "接收消息",
      "slug": "接收消息",
      "children": []
    },
    {
      "level": 2,
      "title": "更新任务卡片消息状态",
      "slug": "更新任务卡片消息状态",
      "children": []
    }
  ],
  "filePathRelative": "5.x/wework/message.md",
  "git": {
    "updatedTime": 1629906046000,
    "contributors": []
  }
}


/***/ }),

/***/ 98685:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ message_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.vuepress/.temp/pages/5.x/wework/message.html.vue?vue&type=template&id=113ebe3c

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="消息" tabindex="-1"><a class="header-anchor" href="#消息" aria-hidden="true">#</a> 消息</h1><h2 id="主动发送消息" tabindex="-1"><a class="header-anchor" href="#主动发送消息" aria-hidden="true">#</a> 主动发送消息</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">EasyWeChat<span class="token punctuation">\\</span>Kernel<span class="token punctuation">\\</span>Messages<span class="token punctuation">\\</span>TextCard</span><span class="token punctuation">;</span>


<span class="token comment">// 获取 Messenger 实例</span>
<span class="token variable">\$messenger</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">messenger</span><span class="token punctuation">;</span>

<span class="token comment">// 准备消息</span>
<span class="token variable">\$message</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TextCard</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
    <span class="token string single-quoted-string">&#39;title&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;你的请假单审批通过&#39;</span><span class="token punctuation">,</span> 
    <span class="token string single-quoted-string">&#39;description&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;单号：1928373, ....&#39;</span><span class="token punctuation">,</span> 
    <span class="token string single-quoted-string">&#39;url&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;http://easywechat.com/oa/....&#39;</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 发送</span>
<span class="token variable">\$messenger</span><span class="token operator">-&gt;</span><span class="token function">message</span><span class="token punctuation">(</span><span class="token variable">\$message</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">toUser</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;overtrue&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>你也可以很方便的发送普通文本消息：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$messenger</span><span class="token operator">-&gt;</span><span class="token function">message</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;你的请假单（单号：1928373）已经审批通过！&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">toUser</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;overtrue&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 或者写成</span>
<span class="token variable">\$messenger</span><span class="token operator">-&gt;</span><span class="token function">toUser</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;overtrue&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;你的请假单（单号：1928373）已经审批通过！&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="接收消息" tabindex="-1"><a class="header-anchor" href="#接收消息" aria-hidden="true">#</a> 接收消息</h2><p>被动接收消息，与回复消息，请参考：<a href="server">服务端</a></p><h2 id="更新任务卡片消息状态" tabindex="-1"><a class="header-anchor" href="#更新任务卡片消息状态" aria-hidden="true">#</a> 更新任务卡片消息状态</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$messenger</span><span class="token operator">-&gt;</span><span class="token function">updateTaskcard</span><span class="token punctuation">(</span><span class="token keyword type-hint">array</span> <span class="token variable">\$userids</span><span class="token punctuation">,</span> <span class="token keyword type-hint">int</span> <span class="token variable">\$agentId</span><span class="token punctuation">,</span> <span class="token keyword type-hint">string</span> <span class="token variable">\$taskId</span><span class="token punctuation">,</span> <span class="token keyword type-hint">string</span> <span class="token variable">\$replaceName</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;已收到&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><!--]-->`)
}
// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(84103);
;// CONCATENATED MODULE: ./.vuepress/.temp/pages/5.x/wework/message.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("/home/runner/work/easywechat/easywechat/docs/node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!/home/runner/work/easywechat/easywechat/docs/node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!/home/runner/work/easywechat/easywechat/docs/.vuepress/.temp/pages/5.x/wework/message.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const message_html = (script);

/***/ })

};
;
//# sourceMappingURL=241.app.js.map