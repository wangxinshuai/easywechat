"use strict";
exports.id = 6205;
exports.ids = [6205];
exports.modules = {

/***/ 69409:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-022bf605",
  "path": "/3.x/js.html",
  "title": "JSSDK",
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
      "title": "API",
      "slug": "api",
      "children": []
    }
  ],
  "filePathRelative": "3.x/js.md",
  "git": {
    "updatedTime": 1629906046000,
    "contributors": []
  }
}


/***/ }),

/***/ 7757:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ js_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(84103);
// EXTERNAL MODULE: external "@vue/server-renderer"
var server_renderer_ = __webpack_require__(32745);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.vuepress/.temp/pages/3.x/js.html.vue?vue&type=template&id=d2b64182



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_OutboundLink = (0,external_vue_.resolveComponent)("OutboundLink")

  _push(`<!--[--><h1 id="jssdk" tabindex="-1"><a class="header-anchor" href="#jssdk" aria-hidden="true">#</a> JSSDK</h1><h2 id="获取实例" tabindex="-1"><a class="header-anchor" href="#获取实例" aria-hidden="true">#</a> 获取实例</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token keyword">use</span> <span class="token package">EasyWeChat<span class="token punctuation">\\</span>Foundation<span class="token punctuation">\\</span>Application</span><span class="token punctuation">;</span>
<span class="token comment">//...</span>
<span class="token variable">\$app</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Application</span><span class="token punctuation">(</span><span class="token variable">\$options</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">\$js</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">js</span><span class="token punctuation">;</span>
</span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2><ul><li><code>\$js-&gt;config(array \$APIs, \$debug = false, \$beta = false, \$json = true);</code> 获取JSSDK的配置数组，默认返回 JSON 字符串，当 <code>\$json</code> 为 <code>false</code> 时返回数组，你可以直接使用到网页中。</li><li><code>\$js-&gt;setUrl(\$url)</code> 设置当前URL，如果不想用默认读取的URL，可以使用此方法手动设置，通常不需要。</li></ul><p>example:</p><p>我们可以生成js配置文件：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">&quot;http://res.wx.qq.com/open/js/jweixin-1.0.0.js&quot;</span> type<span class="token operator">=</span><span class="token string">&quot;text/javascript&quot;</span> charset<span class="token operator">=</span><span class="token string">&quot;utf-8&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>script type<span class="token operator">=</span><span class="token string">&quot;text/javascript&quot;</span> charset<span class="token operator">=</span><span class="token string">&quot;utf-8&quot;</span><span class="token operator">&gt;</span>
    wx<span class="token punctuation">.</span><span class="token function">config</span><span class="token punctuation">(</span><span class="token operator">&lt;</span><span class="token operator">?</span>php echo \$js<span class="token operator">-</span><span class="token operator">&gt;</span><span class="token function">config</span><span class="token punctuation">(</span><span class="token function">array</span><span class="token punctuation">(</span><span class="token string">&#39;onMenuShareQQ&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;onMenuShareWeibo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token operator">?</span><span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>结果如下：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">&quot;http://res.wx.qq.com/open/js/jweixin-1.0.0.js&quot;</span> type<span class="token operator">=</span><span class="token string">&quot;text/javascript&quot;</span> charset<span class="token operator">=</span><span class="token string">&quot;utf-8&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>script type<span class="token operator">=</span><span class="token string">&quot;text/javascript&quot;</span> charset<span class="token operator">=</span><span class="token string">&quot;utf-8&quot;</span><span class="token operator">&gt;</span>
wx<span class="token punctuation">.</span><span class="token function">config</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    debug<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    appId<span class="token operator">:</span> <span class="token string">&#39;wx3cf0f39249eb0e60&#39;</span><span class="token punctuation">,</span>
    timestamp<span class="token operator">:</span> <span class="token number">1430009304</span><span class="token punctuation">,</span>
    nonceStr<span class="token operator">:</span> <span class="token string">&#39;qey94m021ik&#39;</span><span class="token punctuation">,</span>
    signature<span class="token operator">:</span> <span class="token string">&#39;4F76593A4245644FAE4E1BC940F6422A0C3EC03E&#39;</span><span class="token punctuation">,</span>
    jsApiList<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;onMenuShareQQ&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;onMenuShareWeibo&#39;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>更多 JSSDK 的使用请参考 <a href="http://mp.weixin.qq.com/wiki/" target="_blank" rel="noopener noreferrer">微信官方文档`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> 中 <strong>JSSDK章节</strong></p><!--]-->`)
}
;// CONCATENATED MODULE: ./.vuepress/.temp/pages/3.x/js.html.vue?vue&type=template&id=d2b64182

;// CONCATENATED MODULE: ./.vuepress/.temp/pages/3.x/js.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("/home/runner/work/easywechat/easywechat/docs/node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!/home/runner/work/easywechat/easywechat/docs/node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!/home/runner/work/easywechat/easywechat/docs/.vuepress/.temp/pages/3.x/js.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const js_html = (script);

/***/ })

};
;
//# sourceMappingURL=6205.app.js.map