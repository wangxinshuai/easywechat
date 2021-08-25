"use strict";
exports.id = 6729;
exports.ids = [6729];
exports.modules = {

/***/ 47783:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-0edc9d06",
  "path": "/5.x/official-account/broadcasting.html",
  "title": "群发",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "发送消息",
      "slug": "发送消息",
      "children": [
        {
          "level": 3,
          "title": "文本消息",
          "slug": "文本消息",
          "children": []
        },
        {
          "level": 3,
          "title": "图文消息",
          "slug": "图文消息",
          "children": []
        },
        {
          "level": 3,
          "title": "图片消息",
          "slug": "图片消息",
          "children": []
        },
        {
          "level": 3,
          "title": "语音消息",
          "slug": "语音消息",
          "children": []
        },
        {
          "level": 3,
          "title": "视频消息",
          "slug": "视频消息",
          "children": []
        },
        {
          "level": 3,
          "title": "卡券消息",
          "slug": "卡券消息",
          "children": []
        },
        {
          "level": 3,
          "title": "发送预览群发消息给指定的 openId 用户",
          "slug": "发送预览群发消息给指定的-openid-用户",
          "children": []
        },
        {
          "level": 3,
          "title": "发送预览群发消息给指定的微信号用户",
          "slug": "发送预览群发消息给指定的微信号用户",
          "children": []
        },
        {
          "level": 3,
          "title": "删除群发消息",
          "slug": "删除群发消息",
          "children": []
        },
        {
          "level": 3,
          "title": "查询群发消息发送状态",
          "slug": "查询群发消息发送状态",
          "children": []
        }
      ]
    }
  ],
  "filePathRelative": "5.x/official-account/broadcasting.md",
  "git": {
    "updatedTime": 1629906046000,
    "contributors": []
  }
}


/***/ }),

