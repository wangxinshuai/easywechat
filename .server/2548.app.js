"use strict";
exports.id = 2548;
exports.ids = [2548];
exports.modules = {

/***/ 34437:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-76c548be",
  "path": "/4.x/mini-program/subscribe_message.html",
  "title": "订阅消息",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "组合模板并添加至帐号下的个人模板库",
      "slug": "组合模板并添加至帐号下的个人模板库",
      "children": []
    },
    {
      "level": 2,
      "title": "删除帐号下的个人模板",
      "slug": "删除帐号下的个人模板",
      "children": []
    },
    {
      "level": 2,
      "title": "获取小程序账号的类目",
      "slug": "获取小程序账号的类目",
      "children": []
    },
    {
      "level": 2,
      "title": "获取模板标题的关键词列表",
      "slug": "获取模板标题的关键词列表",
      "children": []
    },
    {
      "level": 2,
      "title": "获取帐号所属类目下的公共模板标题",
      "slug": "获取帐号所属类目下的公共模板标题",
      "children": []
    },
    {
      "level": 2,
      "title": "获取当前帐号下的个人模板列表",
      "slug": "获取当前帐号下的个人模板列表",
      "children": []
    },
    {
      "level": 2,
      "title": "发送订阅消息",
      "slug": "发送订阅消息",
      "children": []
    }
  ],
  "filePathRelative": "4.x/mini-program/subscribe_message.md",
  "git": {
    "updatedTime": 1629906046000,
    "contributors": []
  }
}


/***/ }),

/***/ 52155:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ subscribe_message_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.vuepress/.temp/pages/4.x/mini-program/subscribe_message.html.vue?vue&type=template&id=cfb098d0

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="订阅消息" tabindex="-1"><a class="header-anchor" href="#订阅消息" aria-hidden="true">#</a> 订阅消息</h1><blockquote><p>微信文档：https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/subscribe-message/subscribeMessage.addTemplate.html</p></blockquote><h2 id="组合模板并添加至帐号下的个人模板库" tabindex="-1"><a class="header-anchor" href="#组合模板并添加至帐号下的个人模板库" aria-hidden="true">#</a> 组合模板并添加至帐号下的个人模板库</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$tid</span> <span class="token operator">=</span> <span class="token number">563</span><span class="token punctuation">;</span>     <span class="token comment">// 模板标题 id，可通过接口获取，也可登录小程序后台查看获取</span>
<span class="token variable">\$kidList</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>      <span class="token comment">// 开发者自行组合好的模板关键词列表，可以通过 \`getTemplateKeywords\` 方法获取</span>
<span class="token variable">\$sceneDesc</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;提示用户图书到期&#39;</span><span class="token punctuation">;</span>    <span class="token comment">// 服务场景描述，非必填</span>

<span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">subscribe_message</span><span class="token operator">-&gt;</span><span class="token function">addTemplate</span><span class="token punctuation">(</span><span class="token variable">\$tid</span><span class="token punctuation">,</span> <span class="token variable">\$kidList</span><span class="token punctuation">,</span> <span class="token variable">\$sceneDesc</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="删除帐号下的个人模板" tabindex="-1"><a class="header-anchor" href="#删除帐号下的个人模板" aria-hidden="true">#</a> 删除帐号下的个人模板</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$templateId</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;bDmywsp2oEHjwAadTGKkUHpC0RgBVPvfAM7Cu1s03z8&#39;</span><span class="token punctuation">;</span>

<span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">subscribe_message</span><span class="token operator">-&gt;</span><span class="token function">deleteTemplate</span><span class="token punctuation">(</span><span class="token variable">\$templateId</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="获取小程序账号的类目" tabindex="-1"><a class="header-anchor" href="#获取小程序账号的类目" aria-hidden="true">#</a> 获取小程序账号的类目</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">subscribe_message</span><span class="token operator">-&gt;</span><span class="token function">getCategory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="获取模板标题的关键词列表" tabindex="-1"><a class="header-anchor" href="#获取模板标题的关键词列表" aria-hidden="true">#</a> 获取模板标题的关键词列表</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$tid</span> <span class="token operator">=</span> <span class="token number">563</span><span class="token punctuation">;</span>     <span class="token comment">// 模板标题 id，可通过接口获取，也可登录小程序后台查看获取</span>

