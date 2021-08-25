"use strict";
exports.id = 9137;
exports.ids = [9137];
exports.modules = {

/***/ 13143:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-394d0740",
  "path": "/4.x/mini-program/template_message.html",
  "title": "模板消息",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "获取小程序模板库标题列表",
      "slug": "获取小程序模板库标题列表",
      "children": []
    },
    {
      "level": 2,
      "title": "获取模板库某个模板标题下关键词库",
      "slug": "获取模板库某个模板标题下关键词库",
      "children": []
    },
    {
      "level": 2,
      "title": "组合模板并添加至帐号下的个人模板库",
      "slug": "组合模板并添加至帐号下的个人模板库",
      "children": []
    },
    {
      "level": 2,
      "title": "获取帐号下已存在的模板列表",
      "slug": "获取帐号下已存在的模板列表",
      "children": []
    },
    {
      "level": 2,
      "title": "删除帐号下的某个模板",
      "slug": "删除帐号下的某个模板",
      "children": []
    },
    {
      "level": 2,
      "title": "发送模板消息",
      "slug": "发送模板消息",
      "children": []
    }
  ],
  "filePathRelative": "4.x/mini-program/template_message.md",
  "git": {
    "updatedTime": 1629906046000,
    "contributors": []
  }
}


/***/ }),

/***/ 68390:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ template_message_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.vuepress/.temp/pages/4.x/mini-program/template_message.html.vue?vue&type=template&id=03f96c40

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="模板消息" tabindex="-1"><a class="header-anchor" href="#模板消息" aria-hidden="true">#</a> 模板消息</h1><h2 id="获取小程序模板库标题列表" tabindex="-1"><a class="header-anchor" href="#获取小程序模板库标题列表" aria-hidden="true">#</a> 获取小程序模板库标题列表</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\$app-&gt;template_message-&gt;list(\$offset, \$count);
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="获取模板库某个模板标题下关键词库" tabindex="-1"><a class="header-anchor" href="#获取模板库某个模板标题下关键词库" aria-hidden="true">#</a> 获取模板库某个模板标题下关键词库</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\$app-&gt;template_message-&gt;get(\$id);
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="组合模板并添加至帐号下的个人模板库" tabindex="-1"><a class="header-anchor" href="#组合模板并添加至帐号下的个人模板库" aria-hidden="true">#</a> 组合模板并添加至帐号下的个人模板库</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\$app-&gt;template_message-&gt;add(\$id, \$keywordIdList);
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="获取帐号下已存在的模板列表" tabindex="-1"><a class="header-anchor" href="#获取帐号下已存在的模板列表" aria-hidden="true">#</a> 获取帐号下已存在的模板列表</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\$app-&gt;template_message-&gt;getTemplates(\$offset, \$count);
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="删除帐号下的某个模板" tabindex="-1"><a class="header-anchor" href="#删除帐号下的某个模板" aria-hidden="true">#</a> 删除帐号下的某个模板</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\$app-&gt;template_message-&gt;delete(\$templateId);
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="发送模板消息" tabindex="-1"><a class="header-anchor" href="#发送模板消息" aria-hidden="true">#</a> 发送模板消息</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">template_message</span><span class="token operator">-&gt;</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
    <span class="token string single-quoted-string">&#39;touser&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;user-openid&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;template_id&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;template-id&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;page&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;index&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;form_id&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;form-id&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;data&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
        <span class="token string single-quoted-string">&#39;keyword1&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;VALUE&#39;</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;keyword2&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;VALUE2&#39;</span><span class="token punctuation">,</span>
        <span class="token comment">// ...</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><!--]-->`)
}
// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(84103);
;// CONCATENATED MODULE: ./.vuepress/.temp/pages/4.x/mini-program/template_message.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("/home/runner/work/easywechat/easywechat/docs/node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!/home/runner/work/easywechat/easywechat/docs/node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!/home/runner/work/easywechat/easywechat/docs/.vuepress/.temp/pages/4.x/mini-program/template_message.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const template_message_html = (script);

/***/ })

};
;
//# sourceMappingURL=9137.app.js.map