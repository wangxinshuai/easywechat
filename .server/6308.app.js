"use strict";
exports.id = 6308;
exports.ids = [6308];
exports.modules = {

/***/ 28413:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-364c3c1e",
  "path": "/5.x/basic-services/jssdk.html",
  "title": "JSSDK",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "API",
      "slug": "api",
      "children": []
    }
  ],
  "filePathRelative": "5.x/basic-services/jssdk.md",
  "git": {
    "updatedTime": 1629906046000,
    "contributors": []
  }
}


/***/ }),

/***/ 97242:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ jssdk_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.vuepress/.temp/pages/5.x/basic-services/jssdk.html.vue?vue&type=template&id=614f6d04

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="jssdk" tabindex="-1"><a class="header-anchor" href="#jssdk" aria-hidden="true">#</a> JSSDK</h1><p>微信 JSSDK 官方文档：https://mp.weixin.qq.com/wiki?t=resource/res_main&amp;id=mp1421141115</p><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2><h4 id="获取jssdk的配置数组" tabindex="-1"><a class="header-anchor" href="#获取jssdk的配置数组" aria-hidden="true">#</a> 获取JSSDK的配置数组</h4><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">jssdk</span><span class="token operator">-&gt;</span><span class="token function">buildConfig</span><span class="token punctuation">(</span><span class="token keyword type-hint">array</span> <span class="token variable">\$APIs</span><span class="token punctuation">,</span> <span class="token variable">\$debug</span> <span class="token operator">=</span> <span class="token constant boolean">false</span><span class="token punctuation">,</span> <span class="token variable">\$beta</span> <span class="token operator">=</span> <span class="token constant boolean">false</span><span class="token punctuation">,</span> <span class="token variable">\$json</span> <span class="token operator">=</span> <span class="token constant boolean">true</span><span class="token punctuation">,</span> <span class="token keyword type-hint">array</span> <span class="token variable">\$openTagList</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>默认返回 JSON 字符串，当 <code>\$json</code> 为 <code>false</code> 时返回数组，你可以直接使用到网页中。</p><h4 id="设置当前url" tabindex="-1"><a class="header-anchor" href="#设置当前url" aria-hidden="true">#</a> 设置当前URL</h4><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">jssdk</span><span class="token operator">-&gt;</span><span class="token function">setUrl</span><span class="token punctuation">(</span><span class="token variable">\$url</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>如果不想用默认读取的URL，可以使用此方法手动设置，通常不需要。</p><h4 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h4><p>我们可以生成js配置文件：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">&quot;https://res.wx.qq.com/open/js/jweixin-1.4.0.js&quot;</span> type<span class="token operator">=</span><span class="token string">&quot;text/javascript&quot;</span> charset<span class="token operator">=</span><span class="token string">&quot;utf-8&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>script type<span class="token operator">=</span><span class="token string">&quot;text/javascript&quot;</span> charset<span class="token operator">=</span><span class="token string">&quot;utf-8&quot;</span><span class="token operator">&gt;</span>
    wx<span class="token punctuation">.</span><span class="token function">config</span><span class="token punctuation">(</span><span class="token operator">&lt;</span><span class="token operator">?</span>php echo \$app<span class="token operator">-</span><span class="token operator">&gt;</span>jssdk<span class="token operator">-</span><span class="token operator">&gt;</span><span class="token function">buildConfig</span><span class="token punctuation">(</span><span class="token function">array</span><span class="token punctuation">(</span><span class="token string">&#39;updateAppMessageShareData&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;updateTimelineShareData&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token operator">?</span><span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>结果如下：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">&quot;https://res.wx.qq.com/open/js/jweixin-1.4.0.js&quot;</span> type<span class="token operator">=</span><span class="token string">&quot;text/javascript&quot;</span> charset<span class="token operator">=</span><span class="token string">&quot;utf-8&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>script type<span class="token operator">=</span><span class="token string">&quot;text/javascript&quot;</span> charset<span class="token operator">=</span><span class="token string">&quot;utf-8&quot;</span><span class="token operator">&gt;</span>
wx<span class="token punctuation">.</span><span class="token function">config</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    debug<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 请在上线前删除它</span>
    appId<span class="token operator">:</span> <span class="token string">&#39;wx3cf0f39249eb0e60&#39;</span><span class="token punctuation">,</span>
    timestamp<span class="token operator">:</span> <span class="token number">1430009304</span><span class="token punctuation">,</span>
    nonceStr<span class="token operator">:</span> <span class="token string">&#39;qey94m021ik&#39;</span><span class="token punctuation">,</span>
    signature<span class="token operator">:</span> <span class="token string">&#39;4F76593A4245644FAE4E1BC940F6422A0C3EC03E&#39;</span><span class="token punctuation">,</span>
    jsApiList<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;updateAppMessageShareData&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;updateTimelineShareData&#39;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><!--]-->`)
}
// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(84103);
;// CONCATENATED MODULE: ./.vuepress/.temp/pages/5.x/basic-services/jssdk.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("/home/runner/work/easywechat/easywechat/docs/node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!/home/runner/work/easywechat/easywechat/docs/node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!/home/runner/work/easywechat/easywechat/docs/.vuepress/.temp/pages/5.x/basic-services/jssdk.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const jssdk_html = (script);

/***/ })

};
;
//# sourceMappingURL=6308.app.js.map