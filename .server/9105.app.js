"use strict";
exports.id = 9105;
exports.ids = [9105];
exports.modules = {

/***/ 56000:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-0a1ebc18",
  "path": "/3.x/anaylsis.html",
  "title": "数据统计与分析",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 3,
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
  "filePathRelative": "3.x/anaylsis.md",
  "git": {
    "updatedTime": 1629906046000,
    "contributors": []
  }
}


/***/ }),

/***/ 81752:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ anaylsis_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.vuepress/.temp/pages/3.x/anaylsis.html.vue?vue&type=template&id=c96a2704

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="数据统计与分析" tabindex="-1"><a class="header-anchor" href="#数据统计与分析" aria-hidden="true">#</a> 数据统计与分析</h1><p>通过数据接口，开发者可以获取与公众平台官网统计模块类似但更灵活的数据，还可根据需要进行高级处理。</p><blockquote><ol><li>接口侧的公众号数据的数据库中仅存储了 <strong>2014年12月1日之后</strong>的数据，将查询不到在此之前的日期，即使有查到，也是不可信的脏数据；</li><li>请开发者在调用接口获取数据后，将数据保存在自身数据库中，即加快下次用户的访问速度，也降低了微信侧接口调用的不必要损耗。</li><li>额外注意，获取图文群发每日数据接口的结果中，只有<strong>中间页阅读人数+原文页阅读人数+分享转发人数+分享转发次数+收藏次数 &gt;=3</strong> 的结果才会得到统计，过小的阅读量的图文消息无法统计。</li></ol></blockquote><h3 id="获取实例" tabindex="-1"><a class="header-anchor" href="#获取实例" aria-hidden="true">#</a> 获取实例</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">use</span> <span class="token package">EasyWeChat<span class="token punctuation">\\</span>Foundation<span class="token punctuation">\\</span>Application</span><span class="token punctuation">;</span>

<span class="token comment">//...</span>

<span class="token variable">\$app</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Application</span><span class="token punctuation">(</span><span class="token variable">\$options</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">\$stats</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">stats</span><span class="token punctuation">;</span>
</span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2><pre><code>\$from   example: \`2014-02-13\` 获取数据的起始日期
\$to     example: \`2014-02-18\` 获取数据的结束日期，\`\$to\`允许设置的最大值为昨日

\`\$from\` 和 \`\$to\` 的差值需小于 “最大时间跨度”（比如最大时间跨度为 1 时，\`\$from\` 和 \`\$to\` 的差值只能为 0，才能小于 1 ），否则会报错
</code></pre><ul><li><code>array userSummary(\$from, \$to)</code> 获取用户增减数据, 最大时间跨度：<strong>7</strong>;</li><li><code>array userCumulate(\$from, \$to)</code> 获取累计用户数据, 最大时间跨度：<strong>7</strong>;</li><li><code>array articleSummary(\$from, \$to)</code> 获取图文群发每日数据, 最大时间跨度：<strong>1</strong>;</li><li><code>array articleTotal(\$from, \$to)</code> 获取图文群发总数据, 最大时间跨度：<strong>1</strong>;</li><li><code>array userReadSummary(\$from, \$to)</code> 获取图文统计数据, 最大时间跨度：<strong>3</strong>;</li><li><code>array userReadHourly(\$from, \$to)</code> 获取图文统计分时数据, 最大时间跨度：<strong>1</strong>;</li><li><code>array userShareSummary(\$from, \$to)</code> 获取图文分享转发数据, 最大时间跨度：<strong>7</strong>;</li><li><code>array userShareHourly(\$from, \$to)</code> 获取图文分享转发分时数据, 最大时间跨度：<strong>1</strong>;</li><li><code>array upstreamMessageSummary(\$from, \$to)</code> 获取消息发送概况数据, 最大时间跨度：<strong>7</strong>;</li><li><code>array upstreamMessageHourly(\$from, \$to)</code> 获取消息发送分时数据, 最大时间跨度：<strong>1</strong>;</li><li><code>array upstreamMessageWeekly(\$from, \$to)</code> 获取消息发送周数据, 最大时间跨度：<strong>30</strong>;</li><li><code>array upstreamMessageMonthly(\$from, \$to)</code> 获取消息发送月数据, 最大时间跨度：<strong>30</strong>;</li><li><code>array upstreamMessageDistSummary(\$from, \$to)</code> 获取消息发送分布数据, 最大时间跨度：<strong>15</strong>;</li><li><code>array upstreamMessageDistWeekly(\$from, \$to)</code> 获取消息发送分布周数据, 最大时间跨度：<strong>30</strong>;</li><li><code>array upstreamMessageDistMonthly(\$from, \$to)</code> 获取消息发送分布月数据, 最大时间跨度：<strong>30</strong>;</li><li><code>array interfaceSummary(\$from, \$to)</code> 获取接口分析数据, 最大时间跨度：<strong>30</strong>;</li><li><code>array interfaceSummaryHourly(\$from, \$to)</code> 获取接口分析分时数据, 最大时间跨度：<strong>1</strong>;</li></ul><p>example:</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$userSummary</span> <span class="token operator">=</span> <span class="token variable">\$stats</span><span class="token operator">-&gt;</span><span class="token function">userSummary</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;2014-12-07&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;2014-12-08&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

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

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>更多详细内容与协议说明，请查看微信官方文档：http://mp.weixin.qq.com/wiki/ <strong>数据统计</strong> 章节</p><!--]-->`)
}
// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(84103);
;// CONCATENATED MODULE: ./.vuepress/.temp/pages/3.x/anaylsis.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("/home/runner/work/easywechat/easywechat/docs/node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!/home/runner/work/easywechat/easywechat/docs/node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!/home/runner/work/easywechat/easywechat/docs/.vuepress/.temp/pages/3.x/anaylsis.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const anaylsis_html = (script);

/***/ })

};
;
//# sourceMappingURL=9105.app.js.map