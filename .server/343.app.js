"use strict";
exports.id = 343;
exports.ids = [343];
exports.modules = {

/***/ 59668:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-f9b5b5b2",
  "path": "/3.x/material.html",
  "title": "素材管理",
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
      "title": "永久素材 API：",
      "slug": "永久素材-api",
      "children": [
        {
          "level": 3,
          "title": "上传图片:",
          "slug": "上传图片",
          "children": []
        },
        {
          "level": 3,
          "title": "上传声音",
          "slug": "上传声音",
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
          "title": "上传永久图文消息",
          "slug": "上传永久图文消息",
          "children": []
        },
        {
          "level": 3,
          "title": "修改永久图文消息",
          "slug": "修改永久图文消息",
          "children": []
        },
        {
          "level": 3,
          "title": "上传永久文章内容图片",
          "slug": "上传永久文章内容图片",
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
        }
      ]
    },
    {
      "level": 2,
      "title": "临时素材 API",
      "slug": "临时素材-api",
      "children": [
        {
          "level": 3,
          "title": "上传图片",
          "slug": "上传图片-1",
          "children": []
        },
        {
          "level": 3,
          "title": "上传声音",
          "slug": "上传声音-1",
          "children": []
        },
        {
          "level": 3,
          "title": "上传视频",
          "slug": "上传视频-1",
          "children": []
        },
        {
          "level": 3,
          "title": "上传缩略图",
          "slug": "上传缩略图-1",
          "children": []
        },
        {
          "level": 3,
          "title": "获取临时素材内容",
          "slug": "获取临时素材内容",
          "children": []
        },
        {
          "level": 3,
          "title": "下载临时素材到本地",
          "slug": "下载临时素材到本地",
          "children": []
        }
      ]
    }
  ],
  "filePathRelative": "3.x/material.md",
  "git": {
    "updatedTime": 1629906046000,
    "contributors": []
  }
}


/***/ }),

