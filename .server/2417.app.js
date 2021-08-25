"use strict";
exports.id = 2417;
exports.ids = [2417];
exports.modules = {

/***/ 56186:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-35808b61",
  "path": "/5.x/mini-program/express.html",
  "title": "物流助手 电子面单",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "获取支持的快递公司列表",
      "slug": "获取支持的快递公司列表",
      "children": []
    },
    {
      "level": 2,
      "title": "生成运单",
      "slug": "生成运单",
      "children": []
    },
    {
      "level": 2,
      "title": "取消运单",
      "slug": "取消运单",
      "children": []
    },
    {
      "level": 2,
      "title": "获取运单数据",
      "slug": "获取运单数据",
      "children": []
    },
    {
      "level": 2,
      "title": "查询运单轨迹",
      "slug": "查询运单轨迹",
      "children": []
    },
    {
      "level": 2,
      "title": "获取电子面单余额。",
      "slug": "获取电子面单余额。",
      "children": []
    },
    {
      "level": 2,
      "title": "绑定打印员",
      "slug": "绑定打印员",
      "children": []
    },
    {
      "level": 2,
      "title": "解绑打印员",
      "slug": "解绑打印员",
      "children": []
    }
  ],
  "filePathRelative": "5.x/mini-program/express.md",
  "git": {
    "updatedTime": 1629906046000,
    "contributors": []
  }
}


/***/ }),