/***/ 54926:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ broadcasting_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.vuepress/.temp/pages/5.x/official-account/broadcasting.html.vue?vue&type=template&id=3e599262

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="群发" tabindex="-1"><a class="header-anchor" href="#群发" aria-hidden="true">#</a> 群发</h1><p>微信的群发消息接口有各种乱七八糟的注意事项及限制，具体请阅读微信官方文档。</p><h2 id="发送消息" tabindex="-1"><a class="header-anchor" href="#发送消息" aria-hidden="true">#</a> 发送消息</h2><p>以下所有方法均有第二个参数 <code>\$to</code> 用于指定接收对象：</p><blockquote><ul><li>当 <code>\$to</code> 为整型时为标签 id</li><li>当 <code>\$to</code> 为数组时为用户的 openid 列表（至少两个用户的 openid）</li><li>当 <code>\$to</code> 为 <code>null</code> 时表示全部用户</li></ul></blockquote><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">broadcasting</span><span class="token operator">-&gt;</span><span class="token function">sendMessage</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Message</span> <span class="token variable">\$message</span><span class="token punctuation">,</span> <span class="token keyword type-declaration">array</span> <span class="token operator">|</span> <span class="token keyword type-declaration">int</span> <span class="token variable">\$to</span> <span class="token operator">=</span> <span class="token constant">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>下面的别名方法 <code>sendXXX</code> 都是基于上面 <code>sendMessage</code> 方法的封装。</p><h3 id="文本消息" tabindex="-1"><a class="header-anchor" href="#文本消息" aria-hidden="true">#</a> 文本消息</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">broadcasting</span><span class="token operator">-&gt;</span><span class="token function">sendText</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;大家好！欢迎使用 EasyWeChat。&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 指定目标用户</span>
<span class="token comment">// 至少两个用户的 openid，必须是数组。</span>
<span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">broadcasting</span><span class="token operator">-&gt;</span><span class="token function">sendText</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;大家好！欢迎使用 EasyWeChat。&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token variable">\$openid1</span><span class="token punctuation">,</span> <span class="token variable">\$openid2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 指定标签组用户</span>
<span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">broadcasting</span><span class="token operator">-&gt;</span><span class="token function">sendText</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;大家好！欢迎使用 EasyWeChat。&quot;</span><span class="token punctuation">,</span> <span class="token variable">\$tagId</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \$tagId 必须是整型数字</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="图文消息" tabindex="-1"><a class="header-anchor" href="#图文消息" aria-hidden="true">#</a> 图文消息</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">broadcasting</span><span class="token operator">-&gt;</span><span class="token function">sendNews</span><span class="token punctuation">(</span><span class="token variable">\$mediaId</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">broadcasting</span><span class="token operator">-&gt;</span><span class="token function">sendNews</span><span class="token punctuation">(</span><span class="token variable">\$mediaId</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token variable">\$openid1</span><span class="token punctuation">,</span> <span class="token variable">\$openid2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">broadcasting</span><span class="token operator">-&gt;</span><span class="token function">sendNews</span><span class="token punctuation">(</span><span class="token variable">\$mediaId</span><span class="token punctuation">,</span> <span class="token variable">\$tagId</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="图片消息" tabindex="-1"><a class="header-anchor" href="#图片消息" aria-hidden="true">#</a> 图片消息</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">broadcasting</span><span class="token operator">-&gt;</span><span class="token function">sendImage</span><span class="token punctuation">(</span><span class="token variable">\$mediaId</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">broadcasting</span><span class="token operator">-&gt;</span><span class="token function">sendImage</span><span class="token punctuation">(</span><span class="token variable">\$mediaId</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token variable">\$openid1</span><span class="token punctuation">,</span> <span class="token variable">\$openid2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">broadcasting</span><span class="token operator">-&gt;</span><span class="token function">sendImage</span><span class="token punctuation">(</span><span class="token variable">\$mediaId</span><span class="token punctuation">,</span> <span class="token variable">\$tagId</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="语音消息" tabindex="-1"><a class="header-anchor" href="#语音消息" aria-hidden="true">#</a> 语音消息</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">broadcasting</span><span class="token operator">-&gt;</span><span class="token function">sendVoice</span><span class="token punctuation">(</span><span class="token variable">\$mediaId</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">broadcasting</span><span class="token operator">-&gt;</span><span class="token function">sendVoice</span><span class="token punctuation">(</span><span class="token variable">\$mediaId</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token variable">\$openid1</span><span class="token punctuation">,</span> <span class="token variable">\$openid2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">broadcasting</span><span class="token operator">-&gt;</span><span class="token function">sendVoice</span><span class="token punctuation">(</span><span class="token variable">\$mediaId</span><span class="token punctuation">,</span> <span class="token variable">\$tagId</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="视频消息" tabindex="-1"><a class="header-anchor" href="#视频消息" aria-hidden="true">#</a> 视频消息</h3><p>用于群发的视频消息，需要先创建消息对象，</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token comment">// 1. 先上传视频素材用于群发：</span>
<span class="token variable">\$video</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;/path/to/video.mp4&#39;</span><span class="token punctuation">;</span>
<span class="token variable">\$videoMedia</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">media</span><span class="token operator">-&gt;</span><span class="token function">uploadVideoForBroadcasting</span><span class="token punctuation">(</span><span class="token variable">\$video</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;视频标题&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;视频描述&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 结果如下：</span>
<span class="token comment">//{</span>
<span class="token comment">//  &quot;type&quot;:&quot;video&quot;,</span>
<span class="token comment">//  &quot;media_id&quot;:&quot;IhdaAQXuvJtGzwwc0abfXnzeezfO0NgPK6AQYShD8RQYMTtfzbLdBIQkQziv2XJc&quot;,</span>
<span class="token comment">//  &quot;created_at&quot;:1398848981</span>
<span class="token comment">//}</span>

