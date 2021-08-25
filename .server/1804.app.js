"use strict";
exports.id = 1804;
exports.ids = [1804];
exports.modules = {

/***/ 40138:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-21e2468e",
  "path": "/5.x/mini-program/plugin.html",
  "title": "插件管理",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "申请使用插件",
      "slug": "申请使用插件",
      "children": []
    },
    {
      "level": 2,
      "title": "删除已添加的插件",
      "slug": "删除已添加的插件",
      "children": []
    },
    {
      "level": 2,
      "title": "查询已添加的插件",
      "slug": "查询已添加的插件",
      "children": []
    },
    {
      "level": 2,
      "title": "获取当前所有插件使用方",
      "slug": "获取当前所有插件使用方",
      "children": []
    },
    {
      "level": 2,
      "title": "同意插件使用申请",
      "slug": "同意插件使用申请",
      "children": []
    },
    {
      "level": 2,
      "title": "拒绝插件使用申请",
      "slug": "拒绝插件使用申请",
      "children": []
    },
    {
      "level": 2,
      "title": "删除已拒绝的申请者",
      "slug": "删除已拒绝的申请者",
      "children": []
    }
  ],
  "filePathRelative": "5.x/mini-program/plugin.md",
  "git": {
    "updatedTime": 1629906046000,
    "contributors": []
  }
}


/***/ }),

/***/ 90679:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ plugin_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.vuepress/.temp/pages/5.x/mini-program/plugin.html.vue?vue&type=template&id=6e453e60

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="插件管理" tabindex="-1"><a class="header-anchor" href="#插件管理" aria-hidden="true">#</a> 插件管理</h1><blockquote><p>微信文档：https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/plugin-management/pluginManager.applyPlugin.html</p></blockquote><h2 id="申请使用插件" tabindex="-1"><a class="header-anchor" href="#申请使用插件" aria-hidden="true">#</a> 申请使用插件</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$pluginAppId</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;xxxxxxxxx&#39;</span><span class="token punctuation">;</span>

<span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">plugin</span><span class="token operator">-&gt;</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token variable">\$pluginAppId</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="删除已添加的插件" tabindex="-1"><a class="header-anchor" href="#删除已添加的插件" aria-hidden="true">#</a> 删除已添加的插件</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$pluginAppId</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;xxxxxxxxx&#39;</span><span class="token punctuation">;</span>

<span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">plugin</span><span class="token operator">-&gt;</span><span class="token function">unbind</span><span class="token punctuation">(</span><span class="token variable">\$pluginAppId</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="查询已添加的插件" tabindex="-1"><a class="header-anchor" href="#查询已添加的插件" aria-hidden="true">#</a> 查询已添加的插件</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">plugin</span><span class="token operator">-&gt;</span><span class="token function">list</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="获取当前所有插件使用方" tabindex="-1"><a class="header-anchor" href="#获取当前所有插件使用方" aria-hidden="true">#</a> 获取当前所有插件使用方</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$page</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token variable">\$size</span> <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>

<span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">plugin_dev</span><span class="token operator">-&gt;</span><span class="token function">getUsers</span><span class="token punctuation">(</span><span class="token variable">\$page</span><span class="token punctuation">,</span> <span class="token variable">\$size</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="同意插件使用申请" tabindex="-1"><a class="header-anchor" href="#同意插件使用申请" aria-hidden="true">#</a> 同意插件使用申请</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$appId</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;wxxxxxxxxxxxxxx&#39;</span><span class="token punctuation">;</span>

<span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">plugin_dev</span><span class="token operator">-&gt;</span><span class="token function">agree</span><span class="token punctuation">(</span><span class="token variable">\$appId</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="拒绝插件使用申请" tabindex="-1"><a class="header-anchor" href="#拒绝插件使用申请" aria-hidden="true">#</a> 拒绝插件使用申请</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">plugin_dev</span><span class="token operator">-&gt;</span><span class="token function">refuse</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;拒绝理由&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="删除已拒绝的申请者" tabindex="-1"><a class="header-anchor" href="#删除已拒绝的申请者" aria-hidden="true">#</a> 删除已拒绝的申请者</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">plugin_dev</span><span class="token operator">-&gt;</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><!--]-->`)
}
// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(84103);
;// CONCATENATED MODULE: ./.vuepress/.temp/pages/5.x/mini-program/plugin.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("/home/runner/work/easywechat/easywechat/docs/node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!/home/runner/work/easywechat/easywechat/docs/node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!/home/runner/work/easywechat/easywechat/docs/.vuepress/.temp/pages/5.x/mini-program/plugin.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const plugin_html = (script);

/***/ })

};
;
//# sourceMappingURL=1804.app.js.map