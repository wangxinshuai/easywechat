"use strict";
exports.id = 7982;
exports.ids = [7982];
exports.modules = {

/***/ 50233:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-1544d410",
  "path": "/4.x/official-account/material.html",
  "title": "素材管理",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 3,
      "title": "上传图片",
      "slug": "上传图片",
      "children": []
    },
    {
      "level": 3,
      "title": "上传语音",
      "slug": "上传语音",
      "children": []
    },
    {
      "level": 3,
      "title": "上传视频",
      "slug": "上传视频",
      "children": []
    },
    {
      "level": 3,
      "title": "上传缩略图",
      "slug": "上传缩略图",
      "children": []
    },
    {
      "level": 3,
      "title": "上传图文消息",
      "slug": "上传图文消息",
      "children": []
    },
    {
      "level": 3,
      "title": "修改图文消息",
      "slug": "修改图文消息",
      "children": []
    },
    {
      "level": 3,
      "title": "上传图文消息图片",
      "slug": "上传图文消息图片",
      "children": []
    },
    {
      "level": 3,
      "title": "获取永久素材",
      "slug": "获取永久素材",
      "children": []
    },
    {
      "level": 3,
      "title": "获取永久素材列表",
      "slug": "获取永久素材列表",
      "children": []
    },
    {
      "level": 3,
      "title": "获取素材计数",
      "slug": "获取素材计数",
      "children": []
    },
    {
      "level": 3,
      "title": "删除永久素材；",
      "slug": "删除永久素材",
      "children": []
    },
    {
      "level": 3,
      "title": "文章预览",
      "slug": "文章预览",
      "children": []
    }
  ],
  "filePathRelative": "4.x/official-account/material.md",
  "git": {
    "updatedTime": 1629906046000,
    "contributors": []
  }
}


/***/ }),

/***/ 51131:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ material_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.vuepress/.temp/pages/4.x/official-account/material.html.vue?vue&type=template&id=6f3a7132

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="素材管理" tabindex="-1"><a class="header-anchor" href="#素材管理" aria-hidden="true">#</a> 素材管理</h1><p>在微信里的图片，音乐，视频等等都需要先上传到微信服务器作为素材才可以在消息中使用。</p><h3 id="上传图片" tabindex="-1"><a class="header-anchor" href="#上传图片" aria-hidden="true">#</a> 上传图片</h3><blockquote><p>{warning} 注意：微信图片上传服务有敏感检测系统，图片内容如果含有敏感内容，如色情，商品推广，虚假信息等，上传可能失败。</p></blockquote><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$result</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">material</span><span class="token operator">-&gt;</span><span class="token function">uploadImage</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;/path/to/your/image.jpg&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// {</span>
<span class="token comment">//    &quot;media_id&quot;:MEDIA_ID,</span>
<span class="token comment">//    &quot;url&quot;:URL</span>
<span class="token comment">// }</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><blockquote><p><code>url</code> 只有上传图片素材有返回值。</p></blockquote><h3 id="上传语音" tabindex="-1"><a class="header-anchor" href="#上传语音" aria-hidden="true">#</a> 上传语音</h3><p>语音 <strong>大小不超过 5M</strong>，<strong>长度不超过 60 秒</strong>，支持 <code>mp3/wma/wav/amr</code> 格式。</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$result</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">material</span><span class="token operator">-&gt;</span><span class="token function">uploadVoice</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;/path/to/your/voice.mp3&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// {</span>
<span class="token comment">//    &quot;media_id&quot;:MEDIA_ID,</span>
<span class="token comment">// }</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="上传视频" tabindex="-1"><a class="header-anchor" href="#上传视频" aria-hidden="true">#</a> 上传视频</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$result</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">material</span><span class="token operator">-&gt;</span><span class="token function">uploadVideo</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;/path/to/your/video.mp4&quot;</span><span class="token punctuation">,</span> <span class="token string double-quoted-string">&quot;视频标题&quot;</span><span class="token punctuation">,</span> <span class="token string double-quoted-string">&quot;视频描述&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// {</span>
<span class="token comment">//    &quot;media_id&quot;:MEDIA_ID,</span>
<span class="token comment">// }</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="上传缩略图" tabindex="-1"><a class="header-anchor" href="#上传缩略图" aria-hidden="true">#</a> 上传缩略图</h3><p>用于视频封面或者音乐封面。</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$result</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">material</span><span class="token operator">-&gt;</span><span class="token function">uploadThumb</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;/path/to/your/thumb.jpg&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// {</span>
<span class="token comment">//    &quot;media_id&quot;:MEDIA_ID,</span>
<span class="token comment">// }</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="上传图文消息" tabindex="-1"><a class="header-anchor" href="#上传图文消息" aria-hidden="true">#</a> 上传图文消息</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">EasyWeChat<span class="token punctuation">\\</span>Kernel<span class="token punctuation">\\</span>Messages<span class="token punctuation">\\</span>Article</span><span class="token punctuation">;</span>

