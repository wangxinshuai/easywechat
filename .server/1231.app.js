"use strict";
exports.id = 1231;
exports.ids = [1231];
exports.modules = {

/***/ 37042:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-b603d3ec",
  "path": "/5.x/official-account/data_cube.html",
  "title": "数据统计与分析",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "示例",
      "slug": "示例",
      "children": []
    },
    {
      "level": 2,
      "title": "API",
      "slug": "api",
      "children": []
    }
  ],
  "filePathRelative": "5.x/official-account/data_cube.md",
  "git": {
    "updatedTime": 1629906046000,
    "contributors": []
  }
}


/***/ }),

/***/ 13773:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ data_cube_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.vuepress/.temp/pages/5.x/official-account/data_cube.html.vue?vue&type=template&id=3bbcb6d3

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="数据统计与分析" tabindex="-1"><a class="header-anchor" href="#数据统计与分析" aria-hidden="true">#</a> 数据统计与分析</h1><p>通过数据接口，开发者可以获取与公众平台官网统计模块类似但更灵活的数据，还可根据需要进行高级处理。</p><blockquote><p>{info}</p><ol><li>接口侧的公众号数据的数据库中仅存储了 <strong>2014年12月1日之后</strong>的数据，将查询不到在此之前的日期，即使有查到，也是不可信的脏数据；</li><li>请开发者在调用接口获取数据后，将数据保存在自身数据库中，即加快下次用户的访问速度，也降低了微信侧接口调用的不必要损耗。</li><li>额外注意，获取图文群发每日数据接口的结果中，只有<strong>中间页阅读人数+原文页阅读人数+分享转发人数+分享转发次数+收藏次数 &gt;=3</strong> 的结果才会得到统计，过小的阅读量的图文消息无法统计。</li></ol></blockquote><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$userSummary</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">data_cube</span><span class="token operator">-&gt;</span><span class="token function">userSummary</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;2014-12-07&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;2014-12-08&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token variable">\$userSummary</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//</span>
<span class="token comment">//[</span>
<span class="token comment">//    {</span>
<span class="token comment">//        &quot;ref_date&quot;: &quot;2014-12-07&quot;,</span>
<span class="token comment">//        &quot;user_source&quot;: 0,</span>
<span class="token comment">//        &quot;new_user&quot;: 0,</span>
<span class="token comment">//        &quot;cancel_user&quot;: 0</span>
<span class="token comment">//    }</span>
<span class="token comment">//    //后续还有ref_date在begin_date和end_date之间的数据</span>
<span class="token comment">// ]</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2><pre><code>\$from   示例： \`2014-02-13\` 获取数据的起始日期
\$to     示例： \`2014-02-18\` 获取数据的结束日期，\`\$to\`允许设置的最大值为昨日

\`\$from\` 和 \`\$to\` 的差值需小于 “最大时间跨度”（比如最大时间跨度为 1 时，\`\$from\` 和 \`\$to\` 的差值只能为 0，才能小于 1 ），否则会报错
</code></pre><ul><li><code>array userSummary(string \$from, string \$to)</code> 获取用户增减数据, 最大时间跨度：<strong>7</strong>;</li><li><code>array userCumulate(string \$from, string \$to)</code> 获取累计用户数据, 最大时间跨度：<strong>7</strong>;</li><li><code>array articleSummary(string \$from, string \$to)</code> 获取图文群发每日数据, 最大时间跨度：<strong>1</strong>;</li><li><code>array articleTotal(string \$from, string \$to)</code> 获取图文群发总数据, 最大时间跨度：<strong>1</strong>;</li><li><code>array userReadSummary(string \$from, string \$to)</code> 获取图文统计数据, 最大时间跨度：<strong>3</strong>;</li><li><code>array userReadHourly(string \$from, string \$to)</code> 获取图文统计分时数据, 最大时间跨度：<strong>1</strong>;</li><li><code>array userShareSummary(string \$from, string \$to)</code> 获取图文分享转发数据, 最大时间跨度：<strong>7</strong>;</li><li><code>array userShareHourly(string \$from, string \$to)</code> 获取图文分享转发分时数据, 最大时间跨度：<strong>1</strong>;</li><li><code>array upstreamMessageSummary(string \$from, string \$to)</code> 获取消息发送概况数据, 最大时间跨度：<strong>7</strong>;</li><li><code>array upstreamMessageHourly(string \$from, string \$to)</code> 获取消息发送分时数据, 最大时间跨度：<strong>1</strong>;</li><li><code>array upstreamMessageWeekly(string \$from, string \$to)</code> 获取消息发送周数据, 最大时间跨度：<strong>30</strong>;</li><li><code>array upstreamMessageMonthly(string \$from, string \$to)</code> 获取消息发送月数据, 最大时间跨度：<strong>30</strong>;</li><li><code>array upstreamMessageDistSummary(string \$from, string \$to)</code> 获取消息发送分布数据, 最大时间跨度：<strong>15</strong>;</li><li><code>array upstreamMessageDistWeekly(string \$from, string \$to)</code> 获取消息发送分布周数据, 最大时间跨度：<strong>30</strong>;</li><li><code>array upstreamMessageDistMonthly(string \$from, string \$to)</code> 获取消息发送分布月数据, 最大时间跨度：<strong>30</strong>;</li><li><code>array interfaceSummary(string \$from, string \$to)</code> 获取接口分析数据, 最大时间跨度：<strong>30</strong>;</li><li><code>array interfaceSummaryHourly(string \$from, string \$to)</code> 获取接口分析分时数据, 最大时间跨度：<strong>1</strong>;</li><li><code>array cardSummary(string \$from, string \$to, int \$condSource = 0)</code> 获取普通卡券分析分时数据, 最大时间跨度：<strong>1</strong>;</li><li><code>array freeCardSummary(string \$from, string \$to, int \$condSource = 0, string \$cardId = &#39;&#39;)</code> 获取免费券分析分时数据, 最大时间跨度：<strong>1</strong>;</li><li><code>array memberCardSummary(string \$from, string \$to, int \$condSource = 0)</code> 获取会员卡分析分时数据, 最大时间跨度：<strong>1</strong>;</li></ul><!--]-->`)
}
// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(84103);
;// CONCATENATED MODULE: ./.vuepress/.temp/pages/5.x/official-account/data_cube.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("/home/runner/work/easywechat/easywechat/docs/node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!/home/runner/work/easywechat/easywechat/docs/node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!/home/runner/work/easywechat/easywechat/docs/.vuepress/.temp/pages/5.x/official-account/data_cube.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const data_cube_html = (script);

/***/ })

};
;
//# sourceMappingURL=1231.app.js.map