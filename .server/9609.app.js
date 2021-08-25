"use strict";
exports.id = 9609;
exports.ids = [9609];
exports.modules = {

/***/ 85319:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-5de54fbd",
  "path": "/4.x/basic-services/media.html",
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
      "title": "上传缩略图",
      "slug": "上传缩略图",
      "children": []
    },
    {
      "level": 2,
      "title": "上传群发视频",
      "slug": "上传群发视频",
      "children": []
    },
    {
      "level": 2,
      "title": "创建群发消息",
      "slug": "创建群发消息",
      "children": []
    },
    {
      "level": 2,
      "title": "获取临时素材内容",
      "slug": "获取临时素材内容",
      "children": []
    },
    {
      "level": 2,
      "title": "获取 JSSDK 上传的高清语音",
      "slug": "获取-jssdk-上传的高清语音",
      "children": []
    }
  ],
  "filePathRelative": "4.x/basic-services/media.md",
  "git": {
    "updatedTime": 1629906046000,
    "contributors": []
  }
}


/***/ }),

/***/ 61310:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ media_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.vuepress/.temp/pages/4.x/basic-services/media.html.vue?vue&type=template&id=74b47c4a

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="临时素材" tabindex="-1"><a class="header-anchor" href="#临时素材" aria-hidden="true">#</a> 临时素材</h1><p>上传的临时多媒体文件有格式和大小限制，如下：</p><blockquote><ul><li>图片（image）: 2M，支持 <code>JPG</code> 格式</li><li>语音（voice）：2M，播放长度不超过 <code>60s</code>，支持 <code>AMR\\MP3</code> 格式</li><li>视频（video）：10MB，支持 <code>MP4</code> 格式</li><li>缩略图（thumb）：64KB，支持 <code>JPG</code> 格式</li></ul></blockquote><h2 id="上传图片" tabindex="-1"><a class="header-anchor" href="#上传图片" aria-hidden="true">#</a> 上传图片</h2><blockquote><p>{warning} 注意：微信图片上传服务有敏感检测系统，图片内容如果含有敏感内容，如色情，商品推广，虚假信息等，上传可能失败。</p></blockquote><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">media</span><span class="token operator">-&gt;</span><span class="token function">uploadImage</span><span class="token punctuation">(</span><span class="token variable">\$path</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="上传声音" tabindex="-1"><a class="header-anchor" href="#上传声音" aria-hidden="true">#</a> 上传声音</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">media</span><span class="token operator">-&gt;</span><span class="token function">uploadVoice</span><span class="token punctuation">(</span><span class="token variable">\$path</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="上传视频" tabindex="-1"><a class="header-anchor" href="#上传视频" aria-hidden="true">#</a> 上传视频</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">media</span><span class="token operator">-&gt;</span><span class="token function">uploadVideo</span><span class="token punctuation">(</span><span class="token variable">\$path</span><span class="token punctuation">,</span> <span class="token variable">\$title</span><span class="token punctuation">,</span> <span class="token variable">\$description</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="上传缩略图" tabindex="-1"><a class="header-anchor" href="#上传缩略图" aria-hidden="true">#</a> 上传缩略图</h2><p>用于视频封面或者音乐封面。</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">media</span><span class="token operator">-&gt;</span><span class="token function">uploadThumb</span><span class="token punctuation">(</span><span class="token variable">\$path</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="上传群发视频" tabindex="-1"><a class="header-anchor" href="#上传群发视频" aria-hidden="true">#</a> 上传群发视频</h2><p>上传视频获取 <code>media_id</code> 用以创建群发消息用。</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">media</span><span class="token operator">-&gt;</span><span class="token function">uploadVideoForBroadcasting</span><span class="token punctuation">(</span><span class="token variable">\$path</span><span class="token punctuation">,</span> <span class="token variable">\$title</span><span class="token punctuation">,</span> <span class="token variable">\$description</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//{</span>
<span class="token comment">//  &quot;media_id&quot;: &quot;rF4UdIMfYK3efUfyoddYRMU50zMiRmmt_l0kszupYh_SzrcW5Gaheq05p_lHuOTQ&quot;,</span>
<span class="token comment">//  &quot;title&quot;: &quot;TITLE&quot;,</span>
<span class="token comment">//  &quot;description&quot;: &quot;Description&quot;</span>
<span class="token comment">//}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="创建群发消息" tabindex="-1"><a class="header-anchor" href="#创建群发消息" aria-hidden="true">#</a> 创建群发消息</h2><p>不要与上面 <strong>上传群发视频</strong> 搞混了，上面一个是上传视频得到 <code>media_id</code>，这个是使用该 <code>media_id</code> 加标题描述 <strong>创建一条消息素材</strong> 用来发送给用户。详情参见：<a href="broadcasting">消息群发</a></p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">media</span><span class="token operator">-&gt;</span><span class="token function">createVideoForBroadcasting</span><span class="token punctuation">(</span><span class="token variable">\$mediaId</span><span class="token punctuation">,</span> <span class="token variable">\$title</span><span class="token punctuation">,</span> <span class="token variable">\$description</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//{</span>
<span class="token comment">//  &quot;type&quot;:&quot;video&quot;,</span>
<span class="token comment">//  &quot;media_id&quot;:&quot;IhdaAQXuvJtGzwwc0abfXnzeezfO0NgPK6AQYShD8RQYMTtfzbLdBIQkQziv2XJc&quot;,</span>
<span class="token comment">//  &quot;created_at&quot;:1398848981</span>
<span class="token comment">//}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="获取临时素材内容" tabindex="-1"><a class="header-anchor" href="#获取临时素材内容" aria-hidden="true">#</a> 获取临时素材内容</h2><p>比如图片、语音等二进制流内容，响应为 <code>EasyWeChat\\Kernel\\Http\\StreamResponse</code> 实例。</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$stream</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">media</span><span class="token operator">-&gt;</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token variable">\$mediaId</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">\$stream</span> <span class="token keyword">instanceof</span> <span class="token class-name class-name-fully-qualified"><span class="token punctuation">\\</span>EasyWeChat<span class="token punctuation">\\</span>Kernel<span class="token punctuation">\\</span>Http<span class="token punctuation">\\</span>StreamResponse</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 以内容 md5 为文件名存到本地</span>
  <span class="token variable">\$stream</span><span class="token operator">-&gt;</span><span class="token function">save</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;保存目录&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 自定义文件名，不需要带后缀</span>
  <span class="token variable">\$stream</span><span class="token operator">-&gt;</span><span class="token function">saveAs</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;保存目录&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;文件名&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="获取-jssdk-上传的高清语音" tabindex="-1"><a class="header-anchor" href="#获取-jssdk-上传的高清语音" aria-hidden="true">#</a> 获取 JSSDK 上传的高清语音</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$stream</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">media</span><span class="token operator">-&gt;</span><span class="token function">getJssdkMedia</span><span class="token punctuation">(</span><span class="token variable">\$mediaId</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">\$stream</span><span class="token operator">-&gt;</span><span class="token function">saveAs</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;保存目录&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;custom-name.speex&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><!--]-->`)
}
// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(84103);
;// CONCATENATED MODULE: ./.vuepress/.temp/pages/4.x/basic-services/media.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("/home/runner/work/easywechat/easywechat/docs/node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!/home/runner/work/easywechat/easywechat/docs/node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!/home/runner/work/easywechat/easywechat/docs/.vuepress/.temp/pages/4.x/basic-services/media.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const media_html = (script);

/***/ })

};
;
//# sourceMappingURL=9609.app.js.map