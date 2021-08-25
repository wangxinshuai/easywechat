"use strict";
exports.id = 9278;
exports.ids = [9278];
exports.modules = {

/***/ 91278:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-a84289ae",
  "path": "/4.x/official-account/poi.html",
  "title": "门店",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "创建门店",
      "slug": "创建门店",
      "children": []
    },
    {
      "level": 2,
      "title": "获取指定门店信息",
      "slug": "获取指定门店信息",
      "children": []
    },
    {
      "level": 2,
      "title": "获取门店列表",
      "slug": "获取门店列表",
      "children": []
    },
    {
      "level": 2,
      "title": "修改门店信息",
      "slug": "修改门店信息",
      "children": []
    },
    {
      "level": 2,
      "title": "删除门店",
      "slug": "删除门店",
      "children": []
    }
  ],
  "filePathRelative": "4.x/official-account/poi.md",
  "git": {
    "updatedTime": 1629906046000,
    "contributors": []
  }
}


/***/ }),

/***/ 33930:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ poi_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.vuepress/.temp/pages/4.x/official-account/poi.html.vue?vue&type=template&id=6d7ffd5c

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="门店" tabindex="-1"><a class="header-anchor" href="#门店" aria-hidden="true">#</a> 门店</h1><h2 id="创建门店" tabindex="-1"><a class="header-anchor" href="#创建门店" aria-hidden="true">#</a> 创建门店</h2><p>用 POI 接口新建门店时所使用的图片 url 必须为微信自己域名的 url,因此需要先用上传图片接 口上传图片并获取 url,再创建门店。上传的图片限制文件大小限制 1MB,支持 JPG 格式，图片接口请参考：<a href="media">临时素材</a></p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">poi</span><span class="token operator">-&gt;</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token variable">\$baseInfo</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><blockquote><ul><li><code>\$baseInfo</code> 为门店的基本信息数组</li></ul></blockquote><p>示例：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token variable">\$info</span> <span class="token operator">=</span> <span class="token keyword">array</span><span class="token punctuation">(</span>
         <span class="token string double-quoted-string">&quot;sid&quot;</span>             <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;33788392&quot;</span><span class="token punctuation">,</span>
         <span class="token string double-quoted-string">&quot;business_name&quot;</span>   <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;麦当劳&quot;</span><span class="token punctuation">,</span>
         <span class="token string double-quoted-string">&quot;branch_name&quot;</span>     <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;艺苑路店&quot;</span><span class="token punctuation">,</span>
         <span class="token string double-quoted-string">&quot;province&quot;</span>        <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;广东省&quot;</span><span class="token punctuation">,</span>
         <span class="token string double-quoted-string">&quot;city&quot;</span>            <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;广州市&quot;</span><span class="token punctuation">,</span>
         <span class="token string double-quoted-string">&quot;district&quot;</span>        <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;海珠区&quot;</span><span class="token punctuation">,</span>
         <span class="token string double-quoted-string">&quot;address&quot;</span>         <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;艺苑路 11 号&quot;</span><span class="token punctuation">,</span>
         <span class="token string double-quoted-string">&quot;telephone&quot;</span>       <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;020-12345678&quot;</span><span class="token punctuation">,</span>
         <span class="token string double-quoted-string">&quot;categories&quot;</span>      <span class="token operator">=&gt;</span> <span class="token keyword">array</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;美食,快餐小吃&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
         <span class="token string double-quoted-string">&quot;offset_type&quot;</span>     <span class="token operator">=&gt;</span> <span class="token number">1</span><span class="token punctuation">,</span>
         <span class="token string double-quoted-string">&quot;longitude&quot;</span>       <span class="token operator">=&gt;</span> <span class="token number">115.32375</span><span class="token punctuation">,</span>
         <span class="token string double-quoted-string">&quot;latitude&quot;</span>        <span class="token operator">=&gt;</span> <span class="token number">25.097486</span><span class="token punctuation">,</span>
         <span class="token string double-quoted-string">&quot;photo_list&quot;</span>      <span class="token operator">=&gt;</span> <span class="token keyword">array</span><span class="token punctuation">(</span>
                               <span class="token keyword">array</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;photo_url&quot;</span> <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;https://XXX.com&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                               <span class="token keyword">array</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;photo_url&quot;</span> <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;https://XXX.com&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                             <span class="token punctuation">)</span><span class="token punctuation">,</span>
         <span class="token string double-quoted-string">&quot;recommend&quot;</span>       <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;麦辣鸡腿堡套餐,麦乐鸡,全家桶&quot;</span><span class="token punctuation">,</span>
         <span class="token string double-quoted-string">&quot;special&quot;</span>         <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;免费 wifi,外卖服务&quot;</span><span class="token punctuation">,</span>
         <span class="token string double-quoted-string">&quot;introduction&quot;</span>    <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;麦当劳是全球大型跨国连锁餐厅,1940 年创立于美国,在世界上大约拥有 3  万间分店。主要售卖汉堡包,以及薯条、炸鸡、汽水、冰品、沙拉、水果等 快餐食品&quot;</span><span class="token punctuation">,</span>
         <span class="token string double-quoted-string">&quot;open_time&quot;</span>       <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;8:00-20:00&quot;</span><span class="token punctuation">,</span>
         <span class="token string double-quoted-string">&quot;avg_price&quot;</span>       <span class="token operator">=&gt;</span> <span class="token number">35</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">\$result</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">poi</span><span class="token operator">-&gt;</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token variable">\$info</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true or exception</span>
</span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><blockquote><p>{warning} 注意：新创建的门店在审核通过后,会以事件形式推送给商户填写的回调 URL</p></blockquote><h2 id="获取指定门店信息" tabindex="-1"><a class="header-anchor" href="#获取指定门店信息" aria-hidden="true">#</a> 获取指定门店信息</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">poi</span><span class="token operator">-&gt;</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token variable">\$poiId</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><blockquote><ul><li><code>\$poiId</code> 为门店ID</li></ul></blockquote><p>示例：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$info</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">poi</span><span class="token operator">-&gt;</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token number">271262077</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="获取门店列表" tabindex="-1"><a class="header-anchor" href="#获取门店列表" aria-hidden="true">#</a> 获取门店列表</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">poi</span><span class="token operator">-&gt;</span><span class="token function">list</span><span class="token punctuation">(</span><span class="token variable">\$begin</span><span class="token punctuation">,</span> <span class="token variable">\$limit</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// begin:0, limit:10</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><blockquote><ul><li><code>\$begin</code> 就是查询起点，<code>MySQL</code> 里的 <code>offset</code>；</li><li><code>\$limit</code> 查询条数，同 <code>MySQL</code> 里的 <code>limit</code>；</li></ul></blockquote><blockquote><p>两参数均可选</p></blockquote><p>示例：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$pois</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">poi</span><span class="token operator">-&gt;</span><span class="token function">list</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 取2条记录</span>
<span class="token comment">//</span>
<span class="token comment">//[</span>
<span class="token comment">//  {</span>
<span class="token comment">//    &quot;sid&quot;: &quot;100&quot;,</span>
<span class="token comment">//    &quot;poi_id&quot;: &quot;271864249&quot;,</span>
<span class="token comment">//    &quot;business_name&quot;: &quot;麦当劳&quot;,</span>
<span class="token comment">//    &quot;branch_name&quot;: &quot;艺苑路店&quot;,</span>
<span class="token comment">//    &quot;address&quot;: &quot;艺苑路 11 号&quot;,</span>
<span class="token comment">//    &quot;available_state&quot;: 3</span>
<span class="token comment">//  },</span>
<span class="token comment">//  {</span>
<span class="token comment">//    &quot;sid&quot;: &quot;101&quot;,</span>
<span class="token comment">//    &quot;business_name&quot;: &quot;麦当劳&quot;,</span>
<span class="token comment">//    &quot;branch_name&quot;: &quot;赤岗路店&quot;,</span>
<span class="token comment">//    &quot;address&quot;: &quot;赤岗路 102 号&quot;,</span>
<span class="token comment">//    &quot;available_state&quot;: 4</span>
<span class="token comment">//  }</span>
<span class="token comment">//]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h2 id="修改门店信息" tabindex="-1"><a class="header-anchor" href="#修改门店信息" aria-hidden="true">#</a> 修改门店信息</h2><p>商户可以通过该接口,修改门店的服务信息,包括:图片列表、营业时间、推荐、特色服务、简 介、人均价格、电话 7 个字段。目前基础字段包括(名称、坐标、地址等不可修改)。</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">poi</span><span class="token operator">-&gt;</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token variable">\$poiId</span><span class="token punctuation">,</span> <span class="token variable">\$data</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><blockquote><ul><li><code>\$poiId</code> 为门店ID</li><li><code>\$data</code> 需要更新的部分数据，<strong>若有填写内容则为覆盖更新,若无内容则视为不 修改,维持原有内容。photo_list 字段为全列表覆盖,若需要增加图片,需将之前图片同样放入 list 中,在其后增加新增图片。如:已有 A、B、C 三张图片,又要增加 D、E 两张图,则需要调 用该接口,photo_list 传入 A、B、C、D、E 五张图片的链接。</strong></li></ul></blockquote><p>示例：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$data</span> <span class="token operator">=</span> <span class="token keyword">array</span><span class="token punctuation">(</span>
         <span class="token string double-quoted-string">&quot;telephone&quot;</span> <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;020-12345678&quot;</span><span class="token punctuation">,</span>
         <span class="token string double-quoted-string">&quot;recommend&quot;</span> <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;麦辣鸡腿堡套餐,麦乐鸡,全家桶&quot;</span><span class="token punctuation">,</span>
         <span class="token comment">//...</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">\$res</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">poi</span><span class="token operator">-&gt;</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token number">271262077</span><span class="token punctuation">,</span> <span class="token variable">\$data</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//true or exception</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="删除门店" tabindex="-1"><a class="header-anchor" href="#删除门店" aria-hidden="true">#</a> 删除门店</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">poi</span><span class="token operator">-&gt;</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token variable">\$poiId</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>示例：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">poi</span><span class="token operator">-&gt;</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token number">271262077</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// true or exception</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><!--]-->`)
}
// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(84103);
;// CONCATENATED MODULE: ./.vuepress/.temp/pages/4.x/official-account/poi.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("/home/runner/work/easywechat/easywechat/docs/node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!/home/runner/work/easywechat/easywechat/docs/node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!/home/runner/work/easywechat/easywechat/docs/.vuepress/.temp/pages/4.x/official-account/poi.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const poi_html = (script);

/***/ })

};
;
//# sourceMappingURL=9278.app.js.map