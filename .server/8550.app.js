"use strict";
exports.id = 8550;
exports.ids = [8550];
exports.modules = {

/***/ 45118:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-5bdd8dcb",
  "path": "/3.x/server.html",
  "title": "服务端",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "基本使用",
      "slug": "基本使用",
      "children": []
    },
    {
      "level": 2,
      "title": "请求消息的属性",
      "slug": "请求消息的属性",
      "children": [
        {
          "level": 3,
          "title": "文本：",
          "slug": "文本",
          "children": []
        },
        {
          "level": 3,
          "title": "图片：",
          "slug": "图片",
          "children": []
        },
        {
          "level": 3,
          "title": "语音：",
          "slug": "语音",
          "children": []
        },
        {
          "level": 3,
          "title": "视频：",
          "slug": "视频",
          "children": []
        },
        {
          "level": 3,
          "title": "小视频：",
          "slug": "小视频",
          "children": []
        },
        {
          "level": 3,
          "title": "事件：",
          "slug": "事件",
          "children": []
        },
        {
          "level": 3,
          "title": "地理位置：",
          "slug": "地理位置",
          "children": []
        },
        {
          "level": 3,
          "title": "链接：",
          "slug": "链接",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "回复消息",
      "slug": "回复消息",
      "children": []
    },
    {
      "level": 2,
      "title": "消息转发给客服系统",
      "slug": "消息转发给客服系统",
      "children": []
    }
  ],
  "filePathRelative": "3.x/server.md",
  "git": {
    "updatedTime": 1629906046000,
    "contributors": []
  }
}


/***/ }),

