"use strict";
exports.id = 2523;
exports.ids = [2523];
exports.modules = {

/***/ 24015:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-c09bcbbe",
  "path": "/4.x/official-account/tutorial.html",
  "title": "快速开始",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "服务端验证",
      "slug": "服务端验证",
      "children": []
    },
    {
      "level": 2,
      "title": "接收 & 回复用户消息",
      "slug": "接收-回复用户消息",
      "children": []
    },
    {
      "level": 2,
      "title": "总结",
      "slug": "总结",
      "children": []
    },
    {
      "level": 2,
      "title": "最后",
      "slug": "最后",
      "children": []
    }
  ],
  "filePathRelative": "4.x/official-account/tutorial.md",
  "git": {
    "updatedTime": 1629906046000,
    "contributors": []
  }
}


/***/ }),

/***/ 45555:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ tutorial_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(84103);
// EXTERNAL MODULE: external "@vue/server-renderer"
var server_renderer_ = __webpack_require__(32745);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.vuepress/.temp/pages/4.x/official-account/tutorial.html.vue?vue&type=template&id=316cbaa8



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_OutboundLink = (0,external_vue_.resolveComponent)("OutboundLink")

  _push(`<!--[--><h1 id="快速开始" tabindex="-1"><a class="header-anchor" href="#快速开始" aria-hidden="true">#</a> 快速开始</h1><p>在我们已经安装完成后，即可很快的开始使用它了，当然你还是有必要明白 PHP 基本知识，如命名空间等，我这里就不赘述了。</p><p>我们以完成服务器端验证与接收响应用户发送的消息为例来演示,首先你有必要了解一下微信交互的运行流程：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>                                 +-----------------+                       +---------------+
+----------+                     |                 |    POST/GET/PUT       |               |
|          | ------------------&gt; |                 | -------------------&gt;  |               |
|   user   |                     |  wechat server  |                       |  your server  |
|          | &lt; - - - - - - - - - |                 |                       |               |
+----------+                     |                 | &lt;- - - - - - - - - -  |               |
                                 +-----------------+                       +---------------+

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>那么我们要做的就是图中 <strong>微信服务器把用户消息转到我们的自有服务器（虚线返回部分）</strong> 后的处理过程。</p><h2 id="服务端验证" tabindex="-1"><a class="header-anchor" href="#服务端验证" aria-hidden="true">#</a> 服务端验证</h2><p>在微信接入开始有一个 “服务器验证” 的过程，这一步呢，其实就是微信服务器向我们服务器发起一个请求（上图实线部分），传了一个名称为 <code>echostr</code> 的字符串过来，我们只需要原样返回就好了。</p><p>你也知道，微信后台只能填写一个服务器地址，所以 <strong>服务器验证</strong> 与 <strong>消息的接收与回复</strong>，都在这一个链接内完成交互。</p><p>考虑到这些，我已经把验证这一步给封装到 SDK 里了，你可以完全忽略这一步。</p><p>下面我们来配置一个基本的服务端，这里假设我们自己的服务器域名叫 <code>easywechat.com</code>，我们在服务器上准备这么一个文件<code>server.php</code>:</p><p>// server.php</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">EasyWeChat<span class="token punctuation">\\</span>Factory</span><span class="token punctuation">;</span>

<span class="token variable">\$config</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token string single-quoted-string">&#39;app_id&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;wx3cf0f39249eb0xxx&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;secret&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;f1c242f4f28f735d4687abb469072xxx&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;token&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;TestToken&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;response_type&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;array&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">//...</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token variable">\$app</span> <span class="token operator">=</span> <span class="token class-name static-context">Factory</span><span class="token operator">::</span><span class="token function">officialAccount</span><span class="token punctuation">(</span><span class="token variable">\$config</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">\$response</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">server</span><span class="token operator">-&gt;</span><span class="token function">serve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 将响应输出</span>
<span class="token variable">\$response</span><span class="token operator">-&gt;</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token keyword">exit</span><span class="token punctuation">;</span> <span class="token comment">// Laravel 里请使用：return \$response;</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><blockquote><p>❤️ 安全模式下请一定要配置 <code>aes_key</code></p></blockquote><p>一个服务端带验证功能的代码已经完成，当然没有对消息做处理，别着急，后面我们再讲。</p><p>我们先来分析上面的代码：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token comment">// 引入我们的主项目工厂类。</span>
<span class="token keyword">use</span> <span class="token package">EasyWeChat<span class="token punctuation">\\</span>Factory</span><span class="token punctuation">;</span>

<span class="token comment">// 一些配置</span>
<span class="token variable">\$config</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// 使用配置来初始化一个公众号应用实例。</span>
<span class="token variable">\$app</span> <span class="token operator">=</span> <span class="token class-name static-context">Factory</span><span class="token operator">::</span><span class="token function">officialAccount</span><span class="token punctuation">(</span><span class="token variable">\$config</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">\$response</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">server</span><span class="token operator">-&gt;</span><span class="token function">serve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 将响应输出</span>
<span class="token variable">\$response</span><span class="token operator">-&gt;</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token keyword">exit</span><span class="token punctuation">;</span> <span class="token comment">// Laravel 里请使用：return \$response;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>最后这一行我有必要详细讲一下：</p><blockquote><ol><li>我们的 <code>\$app-&gt;server-&gt;serve()</code> 就是执行服务端业务了，那么它的返回值是一个 <code>Symfony\\Component\\HttpFoundation\\Response</code> 实例。</li><li>我这里是直接调用了它的 <code>send()</code> 方法，它就是直接输出（echo）了，我们在一些框架就不能直接输出了，那你就直接拿到 Response 实例后做相应的操作即可，比如 Laravel 里你就可以直接 <code>return \$app-&gt;server-&gt;serve();</code></li></ol></blockquote><p>OK, 有了上面的代码，那么请你按 <strong><a href="http://mp.weixin.qq.com/wiki/" target="_blank" rel="noopener noreferrer">微信官方的接入指引`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></strong> 在公众号后台完成配置并启用，并相应修改上面的 <code>\$config</code> 的相关配置。</p><blockquote><p>URL 就是我们的 <code>http://easywechat.com/server.php</code>，这里我是举例哦，你可不要填写我的域名。</p></blockquote><p>这样，点击提交验证就OK了。</p><blockquote><p>❤️ 请一定要将微信后台的开发者模式 “<strong>启用</strong>” ！！！！！！看到红色 “<strong>停用</strong>” 才真正的是启用了。 最后，请不要用浏览器访问这个地址，它是给微信服务器访问的，不是给人访问的。</p></blockquote><h2 id="接收-回复用户消息" tabindex="-1"><a class="header-anchor" href="#接收-回复用户消息" aria-hidden="true">#</a> 接收 &amp; 回复用户消息</h2><p>那服务端验证通过了，我们就来试一下接收消息吧。</p><blockquote><p>在刚刚上面代码最后一行 <code>\$app-&gt;server-&gt;serve()-&gt;send();</code> 前面，我们调用 <code>\$app-&gt;server</code> 的 <code>push()</code> 方法来注册一个消息处理器，这里用到了 <strong><a href="http://php.net/manual/zh/functions.anonymous.php" target="_blank" rel="noopener noreferrer">PHP 闭包`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></strong> 的知识，如果你不熟悉赶紧补课去。</p></blockquote><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token comment">// ...</span>

<span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">server</span><span class="token operator">-&gt;</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token variable">\$message</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string double-quoted-string">&quot;您好！欢迎使用 EasyWeChat!&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">\$response</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">server</span><span class="token operator">-&gt;</span><span class="token function">serve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 将响应输出</span>
<span class="token variable">\$response</span><span class="token operator">-&gt;</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Laravel 里请使用：return \$response;</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><blockquote><p>{warning} 注意：send() 方法里已经包含 echo 了，请不要再加 echo 在前面。</p></blockquote><p>好吧，打开你的微信客户端，向你的公众号发送任意一条消息，你应该会收到回复：<code>您好！欢迎使用 EasyWeChat!</code>。</p><blockquote><p>{warning} 没有收到回复？看到了“你的公众号暂时无法提供服务” ？好，那检查一下你的日志吧，日志在哪儿？我们的配置里写了日志路径了(<code>__DIR__.&#39;/wechat.log&#39;</code>)。 没有这个文件？看看权限哦。</p></blockquote><blockquote><p>注意：在 Laravel 框架应用时，因 POST 请求默认会有 CSRF 验证，所以需要在 <code>App\\Http\\Middleware\\VerifyCsrfToken</code> 的 <code>except</code> 数组中添加微信请求，否则会提示“你的公众号暂时无法提供服务”。</p></blockquote><p>一个基本的服务端验证就完成了。</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><ol><li>所有的应用服务都通过主入口 <code>EasyWeChat\\Factory</code> 类来创建：</li></ol><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code>
<span class="token comment">// 公众号</span>
<span class="token variable">\$app</span> <span class="token operator">=</span> <span class="token class-name static-context">Factory</span><span class="token operator">::</span><span class="token function">officialAccount</span><span class="token punctuation">(</span><span class="token variable">\$config</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 小程序</span>
<span class="token variable">\$app</span> <span class="token operator">=</span> <span class="token class-name static-context">Factory</span><span class="token operator">::</span><span class="token function">miniProgram</span><span class="token punctuation">(</span><span class="token variable">\$config</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 开放平台</span>
<span class="token variable">\$app</span> <span class="token operator">=</span> <span class="token class-name static-context">Factory</span><span class="token operator">::</span><span class="token function">openPlatform</span><span class="token punctuation">(</span><span class="token variable">\$config</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 企业微信</span>
<span class="token variable">\$app</span> <span class="token operator">=</span> <span class="token class-name static-context">Factory</span><span class="token operator">::</span><span class="token function">work</span><span class="token punctuation">(</span><span class="token variable">\$config</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 企业微信开放平台</span>
<span class="token variable">\$app</span> <span class="token operator">=</span> <span class="token class-name static-context">Factory</span><span class="token operator">::</span><span class="token function">openWork</span><span class="token punctuation">(</span><span class="token variable">\$config</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 微信支付</span>
<span class="token variable">\$app</span> <span class="token operator">=</span> <span class="token class-name static-context">Factory</span><span class="token operator">::</span><span class="token function">payment</span><span class="token punctuation">(</span><span class="token variable">\$config</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h2 id="最后" tabindex="-1"><a class="header-anchor" href="#最后" aria-hidden="true">#</a> 最后</h2><p>希望你在使用本 SDK 的时候如果你发现 SDK 的不足，欢迎提交 PR 或者给我<a href="https://github.com/overtrue/wechat/issues" target="_blank" rel="noopener noreferrer">提建议 &amp; 报告问题`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>。</p><!--]-->`)
}
;// CONCATENATED MODULE: ./.vuepress/.temp/pages/4.x/official-account/tutorial.html.vue?vue&type=template&id=316cbaa8

;// CONCATENATED MODULE: ./.vuepress/.temp/pages/4.x/official-account/tutorial.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("/home/runner/work/easywechat/easywechat/docs/node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!/home/runner/work/easywechat/easywechat/docs/node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!/home/runner/work/easywechat/easywechat/docs/.vuepress/.temp/pages/4.x/official-account/tutorial.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const tutorial_html = (script);

/***/ })

};
;
//# sourceMappingURL=2523.app.js.map