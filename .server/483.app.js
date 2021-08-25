"use strict";
exports.id = 483;
exports.ids = [483];
exports.modules = {

/***/ 9608:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-1308a7e8",
  "path": "/3.x/semantic.html",
  "title": "语义理解",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "获取实例",
      "slug": "获取实例",
      "children": []
    },
    {
      "level": 2,
      "title": "API",
      "slug": "api",
      "children": []
    }
  ],
  "filePathRelative": "3.x/semantic.md",
  "git": {
    "updatedTime": 1629906046000,
    "contributors": []
  }
}


/***/ }),

/***/ 91439:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ semantic_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(84103);
// EXTERNAL MODULE: external "@vue/server-renderer"
var server_renderer_ = __webpack_require__(32745);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.vuepress/.temp/pages/3.x/semantic.html.vue?vue&type=template&id=40d68163



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_OutboundLink = (0,external_vue_.resolveComponent)("OutboundLink")

  _push(`<!--[--><h1 id="语义理解" tabindex="-1"><a class="header-anchor" href="#语义理解" aria-hidden="true">#</a> 语义理解</h1><p>微信开放平台语义理解接口调用（http请求）简单方便，用户无需掌握语义理解及相关技术，只需根据自己的产品特点，选择相应的服务即可搭建一套智能语义服务。</p><h2 id="获取实例" tabindex="-1"><a class="header-anchor" href="#获取实例" aria-hidden="true">#</a> 获取实例</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token comment">// ... 前面部分省略</span>

<span class="token variable">\$app</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Application</span><span class="token punctuation">(</span><span class="token variable">\$options</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">\$semantic</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">semantic</span><span class="token punctuation">;</span>
</span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2><ul><li><p><code>query(\$keyword, \$categories, \$other)</code> 语义理解:</p><ul><li><code>\$keyword</code> 为关键字</li><li><code>\$categories</code> 需要使用的服务类型，数组或者多个用 “，” 隔开字符吕，不能为空;</li><li><code>\$other</code> 为其它属性： <ul><li><code>latitude</code> <code>float</code> 纬度坐标，与经度同时传入；与城市二选一传入</li><li><code>longitude</code> <code>float</code> 经度坐标，与纬度同时传入；与城市二选一传入</li><li><code>city</code> <code>string</code> 城市名称，与经纬度二选一传入</li><li><code>region</code> <code>string</code> 区域名称，在城市存在的情况下可省；与经纬度二选一传入</li><li><code>uid</code> <code>string</code> 用户唯一id（非开发者id），用户区分公众号下的不同用户（建议填入用户openid），如果为空，则无法使用上下文理解功能。appid和uid同时存在的情况下，才可以使用上下文理解功能。</li></ul></li></ul></li></ul><blockquote><p>注：单类别意图比较明确，识别的覆盖率比较大，所以如果只要使用特定某个类别，建议将category只设置为该类别。</p></blockquote><p>example:</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$result</span> <span class="token operator">=</span> <span class="token variable">\$semantic</span><span class="token operator">-&gt;</span><span class="token function">query</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;查一下明天从北京到上海的南航机票&#39;</span><span class="token punctuation">,</span> <span class="token string double-quoted-string">&quot;flight,hotel&quot;</span><span class="token punctuation">,</span> <span class="token keyword">array</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;city&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;北京&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;uid&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;123456&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 查询参数：</span>
<span class="token comment">// {</span>
<span class="token comment">//    &quot;query&quot;:&quot;查一下明天从北京到上海的南航机票&quot;,</span>
<span class="token comment">//    &quot;city&quot;:&quot;北京&quot;,</span>
<span class="token comment">//    &quot;category&quot;: &quot;flight,hotel&quot;,</span>
<span class="token comment">//    &quot;appid&quot;:&quot;wxaaaaaaaaaaaaaaaa&quot;,</span>
<span class="token comment">//    &quot;uid&quot;:&quot;123456&quot;</span>
<span class="token comment">// }</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>返回值示例：</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;errcode&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;query&quot;</span><span class="token operator">:</span><span class="token string">&quot;查一下明天从北京到上海的南航机票&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span><span class="token string">&quot;flight&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;semantic&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;details&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token property">&quot;start_loc&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
                <span class="token property">&quot;type&quot;</span><span class="token operator">:</span><span class="token string">&quot;LOC_CITY&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;city&quot;</span><span class="token operator">:</span><span class="token string">&quot;北京市&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;city_simple&quot;</span><span class="token operator">:</span><span class="token string">&quot;北京&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;loc_ori&quot;</span><span class="token operator">:</span><span class="token string">&quot;北京&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token property">&quot;end_loc&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;type&quot;</span><span class="token operator">:</span><span class="token string">&quot;LOC_CITY&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;city&quot;</span><span class="token operator">:</span><span class="token string">&quot;上海市&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;city_simple&quot;</span><span class="token operator">:</span><span class="token string">&quot;上海&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;loc_ori&quot;</span><span class="token operator">:</span><span class="token string">&quot;上海&quot;</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token property">&quot;start_date&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;type&quot;</span><span class="token operator">:</span><span class="token string">&quot;DT_ORI&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;date&quot;</span><span class="token operator">:</span><span class="token string">&quot;2014-03-05&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;date_ori&quot;</span><span class="token operator">:</span><span class="token string">&quot;明天&quot;</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
           <span class="token property">&quot;airline&quot;</span><span class="token operator">:</span><span class="token string">&quot;中国南方航空公司&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;intent&quot;</span><span class="token operator">:</span><span class="token string">&quot;SEARCH&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><p>更多详细内容与协议说明，请查看 <a href="http://mp.weixin.qq.com/wiki/" target="_blank" rel="noopener noreferrer">微信官方文档`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></p><!--]-->`)
}
;// CONCATENATED MODULE: ./.vuepress/.temp/pages/3.x/semantic.html.vue?vue&type=template&id=40d68163

;// CONCATENATED MODULE: ./.vuepress/.temp/pages/3.x/semantic.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("/home/runner/work/easywechat/easywechat/docs/node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!/home/runner/work/easywechat/easywechat/docs/node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!/home/runner/work/easywechat/easywechat/docs/.vuepress/.temp/pages/3.x/semantic.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const semantic_html = (script);

/***/ })

};
;
//# sourceMappingURL=483.app.js.map