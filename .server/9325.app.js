"use strict";
exports.id = 9325;
exports.ids = [9325];
exports.modules = {

/***/ 27085:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-538b6695",
  "path": "/6.x/open-platform/server.html",
  "title": "服务端",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "第三方平台推送事件",
      "slug": "第三方平台推送事件",
      "children": []
    },
    {
      "level": 2,
      "title": "自定义消息处理器",
      "slug": "自定义消息处理器",
      "children": [
        {
          "level": 3,
          "title": "示例（Laravel 框架）",
          "slug": "示例-laravel-框架",
          "children": []
        }
      ]
    }
  ],
  "filePathRelative": "6.x/open-platform/server.md",
  "git": {
    "updatedTime": 1629906046000,
    "contributors": []
  }
}


/***/ }),

/***/ 37646:
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
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.vuepress/.temp/pages/6.x/open-platform/server.html.vue?vue&type=template&id=ac7e8a9e



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_RouterLink = (0,external_vue_.resolveComponent)("RouterLink")

  _push(`<!--[--><h1 id="服务端" tabindex="-1"><a class="header-anchor" href="#服务端" aria-hidden="true">#</a> 服务端</h1><p>第三方平台的服务端推送和公众号一样，请参考：`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_RouterLink, { to: "/docs/%7B%7Bversion%7D%7D/official-account/server.html" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`公众号：服务端`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("公众号：服务端")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</p><h2 id="第三方平台推送事件" tabindex="-1"><a class="header-anchor" href="#第三方平台推送事件" aria-hidden="true">#</a> 第三方平台推送事件</h2><p>公众号第三方平台推送的有四个事件：</p><blockquote><p>如已经授权的公众号、小程序再次进行授权，而未修改已授权的权限的话，是没有相关事件推送的。</p></blockquote><ul><li>授权成功 <code>authorized</code></li><li>授权更新 <code>updateauthorized</code></li><li>授权取消 <code>unauthorized</code></li><li>VerifyTicket <code>component_verify_ticket</code></li></ul><p>SDK 默认会处理事件 <code>component_verify_ticket</code> ，并会缓存 <code>verify_ticket</code> 所以如果你暂时不需要处理其他事件，直接这样使用即可：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$server</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token function">getServer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">\$response</span> <span class="token operator">=</span> <span class="token variable">\$server</span><span class="token operator">-&gt;</span><span class="token function">serve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">return</span> <span class="token variable">\$response</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="自定义消息处理器" tabindex="-1"><a class="header-anchor" href="#自定义消息处理器" aria-hidden="true">#</a> 自定义消息处理器</h2><blockquote><p><em>消息处理器详细说明见公众号开发 - 服务端一节</em></p></blockquote><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token comment">// 处理授权成功事件</span>
<span class="token variable">\$server</span><span class="token operator">-&gt;</span><span class="token function">handleAuthorized</span><span class="token punctuation">(</span><span class="token keyword">callable</span> <span class="token operator">|</span> <span class="token keyword type-declaration">string</span> <span class="token variable">\$handler</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 处理授权更新事件</span>
<span class="token variable">\$server</span><span class="token operator">-&gt;</span><span class="token function">handleAuthorizeUpdated</span><span class="token punctuation">(</span><span class="token keyword">callable</span> <span class="token operator">|</span> <span class="token keyword type-declaration">string</span> <span class="token variable">\$handler</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 处理授权取消事件</span>
<span class="token variable">\$server</span><span class="token operator">-&gt;</span><span class="token function">handleUnauthorized</span><span class="token punctuation">(</span><span class="token keyword">callable</span> <span class="token operator">|</span> <span class="token keyword type-declaration">string</span> <span class="token variable">\$handler</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 处理 VerifyTicket 推送事件（已默认处理）</span>
<span class="token variable">\$server</span><span class="token operator">-&gt;</span><span class="token function">handleVerifyTicketRefreshed</span><span class="token punctuation">(</span><span class="token keyword">callable</span> <span class="token operator">|</span> <span class="token keyword type-declaration">string</span> <span class="token variable">\$handler</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><blockquote><p>{warning} 注意：如果你自行处理了 VerifyTicket 推送，你必须同时设置 ComponentAccessToken 类，因为 ComponentAccessToken 依赖它。</p></blockquote><h3 id="示例-laravel-框架" tabindex="-1"><a class="header-anchor" href="#示例-laravel-框架" aria-hidden="true">#</a> 示例（Laravel 框架）</h3><blockquote><p>{warning} 注意：请注意为此类路由关闭 csrf 验证。</p></blockquote><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token comment">// 假设你的开放平台第三方平台设置的授权事件接收 URL 为: https://easywechat.com/open-platform （其他事件推送同样会推送到这个 URL）</span>
<span class="token class-name static-context">Route</span><span class="token operator">::</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;open-platform&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \$app 为你实例化的开放平台对象，此处省略实例化步骤</span>
    <span class="token keyword">return</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">server</span><span class="token operator">-&gt;</span><span class="token function">serve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Done!</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 处理授权事件</span>
<span class="token class-name static-context">Route</span><span class="token operator">::</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;open-platform&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token variable">\$server</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token function">getServer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 处理授权成功事件，其他事件同理</span>
    <span class="token variable">\$server</span><span class="token operator">-&gt;</span><span class="token function">handleAuthorized</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token variable">\$message</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \$message 为微信推送的通知内容，不同事件不同内容，详看微信官方文档</span>
        <span class="token comment">// 获取授权公众号 AppId： \$message[&#39;AuthorizerAppid&#39;]</span>
        <span class="token comment">// 获取 AuthCode：\$message[&#39;AuthorizationCode&#39;]</span>
        <span class="token comment">// 然后进行业务处理，如存数据库等...</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token variable">\$server</span><span class="token operator">-&gt;</span><span class="token function">serve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><!--]-->`)
}
;// CONCATENATED MODULE: ./.vuepress/.temp/pages/6.x/open-platform/server.html.vue?vue&type=template&id=ac7e8a9e

;// CONCATENATED MODULE: ./.vuepress/.temp/pages/6.x/open-platform/server.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("/home/runner/work/easywechat/easywechat/docs/node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!/home/runner/work/easywechat/easywechat/docs/node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!/home/runner/work/easywechat/easywechat/docs/.vuepress/.temp/pages/6.x/open-platform/server.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const server_html = (script);

/***/ })

};
;
//# sourceMappingURL=9325.app.js.map