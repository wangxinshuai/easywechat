"use strict";
exports.id = 7554;
exports.ids = [7554];
exports.modules = {

/***/ 28066:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-caecbb7a",
  "path": "/3.x/broadcast.html",
  "title": "群发",
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
      "title": "API",
      "slug": "api",
      "children": [
        {
          "level": 3,
          "title": "群发消息给所有粉丝",
          "slug": "群发消息给所有粉丝",
          "children": []
        },
        {
          "level": 3,
          "title": "群发消息给指定组",
          "slug": "群发消息给指定组",
          "children": []
        },
        {
          "level": 3,
          "title": "群发消息给指定用户",
          "slug": "群发消息给指定用户",
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
  "filePathRelative": "3.x/broadcast.md",
  "git": {
    "updatedTime": 1629906046000,
    "contributors": []
  }
}


/***/ }),

/***/ 53128:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ broadcast_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.vuepress/.temp/pages/3.x/broadcast.html.vue?vue&type=template&id=060fa682

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="群发" tabindex="-1"><a class="header-anchor" href="#群发" aria-hidden="true">#</a> 群发</h1><p>微信的群发消息接口有各种乱七八糟的注意事项及限制，具体请阅读微信官方文档：http://mp.weixin.qq.com/wiki/15/5380a4e6f02f2ffdc7981a8ed7a40753.html</p><h2 id="获取实例" tabindex="-1"><a class="header-anchor" href="#获取实例" aria-hidden="true">#</a> 获取实例</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token keyword">use</span> <span class="token package">EasyWeChat<span class="token punctuation">\\</span>Foundation<span class="token punctuation">\\</span>Application</span><span class="token punctuation">;</span>
<span class="token comment">// ...</span>
<span class="token variable">\$app</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Application</span><span class="token punctuation">(</span><span class="token variable">\$options</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">\$broadcast</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">broadcast</span><span class="token punctuation">;</span>

</span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2><blockquote><p>注意：</p></blockquote><pre><code>下面提到的 \`\$messageType\` 、\`\$message\` 可以是：

- \`\$messageType = Broadcast::MSG_TYPE_NEWS;\` 图文消息类型，所对应的 \`\$message\` 为 media_id
- \`\$messageType = Broadcast::MSG_TYPE_TEXT;\` 文本消息类型，所对应的 \`\$message\` 为一个文本字符串
- \`\$messageType = Broadcast::MSG_TYPE_VOICE;\` 语音消息类型，所对应的 \`\$message\` 为 media_id
- \`\$messageType = Broadcast::MSG_TYPE_IMAGE;\` 图片消息类型，所对应的 \`\$message\` 为 media_id
- \`\$messageType = Broadcast::MSG_TYPE_CARD;\` 卡券消息类型，所对应的 \`\$message\` 为 card_id
- \`\$messageType = Broadcast::MSG_TYPE_VIDEO;\` 视频消息为两种情况：
    - 视频消息类型，群发视频消息给**组或预览群发视频消息**给用户时所对应的 \`\$message\` 为\`media_id\`
    - 群发视频消息**给指定用户**时所对应的 \`\$message\` 为一个数组 \`[&#39;MEDIA_ID&#39;, &#39;TITLE&#39;, &#39;DESCRIPTION&#39;]\`
</code></pre><h3 id="群发消息给所有粉丝" tabindex="-1"><a class="header-anchor" href="#群发消息给所有粉丝" aria-hidden="true">#</a> 群发消息给所有粉丝</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$broadcast</span><span class="token operator">-&gt;</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token variable">\$messageType</span><span class="token punctuation">,</span> <span class="token variable">\$message</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 别名方式</span>
<span class="token variable">\$broadcast</span><span class="token operator">-&gt;</span><span class="token function">sendText</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;大家好！欢迎使用 EasyWeChat。&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">\$broadcast</span><span class="token operator">-&gt;</span><span class="token function">sendNews</span><span class="token punctuation">(</span><span class="token variable">\$mediaId</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">\$broadcast</span><span class="token operator">-&gt;</span><span class="token function">sendVoice</span><span class="token punctuation">(</span><span class="token variable">\$mediaId</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">\$broadcast</span><span class="token operator">-&gt;</span><span class="token function">sendImage</span><span class="token punctuation">(</span><span class="token variable">\$mediaId</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//视频：</span>
<span class="token comment">// - 群发给组用户，或者预览群发视频时 \$message 为 media_id</span>
<span class="token comment">// - 群发给指定用户时为数组：[\$media_Id, \$title, \$description]</span>
<span class="token variable">\$broadcast</span><span class="token operator">-&gt;</span><span class="token function">sendVideo</span><span class="token punctuation">(</span><span class="token variable">\$message</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">\$broadcast</span><span class="token operator">-&gt;</span><span class="token function">sendCard</span><span class="token punctuation">(</span><span class="token variable">\$cardId</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h3 id="群发消息给指定组" tabindex="-1"><a class="header-anchor" href="#群发消息给指定组" aria-hidden="true">#</a> 群发消息给指定组</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$broadcast</span><span class="token operator">-&gt;</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token variable">\$messageType</span><span class="token punctuation">,</span> <span class="token variable">\$message</span><span class="token punctuation">,</span> <span class="token variable">\$groupId</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 别名方式</span>
<span class="token variable">\$broadcast</span><span class="token operator">-&gt;</span><span class="token function">sendText</span><span class="token punctuation">(</span><span class="token variable">\$text</span><span class="token punctuation">,</span> <span class="token variable">\$groupId</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">\$broadcast</span><span class="token operator">-&gt;</span><span class="token function">sendNews</span><span class="token punctuation">(</span><span class="token variable">\$mediaId</span><span class="token punctuation">,</span> <span class="token variable">\$groupId</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">\$broadcast</span><span class="token operator">-&gt;</span><span class="token function">sendVoice</span><span class="token punctuation">(</span><span class="token variable">\$mediaId</span><span class="token punctuation">,</span> <span class="token variable">\$groupId</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">\$broadcast</span><span class="token operator">-&gt;</span><span class="token function">sendImage</span><span class="token punctuation">(</span><span class="token variable">\$mediaId</span><span class="token punctuation">,</span> <span class="token variable">\$groupId</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">\$broadcast</span><span class="token operator">-&gt;</span><span class="token function">sendVideo</span><span class="token punctuation">(</span><span class="token variable">\$message</span><span class="token punctuation">,</span> <span class="token variable">\$groupId</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">\$broadcast</span><span class="token operator">-&gt;</span><span class="token function">sendCard</span><span class="token punctuation">(</span><span class="token variable">\$cardId</span><span class="token punctuation">,</span> <span class="token variable">\$groupId</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="群发消息给指定用户" tabindex="-1"><a class="header-anchor" href="#群发消息给指定用户" aria-hidden="true">#</a> 群发消息给指定用户</h3><p>至少两个用户的openid，必须是数组。</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$broadcast</span><span class="token operator">-&gt;</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token variable">\$messageType</span><span class="token punctuation">,</span> <span class="token variable">\$message</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token variable">\$openId1</span><span class="token punctuation">,</span> <span class="token variable">\$openId2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 别名方式</span>
<span class="token variable">\$broadcast</span><span class="token operator">-&gt;</span><span class="token function">sendText</span><span class="token punctuation">(</span><span class="token variable">\$text</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token variable">\$openId1</span><span class="token punctuation">,</span> <span class="token variable">\$openId2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">\$broadcast</span><span class="token operator">-&gt;</span><span class="token function">sendNews</span><span class="token punctuation">(</span><span class="token variable">\$mediaId</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token variable">\$openId1</span><span class="token punctuation">,</span> <span class="token variable">\$openId2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">\$broadcast</span><span class="token operator">-&gt;</span><span class="token function">sendVoice</span><span class="token punctuation">(</span><span class="token variable">\$mediaId</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token variable">\$openId1</span><span class="token punctuation">,</span> <span class="token variable">\$openId2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">\$broadcast</span><span class="token operator">-&gt;</span><span class="token function">sendImage</span><span class="token punctuation">(</span><span class="token variable">\$mediaId</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token variable">\$openId1</span><span class="token punctuation">,</span> <span class="token variable">\$openId2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">\$broadcast</span><span class="token operator">-&gt;</span><span class="token function">sendVideo</span><span class="token punctuation">(</span><span class="token variable">\$message</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token variable">\$openId1</span><span class="token punctuation">,</span> <span class="token variable">\$openId2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">\$broadcast</span><span class="token operator">-&gt;</span><span class="token function">sendCard</span><span class="token punctuation">(</span><span class="token variable">\$cardId</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token variable">\$openId1</span><span class="token punctuation">,</span> <span class="token variable">\$openId2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="发送预览群发消息给指定的-openid-用户" tabindex="-1"><a class="header-anchor" href="#发送预览群发消息给指定的-openid-用户" aria-hidden="true">#</a> 发送预览群发消息给指定的 <code>openId</code> 用户</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$broadcast</span><span class="token operator">-&gt;</span><span class="token function">preview</span><span class="token punctuation">(</span><span class="token variable">\$messageType</span><span class="token punctuation">,</span> <span class="token variable">\$message</span><span class="token punctuation">,</span> <span class="token variable">\$openId</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 别名方式</span>
<span class="token variable">\$broadcast</span><span class="token operator">-&gt;</span><span class="token function">previewText</span><span class="token punctuation">(</span><span class="token variable">\$text</span><span class="token punctuation">,</span> <span class="token variable">\$openId</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">\$broadcast</span><span class="token operator">-&gt;</span><span class="token function">previewNews</span><span class="token punctuation">(</span><span class="token variable">\$mediaId</span><span class="token punctuation">,</span> <span class="token variable">\$openId</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">\$broadcast</span><span class="token operator">-&gt;</span><span class="token function">previewVoice</span><span class="token punctuation">(</span><span class="token variable">\$mediaId</span><span class="token punctuation">,</span> <span class="token variable">\$openId</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">\$broadcast</span><span class="token operator">-&gt;</span><span class="token function">previewImage</span><span class="token punctuation">(</span><span class="token variable">\$mediaId</span><span class="token punctuation">,</span> <span class="token variable">\$openId</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">\$broadcast</span><span class="token operator">-&gt;</span><span class="token function">previewVideo</span><span class="token punctuation">(</span><span class="token variable">\$message</span><span class="token punctuation">,</span> <span class="token variable">\$openId</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">\$broadcast</span><span class="token operator">-&gt;</span><span class="token function">previewCard</span><span class="token punctuation">(</span><span class="token variable">\$cardId</span><span class="token punctuation">,</span> <span class="token variable">\$openId</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="发送预览群发消息给指定的微信号用户" tabindex="-1"><a class="header-anchor" href="#发送预览群发消息给指定的微信号用户" aria-hidden="true">#</a> 发送预览群发消息给指定的微信号用户</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$broadcast</span><span class="token operator">-&gt;</span><span class="token function">previewByName</span><span class="token punctuation">(</span><span class="token variable">\$messageType</span><span class="token punctuation">,</span> <span class="token variable">\$message</span><span class="token punctuation">,</span> <span class="token variable">\$wxname</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 别名方式</span>
<span class="token variable">\$broadcast</span><span class="token operator">-&gt;</span><span class="token function">previewTextByName</span><span class="token punctuation">(</span><span class="token variable">\$text</span><span class="token punctuation">,</span> <span class="token variable">\$wxname</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">\$broadcast</span><span class="token operator">-&gt;</span><span class="token function">previewNewsByName</span><span class="token punctuation">(</span><span class="token variable">\$mediaId</span><span class="token punctuation">,</span> <span class="token variable">\$wxname</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">\$broadcast</span><span class="token operator">-&gt;</span><span class="token function">previewVoiceByName</span><span class="token punctuation">(</span><span class="token variable">\$mediaId</span><span class="token punctuation">,</span> <span class="token variable">\$wxname</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">\$broadcast</span><span class="token operator">-&gt;</span><span class="token function">previewImageByName</span><span class="token punctuation">(</span><span class="token variable">\$mediaId</span><span class="token punctuation">,</span> <span class="token variable">\$wxname</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">\$broadcast</span><span class="token operator">-&gt;</span><span class="token function">previewVideoByName</span><span class="token punctuation">(</span><span class="token variable">\$message</span><span class="token punctuation">,</span> <span class="token variable">\$wxname</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">\$broadcast</span><span class="token operator">-&gt;</span><span class="token function">previewCardByName</span><span class="token punctuation">(</span><span class="token variable">\$cardId</span><span class="token punctuation">,</span> <span class="token variable">\$wxname</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="删除群发消息" tabindex="-1"><a class="header-anchor" href="#删除群发消息" aria-hidden="true">#</a> 删除群发消息</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$broadcast</span><span class="token operator">-&gt;</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token variable">\$msgId</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="查询群发消息发送状态" tabindex="-1"><a class="header-anchor" href="#查询群发消息发送状态" aria-hidden="true">#</a> 查询群发消息发送状态</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$broadcast</span><span class="token operator">-&gt;</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token variable">\$msgId</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>有关群发信息的更多细节请参考微信官方文档：http://mp.weixin.qq.com/wiki/</p><!--]-->`)
}
// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(84103);
;// CONCATENATED MODULE: ./.vuepress/.temp/pages/3.x/broadcast.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("/home/runner/work/easywechat/easywechat/docs/node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!/home/runner/work/easywechat/easywechat/docs/node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!/home/runner/work/easywechat/easywechat/docs/.vuepress/.temp/pages/3.x/broadcast.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const broadcast_html = (script);

/***/ })

};
;
//# sourceMappingURL=7554.app.js.map