/***/ 24809:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ express_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.vuepress/.temp/pages/5.x/mini-program/express.html.vue?vue&type=template&id=b009781c

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="物流助手-电子面单" tabindex="-1"><a class="header-anchor" href="#物流助手-电子面单" aria-hidden="true">#</a> 物流助手 电子面单</h1><h2 id="获取支持的快递公司列表" tabindex="-1"><a class="header-anchor" href="#获取支持的快递公司列表" aria-hidden="true">#</a> 获取支持的快递公司列表</h2><blockquote><p>https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/express/by-business/logistics.getAllDelivery.html</p></blockquote><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code>
<span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">express</span><span class="token operator">-&gt;</span><span class="token function">listProviders</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">{</span>
  <span class="token string double-quoted-string">&quot;count&quot;</span><span class="token punctuation">:</span> <span class="token number">8</span><span class="token punctuation">,</span>
  <span class="token string double-quoted-string">&quot;data&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token string double-quoted-string">&quot;delivery_id&quot;</span><span class="token punctuation">:</span> <span class="token string double-quoted-string">&quot;BEST&quot;</span><span class="token punctuation">,</span>
      <span class="token string double-quoted-string">&quot;delivery_name&quot;</span><span class="token punctuation">:</span> <span class="token string double-quoted-string">&quot;百世快递&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token operator">...</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="生成运单" tabindex="-1"><a class="header-anchor" href="#生成运单" aria-hidden="true">#</a> 生成运单</h2><blockquote><p>https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/express/by-business/logistics.addOrder.html</p></blockquote><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code>
<span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">express</span><span class="token operator">-&gt;</span><span class="token function">createWaybill</span><span class="token punctuation">(</span><span class="token variable">\$data</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token comment">// 成功返回</span>

<span class="token punctuation">{</span>
  <span class="token string double-quoted-string">&quot;order_id&quot;</span><span class="token punctuation">:</span> <span class="token string double-quoted-string">&quot;01234567890123456789&quot;</span><span class="token punctuation">,</span>
  <span class="token string double-quoted-string">&quot;waybill_id&quot;</span><span class="token punctuation">:</span> <span class="token string double-quoted-string">&quot;123456789&quot;</span><span class="token punctuation">,</span>
  <span class="token string double-quoted-string">&quot;waybill_data&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token string double-quoted-string">&quot;key&quot;</span><span class="token punctuation">:</span> <span class="token string double-quoted-string">&quot;SF_bagAddr&quot;</span><span class="token punctuation">,</span>
      <span class="token string double-quoted-string">&quot;value&quot;</span><span class="token punctuation">:</span> <span class="token string double-quoted-string">&quot;广州&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token string double-quoted-string">&quot;key&quot;</span><span class="token punctuation">:</span> <span class="token string double-quoted-string">&quot;SF_mark&quot;</span><span class="token punctuation">,</span>
      <span class="token string double-quoted-string">&quot;value&quot;</span><span class="token punctuation">:</span> <span class="token string double-quoted-string">&quot;101- 07-03 509&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token comment">// 失败返回</span>

<span class="token punctuation">{</span>
  <span class="token string double-quoted-string">&quot;errcode&quot;</span><span class="token punctuation">:</span> <span class="token number">9300501</span><span class="token punctuation">,</span>
  <span class="token string double-quoted-string">&quot;errmsg&quot;</span><span class="token punctuation">:</span> <span class="token string double-quoted-string">&quot;delivery logic fail&quot;</span><span class="token punctuation">,</span>
  <span class="token string double-quoted-string">&quot;delivery_resultcode&quot;</span><span class="token punctuation">:</span> <span class="token number">10002</span><span class="token punctuation">,</span>
  <span class="token string double-quoted-string">&quot;delivery_resultmsg&quot;</span><span class="token punctuation">:</span> <span class="token string double-quoted-string">&quot;客户密码不正确&quot;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><h2 id="取消运单" tabindex="-1"><a class="header-anchor" href="#取消运单" aria-hidden="true">#</a> 取消运单</h2><blockquote><p>https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/express/by-business/logistics.cancelOrder.html</p></blockquote><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">express</span><span class="token operator">-&gt;</span><span class="token function">deleteWaybill</span><span class="token punctuation">(</span><span class="token variable">\$data</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="获取运单数据" tabindex="-1"><a class="header-anchor" href="#获取运单数据" aria-hidden="true">#</a> 获取运单数据</h2><blockquote><p>https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/express/by-business/logistics.getOrder.html</p></blockquote><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">express</span><span class="token operator">-&gt;</span><span class="token function">getWaybill</span><span class="token punctuation">(</span><span class="token variable">\$data</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="查询运单轨迹" tabindex="-1"><a class="header-anchor" href="#查询运单轨迹" aria-hidden="true">#</a> 查询运单轨迹</h2><blockquote><p>https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/express/by-business/logistics.getPath.html</p></blockquote><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">express</span><span class="token operator">-&gt;</span><span class="token function">getWaybillTrack</span><span class="token punctuation">(</span><span class="token variable">\$data</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="获取电子面单余额。" tabindex="-1"><a class="header-anchor" href="#获取电子面单余额。" aria-hidden="true">#</a> 获取电子面单余额。</h2><p>仅在使用加盟类快递公司时，才可以调用。</p><blockquote><p>https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/express/by-business/logistics.getQuota.html</p></blockquote><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code>
<span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">express</span><span class="token operator">-&gt;</span><span class="token function">getBalance</span><span class="token punctuation">(</span><span class="token variable">\$deliveryId</span><span class="token punctuation">,</span> <span class="token variable">\$bizId</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 例如：</span>

<span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">express</span><span class="token operator">-&gt;</span><span class="token function">getBalance</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;YTO&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;xyz&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="绑定打印员" tabindex="-1"><a class="header-anchor" href="#绑定打印员" aria-hidden="true">#</a> 绑定打印员</h2><p>若需要使用微信打单 PC 软件，才需要调用。</p><blockquote><p>https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/express/by-business/logistics.updatePrinter.html</p></blockquote><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">express</span><span class="token operator">-&gt;</span><span class="token function">bindPrinter</span><span class="token punctuation">(</span><span class="token variable">\$openid</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="解绑打印员" tabindex="-1"><a class="header-anchor" href="#解绑打印员" aria-hidden="true">#</a> 解绑打印员</h2><p>若需要使用微信打单 PC 软件，才需要调用。</p><blockquote><p>https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/express/by-business/logistics.updatePrinter.html</p></blockquote><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">express</span><span class="token operator">-&gt;</span><span class="token function">unbindPrinter</span><span class="token punctuation">(</span><span class="token variable">\$openid</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><!--]-->`)
}
// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(84103);
;// CONCATENATED MODULE: ./.vuepress/.temp/pages/5.x/mini-program/express.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("/home/runner/work/easywechat/easywechat/docs/node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!/home/runner/work/easywechat/easywechat/docs/node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!/home/runner/work/easywechat/easywechat/docs/.vuepress/.temp/pages/5.x/mini-program/express.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const express_html = (script);

/***/ })

};
;
//# sourceMappingURL=2417.app.js.map