<span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">subscribe_message</span><span class="token operator">-&gt;</span><span class="token function">getTemplateKeywords</span><span class="token punctuation">(</span><span class="token variable">\$tid</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="获取帐号所属类目下的公共模板标题" tabindex="-1"><a class="header-anchor" href="#获取帐号所属类目下的公共模板标题" aria-hidden="true">#</a> 获取帐号所属类目下的公共模板标题</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$ids</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">612</span><span class="token punctuation">,</span> <span class="token number">613</span><span class="token punctuation">]</span><span class="token punctuation">;</span>  <span class="token comment">// 类目 id</span>
<span class="token variable">\$start</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>         <span class="token comment">// 用于分页，表示从 start 开始。从 0 开始计数。  </span>
<span class="token variable">\$limit</span> <span class="token operator">=</span> <span class="token number">30</span><span class="token punctuation">;</span>        <span class="token comment">// 用于分页，表示拉取 limit 条记录。最大为 30。</span>

<span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">subscribe_message</span><span class="token operator">-&gt;</span><span class="token function">getTemplateTitles</span><span class="token punctuation">(</span><span class="token variable">\$ids</span><span class="token punctuation">,</span> <span class="token variable">\$start</span><span class="token punctuation">,</span> <span class="token variable">\$limit</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="获取当前帐号下的个人模板列表" tabindex="-1"><a class="header-anchor" href="#获取当前帐号下的个人模板列表" aria-hidden="true">#</a> 获取当前帐号下的个人模板列表</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">subscribe_message</span><span class="token operator">-&gt;</span><span class="token function">getTemplates</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="发送订阅消息" tabindex="-1"><a class="header-anchor" href="#发送订阅消息" aria-hidden="true">#</a> 发送订阅消息</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$data</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token string single-quoted-string">&#39;template_id&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;bDmywsp2oEHjwAadTGKkUJ-eJEiMiOf7H-dZ7wjdw80&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 所需下发的订阅模板id</span>
    <span class="token string single-quoted-string">&#39;touser&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;oSyZp5OBNPBRhG-7BVgWxbiNZm&#39;</span><span class="token punctuation">,</span>     <span class="token comment">// 接收者（用户）的 openid</span>
    <span class="token string single-quoted-string">&#39;page&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;&#39;</span><span class="token punctuation">,</span>       <span class="token comment">// 点击模板卡片后的跳转页面，仅限本小程序内的页面。支持带参数,（示例index?foo=bar）。该字段不填则模板无跳转。</span>
    <span class="token string single-quoted-string">&#39;data&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>         <span class="token comment">// 模板内容，格式形如 { &quot;key1&quot;: { &quot;value&quot;: any }, &quot;key2&quot;: { &quot;value&quot;: any } }</span>
        <span class="token string single-quoted-string">&#39;date01&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
            <span class="token string single-quoted-string">&#39;value&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;2019-12-01&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;number01&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
            <span class="token string single-quoted-string">&#39;value&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">10</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">subscribe_message</span><span class="token operator">-&gt;</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token variable">\$data</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><!--]-->`)
}
// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(84103);
;// CONCATENATED MODULE: ./.vuepress/.temp/pages/4.x/mini-program/subscribe_message.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("/home/runner/work/easywechat/easywechat/docs/node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!/home/runner/work/easywechat/easywechat/docs/node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!/home/runner/work/easywechat/easywechat/docs/.vuepress/.temp/pages/4.x/mini-program/subscribe_message.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const subscribe_message_html = (script);

/***/ })

};
;
//# sourceMappingURL=2548.app.js.map