<span class="token comment">// 上传单篇图文</span>
<span class="token variable">\$article</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Article</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
    <span class="token string single-quoted-string">&#39;title&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;xxx&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;thumb_media_id&#39;</span> <span class="token operator">=&gt;</span> <span class="token variable">\$mediaId</span><span class="token punctuation">,</span>
    <span class="token comment">//...</span>
  <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">material</span><span class="token operator">-&gt;</span><span class="token function">uploadArticle</span><span class="token punctuation">(</span><span class="token variable">\$article</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 或者多篇图文</span>
<span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">material</span><span class="token operator">-&gt;</span><span class="token function">uploadArticle</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token variable">\$article</span><span class="token punctuation">,</span> <span class="token variable">\$article2</span><span class="token punctuation">,</span> <span class="token operator">...</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h3 id="修改图文消息" tabindex="-1"><a class="header-anchor" href="#修改图文消息" aria-hidden="true">#</a> 修改图文消息</h3><p>有三个参数：</p><blockquote><ul><li><code>\$mediaId</code> 要更新的文章的 <code>mediaId</code></li><li><code>\$article</code> 文章内容，<code>Article</code> 实例或者 全字段数组</li><li><code>\$index</code> 要更新的文章在图文消息中的位置（多图文消息时，此字段才有意义，单图片忽略此参数），第一篇为 0；</li></ul></blockquote><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$result</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">material</span><span class="token operator">-&gt;</span><span class="token function">updateArticle</span><span class="token punctuation">(</span><span class="token variable">\$mediaId</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Article</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// or</span>

<span class="token variable">\$result</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">material</span><span class="token operator">-&gt;</span><span class="token function">updateArticle</span><span class="token punctuation">(</span><span class="token variable">\$mediaId</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>
   <span class="token string single-quoted-string">&#39;title&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;EasyWeChat 4.0 发布了！&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;thumb_media_id&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;qQFxUQGO21Li4YrSn3MhnrqtRp9Zi3cbM9uBsepvDmE&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 封面图片 mediaId</span>
    <span class="token string single-quoted-string">&#39;author&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;overtrue&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 作者</span>
    <span class="token string single-quoted-string">&#39;show_cover&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token comment">// 是否在文章内容显示封面图片</span>
    <span class="token string single-quoted-string">&#39;digest&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;这里是文章摘要&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;content&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;这里是文章内容，你可以放很长的内容&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;source_url&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;https://www.easywechat.com&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 指定更新多图文中的第 2 篇</span>
