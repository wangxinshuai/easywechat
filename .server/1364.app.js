"use strict";
exports.id = 1364;
exports.ids = [1364];
exports.modules = {

/***/ 77318:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-e50c7e72",
  "path": "/5.x/micro-merchant/merchant-config.html",
  "title": "小微商户配置",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "关注功能配置",
      "slug": "关注功能配置",
      "children": []
    },
    {
      "level": 2,
      "title": "开发配置新增支付目录",
      "slug": "开发配置新增支付目录",
      "children": []
    },
    {
      "level": 2,
      "title": "新增对应APPID关联",
      "slug": "新增对应appid关联",
      "children": []
    },
    {
      "level": 2,
      "title": "开发配置查询",
      "slug": "开发配置查询",
      "children": []
    }
  ],
  "filePathRelative": "5.x/micro-merchant/merchant-config.md",
  "git": {
    "updatedTime": 1629906046000,
    "contributors": []
  }
}


/***/ }),

/***/ 63494:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ merchant_config_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.vuepress/.temp/pages/5.x/micro-merchant/merchant-config.html.vue?vue&type=template&id=0e80b534

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="小微商户配置" tabindex="-1"><a class="header-anchor" href="#小微商户配置" aria-hidden="true">#</a> 小微商户配置</h1><h2 id="关注功能配置" tabindex="-1"><a class="header-anchor" href="#关注功能配置" aria-hidden="true">#</a> 关注功能配置</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$response</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">merchantConfig</span><span class="token operator">-&gt;</span><span class="token function">setFollowConfig</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">\$subAppId</span><span class="token punctuation">,</span> <span class="token keyword type-hint">string</span> <span class="token variable">\$subscribeAppId</span><span class="token punctuation">,</span> <span class="token keyword type-hint">string</span> <span class="token variable">\$receiptAppId</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token keyword type-hint">string</span> <span class="token variable">\$subMchId</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><blockquote><p>注意：<code>subscribe_appid</code>，<code>receipt_appid</code> 两个参数二选一，两个都填的话SDK默认选第一个，具体请参考小微商户专属文档</p></blockquote><h2 id="开发配置新增支付目录" tabindex="-1"><a class="header-anchor" href="#开发配置新增支付目录" aria-hidden="true">#</a> 开发配置新增支付目录</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$response</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">merchantConfig</span><span class="token operator">-&gt;</span><span class="token function">addPath</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">\$jsapiPath</span><span class="token punctuation">,</span> <span class="token keyword type-hint">string</span> <span class="token variable">\$appId</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token keyword type-hint">string</span> <span class="token variable">\$subMchId</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="新增对应appid关联" tabindex="-1"><a class="header-anchor" href="#新增对应appid关联" aria-hidden="true">#</a> 新增对应APPID关联</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$response</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">merchantConfig</span><span class="token operator">-&gt;</span><span class="token function">bindAppId</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">\$subAppId</span><span class="token punctuation">,</span> <span class="token keyword type-hint">string</span> <span class="token variable">\$appId</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token keyword type-hint">string</span> <span class="token variable">\$subMchId</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="开发配置查询" tabindex="-1"><a class="header-anchor" href="#开发配置查询" aria-hidden="true">#</a> 开发配置查询</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$response</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">merchantConfig</span><span class="token operator">-&gt;</span><span class="token function">getConfig</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">\$subMchId</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token keyword type-hint">string</span> <span class="token variable">\$appId</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><blockquote><p>以上接口调用过 <code>setSubMchId</code> 方法并且两个参数都传入过 则无需传入 <code>sub_mch_id</code> 和 <code>appid</code> 参数</p></blockquote><!--]-->`)
}
// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(84103);
;// CONCATENATED MODULE: ./.vuepress/.temp/pages/5.x/micro-merchant/merchant-config.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("/home/runner/work/easywechat/easywechat/docs/node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!/home/runner/work/easywechat/easywechat/docs/node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!/home/runner/work/easywechat/easywechat/docs/.vuepress/.temp/pages/5.x/micro-merchant/merchant-config.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const merchant_config_html = (script);

/***/ })

};
;
//# sourceMappingURL=1364.app.js.map