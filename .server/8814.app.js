"use strict";
exports.id = 8814;
exports.ids = [8814];
exports.modules = {

/***/ 94246:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-9f231e40",
  "path": "/5.x/wework/oa.html",
  "title": "OA",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "打卡",
      "slug": "打卡",
      "children": [
        {
          "level": 3,
          "title": "获取企业所有打卡规则",
          "slug": "获取企业所有打卡规则",
          "children": []
        },
        {
          "level": 3,
          "title": "获取员工打卡规则",
          "slug": "获取员工打卡规则",
          "children": []
        },
        {
          "level": 3,
          "title": "获取打卡记录数据",
          "slug": "获取打卡记录数据",
          "children": []
        },
        {
          "level": 3,
          "title": "获取打卡日报数据",
          "slug": "获取打卡日报数据",
          "children": []
        },
        {
          "level": 3,
          "title": "获取打卡月报数据",
          "slug": "获取打卡月报数据",
          "children": []
        },
        {
          "level": 3,
          "title": "获取打卡人员排班信息",
          "slug": "获取打卡人员排班信息",
          "children": []
        },
        {
          "level": 3,
          "title": "为打卡人员排班",
          "slug": "为打卡人员排班",
          "children": []
        },
        {
          "level": 3,
          "title": "录入打卡人员人脸信息",
          "slug": "录入打卡人员人脸信息",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "获取审批数据",
      "slug": "获取审批数据",
      "children": []
    }
  ],
  "filePathRelative": "5.x/wework/oa.md",
  "git": {
    "updatedTime": 1629906046000,
    "contributors": []
  }
}


/***/ }),