<span class="token variable">\$result</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">material</span><span class="token operator">-&gt;</span><span class="token function">updateArticle</span><span class="token punctuation">(</span><span class="token variable">\$mediaId</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Article</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 第 2 篇</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h3 id="上传图文消息图片" tabindex="-1"><a class="header-anchor" href="#上传图文消息图片" aria-hidden="true">#</a> 上传图文消息图片</h3><p>返回值中 url 就是上传图片的 URL，可用于后续群发中，放置到图文消息中。</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$result</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">material</span><span class="token operator">-&gt;</span><span class="token function">uploadArticleImage</span><span class="token punctuation">(</span><span class="token variable">\$path</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//{</span>
<span class="token comment">//    &quot;url&quot;:  &quot;http://mmbiz.qpic.cn/mmbiz/gLO17UPS6FS2xsypf378iaNhWacZ1G1UplZYWEYfwvuU6Ont96b1roYsCNFwaRrSaKTPCUdBK9DgEHicsKwWCBRQ/0&quot;</span>
<span class="token comment">//}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="获取永久素材" tabindex="-1"><a class="header-anchor" href="#获取永久素材" aria-hidden="true">#</a> 获取永久素材</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$resource</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">material</span><span class="token operator">-&gt;</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token variable">\$mediaId</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>如果请求的素材为图文消息，则响应如下：</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
 <span class="token property">&quot;news_item&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
       <span class="token punctuation">{</span>
       <span class="token property">&quot;title&quot;</span><span class="token operator">:</span>TITLE<span class="token punctuation">,</span>
       <span class="token property">&quot;thumb_media_id&quot;</span><span class="token operator">:</span><span class="token operator">:</span>THUMB_MEDIA_ID<span class="token punctuation">,</span>
       <span class="token property">&quot;show_cover_pic&quot;</span><span class="token operator">:</span>SHOW_COVER_PIC(<span class="token number">0</span>/<span class="token number">1</span>)<span class="token punctuation">,</span>
       <span class="token property">&quot;author&quot;</span><span class="token operator">:</span>AUTHOR<span class="token punctuation">,</span>
       <span class="token property">&quot;digest&quot;</span><span class="token operator">:</span>DIGEST<span class="token punctuation">,</span>
       <span class="token property">&quot;content&quot;</span><span class="token operator">:</span>CONTENT<span class="token punctuation">,</span>
       <span class="token property">&quot;url&quot;</span><span class="token operator">:</span>URL<span class="token punctuation">,</span>
       <span class="token property">&quot;content_source_url&quot;</span><span class="token operator">:</span>CONTENT_SOURCE_URL
       <span class="token punctuation">}</span><span class="token punctuation">,</span>
       <span class="token comment">//多图文消息有多篇文章</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>如果返回的是视频消息素材，则内容如下：</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;title&quot;</span><span class="token operator">:</span>TITLE<span class="token punctuation">,</span>
  <span class="token property">&quot;description&quot;</span><span class="token operator">:</span>DESCRIPTION<span class="token punctuation">,</span>
  <span class="token property">&quot;down_url&quot;</span><span class="token operator">:</span>DOWN_URL<span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>其他类型的素材消息，则响应为 <code>EasyWeChat\\Kernel\\Http\\StreamResponse</code> 实例，开发者可以自行保存为文件。例如</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$stream</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">material</span><span class="token operator">-&gt;</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token variable">\$mediaId</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">\$stream</span> <span class="token keyword">instanceof</span> <span class="token class-name class-name-fully-qualified"><span class="token punctuation">\\</span>EasyWeChat<span class="token punctuation">\\</span>Kernel<span class="token punctuation">\\</span>Http<span class="token punctuation">\\</span>StreamResponse</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 以内容 md5 为文件名</span>
    <span class="token variable">\$stream</span><span class="token operator">-&gt;</span><span class="token function">save</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;保存目录&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 自定义文件名，不需要带后缀</span>
    <span class="token variable">\$stream</span><span class="token operator">-&gt;</span><span class="token function">saveAs</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;保存目录&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;文件名&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="获取永久素材列表" tabindex="-1"><a class="header-anchor" href="#获取永久素材列表" aria-hidden="true">#</a> 获取永久素材列表</h3><blockquote><ul><li><code>\$type</code> 素材的类型，图片（<code>image</code>）、视频（<code>video</code>）、语音 （<code>voice</code>）、图文（<code>news</code>）</li><li><code>\$offset</code> 从全部素材的该偏移位置开始返回，可选，默认 <code>0</code>，0 表示从第一个素材 返回</li><li><code>\$count</code> 返回素材的数量，可选，默认 <code>20</code>, 取值在 1 到 20 之间</li></ul></blockquote><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">material</span><span class="token operator">-&gt;</span><span class="token function">list</span><span class="token punctuation">(</span><span class="token variable">\$type</span><span class="token punctuation">,</span> <span class="token variable">\$offset</span><span class="token punctuation">,</span> <span class="token variable">\$count</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>示例：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$list</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">material</span><span class="token operator">-&gt;</span><span class="token function">list</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;image&#39;</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>图片、语音、视频 等类型的返回如下</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
   <span class="token property">&quot;total_count&quot;</span><span class="token operator">:</span> TOTAL_COUNT<span class="token punctuation">,</span>
   <span class="token property">&quot;item_count&quot;</span><span class="token operator">:</span> ITEM_COUNT<span class="token punctuation">,</span>
   <span class="token property">&quot;item&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
       <span class="token property">&quot;media_id&quot;</span><span class="token operator">:</span> MEDIA_ID<span class="token punctuation">,</span>
       <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> NAME<span class="token punctuation">,</span>
       <span class="token property">&quot;update_time&quot;</span><span class="token operator">:</span> UPDATE_TIME<span class="token punctuation">,</span>
       <span class="token property">&quot;url&quot;</span><span class="token operator">:</span>URL
   <span class="token punctuation">}</span><span class="token punctuation">,</span>
   <span class="token comment">//可能会有多个素材</span>
   <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>永久图文消息素材列表的响应如下：</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
   <span class="token property">&quot;total_count&quot;</span><span class="token operator">:</span> TOTAL_COUNT<span class="token punctuation">,</span>
   <span class="token property">&quot;item_count&quot;</span><span class="token operator">:</span> ITEM_COUNT<span class="token punctuation">,</span>
   <span class="token property">&quot;item&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
       <span class="token property">&quot;media_id&quot;</span><span class="token operator">:</span> MEDIA_ID<span class="token punctuation">,</span>
       <span class="token property">&quot;content&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
           <span class="token property">&quot;news_item&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
               <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> TITLE<span class="token punctuation">,</span>
               <span class="token property">&quot;thumb_media_id&quot;</span><span class="token operator">:</span> THUMB_MEDIA_ID<span class="token punctuation">,</span>
               <span class="token property">&quot;show_cover_pic&quot;</span><span class="token operator">:</span> SHOW_COVER_PIC(<span class="token number">0</span> / <span class="token number">1</span>)<span class="token punctuation">,</span>
               <span class="token property">&quot;author&quot;</span><span class="token operator">:</span> AUTHOR<span class="token punctuation">,</span>
               <span class="token property">&quot;digest&quot;</span><span class="token operator">:</span> DIGEST<span class="token punctuation">,</span>
               <span class="token property">&quot;content&quot;</span><span class="token operator">:</span> CONTENT<span class="token punctuation">,</span>
               <span class="token property">&quot;url&quot;</span><span class="token operator">:</span> URL<span class="token punctuation">,</span>
               <span class="token property">&quot;content_source_url&quot;</span><span class="token operator">:</span> CONTETN_SOURCE_URL
           <span class="token punctuation">}</span><span class="token punctuation">,</span>
           <span class="token comment">//多图文消息会在此处有多篇文章</span>
           <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;update_time&quot;</span><span class="token operator">:</span> UPDATE_TIME
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">//可能有多个图文消息item结构</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><h3 id="获取素材计数" tabindex="-1"><a class="header-anchor" href="#获取素材计数" aria-hidden="true">#</a> 获取素材计数</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$stats</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">material</span><span class="token operator">-&gt;</span><span class="token function">stats</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// {</span>
<span class="token comment">//   &quot;voice_count&quot;:COUNT,</span>
<span class="token comment">//   &quot;video_count&quot;:COUNT,</span>
<span class="token comment">//   &quot;image_count&quot;:COUNT,</span>
<span class="token comment">//   &quot;news_count&quot;:COUNT</span>
<span class="token comment">// }</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="删除永久素材" tabindex="-1"><a class="header-anchor" href="#删除永久素材" aria-hidden="true">#</a> 删除永久素材；</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">material</span><span class="token operator">-&gt;</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token variable">\$mediaId</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="文章预览" tabindex="-1"><a class="header-anchor" href="#文章预览" aria-hidden="true">#</a> 文章预览</h3><p>文章预览请参阅 “消息群发” 章节。</p><!--]-->`)
}
// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(84103);
;// CONCATENATED MODULE: ./.vuepress/.temp/pages/4.x/official-account/material.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("/home/runner/work/easywechat/easywechat/docs/node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!/home/runner/work/easywechat/easywechat/docs/node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!/home/runner/work/easywechat/easywechat/docs/.vuepress/.temp/pages/4.x/official-account/material.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const material_html = (script);

/***/ })

};
;
//# sourceMappingURL=7982.app.js.map