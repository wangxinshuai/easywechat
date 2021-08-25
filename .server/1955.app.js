"use strict";
exports.id = 1955;
exports.ids = [1955];
exports.modules = {

/***/ 86941:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-4d6de9dc",
  "path": "/5.x/official-account/template_message.html",
  "title": "模板消息",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "修改账号所属行业",
      "slug": "修改账号所属行业",
      "children": []
    },
    {
      "level": 2,
      "title": "获取支持的行业列表",
      "slug": "获取支持的行业列表",
      "children": []
    },
    {
      "level": 2,
      "title": "添加模板",
      "slug": "添加模板",
      "children": []
    },
    {
      "level": 2,
      "title": "获取所有模板列表",
      "slug": "获取所有模板列表",
      "children": []
    },
    {
      "level": 2,
      "title": "删除模板",
      "slug": "删除模板",
      "children": []
    },
    {
      "level": 2,
      "title": "发送模板消息",
      "slug": "发送模板消息",
      "children": []
    },
    {
      "level": 2,
      "title": "发送一次性订阅消息",
      "slug": "发送一次性订阅消息",
      "children": []
    }
  ],
  "filePathRelative": "5.x/official-account/template_message.md",
  "git": {
    "updatedTime": 1629906046000,
    "contributors": []
  }
}


/***/ }),

/***/ 77669:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ template_message_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.vuepress/.temp/pages/5.x/official-account/template_message.html.vue?vue&type=template&id=00c8f46c

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="模板消息" tabindex="-1"><a class="header-anchor" href="#模板消息" aria-hidden="true">#</a> 模板消息</h1><p>模板消息仅用于公众号向用户发送重要的服务通知，只能用于符合其要求的服务场景中，如信用卡刷卡通知，商品购买成功通知等。不支持广告等营销类消息以及其它所有可能对用户造成骚扰的消息。</p><h2 id="修改账号所属行业" tabindex="-1"><a class="header-anchor" href="#修改账号所属行业" aria-hidden="true">#</a> 修改账号所属行业</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">template_message</span><span class="token operator">-&gt;</span><span class="token function">setIndustry</span><span class="token punctuation">(</span><span class="token variable">\$industryId1</span><span class="token punctuation">,</span> <span class="token variable">\$industryId2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="获取支持的行业列表" tabindex="-1"><a class="header-anchor" href="#获取支持的行业列表" aria-hidden="true">#</a> 获取支持的行业列表</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">template_message</span><span class="token operator">-&gt;</span><span class="token function">getIndustry</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="添加模板" tabindex="-1"><a class="header-anchor" href="#添加模板" aria-hidden="true">#</a> 添加模板</h2><p>在公众号后台获取 <code>\$shortId</code> 并添加到账户。</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">template_message</span><span class="token operator">-&gt;</span><span class="token function">addTemplate</span><span class="token punctuation">(</span><span class="token variable">\$shortId</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="获取所有模板列表" tabindex="-1"><a class="header-anchor" href="#获取所有模板列表" aria-hidden="true">#</a> 获取所有模板列表</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">template_message</span><span class="token operator">-&gt;</span><span class="token function">getPrivateTemplates</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="删除模板" tabindex="-1"><a class="header-anchor" href="#删除模板" aria-hidden="true">#</a> 删除模板</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">template_message</span><span class="token operator">-&gt;</span><span class="token function">deletePrivateTemplate</span><span class="token punctuation">(</span><span class="token variable">\$templateId</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="发送模板消息" tabindex="-1"><a class="header-anchor" href="#发送模板消息" aria-hidden="true">#</a> 发送模板消息</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">template_message</span><span class="token operator">-&gt;</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
        <span class="token string single-quoted-string">&#39;touser&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;user-openid&#39;</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;template_id&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;template-id&#39;</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;url&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;https://easywechat.org&#39;</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;miniprogram&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
                <span class="token string single-quoted-string">&#39;appid&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;xxxxxxx&#39;</span><span class="token punctuation">,</span>
                <span class="token string single-quoted-string">&#39;pagepath&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;pages/xxx&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;data&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
            <span class="token string single-quoted-string">&#39;key1&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;VALUE&#39;</span><span class="token punctuation">,</span>
            <span class="token string single-quoted-string">&#39;key2&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;VALUE2&#39;</span><span class="token punctuation">,</span>
            <span class="token operator">...</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><blockquote><p>如果 url 和 miniprogram 字段都传，会优先跳转小程序。</p></blockquote><h2 id="发送一次性订阅消息" tabindex="-1"><a class="header-anchor" href="#发送一次性订阅消息" aria-hidden="true">#</a> 发送一次性订阅消息</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">template_message</span><span class="token operator">-&gt;</span><span class="token function">sendSubscription</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
        <span class="token string single-quoted-string">&#39;touser&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;user-openid&#39;</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;template_id&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;template-id&#39;</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;url&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;https://easywechat.org&#39;</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;scene&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">1000</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;data&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
            <span class="token string single-quoted-string">&#39;key1&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;VALUE&#39;</span><span class="token punctuation">,</span>
            <span class="token string single-quoted-string">&#39;key2&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;VALUE2&#39;</span><span class="token punctuation">,</span>
            <span class="token operator">...</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><blockquote><p>如果你想为发送的内容字段指定颜色，你可以将 &quot;data&quot; 部分写成下面 4 种不同的样式，不写 <code>color</code> 将会是默认黑色：</p></blockquote><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token string single-quoted-string">&#39;data&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
    <span class="token string single-quoted-string">&#39;foo&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;你好&#39;</span><span class="token punctuation">,</span>  <span class="token comment">// 不需要指定颜色</span>
    <span class="token string single-quoted-string">&#39;bar&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;你好&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;#F00&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 指定为红色</span>
    <span class="token string single-quoted-string">&#39;baz&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;value&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;你好&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;color&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;#550038&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 与第二种一样</span>
    <span class="token string single-quoted-string">&#39;zoo&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;value&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;你好&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 与第一种一样</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><!--]-->`)
}
// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(84103);
;// CONCATENATED MODULE: ./.vuepress/.temp/pages/5.x/official-account/template_message.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("/home/runner/work/easywechat/easywechat/docs/node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!/home/runner/work/easywechat/easywechat/docs/node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!/home/runner/work/easywechat/easywechat/docs/.vuepress/.temp/pages/5.x/official-account/template_message.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const template_message_html = (script);

/***/ })

};
;
//# sourceMappingURL=1955.app.js.map