<span class="token comment">// 2. 使用上面得到的 media_id 群发视频消息</span>
<span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">broadcasting</span><span class="token operator">-&gt;</span><span class="token function">sendVideo</span><span class="token punctuation">(</span><span class="token variable">\$videoMedia</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;media_id&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h3 id="卡券消息" tabindex="-1"><a class="header-anchor" href="#卡券消息" aria-hidden="true">#</a> 卡券消息</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">broadcasting</span><span class="token operator">-&gt;</span><span class="token function">sendCard</span><span class="token punctuation">(</span><span class="token variable">\$cardId</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">broadcasting</span><span class="token operator">-&gt;</span><span class="token function">sendCard</span><span class="token punctuation">(</span><span class="token variable">\$cardId</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token variable">\$openid1</span><span class="token punctuation">,</span> <span class="token variable">\$openid2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">broadcasting</span><span class="token operator">-&gt;</span><span class="token function">sendCard</span><span class="token punctuation">(</span><span class="token variable">\$cardId</span><span class="token punctuation">,</span> <span class="token variable">\$tagId</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="发送预览群发消息给指定的-openid-用户" tabindex="-1"><a class="header-anchor" href="#发送预览群发消息给指定的-openid-用户" aria-hidden="true">#</a> 发送预览群发消息给指定的 <code>openId</code> 用户</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">broadcasting</span><span class="token operator">-&gt;</span><span class="token function">previewText</span><span class="token punctuation">(</span><span class="token variable">\$text</span><span class="token punctuation">,</span> <span class="token variable">\$openId</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">broadcasting</span><span class="token operator">-&gt;</span><span class="token function">previewNews</span><span class="token punctuation">(</span><span class="token variable">\$mediaId</span><span class="token punctuation">,</span> <span class="token variable">\$openId</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">broadcasting</span><span class="token operator">-&gt;</span><span class="token function">previewVoice</span><span class="token punctuation">(</span><span class="token variable">\$mediaId</span><span class="token punctuation">,</span> <span class="token variable">\$openId</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">broadcasting</span><span class="token operator">-&gt;</span><span class="token function">previewImage</span><span class="token punctuation">(</span><span class="token variable">\$mediaId</span><span class="token punctuation">,</span> <span class="token variable">\$openId</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">broadcasting</span><span class="token operator">-&gt;</span><span class="token function">previewVideo</span><span class="token punctuation">(</span><span class="token variable">\$message</span><span class="token punctuation">,</span> <span class="token variable">\$openId</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">broadcasting</span><span class="token operator">-&gt;</span><span class="token function">previewCard</span><span class="token punctuation">(</span><span class="token variable">\$cardId</span><span class="token punctuation">,</span> <span class="token variable">\$openId</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="发送预览群发消息给指定的微信号用户" tabindex="-1"><a class="header-anchor" href="#发送预览群发消息给指定的微信号用户" aria-hidden="true">#</a> 发送预览群发消息给指定的微信号用户</h3><blockquote><p>\$wxanme 是用户的微信号，比如：notovertrue</p></blockquote><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">broadcasting</span><span class="token operator">-&gt;</span><span class="token function">previewTextByName</span><span class="token punctuation">(</span><span class="token variable">\$text</span><span class="token punctuation">,</span> <span class="token variable">\$wxname</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">broadcasting</span><span class="token operator">-&gt;</span><span class="token function">previewNewsByName</span><span class="token punctuation">(</span><span class="token variable">\$mediaId</span><span class="token punctuation">,</span> <span class="token variable">\$wxname</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">broadcasting</span><span class="token operator">-&gt;</span><span class="token function">previewVoiceByName</span><span class="token punctuation">(</span><span class="token variable">\$mediaId</span><span class="token punctuation">,</span> <span class="token variable">\$wxname</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">broadcasting</span><span class="token operator">-&gt;</span><span class="token function">previewImageByName</span><span class="token punctuation">(</span><span class="token variable">\$mediaId</span><span class="token punctuation">,</span> <span class="token variable">\$wxname</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">broadcasting</span><span class="token operator">-&gt;</span><span class="token function">previewVideoByName</span><span class="token punctuation">(</span><span class="token variable">\$message</span><span class="token punctuation">,</span> <span class="token variable">\$wxname</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">broadcasting</span><span class="token operator">-&gt;</span><span class="token function">previewCardByName</span><span class="token punctuation">(</span><span class="token variable">\$cardId</span><span class="token punctuation">,</span> <span class="token variable">\$wxname</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="删除群发消息" tabindex="-1"><a class="header-anchor" href="#删除群发消息" aria-hidden="true">#</a> 删除群发消息</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">broadcasting</span><span class="token operator">-&gt;</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token variable">\$msgId</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="查询群发消息发送状态" tabindex="-1"><a class="header-anchor" href="#查询群发消息发送状态" aria-hidden="true">#</a> 查询群发消息发送状态</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">broadcasting</span><span class="token operator">-&gt;</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token variable">\$msgId</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><!--]-->`)
}
// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(84103);
;// CONCATENATED MODULE: ./.vuepress/.temp/pages/5.x/official-account/broadcasting.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("/home/runner/work/easywechat/easywechat/docs/node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!/home/runner/work/easywechat/easywechat/docs/node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!/home/runner/work/easywechat/easywechat/docs/.vuepress/.temp/pages/5.x/official-account/broadcasting.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const broadcasting_html = (script);

/***/ })

};
;
//# sourceMappingURL=6729.app.js.map