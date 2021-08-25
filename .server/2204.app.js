"use strict";
exports.id = 2204;
exports.ids = [2204];
exports.modules = {

/***/ 25192:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-7628dc96",
  "path": "/3.x/events.html",
  "title": "事件",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 3,
      "title": "在服务端接收用户端产生的事件",
      "slug": "在服务端接收用户端产生的事件",
      "children": []
    }
  ],
  "filePathRelative": "3.x/events.md",
  "git": {
    "updatedTime": 1629906046000,
    "contributors": []
  }
}


/***/ }),

/***/ 53659:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ events_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(84103);
// EXTERNAL MODULE: external "@vue/server-renderer"
var server_renderer_ = __webpack_require__(32745);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.vuepress/.temp/pages/3.x/events.html.vue?vue&type=template&id=9761ae06



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_RouterLink = (0,external_vue_.resolveComponent)("RouterLink")

  _push(`<!--[--><h1 id="事件" tabindex="-1"><a class="header-anchor" href="#事件" aria-hidden="true">#</a> 事件</h1><blockquote><p>注意：3.0 起，所有服务端的入口（<strong>消息与事件</strong>）都已经合并为一个方法来处理：<code>setMessageHandler()</code></p></blockquote><h3 id="在服务端接收用户端产生的事件" tabindex="-1"><a class="header-anchor" href="#在服务端接收用户端产生的事件" aria-hidden="true">#</a> 在服务端接收用户端产生的事件</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token keyword">use</span> <span class="token package">EasyWeChat<span class="token punctuation">\\</span>Foundation<span class="token punctuation">\\</span>Application</span><span class="token punctuation">;</span>

<span class="token comment">// ...</span>

<span class="token variable">\$app</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Application</span><span class="token punctuation">(</span><span class="token variable">\$options</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">\$server</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">server</span><span class="token punctuation">;</span>

<span class="token variable">\$server</span><span class="token operator">-&gt;</span><span class="token function">setMessageHandler</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token variable">\$message</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// 注意，这里的 \$message 不仅仅是用户发来的消息，也可能是事件</span>
    <span class="token comment">// 当 \$message-&gt;MsgType 为 event 时为事件</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">\$message</span><span class="token operator">-&gt;</span><span class="token property">MsgType</span> <span class="token operator">==</span> <span class="token string single-quoted-string">&#39;event&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment"># code...</span>
        <span class="token keyword">switch</span> <span class="token punctuation">(</span><span class="token variable">\$message</span><span class="token operator">-&gt;</span><span class="token property">Event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">case</span> <span class="token string single-quoted-string">&#39;subscribe&#39;</span><span class="token punctuation">:</span>
                <span class="token comment"># code...</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>

            <span class="token keyword">default</span><span class="token punctuation">:</span>
                <span class="token comment"># code...</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">\$response</span> <span class="token operator">=</span> <span class="token variable">\$server</span><span class="token operator">-&gt;</span><span class="token function">serve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">\$response</span><span class="token operator">-&gt;</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Laravel 里请使用：return \$response;</span>
</span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><blockquote><p>注意：<code>\$response</code> 是一个对象，不要直接 echo.</p></blockquote><p>更多请参考：`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_RouterLink, { to: "/3.x/server.html" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`服务端`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("服务端")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</p><p>关于事件类型请参考微信官方文档：http://mp.weixin.qq.com/wiki/</p><!--]-->`)
}
;// CONCATENATED MODULE: ./.vuepress/.temp/pages/3.x/events.html.vue?vue&type=template&id=9761ae06

;// CONCATENATED MODULE: ./.vuepress/.temp/pages/3.x/events.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("/home/runner/work/easywechat/easywechat/docs/node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!/home/runner/work/easywechat/easywechat/docs/node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!/home/runner/work/easywechat/easywechat/docs/.vuepress/.temp/pages/3.x/events.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const events_html = (script);

/***/ })

};
;
//# sourceMappingURL=2204.app.js.map