/***/ 11307:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ material_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(84103);
// EXTERNAL MODULE: external "@vue/server-renderer"
var server_renderer_ = __webpack_require__(32745);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.vuepress/.temp/pages/3.x/material.html.vue?vue&type=template&id=9e06152c



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_OutboundLink = (0,external_vue_.resolveComponent)("OutboundLink")

  _push(`<!--[--><h1 id="素材管理" tabindex="-1"><a class="header-anchor" href="#素材管理" aria-hidden="true">#</a> 素材管理</h1><p>在微信里的图片，音乐，视频等等都需要先上传到微信服务器作为素材才可以在消息中使用。</p><blockquote><p>请注意：</p></blockquote><blockquote><pre><code>1. 限制：
  - 图片（image）: 1M，支持 bmp/png/jpeg/jpg/gif 格式
  - 语音（voice）：2M，播放长度不超过 60s，支持 mp3/wma/wav/amr 格式
  - 视频（video）：10MB，支持MP4格式
  - 缩略图（thumb）：64KB，支持JPG格式
</code></pre></blockquote><blockquote><pre><code>2. \`media_id\` 是可复用的；
3. 素材分为 \`临时素材\` 与 \`永久素材\`， 临时素材媒体文件在后台保存时间为3天，即 3 天后 \`media_id\` 失效；
4. 新增的永久素材也可以在公众平台官网素材管理模块中看到；
5. 永久素材的数量是有上限的，请谨慎新增。图文消息素材和图片素材的上限为5000，其他类型为1000；
</code></pre></blockquote><h2 id="获取实例" tabindex="-1"><a class="header-anchor" href="#获取实例" aria-hidden="true">#</a> 获取实例</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token keyword">use</span> <span class="token package">EasyWeChat<span class="token punctuation">\\</span>Foundation<span class="token punctuation">\\</span>Application</span><span class="token punctuation">;</span>

<span class="token variable">\$app</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Application</span><span class="token punctuation">(</span><span class="token variable">\$options</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 永久素材</span>
<span class="token variable">\$material</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">material</span><span class="token punctuation">;</span>
<span class="token comment">// 临时素材</span>
<span class="token variable">\$temporary</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">material_temporary</span><span class="token punctuation">;</span>
</span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="永久素材-api" tabindex="-1"><a class="header-anchor" href="#永久素材-api" aria-hidden="true">#</a> 永久素材 API：</h2><h3 id="上传图片" tabindex="-1"><a class="header-anchor" href="#上传图片" aria-hidden="true">#</a> 上传图片:</h3><blockquote><p>注意：微信图片上传服务有敏感检测系统，图片内容如果含有敏感内容，如色情，商品推广，虚假信息等，上传可能失败。</p></blockquote><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$result</span> <span class="token operator">=</span> <span class="token variable">\$material</span><span class="token operator">-&gt;</span><span class="token function">uploadImage</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;/path/to/your/image.jpg&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 请使用绝对路径写法！除非你正确的理解了相对路径（好多人是没理解对的）！</span>
<span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token variable">\$result</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// {</span>
<span class="token comment">//    &quot;media_id&quot;:MEDIA_ID,</span>
<span class="token comment">//    &quot;url&quot;:URL</span>
<span class="token comment">// }</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><blockquote><p><code>url</code> 只有上传图片素材有返回值。</p></blockquote><h3 id="上传声音" tabindex="-1"><a class="header-anchor" href="#上传声音" aria-hidden="true">#</a> 上传声音</h3><p>语音<strong>大小不超过 5M</strong>，<strong>长度不超过 60 秒</strong>，支持 <code>mp3/wma/wav/amr</code> 格式。</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$result</span> <span class="token operator">=</span> <span class="token variable">\$material</span><span class="token operator">-&gt;</span><span class="token function">uploadVoice</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;/path/to/your/voice.mp3&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 请使用绝对路径写法！除非你正确的理解了相对路径（好多人是没理解对的）！</span>
<span class="token variable">\$mediaId</span> <span class="token operator">=</span> <span class="token variable">\$result</span><span class="token operator">-&gt;</span><span class="token property">media_id</span><span class="token punctuation">;</span>
<span class="token comment">// {</span>
<span class="token comment">//    &quot;media_id&quot;:MEDIA_ID,</span>
<span class="token comment">// }</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="上传视频" tabindex="-1"><a class="header-anchor" href="#上传视频" aria-hidden="true">#</a> 上传视频</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$result</span> <span class="token operator">=</span> <span class="token variable">\$material</span><span class="token operator">-&gt;</span><span class="token function">uploadVideo</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;/path/to/your/video.mp4&quot;</span><span class="token punctuation">,</span> <span class="token string double-quoted-string">&quot;视频标题&quot;</span><span class="token punctuation">,</span> <span class="token string double-quoted-string">&quot;视频描述&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 请使用绝对路径写法！除非你正确的理解了相对路径（好多人是没理解对的）！</span>
<span class="token variable">\$mediaId</span> <span class="token operator">=</span> <span class="token variable">\$result</span><span class="token operator">-&gt;</span><span class="token property">media_id</span><span class="token punctuation">;</span>
<span class="token comment">// {</span>
<span class="token comment">//    &quot;media_id&quot;:MEDIA_ID,</span>
<span class="token comment">// }</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="上传缩略图" tabindex="-1"><a class="header-anchor" href="#上传缩略图" aria-hidden="true">#</a> 上传缩略图</h3><p>用于视频封面或者音乐封面。</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$result</span> <span class="token operator">=</span> <span class="token variable">\$material</span><span class="token operator">-&gt;</span><span class="token function">uploadThumb</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;/path/to/your/thumb.jpg&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 请使用绝对路径写法！除非你正确的理解了相对路径（好多人是没理解对的）！</span>
<span class="token variable">\$mediaId</span> <span class="token operator">=</span> <span class="token variable">\$result</span><span class="token operator">-&gt;</span><span class="token property">media_id</span><span class="token punctuation">;</span>
<span class="token comment">// {</span>
<span class="token comment">//    &quot;media_id&quot;:MEDIA_ID,</span>
<span class="token comment">// }</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="上传永久图文消息" tabindex="-1"><a class="header-anchor" href="#上传永久图文消息" aria-hidden="true">#</a> 上传永久图文消息</h3><p>图文消息没有临时一说。</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">EasyWeChat<span class="token punctuation">\\</span>Message<span class="token punctuation">\\</span>Article</span><span class="token punctuation">;</span>
<span class="token comment">// 上传单篇图文</span>
<span class="token variable">\$article</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Article</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
    <span class="token string single-quoted-string">&#39;title&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;xxx&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;thumb_media_id&#39;</span> <span class="token operator">=&gt;</span> <span class="token variable">\$mediaId</span><span class="token punctuation">,</span>
    <span class="token comment">//...</span>
  <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">\$material</span><span class="token operator">-&gt;</span><span class="token function">uploadArticle</span><span class="token punctuation">(</span><span class="token variable">\$article</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 或者多篇图文</span>
<span class="token variable">\$material</span><span class="token operator">-&gt;</span><span class="token function">uploadArticle</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token variable">\$article</span><span class="token punctuation">,</span> <span class="token variable">\$article2</span><span class="token punctuation">,</span> <span class="token operator">...</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="修改永久图文消息" tabindex="-1"><a class="header-anchor" href="#修改永久图文消息" aria-hidden="true">#</a> 修改永久图文消息</h3><p>有三个参数：</p><ul><li><code>\$mediaId</code> 要更新的文章的 <code>mediaId</code></li><li><code>\$article</code> 文章内容，<code>Article</code> 实例或者 全字段数组</li><li><code>\$index</code> 要更新的文章在图文消息中的位置（多图文消息时，此字段才有意义，单图片忽略此参数），第一篇为 0；</li></ul><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$result</span> <span class="token operator">=</span> <span class="token variable">\$material</span><span class="token operator">-&gt;</span><span class="token function">updateArticle</span><span class="token punctuation">(</span><span class="token variable">\$mediaId</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Article</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">\$mediaId</span> <span class="token operator">=</span> <span class="token variable">\$result</span><span class="token operator">-&gt;</span><span class="token property">media_id</span><span class="token punctuation">;</span>

<span class="token comment">// or</span>

<span class="token variable">\$result</span> <span class="token operator">=</span> <span class="token variable">\$material</span><span class="token operator">-&gt;</span><span class="token function">updateArticle</span><span class="token punctuation">(</span><span class="token variable">\$mediaId</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>
    <span class="token string single-quoted-string">&#39;title&#39;</span>          <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;xxx&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;thumb_media_id&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;xxx&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 指定更新多图文中的第 2 篇</span>
<span class="token variable">\$result</span> <span class="token operator">=</span> <span class="token variable">\$material</span><span class="token operator">-&gt;</span><span class="token function">updateArticle</span><span class="token punctuation">(</span><span class="token variable">\$mediaId</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Article</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 第 2 篇</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h3 id="上传永久文章内容图片" tabindex="-1"><a class="header-anchor" href="#上传永久文章内容图片" aria-hidden="true">#</a> 上传永久文章内容图片</h3><blockquote><p>注意：微信图片上传服务有敏感检测系统，图片内容如果含有敏感内容，如色情，商品推广，虚假信息等，上传可能失败。</p></blockquote><p>返回值中 url 就是上传图片的 URL，可用于后续群发中，放置到图文消息中。</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$result</span> <span class="token operator">=</span> <span class="token variable">\$material</span><span class="token operator">-&gt;</span><span class="token function">uploadArticleImage</span><span class="token punctuation">(</span><span class="token variable">\$path</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">\$url</span> <span class="token operator">=</span> <span class="token variable">\$result</span><span class="token operator">-&gt;</span><span class="token property">url</span><span class="token punctuation">;</span>
<span class="token comment">//{</span>
<span class="token comment">//    &quot;url&quot;:  &quot;http://mmbiz.qpic.cn/mmbiz/gLO17UPS6FS2xsypf378iaNhWacZ1G1UplZYWEYfwvuU6Ont96b1roYsCNFwaRrSaKTPCUdBK9DgEHicsKwWCBRQ/0&quot;</span>
<span class="token comment">//}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="获取永久素材" tabindex="-1"><a class="header-anchor" href="#获取永久素材" aria-hidden="true">#</a> 获取永久素材</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$resource</span> <span class="token operator">=</span> <span class="token variable">\$material</span><span class="token operator">-&gt;</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token variable">\$mediaId</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>如果请求的素材为图文消息，则响应如下：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
 &quot;news_item&quot;: [
       {
       &quot;title&quot;:TITLE,
       &quot;thumb_media_id&quot;::THUMB_MEDIA_ID,
       &quot;show_cover_pic&quot;:SHOW_COVER_PIC(0/1),
       &quot;author&quot;:AUTHOR,
       &quot;digest&quot;:DIGEST,
       &quot;content&quot;:CONTENT,
       &quot;url&quot;:URL,
       &quot;content_source_url&quot;:CONTENT_SOURCE_URL
       },
       //多图文消息有多篇文章
    ]
  }
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>如果返回的是视频消息素材，则内容如下：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
  &quot;title&quot;:TITLE,
  &quot;description&quot;:DESCRIPTION,
  &quot;down_url&quot;:DOWN_URL,
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>其他类型的素材消息，则响应的直接为素材的内容，开发者可以自行保存为文件。例如</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\$image = \$material-&gt;get(\$mediaId);
file_put_contents(&#39;/foo/abc.jpg&#39;, \$image);
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="获取永久素材列表" tabindex="-1"><a class="header-anchor" href="#获取永久素材列表" aria-hidden="true">#</a> 获取永久素材列表</h3><p>参考：<a href="http://mp.weixin.qq.com/wiki/12/2108cd7aafff7f388f41f37efa710204.html" target="_blank" rel="noopener noreferrer">微信公众平台开发者文档：获取永久素材列表`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></p><ul><li><code>\$type</code> 素材的类型，图片（<code>image</code>）、视频（<code>video</code>）、语音 （<code>voice</code>）、图文（<code>news</code>）</li><li><code>\$offset</code> 从全部素材的该偏移位置开始返回，可选，默认 <code>0</code>，0 表示从第一个素材 返回</li><li><code>\$count</code> 返回素材的数量，可选，默认 <code>20</code>, 取值在 1 到 20 之间</li></ul><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$material</span><span class="token operator">-&gt;</span><span class="token function">lists</span><span class="token punctuation">(</span><span class="token variable">\$type</span><span class="token punctuation">,</span> <span class="token variable">\$offset</span><span class="token punctuation">,</span> <span class="token variable">\$count</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>example:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\$lists = \$material-&gt;lists(&#39;image&#39;, 0, 10);
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>图片、语音、视频 等类型的返回如下</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
   &quot;total_count&quot;: TOTAL_COUNT,
   &quot;item_count&quot;: ITEM_COUNT,
   &quot;item&quot;: [{
       &quot;media_id&quot;: MEDIA_ID,
       &quot;name&quot;: NAME,
       &quot;update_time&quot;: UPDATE_TIME,
       &quot;url&quot;:URL
   },
   //可能会有多个素材
   ]
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>永久图文消息素材列表的响应如下：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
   &quot;total_count&quot;: TOTAL_COUNT,
   &quot;item_count&quot;: ITEM_COUNT,
   &quot;item&quot;: [{
       &quot;media_id&quot;: MEDIA_ID,
       &quot;content&quot;: {
           &quot;news_item&quot;: [{
               &quot;title&quot;: TITLE,
               &quot;thumb_media_id&quot;: THUMB_MEDIA_ID,
               &quot;show_cover_pic&quot;: SHOW_COVER_PIC(0 / 1),
               &quot;author&quot;: AUTHOR,
               &quot;digest&quot;: DIGEST,
               &quot;content&quot;: CONTENT,
               &quot;url&quot;: URL,
               &quot;content_source_url&quot;: CONTETN_SOURCE_URL
           },
           //多图文消息会在此处有多篇文章
           ]
        },
        &quot;update_time&quot;: UPDATE_TIME
    },
    //可能有多个图文消息item结构
  ]
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><h3 id="获取素材计数" tabindex="-1"><a class="header-anchor" href="#获取素材计数" aria-hidden="true">#</a> 获取素材计数</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$stats</span> <span class="token operator">=</span> <span class="token variable">\$material</span><span class="token operator">-&gt;</span><span class="token function">stats</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// {</span>
<span class="token comment">//   &quot;voice_count&quot;:COUNT,</span>
<span class="token comment">//   &quot;video_count&quot;:COUNT,</span>
<span class="token comment">//   &quot;image_count&quot;:COUNT,</span>
<span class="token comment">//   &quot;news_count&quot;:COUNT</span>
<span class="token comment">// }</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="删除永久素材" tabindex="-1"><a class="header-anchor" href="#删除永久素材" aria-hidden="true">#</a> 删除永久素材；</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$material</span><span class="token operator">-&gt;</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token variable">\$mediaId</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="临时素材-api" tabindex="-1"><a class="header-anchor" href="#临时素材-api" aria-hidden="true">#</a> 临时素材 API</h2><p>上传的临时多媒体文件有格式和大小限制，如下：</p><ul><li>图片（image）: 1M，支持 <code>JPG</code> 格式</li><li>语音（voice）：2M，播放长度不超过 <code>60s</code>，支持 <code>AMR\\MP3</code> 格式</li><li>视频（video）：10MB，支持 <code>MP4</code> 格式</li><li>缩略图（thumb）：64KB，支持 <code>JPG</code> 格式</li></ul><h3 id="上传图片-1" tabindex="-1"><a class="header-anchor" href="#上传图片-1" aria-hidden="true">#</a> 上传图片</h3><blockquote><p>注意：微信图片上传服务有敏感检测系统，图片内容如果含有敏感内容，如色情，商品推广，虚假信息等，上传可能失败。</p></blockquote><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$temporary</span><span class="token operator">-&gt;</span><span class="token function">uploadImage</span><span class="token punctuation">(</span><span class="token variable">\$path</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="上传声音-1" tabindex="-1"><a class="header-anchor" href="#上传声音-1" aria-hidden="true">#</a> 上传声音</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$temporary</span><span class="token operator">-&gt;</span><span class="token function">uploadVoice</span><span class="token punctuation">(</span><span class="token variable">\$path</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="上传视频-1" tabindex="-1"><a class="header-anchor" href="#上传视频-1" aria-hidden="true">#</a> 上传视频</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$temporary</span><span class="token operator">-&gt;</span><span class="token function">uploadVideo</span><span class="token punctuation">(</span><span class="token variable">\$path</span><span class="token punctuation">,</span> <span class="token variable">\$title</span><span class="token punctuation">,</span> <span class="token variable">\$description</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="上传缩略图-1" tabindex="-1"><a class="header-anchor" href="#上传缩略图-1" aria-hidden="true">#</a> 上传缩略图</h3><p>用于视频封面或者音乐封面。</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$temporary</span><span class="token operator">-&gt;</span><span class="token function">uploadThumb</span><span class="token punctuation">(</span><span class="token variable">\$path</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="获取临时素材内容" tabindex="-1"><a class="header-anchor" href="#获取临时素材内容" aria-hidden="true">#</a> 获取临时素材内容</h3><p>比如图片、视频、声音等二进制流内容。</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$content</span> <span class="token operator">=</span> <span class="token variable">\$temporary</span><span class="token operator">-&gt;</span><span class="token function">getStream</span><span class="token punctuation">(</span><span class="token variable">\$mediaId</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">file_put_contents</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;/tmp/abc.jpg&#39;</span><span class="token punctuation">,</span> <span class="token variable">\$content</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 请使用绝对路径写法！除非你正确的理解了相对路径（好多人是没理解对的）！</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="下载临时素材到本地" tabindex="-1"><a class="header-anchor" href="#下载临时素材到本地" aria-hidden="true">#</a> 下载临时素材到本地</h3><p>其实就是上一个 API 的封装。</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$temporary</span><span class="token operator">-&gt;</span><span class="token function">download</span><span class="token punctuation">(</span><span class="token variable">\$mediaId</span><span class="token punctuation">,</span> <span class="token string double-quoted-string">&quot;/tmp/&quot;</span><span class="token punctuation">,</span> <span class="token string double-quoted-string">&quot;abc.jpg&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>参数说明：</p><ul><li><code>\$directory</code> 为目标目录，</li><li><code>\$filename</code> 为新的文件名，可以为空，默认使用 <code>\$mediaId</code> 作为文件名。</li></ul><p>更多请参考 <a href="http://mp.weixin.qq.com/wiki" target="_blank" rel="noopener noreferrer">微信官方文档`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> <code>素材管理</code> 章节</p><!--]-->`)
}
;// CONCATENATED MODULE: ./.vuepress/.temp/pages/3.x/material.html.vue?vue&type=template&id=9e06152c

;// CONCATENATED MODULE: ./.vuepress/.temp/pages/3.x/material.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("/home/runner/work/easywechat/easywechat/docs/node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!/home/runner/work/easywechat/easywechat/docs/node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!/home/runner/work/easywechat/easywechat/docs/.vuepress/.temp/pages/3.x/material.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const material_html = (script);

/***/ })

};
;
//# sourceMappingURL=343.app.js.map