/***/ 23973:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ oa_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.vuepress/.temp/pages/5.x/wework/oa.html.vue?vue&type=template&id=3a0ac588

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="oa" tabindex="-1"><a class="header-anchor" href="#oa" aria-hidden="true">#</a> OA</h1><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$config</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token string single-quoted-string">&#39;corp_id&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;xxxxxxxxxxxxxxxxx&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;secret&#39;</span>   <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;xxxxxxxxxx&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">//...</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token variable">\$app</span> <span class="token operator">=</span> <span class="token class-name static-context">Factory</span><span class="token operator">::</span><span class="token function">work</span><span class="token punctuation">(</span><span class="token variable">\$config</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="打卡" tabindex="-1"><a class="header-anchor" href="#打卡" aria-hidden="true">#</a> 打卡</h2><h3 id="获取企业所有打卡规则" tabindex="-1"><a class="header-anchor" href="#获取企业所有打卡规则" aria-hidden="true">#</a> 获取企业所有打卡规则</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">oa</span><span class="token operator">-&gt;</span><span class="token function">corpCheckinRules</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="获取员工打卡规则" tabindex="-1"><a class="header-anchor" href="#获取员工打卡规则" aria-hidden="true">#</a> 获取员工打卡规则</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">oa</span><span class="token operator">-&gt;</span><span class="token function">checkinRules</span><span class="token punctuation">(</span><span class="token keyword type-hint">int</span> <span class="token variable">\$datetime</span><span class="token punctuation">,</span> <span class="token keyword type-hint">array</span> <span class="token variable">\$userList</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="获取打卡记录数据" tabindex="-1"><a class="header-anchor" href="#获取打卡记录数据" aria-hidden="true">#</a> 获取打卡记录数据</h3><blockquote><p>\$type: 打卡类型 1：上下班打卡；2：外出打卡；3：全部打卡</p></blockquote><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code>
<span class="token comment">// 全部打卡数据</span>
<span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">oa</span><span class="token operator">-&gt;</span><span class="token function">checkinRecords</span><span class="token punctuation">(</span><span class="token number">1492617600</span><span class="token punctuation">,</span> <span class="token number">1492790400</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string double-quoted-string">&quot;james&quot;</span><span class="token punctuation">,</span><span class="token string double-quoted-string">&quot;paul&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 获取上下班打卡</span>
<span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">oa</span><span class="token operator">-&gt;</span><span class="token function">checkinRecords</span><span class="token punctuation">(</span><span class="token number">1492617600</span><span class="token punctuation">,</span> <span class="token number">1492790400</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string double-quoted-string">&quot;james&quot;</span><span class="token punctuation">,</span><span class="token string double-quoted-string">&quot;paul&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 获取外出打卡</span>
<span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">oa</span><span class="token operator">-&gt;</span><span class="token function">checkinRecords</span><span class="token punctuation">(</span><span class="token number">1492617600</span><span class="token punctuation">,</span> <span class="token number">1492790400</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string double-quoted-string">&quot;james&quot;</span><span class="token punctuation">,</span><span class="token string double-quoted-string">&quot;paul&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="获取打卡日报数据" tabindex="-1"><a class="header-anchor" href="#获取打卡日报数据" aria-hidden="true">#</a> 获取打卡日报数据</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">oa</span><span class="token operator">-&gt;</span><span class="token function">checkinDayData</span><span class="token punctuation">(</span><span class="token keyword type-hint">int</span> <span class="token variable">\$startTime</span><span class="token punctuation">,</span> <span class="token keyword type-hint">int</span> <span class="token variable">\$endTime</span><span class="token punctuation">,</span> <span class="token keyword type-hint">array</span> <span class="token variable">\$userids</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="获取打卡月报数据" tabindex="-1"><a class="header-anchor" href="#获取打卡月报数据" aria-hidden="true">#</a> 获取打卡月报数据</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">oa</span><span class="token operator">-&gt;</span><span class="token function">checkinMonthData</span><span class="token punctuation">(</span><span class="token keyword type-hint">int</span> <span class="token variable">\$startTime</span><span class="token punctuation">,</span> <span class="token keyword type-hint">int</span> <span class="token variable">\$endTime</span><span class="token punctuation">,</span> <span class="token keyword type-hint">array</span> <span class="token variable">\$userids</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="获取打卡人员排班信息" tabindex="-1"><a class="header-anchor" href="#获取打卡人员排班信息" aria-hidden="true">#</a> 获取打卡人员排班信息</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code> <span class="token variable">\$params</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
            <span class="token string single-quoted-string">&#39;groupid&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">226</span><span class="token punctuation">,</span>
            <span class="token string single-quoted-string">&#39;items&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
                <span class="token punctuation">[</span>
                    <span class="token string single-quoted-string">&#39;userid&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;james&#39;</span><span class="token punctuation">,</span>
                    <span class="token string single-quoted-string">&#39;day&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">5</span><span class="token punctuation">,</span>
                    <span class="token string single-quoted-string">&#39;schedule_id&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">234</span>
                <span class="token punctuation">]</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token string single-quoted-string">&#39;yearmonth&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">202012</span>
        <span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">oa</span><span class="token operator">-&gt;</span><span class="token function">setCheckinSchedus</span><span class="token punctuation">(</span><span class="token keyword type-hint">array</span> <span class="token variable">\$params</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h3 id="为打卡人员排班" tabindex="-1"><a class="header-anchor" href="#为打卡人员排班" aria-hidden="true">#</a> 为打卡人员排班</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">oa</span><span class="token operator">-&gt;</span><span class="token function">checkinSchedus</span><span class="token punctuation">(</span><span class="token keyword type-hint">int</span> <span class="token variable">\$startTime</span><span class="token punctuation">,</span> <span class="token keyword type-hint">int</span> <span class="token variable">\$endTime</span><span class="token punctuation">,</span> <span class="token keyword type-hint">array</span> <span class="token variable">\$userids</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="录入打卡人员人脸信息" tabindex="-1"><a class="header-anchor" href="#录入打卡人员人脸信息" aria-hidden="true">#</a> 录入打卡人员人脸信息</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">oa</span><span class="token operator">-&gt;</span><span class="token function">addCheckinUserface</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">\$userid</span><span class="token punctuation">,</span> <span class="token keyword type-hint">string</span> <span class="token variable">\$userface</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="获取审批数据" tabindex="-1"><a class="header-anchor" href="#获取审批数据" aria-hidden="true">#</a> 获取审批数据</h2><p>API:</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token keyword type-declaration">mixed</span> <span class="token function">approvalRecords</span><span class="token punctuation">(</span><span class="token keyword type-hint">int</span> <span class="token variable">\$startTime</span><span class="token punctuation">,</span> <span class="token keyword type-hint">int</span> <span class="token variable">\$endTime</span><span class="token punctuation">,</span> <span class="token keyword type-hint">int</span> <span class="token variable">\$nextNumber</span> <span class="token operator">=</span> <span class="token constant">null</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><blockquote><p>{info} \$nextNumber: 第一个拉取的审批单号，不填从该时间段的第一个审批单拉取</p></blockquote><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">oa</span><span class="token operator">-&gt;</span><span class="token function">approvalRecords</span><span class="token punctuation">(</span><span class="token number">1492617600</span><span class="token punctuation">,</span> <span class="token number">1492790400</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 指定第一个拉取的审批单号，不填从该时间段的第一个审批单拉取</span>
<span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">oa</span><span class="token operator">-&gt;</span><span class="token function">approvalRecords</span><span class="token punctuation">(</span><span class="token number">1492617600</span><span class="token punctuation">,</span> <span class="token number">1492790400</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;201704240001&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><!--]-->`)
}
// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(84103);
;// CONCATENATED MODULE: ./.vuepress/.temp/pages/5.x/wework/oa.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("/home/runner/work/easywechat/easywechat/docs/node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!/home/runner/work/easywechat/easywechat/docs/node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!/home/runner/work/easywechat/easywechat/docs/.vuepress/.temp/pages/5.x/wework/oa.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const oa_html = (script);

/***/ })

};
;
//# sourceMappingURL=8814.app.js.map