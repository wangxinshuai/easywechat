"use strict";
exports.id = 8528;
exports.ids = [8528];
exports.modules = {

/***/ 76893:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-a350582c",
  "path": "/5.x/basic-services/content_security.html",
  "title": "内容安全接口",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "文本安全内容检测",
      "slug": "文本安全内容检测",
      "children": [
        {
          "level": 3,
          "title": "频率限制",
          "slug": "频率限制",
          "children": []
        },
        {
          "level": 3,
          "title": "调用示例",
          "slug": "调用示例",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "图片安全内容检测",
      "slug": "图片安全内容检测",
      "children": [
        {
          "level": 3,
          "title": "频率限制",
          "slug": "频率限制-1",
          "children": []
        },
        {
          "level": 3,
          "title": "调用示例",
          "slug": "调用示例-1",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "重要说明",
      "slug": "重要说明",
      "children": []
    }
  ],
  "filePathRelative": "5.x/basic-services/content_security.md",
  "git": {
    "updatedTime": 1629906046000,
    "contributors": []
  }
}


/***/ }),

/***/ 47059:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ content_security_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.vuepress/.temp/pages/5.x/basic-services/content_security.html.vue?vue&type=template&id=307e9203

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="内容安全接口" tabindex="-1"><a class="header-anchor" href="#内容安全接口" aria-hidden="true">#</a> 内容安全接口</h1><h2 id="文本安全内容检测" tabindex="-1"><a class="header-anchor" href="#文本安全内容检测" aria-hidden="true">#</a> 文本安全内容检测</h2><p>用于校验一段文本是否含有违法内容。</p><h3 id="频率限制" tabindex="-1"><a class="header-anchor" href="#频率限制" aria-hidden="true">#</a> 频率限制</h3><p>单个appid调用上限为2000次/分钟，1,000,000次/天</p><h3 id="调用示例" tabindex="-1"><a class="header-anchor" href="#调用示例" aria-hidden="true">#</a> 调用示例</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token comment">// 传入要检测的文本内容，长度不超过500K字节</span>
<span class="token variable">\$content</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;你好&#39;</span><span class="token punctuation">;</span>

<span class="token variable">\$result</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">content_security</span><span class="token operator">-&gt;</span><span class="token function">checkText</span><span class="token punctuation">(</span><span class="token variable">\$content</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 正常返回 0</span>
<span class="token punctuation">{</span>
    <span class="token string double-quoted-string">&quot;errcode&quot;</span><span class="token punctuation">:</span> <span class="token string double-quoted-string">&quot;0&quot;</span><span class="token punctuation">,</span>
    <span class="token string double-quoted-string">&quot;errmsg&quot;</span><span class="token punctuation">:</span> <span class="token string double-quoted-string">&quot;ok&quot;</span>
<span class="token punctuation">}</span>

<span class="token comment">//当 \$content 内含有敏感信息，则返回 87014</span>
<span class="token punctuation">{</span>
    <span class="token string double-quoted-string">&quot;errcode&quot;</span><span class="token punctuation">:</span> <span class="token number">87014</span><span class="token punctuation">,</span>
    <span class="token string double-quoted-string">&quot;errmsg&quot;</span><span class="token punctuation">:</span> <span class="token string double-quoted-string">&quot;risky content&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h2 id="图片安全内容检测" tabindex="-1"><a class="header-anchor" href="#图片安全内容检测" aria-hidden="true">#</a> 图片安全内容检测</h2><p>用于校验一张图片是否含有敏感信息。如涉黄、涉及敏感人脸（通常是政治人物）。</p><h3 id="频率限制-1" tabindex="-1"><a class="header-anchor" href="#频率限制-1" aria-hidden="true">#</a> 频率限制</h3><p>单个appid调用上限为1000次/分钟，100,000次/天</p><h3 id="调用示例-1" tabindex="-1"><a class="header-anchor" href="#调用示例-1" aria-hidden="true">#</a> 调用示例</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token comment">// 所传参数为要检测的图片文件的绝对路径，图片格式支持PNG、JPEG、JPG、GIF, 像素不超过 750 x 1334，同时文件大小以不超过 300K 为宜，否则可能报错</span>
<span class="token variable">\$result</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">content_security</span><span class="token operator">-&gt;</span><span class="token function">checkImage</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;/path/to/the/image&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 正常返回 0</span>
<span class="token punctuation">{</span>
    <span class="token string double-quoted-string">&quot;errcode&quot;</span><span class="token punctuation">:</span> <span class="token string double-quoted-string">&quot;0&quot;</span><span class="token punctuation">,</span>
    <span class="token string double-quoted-string">&quot;errmsg&quot;</span><span class="token punctuation">:</span> <span class="token string double-quoted-string">&quot;ok&quot;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 当图片文件内含有敏感内容，则返回 87014</span>
<span class="token punctuation">{</span>
    <span class="token string double-quoted-string">&quot;errcode&quot;</span><span class="token punctuation">:</span> <span class="token number">87014</span><span class="token punctuation">,</span>
    <span class="token string double-quoted-string">&quot;errmsg&quot;</span><span class="token punctuation">:</span> <span class="token string double-quoted-string">&quot;risky content&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="重要说明" tabindex="-1"><a class="header-anchor" href="#重要说明" aria-hidden="true">#</a> 重要说明</h2><p>目前上述两个接口仅支持在小程序中使用，示例中的 <code>\$app</code> 表示小程序实例，即:</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">EasyWeChat<span class="token punctuation">\\</span>Factory</span><span class="token punctuation">;</span>

<span class="token variable">\$config</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token string single-quoted-string">&#39;app_id&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;wx3cf0f39249eb0exx&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;secret&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;f1c242f4f28f735d4687abb469072axx&#39;</span><span class="token punctuation">,</span>

    <span class="token comment">// 下面为可选项</span>
    <span class="token comment">// 指定 API 调用返回结果的类型：array(default)/collection/object/raw/自定义类名</span>
    <span class="token string single-quoted-string">&#39;response_type&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;array&#39;</span><span class="token punctuation">,</span>

    <span class="token string single-quoted-string">&#39;log&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
        <span class="token string single-quoted-string">&#39;level&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;debug&#39;</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;file&#39;</span> <span class="token operator">=&gt;</span> <span class="token constant">__DIR__</span><span class="token operator">.</span><span class="token string single-quoted-string">&#39;/wechat.log&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token variable">\$app</span> <span class="token operator">=</span> <span class="token class-name static-context">Factory</span><span class="token operator">::</span><span class="token function">miniProgram</span><span class="token punctuation">(</span><span class="token variable">\$config</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><!--]-->`)
}
// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(84103);
;// CONCATENATED MODULE: ./.vuepress/.temp/pages/5.x/basic-services/content_security.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("/home/runner/work/easywechat/easywechat/docs/node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!/home/runner/work/easywechat/easywechat/docs/node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!/home/runner/work/easywechat/easywechat/docs/.vuepress/.temp/pages/5.x/basic-services/content_security.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const content_security_html = (script);

/***/ })

};
;
//# sourceMappingURL=8528.app.js.map