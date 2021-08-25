"use strict";
exports.id = 5852;
exports.ids = [5852];
exports.modules = {

/***/ 56313:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-6a26a0eb",
  "path": "/4.x/mini-program/soter.html",
  "title": "生物认证",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "生物认证秘钥签名验证",
      "slug": "生物认证秘钥签名验证",
      "children": []
    }
  ],
  "filePathRelative": "4.x/mini-program/soter.md",
  "git": {
    "updatedTime": 1629906046000,
    "contributors": []
  }
}


/***/ }),

/***/ 59328:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ soter_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(84103);
// EXTERNAL MODULE: external "@vue/server-renderer"
var server_renderer_ = __webpack_require__(32745);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.vuepress/.temp/pages/4.x/mini-program/soter.html.vue?vue&type=template&id=d8dc33c4



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_OutboundLink = (0,external_vue_.resolveComponent)("OutboundLink")

  _push(`<!--[--><h1 id="生物认证" tabindex="-1"><a class="header-anchor" href="#生物认证" aria-hidden="true">#</a> 生物认证</h1><h2 id="生物认证秘钥签名验证" tabindex="-1"><a class="header-anchor" href="#生物认证秘钥签名验证" aria-hidden="true">#</a> 生物认证秘钥签名验证</h2><blockquote><p>https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/soter/soter.verifySignature.html</p></blockquote><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">soter</span><span class="token operator">-&gt;</span><span class="token function">verifySignature</span><span class="token punctuation">(</span><span class="token variable">\$openid</span><span class="token punctuation">,</span> <span class="token variable">\$json</span><span class="token punctuation">,</span> <span class="token variable">\$signature</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>返回值示例:</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;is_ok&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>参数说明:</p><blockquote><ul><li>string \$openid - 用户 openid</li><li>string \$json - 通过 <a href="https://developers.weixin.qq.com/miniprogram/dev/api/open-api/soter/wx.startSoterAuthentication.html" target="_blank" rel="noopener noreferrer">wx.startSoterAuthentication`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> 成功回调获得的 resultJSON 字段</li><li>string \$signature - 通过 <a href="https://developers.weixin.qq.com/miniprogram/dev/api/open-api/soter/wx.startSoterAuthentication.html" target="_blank" rel="noopener noreferrer">wx.startSoterAuthentication`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> 成功回调获得的 resultJSONSignature 字段</li></ul></blockquote><!--]-->`)
}
;// CONCATENATED MODULE: ./.vuepress/.temp/pages/4.x/mini-program/soter.html.vue?vue&type=template&id=d8dc33c4

;// CONCATENATED MODULE: ./.vuepress/.temp/pages/4.x/mini-program/soter.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("/home/runner/work/easywechat/easywechat/docs/node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!/home/runner/work/easywechat/easywechat/docs/node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!/home/runner/work/easywechat/easywechat/docs/.vuepress/.temp/pages/4.x/mini-program/soter.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const soter_html = (script);

/***/ })

};
;
//# sourceMappingURL=5852.app.js.map