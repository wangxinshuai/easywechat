"use strict";
exports.id = 2640;
exports.ids = [2640];
exports.modules = {

/***/ 69716:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-337d9cb8",
  "path": "/5.x/wework/agents.html",
  "title": "应用管理",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "应用列表",
      "slug": "应用列表",
      "children": []
    },
    {
      "level": 2,
      "title": "应用详情",
      "slug": "应用详情",
      "children": []
    },
    {
      "level": 2,
      "title": "设置应用",
      "slug": "设置应用",
      "children": []
    },
    {
      "level": 2,
      "title": "设置工作台自定义展示",
      "slug": "设置工作台自定义展示",
      "children": [
        {
          "level": 3,
          "title": "模版类型数据结构",
          "slug": "模版类型数据结构",
          "children": []
        },
        {
          "level": 3,
          "title": "设置应用在工作台展示的模版",
          "slug": "设置应用在工作台展示的模版",
          "children": []
        },
        {
          "level": 3,
          "title": "获取应用在工作台展示的模版",
          "slug": "获取应用在工作台展示的模版",
          "children": []
        },
        {
          "level": 3,
          "title": "设置应用在用户工作台展示的数据",
          "slug": "设置应用在用户工作台展示的数据",
          "children": []
        }
      ]
    }
  ],
  "filePathRelative": "5.x/wework/agents.md",
  "git": {
    "updatedTime": 1629906046000,
    "contributors": []
  }
}


/***/ }),

/***/ 55256:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ agents_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.vuepress/.temp/pages/5.x/wework/agents.html.vue?vue&type=template&id=74b7c2c4

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="应用管理" tabindex="-1"><a class="header-anchor" href="#应用管理" aria-hidden="true">#</a> 应用管理</h1><blockquote><p>{warning} 企业微信在17年11月对 API 进行了大量的改动，应用管理部分已经没啥用了</p></blockquote><p>应用管理是企业微信中比较特别的地方，因为它的使用是不基于应用的，或者说基于任何一个应用都能访问这些 API，所以在用法上是直接调用 work 实例的 <code>agent</code> 属性。</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$config</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token operator">...</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token variable">\$app</span> <span class="token operator">=</span> <span class="token class-name static-context">Factory</span><span class="token operator">::</span><span class="token function">work</span><span class="token punctuation">(</span><span class="token variable">\$config</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="应用列表" tabindex="-1"><a class="header-anchor" href="#应用列表" aria-hidden="true">#</a> 应用列表</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$agents</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">agent</span><span class="token operator">-&gt;</span><span class="token function">list</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 测试拿不到内容</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="应用详情" tabindex="-1"><a class="header-anchor" href="#应用详情" aria-hidden="true">#</a> 应用详情</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$agents</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">agent</span><span class="token operator">-&gt;</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token variable">\$agentId</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 只能传配置文件中的 id，API 改动所致</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="设置应用" tabindex="-1"><a class="header-anchor" href="#设置应用" aria-hidden="true">#</a> 设置应用</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$agents</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">agent</span><span class="token operator">-&gt;</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token variable">\$agentId</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;foo&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;bar&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="设置工作台自定义展示" tabindex="-1"><a class="header-anchor" href="#设置工作台自定义展示" aria-hidden="true">#</a> 设置工作台自定义展示</h2><h3 id="模版类型数据结构" tabindex="-1"><a class="header-anchor" href="#模版类型数据结构" aria-hidden="true">#</a> 模版类型数据结构</h3><p>可以通过接口配置展示类型。具体可设置:</p><ul><li>关键数据型</li><li>图片型</li><li>列表型</li><li>webview型</li></ul><blockquote><p>官方文档 https://open.work.weixin.qq.com/api/doc/90000/90135/92535</p></blockquote><h3 id="设置应用在工作台展示的模版" tabindex="-1"><a class="header-anchor" href="#设置应用在工作台展示的模版" aria-hidden="true">#</a> 设置应用在工作台展示的模版</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$params</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token string single-quoted-string">&#39;agentid&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">1000005</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;type&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;image&#39;</span><span class="token punctuation">,</span> <span class="token comment">//展示类型</span>
    <span class="token string single-quoted-string">&#39;image&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
        <span class="token string single-quoted-string">&#39;url&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;xxxx&#39;</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;jump_url&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;http://www.qq.com&#39;</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;pagepath&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;pages/index&#39;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;replace_user_data&#39;</span> <span class="token operator">=&gt;</span> <span class="token constant boolean">true</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token variable">\$agents</span><span class="token operator">-&gt;</span><span class="token property">agent_workbench</span><span class="token operator">-&gt;</span><span class="token function">setWorkbenchTemplate</span><span class="token punctuation">(</span><span class="token keyword type-hint">array</span> <span class="token variable">\$params</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h3 id="获取应用在工作台展示的模版" tabindex="-1"><a class="header-anchor" href="#获取应用在工作台展示的模版" aria-hidden="true">#</a> 获取应用在工作台展示的模版</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$agentId</span> <span class="token operator">=</span> <span class="token number">100005</span><span class="token punctuation">;</span>

