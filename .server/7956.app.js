"use strict";
exports.id = 7956;
exports.ids = [7956];
exports.modules = {

/***/ 82602:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-c753ff78",
  "path": "/5.x/open-work/",
  "title": "企业微信第三方服务商",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "实例化",
      "slug": "实例化",
      "children": []
    }
  ],
  "filePathRelative": "5.x/open-work/index.md",
  "git": {
    "updatedTime": 1629906046000,
    "contributors": []
  }
}


/***/ }),

/***/ 60575:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ index_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.vuepress/.temp/pages/5.x/open-work/index.html.vue?vue&type=template&id=f348deaa

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="企业微信第三方服务商" tabindex="-1"><a class="header-anchor" href="#企业微信第三方服务商" aria-hidden="true">#</a> 企业微信第三方服务商</h1><h2 id="实例化" tabindex="-1"><a class="header-anchor" href="#实例化" aria-hidden="true">#</a> 实例化</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token keyword">use</span> <span class="token package">EasyWeChat<span class="token punctuation">\\</span>Factory</span><span class="token punctuation">;</span>

<span class="token variable">\$config</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
     <span class="token string single-quoted-string">&#39;corp_id&#39;</span>              <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;服务商的corpid&#39;</span><span class="token punctuation">,</span>
     <span class="token string single-quoted-string">&#39;secret&#39;</span>               <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;服务商的secret，在服务商管理后台可见&#39;</span><span class="token punctuation">,</span>
     <span class="token string single-quoted-string">&#39;suite_id&#39;</span>             <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;以ww或wx开头应用id&#39;</span><span class="token punctuation">,</span>
     <span class="token string single-quoted-string">&#39;suite_secret&#39;</span>         <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;应用secret&#39;</span><span class="token punctuation">,</span>
     <span class="token string single-quoted-string">&#39;token&#39;</span>                <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;应用的Token&#39;</span><span class="token punctuation">,</span>
     <span class="token string single-quoted-string">&#39;aes_key&#39;</span>              <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;应用的EncodingAESKey&#39;</span><span class="token punctuation">,</span>
     <span class="token string single-quoted-string">&#39;reg_template_id&#39;</span>      <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;注册定制化模板ID&#39;</span><span class="token punctuation">,</span>
     <span class="token string single-quoted-string">&#39;redirect_uri_install&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;安装应用的回调url（可选）&#39;</span><span class="token punctuation">,</span> 
     <span class="token string single-quoted-string">&#39;redirect_uri_single&#39;</span>  <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;单点登录回调url （可选）&#39;</span><span class="token punctuation">,</span> 
     <span class="token string single-quoted-string">&#39;redirect_uri_oauth&#39;</span>   <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;网页授权第三方回调url （可选）&#39;</span><span class="token punctuation">,</span> 
     
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token variable">\$app</span> <span class="token operator">=</span> <span class="token class-name static-context">Factory</span><span class="token operator">::</span><span class="token function">openWork</span><span class="token punctuation">(</span><span class="token variable">\$config</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><!--]-->`)
}
// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(84103);
;// CONCATENATED MODULE: ./.vuepress/.temp/pages/5.x/open-work/index.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("/home/runner/work/easywechat/easywechat/docs/node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!/home/runner/work/easywechat/easywechat/docs/node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!/home/runner/work/easywechat/easywechat/docs/.vuepress/.temp/pages/5.x/open-work/index.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const index_html = (script);

/***/ })

};
;
//# sourceMappingURL=7956.app.js.map