"use strict";
exports.id = 7484;
exports.ids = [7484];
exports.modules = {

/***/ 27220:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-fa5fa880",
  "path": "/4.x/official-account/menu.html",
  "title": "自定义菜单",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "读取（查询）已设置菜单",
      "slug": "读取-查询-已设置菜单",
      "children": []
    },
    {
      "level": 2,
      "title": "获取当前菜单",
      "slug": "获取当前菜单",
      "children": []
    },
    {
      "level": 2,
      "title": "添加菜单",
      "slug": "添加菜单",
      "children": [
        {
          "level": 3,
          "title": "添加普通菜单",
          "slug": "添加普通菜单",
          "children": []
        },
        {
          "level": 3,
          "title": "添加个性化菜单",
          "slug": "添加个性化菜单",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "删除菜单",
      "slug": "删除菜单",
      "children": []
    },
    {
      "level": 2,
      "title": "测试个性化菜单",
      "slug": "测试个性化菜单",
      "children": []
    }
  ],
  "filePathRelative": "4.x/official-account/menu.md",
  "git": {
    "updatedTime": 1629906046000,
    "contributors": []
  }
}


/***/ }),

/***/ 51669:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ menu_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.vuepress/.temp/pages/4.x/official-account/menu.html.vue?vue&type=template&id=0d3a094e

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="自定义菜单" tabindex="-1"><a class="header-anchor" href="#自定义菜单" aria-hidden="true">#</a> 自定义菜单</h1><h2 id="读取-查询-已设置菜单" tabindex="-1"><a class="header-anchor" href="#读取-查询-已设置菜单" aria-hidden="true">#</a> 读取（查询）已设置菜单</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$list</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">menu</span><span class="token operator">-&gt;</span><span class="token function">list</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="获取当前菜单" tabindex="-1"><a class="header-anchor" href="#获取当前菜单" aria-hidden="true">#</a> 获取当前菜单</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$current</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">menu</span><span class="token operator">-&gt;</span><span class="token function">current</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="添加菜单" tabindex="-1"><a class="header-anchor" href="#添加菜单" aria-hidden="true">#</a> 添加菜单</h2><h3 id="添加普通菜单" tabindex="-1"><a class="header-anchor" href="#添加普通菜单" aria-hidden="true">#</a> 添加普通菜单</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$buttons</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span>
        <span class="token string double-quoted-string">&quot;type&quot;</span> <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;click&quot;</span><span class="token punctuation">,</span>
        <span class="token string double-quoted-string">&quot;name&quot;</span> <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;今日歌曲&quot;</span><span class="token punctuation">,</span>
        <span class="token string double-quoted-string">&quot;key&quot;</span>  <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;V1001_TODAY_MUSIC&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>
        <span class="token string double-quoted-string">&quot;name&quot;</span>       <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;菜单&quot;</span><span class="token punctuation">,</span>
        <span class="token string double-quoted-string">&quot;sub_button&quot;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
            <span class="token punctuation">[</span>
                <span class="token string double-quoted-string">&quot;type&quot;</span> <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;view&quot;</span><span class="token punctuation">,</span>
                <span class="token string double-quoted-string">&quot;name&quot;</span> <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;搜索&quot;</span><span class="token punctuation">,</span>
                <span class="token string double-quoted-string">&quot;url&quot;</span>  <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;http://www.soso.com/&quot;</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token punctuation">[</span>
                <span class="token string double-quoted-string">&quot;type&quot;</span> <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;view&quot;</span><span class="token punctuation">,</span>
                <span class="token string double-quoted-string">&quot;name&quot;</span> <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;视频&quot;</span><span class="token punctuation">,</span>
                <span class="token string double-quoted-string">&quot;url&quot;</span>  <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;http://v.qq.com/&quot;</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token punctuation">[</span>
                <span class="token string double-quoted-string">&quot;type&quot;</span> <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;click&quot;</span><span class="token punctuation">,</span>
                <span class="token string double-quoted-string">&quot;name&quot;</span> <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;赞一下我们&quot;</span><span class="token punctuation">,</span>
                <span class="token string double-quoted-string">&quot;key&quot;</span> <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;V1001_GOOD&quot;</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">menu</span><span class="token operator">-&gt;</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token variable">\$buttons</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><p>以上将会创建一个普通菜单。</p><h3 id="添加个性化菜单" tabindex="-1"><a class="header-anchor" href="#添加个性化菜单" aria-hidden="true">#</a> 添加个性化菜单</h3><p>与创建普通菜单不同的是，需要在 <code>create()</code> 方法中将个性化匹配规则作为第二个参数传进去：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$buttons</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token comment">// ...</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token variable">\$matchRule</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token string double-quoted-string">&quot;tag_id&quot;</span> <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;2&quot;</span><span class="token punctuation">,</span>
    <span class="token string double-quoted-string">&quot;sex&quot;</span> <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;1&quot;</span><span class="token punctuation">,</span>
    <span class="token string double-quoted-string">&quot;country&quot;</span> <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;中国&quot;</span><span class="token punctuation">,</span>
    <span class="token string double-quoted-string">&quot;province&quot;</span> <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;广东&quot;</span><span class="token punctuation">,</span>
    <span class="token string double-quoted-string">&quot;city&quot;</span> <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;广州&quot;</span><span class="token punctuation">,</span>
    <span class="token string double-quoted-string">&quot;client_platform_type&quot;</span> <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;2&quot;</span><span class="token punctuation">,</span>
    <span class="token string double-quoted-string">&quot;language&quot;</span> <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;zh_CN&quot;</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">menu</span><span class="token operator">-&gt;</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token variable">\$buttons</span><span class="token punctuation">,</span> <span class="token variable">\$matchRule</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="删除菜单" tabindex="-1"><a class="header-anchor" href="#删除菜单" aria-hidden="true">#</a> 删除菜单</h2><p>有两种删除方式，一种是<strong>全部删除</strong>，另外一种是<strong>根据菜单 ID 来删除</strong>(删除个性化菜单时用，ID 从查询接口获取)：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">menu</span><span class="token operator">-&gt;</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 全部</span>
<span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">menu</span><span class="token operator">-&gt;</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token variable">\$menuId</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="测试个性化菜单" tabindex="-1"><a class="header-anchor" href="#测试个性化菜单" aria-hidden="true">#</a> 测试个性化菜单</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">menu</span><span class="token operator">-&gt;</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token variable">\$userId</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><blockquote><p><code>\$userId</code> 可以是粉丝的 OpenID，也可以是粉丝的微信号。</p></blockquote><p>返回 <code>\$menu</code> 与指定的 <code>\$userId</code> 匹配的菜单项。</p><!--]-->`)
}
// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(84103);
;// CONCATENATED MODULE: ./.vuepress/.temp/pages/4.x/official-account/menu.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("/home/runner/work/easywechat/easywechat/docs/node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!/home/runner/work/easywechat/easywechat/docs/node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!/home/runner/work/easywechat/easywechat/docs/.vuepress/.temp/pages/4.x/official-account/menu.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const menu_html = (script);

/***/ })

};
;
//# sourceMappingURL=7484.app.js.map