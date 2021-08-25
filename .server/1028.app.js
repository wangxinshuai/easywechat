"use strict";
exports.id = 1028;
exports.ids = [1028];
exports.modules = {

/***/ 26084:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-29d100d4",
  "path": "/4.x/wework/menu.html",
  "title": "自定义菜单",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "创建菜单",
      "slug": "创建菜单",
      "children": []
    },
    {
      "level": 2,
      "title": "获取菜单",
      "slug": "获取菜单",
      "children": []
    },
    {
      "level": 2,
      "title": "删除菜单",
      "slug": "删除菜单",
      "children": []
    }
  ],
  "filePathRelative": "4.x/wework/menu.md",
  "git": {
    "updatedTime": 1629906046000,
    "contributors": []
  }
}


/***/ }),

/***/ 62868:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ menu_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.vuepress/.temp/pages/4.x/wework/menu.html.vue?vue&type=template&id=f086acb8

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="自定义菜单" tabindex="-1"><a class="header-anchor" href="#自定义菜单" aria-hidden="true">#</a> 自定义菜单</h1><p>自定义菜单是指为单个应用设置自定义菜单功能，所以在使用时请注意调用正确的应用实例。</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$config</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token string single-quoted-string">&#39;corp_id&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;xxxxxxxxxxxxxxxxx&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;secret&#39;</span>   <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;xxxxxxxxxx&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 应用的 secret</span>
    <span class="token comment">//...</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token variable">\$app</span> <span class="token operator">=</span> <span class="token class-name static-context">Factory</span><span class="token operator">::</span><span class="token function">work</span><span class="token punctuation">(</span><span class="token variable">\$config</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="创建菜单" tabindex="-1"><a class="header-anchor" href="#创建菜单" aria-hidden="true">#</a> 创建菜单</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$menus</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token string single-quoted-string">&#39;button&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
        <span class="token punctuation">[</span>
            <span class="token string single-quoted-string">&#39;name&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;首页&#39;</span><span class="token punctuation">,</span>
            <span class="token string single-quoted-string">&#39;type&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;view&#39;</span><span class="token punctuation">,</span>
            <span class="token string single-quoted-string">&#39;url&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;https://easywechat.com&#39;</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">[</span>
            <span class="token string single-quoted-string">&#39;name&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;关于我们&#39;</span><span class="token punctuation">,</span>
            <span class="token string single-quoted-string">&#39;type&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;view&#39;</span><span class="token punctuation">,</span>
            <span class="token string single-quoted-string">&#39;url&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;https://easywechat.com/about&#39;</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token comment">//...</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">menu</span><span class="token operator">-&gt;</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token variable">\$menus</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h2 id="获取菜单" tabindex="-1"><a class="header-anchor" href="#获取菜单" aria-hidden="true">#</a> 获取菜单</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">menu</span><span class="token operator">-&gt;</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="删除菜单" tabindex="-1"><a class="header-anchor" href="#删除菜单" aria-hidden="true">#</a> 删除菜单</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">menu</span><span class="token operator">-&gt;</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><!--]-->`)
}
// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(84103);
;// CONCATENATED MODULE: ./.vuepress/.temp/pages/4.x/wework/menu.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("/home/runner/work/easywechat/easywechat/docs/node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!/home/runner/work/easywechat/easywechat/docs/node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!/home/runner/work/easywechat/easywechat/docs/.vuepress/.temp/pages/4.x/wework/menu.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const menu_html = (script);

/***/ })

};
;
//# sourceMappingURL=1028.app.js.map