<span class="token variable">\$agents</span><span class="token operator">-&gt;</span><span class="token property">agent_workbench</span><span class="token operator">-&gt;</span><span class="token function">getWorkbenchTemplate</span><span class="token punctuation">(</span><span class="token keyword type-hint">int</span> <span class="token variable">\$agentId</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="设置应用在用户工作台展示的数据" tabindex="-1"><a class="header-anchor" href="#设置应用在用户工作台展示的数据" aria-hidden="true">#</a> 设置应用在用户工作台展示的数据</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$params</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token string single-quoted-string">&#39;agentid&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">1000005</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;userid&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;test&#39;</span><span class="token punctuation">,</span> <span class="token comment">//员工id</span>
    <span class="token string single-quoted-string">&#39;type&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;keydata&#39;</span><span class="token punctuation">,</span> <span class="token comment">//展示类型</span>
    <span class="token string single-quoted-string">&#39;keydata&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
        <span class="token string single-quoted-string">&#39;items&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
            <span class="token punctuation">[</span>
                <span class="token string single-quoted-string">&#39;key&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;待审批&#39;</span><span class="token punctuation">,</span>
                <span class="token string single-quoted-string">&#39;data&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;2&#39;</span><span class="token punctuation">,</span>
                <span class="token string single-quoted-string">&#39;jump_url&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;http://www.qq.com&#39;</span><span class="token punctuation">,</span>
                <span class="token string single-quoted-string">&#39;pagepath&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;pages/index&#39;</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token punctuation">[</span>
                <span class="token string single-quoted-string">&#39;key&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;带批阅作业&#39;</span><span class="token punctuation">,</span>
                <span class="token string single-quoted-string">&#39;data&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;4&#39;</span><span class="token punctuation">,</span>
                <span class="token string single-quoted-string">&#39;jump_url&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;http://www.qq.com&#39;</span><span class="token punctuation">,</span>
                <span class="token string single-quoted-string">&#39;pagepath&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;pages/index&#39;</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token punctuation">[</span>
                <span class="token string single-quoted-string">&#39;key&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;成绩录入&#39;</span><span class="token punctuation">,</span>
                <span class="token string single-quoted-string">&#39;data&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;45&#39;</span><span class="token punctuation">,</span>
                <span class="token string single-quoted-string">&#39;jump_url&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;http://www.qq.com&#39;</span><span class="token punctuation">,</span>
                <span class="token string single-quoted-string">&#39;pagepath&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;pages/index&#39;</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token punctuation">[</span>
                <span class="token string single-quoted-string">&#39;key&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;综合评价&#39;</span><span class="token punctuation">,</span>
                <span class="token string single-quoted-string">&#39;data&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;98&#39;</span><span class="token punctuation">,</span>
                <span class="token string single-quoted-string">&#39;jump_url&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;http://www.qq.com&#39;</span><span class="token punctuation">,</span>
                <span class="token string single-quoted-string">&#39;pagepath&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;pages/index&#39;</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token variable">\$agents</span><span class="token operator">-&gt;</span><span class="token property">agent_workbench</span><span class="token operator">-&gt;</span><span class="token function">setWorkbenchData</span><span class="token punctuation">(</span><span class="token keyword type-hint">array</span> <span class="token variable">\$params</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div><!--]-->`)
}
// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(84103);
;// CONCATENATED MODULE: ./.vuepress/.temp/pages/5.x/wework/agents.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("/home/runner/work/easywechat/easywechat/docs/node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!/home/runner/work/easywechat/easywechat/docs/node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!/home/runner/work/easywechat/easywechat/docs/.vuepress/.temp/pages/5.x/wework/agents.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const agents_html = (script);

/***/ })

};
;
//# sourceMappingURL=2640.app.js.map