/***/ 64313:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ server_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(84103);
// EXTERNAL MODULE: external "@vue/server-renderer"
var server_renderer_ = __webpack_require__(32745);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.vuepress/.temp/pages/3.x/server.html.vue?vue&type=template&id=1ebead08



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_OutboundLink = (0,external_vue_.resolveComponent)("OutboundLink")
  const _component_RouterLink = (0,external_vue_.resolveComponent)("RouterLink")

  _push(`<!--[--><h1 id="服务端" tabindex="-1"><a class="header-anchor" href="#服务端" aria-hidden="true">#</a> 服务端</h1><p>我们在入门小教程一节以服务端为例讲解了一个基本的消息的处理，这里就不再讲服务器验证的流程了，请直接参考前面的入门实例即可。</p><p>服务端的作用呢，在整个微信开发中主要是负责 <strong><a href="http://mp.weixin.qq.com/wiki/10/79502792eef98d6e0c6e1739da387346.html" target="_blank" rel="noopener noreferrer">接收用户发送过来的消息`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></strong>，还有 <strong><a href="http://mp.weixin.qq.com/wiki/2/5baf56ce4947d35003b86a9805634b1e.html" target="_blank" rel="noopener noreferrer">用户触发的一系列事件`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></strong>。</p><p>首先我们得厘清一下消息与事件的回复，当你收到用户消息后（消息由微信服务器推送到你的服务器），在你对消息进行一些处理后，不管是选择回复一个消息还是什么不都回给用户，你也应该给微信服务器一个 “答复”，如果是选择回复一条消息，就直接返回一个消息xml就好，如果选择不作任何回复，你也得回复一个空字符串或者字符串 <code>SUCCESS</code>（不然用户就会看到 <code>该公众号暂时无法提供服务</code>）。</p><h2 id="基本使用" tabindex="-1"><a class="header-anchor" href="#基本使用" aria-hidden="true">#</a> 基本使用</h2><p>在 SDK 中呢，使用 <code>setMessageHandler(callable \$callback)</code> 来设置消息处理函数：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token keyword">use</span> <span class="token package">EasyWeChat<span class="token punctuation">\\</span>Foundation<span class="token punctuation">\\</span>Application</span><span class="token punctuation">;</span>

<span class="token comment">// ...</span>

<span class="token variable">\$app</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Application</span><span class="token punctuation">(</span><span class="token variable">\$options</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 从项目实例中得到服务端应用实例。</span>
<span class="token variable">\$server</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">server</span><span class="token punctuation">;</span>

<span class="token variable">\$server</span><span class="token operator">-&gt;</span><span class="token function">setMessageHandler</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token variable">\$message</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \$message-&gt;FromUserName // 用户的 openid</span>
    <span class="token comment">// \$message-&gt;MsgType // 消息类型：event, text....</span>
    <span class="token keyword">return</span> <span class="token string double-quoted-string">&quot;您好！欢迎关注我!&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">\$response</span> <span class="token operator">=</span> <span class="token variable">\$server</span><span class="token operator">-&gt;</span><span class="token function">serve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">\$response</span><span class="token operator">-&gt;</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Laravel 里请使用：return \$response;</span>
</span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>这里我们使用 <code>setMessageHandler</code> 传入了一个 <strong>闭包（<a href="http://php.net/manual/en/class.closure.php" target="_blank" rel="noopener noreferrer">Closure`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>）</strong>，该闭包接收一个参数 <code>\$message</code> 为消息对象（Collection），这里需要注意的时，与 2.0 不同，2.0 当中我们对消息与事件做了区分，还对消息进行了分类（按 MsgType）。在 3.0 后，<strong>所有的消息包括事件都会使用 <code>setMessageHandler</code> 来处理</strong>，也就是说你可能需要在里面进行一些判断，例如：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$server</span><span class="token operator">-&gt;</span><span class="token function">setMessageHandler</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token variable">\$message</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">switch</span> <span class="token punctuation">(</span><span class="token variable">\$message</span><span class="token operator">-&gt;</span><span class="token property">MsgType</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">case</span> <span class="token string single-quoted-string">&#39;event&#39;</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> <span class="token string single-quoted-string">&#39;收到事件消息&#39;</span><span class="token punctuation">;</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token keyword">case</span> <span class="token string single-quoted-string">&#39;text&#39;</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> <span class="token string single-quoted-string">&#39;收到文字消息&#39;</span><span class="token punctuation">;</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token keyword">case</span> <span class="token string single-quoted-string">&#39;image&#39;</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> <span class="token string single-quoted-string">&#39;收到图片消息&#39;</span><span class="token punctuation">;</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token keyword">case</span> <span class="token string single-quoted-string">&#39;voice&#39;</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> <span class="token string single-quoted-string">&#39;收到语音消息&#39;</span><span class="token punctuation">;</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token keyword">case</span> <span class="token string single-quoted-string">&#39;video&#39;</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> <span class="token string single-quoted-string">&#39;收到视频消息&#39;</span><span class="token punctuation">;</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token keyword">case</span> <span class="token string single-quoted-string">&#39;location&#39;</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> <span class="token string single-quoted-string">&#39;收到坐标消息&#39;</span><span class="token punctuation">;</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token keyword">case</span> <span class="token string single-quoted-string">&#39;link&#39;</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> <span class="token string single-quoted-string">&#39;收到链接消息&#39;</span><span class="token punctuation">;</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token comment">// ... 其它消息</span>
        <span class="token keyword">default</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> <span class="token string single-quoted-string">&#39;收到其它消息&#39;</span><span class="token punctuation">;</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// ...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><p>当然，因为这里 <code>setMessageHandler</code> 接收一个 <a href="http://php.net/manual/zh/language.types.callable.php" target="_blank" rel="noopener noreferrer"><code>callable</code>`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> 的参数，所以你不一定要传入一个 Closure 闭包，你可以选择传入一个函数名，一个 <code>[\$class, \$method]</code> 或者 <code>Foo::bar</code> 这样的类型。</p><blockquote><p>❤️ 注意，默认没有验证是否为微信的请求，部署上线建议关掉 debug 模式。</p></blockquote><p>某些情况，我们需要直接使用 <code>\$message</code> 参数，那么怎么在 <code>setMessageHandler</code> 闭包外调用呢？</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code>    <span class="token variable">\$message</span> <span class="token operator">=</span> <span class="token variable">\$server</span><span class="token operator">-&gt;</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><blockquote><p>注意：<code>\$message</code> 是一个数组类型的数据，使用的时候这样使用：<code>\$message[&#39;ToUserName&#39;]</code></p></blockquote><h2 id="请求消息的属性" tabindex="-1"><a class="header-anchor" href="#请求消息的属性" aria-hidden="true">#</a> 请求消息的属性</h2><p>当你接收到用户发来的消息时，可能会提取消息中的相关属性，那么请参考：</p><p>请求消息基本属性(以下所有消息都有的基本属性)：</p><pre><code>\$message-&gt;ToUserName    接收方帐号（该公众号 ID）
\$message-&gt;FromUserName  发送方帐号（OpenID, 代表用户的唯一标识）
\$message-&gt;CreateTime    消息创建时间（时间戳）
\$message-&gt;MsgId         消息 ID（64位整型）
</code></pre><h3 id="文本" tabindex="-1"><a class="header-anchor" href="#文本" aria-hidden="true">#</a> 文本：</h3><pre><code>\$message-&gt;MsgType  text
\$message-&gt;Content  文本消息内容
</code></pre><h3 id="图片" tabindex="-1"><a class="header-anchor" href="#图片" aria-hidden="true">#</a> 图片：</h3><pre><code>\$message-&gt;MsgType  image
\$message-&gt;PicUrl   图片链接
</code></pre><h3 id="语音" tabindex="-1"><a class="header-anchor" href="#语音" aria-hidden="true">#</a> 语音：</h3><pre><code>\$message-&gt;MsgType        voice
\$message-&gt;MediaId        语音消息媒体id，可以调用多媒体文件下载接口拉取数据。
\$message-&gt;Format         语音格式，如 amr，speex 等
\$message-&gt;Recognition * 开通语音识别后才有

&gt; 请注意，开通语音识别后，用户每次发送语音给公众号时，微信会在推送的语音消息XML数据包中，增加一个 \`Recongnition\` 字段
</code></pre><h3 id="视频" tabindex="-1"><a class="header-anchor" href="#视频" aria-hidden="true">#</a> 视频：</h3><pre><code>\$message-&gt;MsgType       video
\$message-&gt;MediaId       视频消息媒体id，可以调用多媒体文件下载接口拉取数据。
\$message-&gt;ThumbMediaId  视频消息缩略图的媒体id，可以调用多媒体文件下载接口拉取数据。
</code></pre><h3 id="小视频" tabindex="-1"><a class="header-anchor" href="#小视频" aria-hidden="true">#</a> 小视频：</h3><pre><code>\$message-&gt;MsgType     shortvideo
\$message-&gt;MediaId     视频消息媒体id，可以调用多媒体文件下载接口拉取数据。
\$message-&gt;ThumbMediaId    视频消息缩略图的媒体id，可以调用多媒体文件下载接口拉取数据。
</code></pre><h3 id="事件" tabindex="-1"><a class="header-anchor" href="#事件" aria-hidden="true">#</a> 事件：</h3><pre><code>\$message-&gt;MsgType     event
\$message-&gt;Event       事件类型 （如：subscribe(订阅)、unsubscribe(取消订阅) ...， CLICK 等）

# 扫描带参数二维码事件
\$message-&gt;EventKey    事件KEY值，比如：qrscene_123123，qrscene_为前缀，后面为二维码的参数值
\$message-&gt;Ticket      二维码的 ticket，可用来换取二维码图片

# 上报地理位置事件
\$message-&gt;Latitude    23.137466   地理位置纬度
\$message-&gt;Longitude   113.352425  地理位置经度
\$message-&gt;Precision   119.385040  地理位置精度

# 自定义菜单事件
\$message-&gt;EventKey    事件KEY值，与自定义菜单接口中KEY值对应，如：CUSTOM_KEY_001, www.qq.com
</code></pre><h3 id="地理位置" tabindex="-1"><a class="header-anchor" href="#地理位置" aria-hidden="true">#</a> 地理位置：</h3><pre><code>\$message-&gt;MsgType     location
\$message-&gt;Location_X  地理位置纬度
\$message-&gt;Location_Y  地理位置经度
\$message-&gt;Scale       地图缩放大小
\$message-&gt;Label       地理位置信息
</code></pre><h3 id="链接" tabindex="-1"><a class="header-anchor" href="#链接" aria-hidden="true">#</a> 链接：</h3><pre><code>\$message-&gt;MsgType      link
\$message-&gt;Title        消息标题
\$message-&gt;Description  消息描述
\$message-&gt;Url          消息链接
</code></pre><h2 id="回复消息" tabindex="-1"><a class="header-anchor" href="#回复消息" aria-hidden="true">#</a> 回复消息</h2><p>回复的消息可以为 <code>null</code>，此时 SDK 会返回给微信一个 &quot;SUCCESS&quot;，你也可以回复一个普通字符串，比如：<code>欢迎关注 overtrue.</code>，此时 SDK 会对它进行一个封装，产生一个 <a href="https://github.com/EasyWeChat/message/blob/master/src/Text.php" target="_blank" rel="noopener noreferrer"><code>EasyWeChat\\Message\\Text</code>`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> 类型的消息并在最后的 <code>\$server-&gt;serve();</code> 时生成对应的消息 XML 格式。</p><p>如果你想返回一个自己手动拼的原生 XML 格式消息，请返回一个 <a href="https://github.com/EasyWeChat/message/blob/master/src/Raw.php" target="_blank" rel="noopener noreferrer"><code>EasyWeChat\\Message\\Raw</code>`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> 实例即可。</p><h2 id="消息转发给客服系统" tabindex="-1"><a class="header-anchor" href="#消息转发给客服系统" aria-hidden="true">#</a> 消息转发给客服系统</h2><p>参见：`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_RouterLink, { to: "/3.x/message-transfer.html" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`多客服消息转发`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("多客服消息转发")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</p><p>关于消息的使用，请参考 `)
  _push((0,server_renderer_.ssrRenderComponent)(_component_RouterLink, { to: "/3.x/messages.html" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<code${_scopeId}>消息</code>`)
      } else {
        return [
          (0,external_vue_.createVNode)("code", null, "消息")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(` 章节。</p><!--]-->`)
}
;// CONCATENATED MODULE: ./.vuepress/.temp/pages/3.x/server.html.vue?vue&type=template&id=1ebead08

;// CONCATENATED MODULE: ./.vuepress/.temp/pages/3.x/server.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("/home/runner/work/easywechat/easywechat/docs/node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!/home/runner/work/easywechat/easywechat/docs/node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!/home/runner/work/easywechat/easywechat/docs/.vuepress/.temp/pages/3.x/server.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const server_html = (script);

/***/ })

};
;
//# sourceMappingURL=8550.app.js.map