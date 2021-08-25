"use strict";
exports.id = 9759;
exports.ids = [9759];
exports.modules = {

/***/ 36113:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-31bbfb88",
  "path": "/5.x/wework/media.html",
  "title": "临时素材",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "上传图片",
      "slug": "上传图片",
      "children": []
    },
    {
      "level": 2,
      "title": "上传声音",
      "slug": "上传声音",
      "children": []
    },
    {
      "level": 2,
      "title": "上传视频",
      "slug": "上传视频",
      "children": []
    },
    {
      "level": 2,
      "title": "上传普通文件",
      "slug": "上传普通文件",
      "children": []
    },
    {
      "level": 2,
      "title": "获取素材",
      "slug": "获取素材",
      "children": []
    }
  ],
  "filePathRelative": "5.x/wework/media.md",
  "git": {
    "updatedTime": 1629906046000,
    "contributors": []
  }
}


/***/ }),

/***/ 68556:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ media_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.vuepress/.temp/pages/5.x/wework/media.html.vue?vue&type=template&id=654dd0b4

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="临时素材" tabindex="-1"><a class="header-anchor" href="#临时素材" aria-hidden="true">#</a> 临时素材</h1><p>它的使用是不基于应用的，或者说基于任何一个应用都能访问这些 API，所以在用法上是直接调用 work 实例的 <code>media</code> 属性：</p><p><strong>上传的媒体文件限制：</strong></p><p>所有文件size必须大于5个字节</p><blockquote><ul><li>图片（image）：2MB，支持JPG,PNG格式</li><li>语音（voice）：2MB，播放长度不超过60s，支持AMR格式</li><li>视频（video）：10MB，支持MP4格式</li><li>普通文件（file）：20MB</li></ul></blockquote><h2 id="上传图片" tabindex="-1"><a class="header-anchor" href="#上传图片" aria-hidden="true">#</a> 上传图片</h2><blockquote><p>注意：微信图片上传服务有敏感检测系统，图片内容如果含有敏感内容，如色情，商品推广，虚假信息等，上传可能失败。</p></blockquote><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">media</span><span class="token operator">-&gt;</span><span class="token function">uploadImage</span><span class="token punctuation">(</span><span class="token variable">\$path</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \$path 为本地文件路径</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="上传声音" tabindex="-1"><a class="header-anchor" href="#上传声音" aria-hidden="true">#</a> 上传声音</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">media</span><span class="token operator">-&gt;</span><span class="token function">uploadVoice</span><span class="token punctuation">(</span><span class="token variable">\$path</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="上传视频" tabindex="-1"><a class="header-anchor" href="#上传视频" aria-hidden="true">#</a> 上传视频</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">media</span><span class="token operator">-&gt;</span><span class="token function">uploadVideo</span><span class="token punctuation">(</span><span class="token variable">\$path</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="上传普通文件" tabindex="-1"><a class="header-anchor" href="#上传普通文件" aria-hidden="true">#</a> 上传普通文件</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$path</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;/path/to/企业微信操作手册.pdf&#39;</span>

<span class="token variable">\$form</span> <span class="token operator">=</span> <span class="token punctuation">[</span> <span class="token comment">//可选 发送时,中文文件名不显示或被过虑可传此参数</span>
    <span class="token string single-quoted-string">&#39;filename&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;企业微信操作手册.pdf&#39;</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">media</span><span class="token operator">-&gt;</span><span class="token function">uploadFile</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">\$path</span><span class="token punctuation">,</span> <span class="token keyword type-hint">array</span> <span class="token variable">\$form</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="获取素材" tabindex="-1"><a class="header-anchor" href="#获取素材" aria-hidden="true">#</a> 获取素材</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">media</span><span class="token operator">-&gt;</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token variable">\$mediaId</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><!--]-->`)
}
// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(84103);
;// CONCATENATED MODULE: ./.vuepress/.temp/pages/5.x/wework/media.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("/home/runner/work/easywechat/easywechat/docs/node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!/home/runner/work/easywechat/easywechat/docs/node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!/home/runner/work/easywechat/easywechat/docs/.vuepress/.temp/pages/5.x/wework/media.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const media_html = (script);

/***/ })

};
;
//# sourceMappingURL=9759.app.js.map