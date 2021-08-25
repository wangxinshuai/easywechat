"use strict";
exports.id = 7028;
exports.ids = [7028];
exports.modules = {

/***/ 59214:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-260cab72",
  "path": "/5.x/open-platform/authorizer-delegate.html",
  "title": "代授权方实现业务",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "实例化",
      "slug": "实例化",
      "children": [
        {
          "level": 3,
          "title": "获取授权方实例",
          "slug": "获取授权方实例",
          "children": []
        },
        {
          "level": 3,
          "title": "帮助授权方管理开放平台账号",
          "slug": "帮助授权方管理开放平台账号",
          "children": []
        },
        {
          "level": 3,
          "title": "代码示例",
          "slug": "代码示例",
          "children": []
        }
      ]
    }
  ],
  "filePathRelative": "5.x/open-platform/authorizer-delegate.md",
  "git": {
    "updatedTime": 1629906046000,
    "contributors": []
  }
}


/***/ }),

/***/ 184:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ authorizer_delegate_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(84103);
// EXTERNAL MODULE: external "@vue/server-renderer"
var server_renderer_ = __webpack_require__(32745);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.vuepress/.temp/pages/5.x/open-platform/authorizer-delegate.html.vue?vue&type=template&id=7e2764af



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_OutboundLink = (0,external_vue_.resolveComponent)("OutboundLink")

  _push(`<!--[--><h1 id="代授权方实现业务" tabindex="-1"><a class="header-anchor" href="#代授权方实现业务" aria-hidden="true">#</a> 代授权方实现业务</h1><blockquote><p>授权方已经把公众号、小程序授权给你的开放平台第三方平台了，接下来的代授权方实现业务只需一行代码即可获得授权方实例。</p></blockquote><h2 id="实例化" tabindex="-1"><a class="header-anchor" href="#实例化" aria-hidden="true">#</a> 实例化</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">EasyWeChat<span class="token punctuation">\\</span>Factory</span><span class="token punctuation">;</span>

<span class="token variable">\$config</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token comment">// ...</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token variable">\$openPlatform</span> <span class="token operator">=</span> <span class="token class-name static-context">Factory</span><span class="token operator">::</span><span class="token function">openPlatform</span><span class="token punctuation">(</span><span class="token variable">\$config</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="获取授权方实例" tabindex="-1"><a class="header-anchor" href="#获取授权方实例" aria-hidden="true">#</a> 获取授权方实例</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token comment">// 代公众号实现业务</span>
<span class="token variable">\$officialAccount</span> <span class="token operator">=</span> <span class="token variable">\$openPlatform</span><span class="token operator">-&gt;</span><span class="token function">officialAccount</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">\$appId</span><span class="token punctuation">,</span> <span class="token keyword type-hint">string</span> <span class="token variable">\$refreshToken</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 代小程序实现业务</span>
<span class="token variable">\$miniProgram</span> <span class="token operator">=</span> <span class="token variable">\$openPlatform</span><span class="token operator">-&gt;</span><span class="token function">miniProgram</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">\$appId</span><span class="token punctuation">,</span> <span class="token keyword type-hint">string</span> <span class="token variable">\$refreshToken</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><blockquote><p>\$appId 为授权方公众号 APPID，非开放平台第三方平台 APPID</p><p>\$refreshToken 为授权方的 refresh_token，可通过 <a href="https://www.easywechat.com/docs/master/open-platform/index#heading-h2-2" target="_blank" rel="noopener noreferrer">获取授权方授权信息`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> 接口获得。</p></blockquote><h3 id="帮助授权方管理开放平台账号" tabindex="-1"><a class="header-anchor" href="#帮助授权方管理开放平台账号" aria-hidden="true">#</a> 帮助授权方管理开放平台账号</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token comment">// 代公众号实现业务</span>
<span class="token variable">\$account</span> <span class="token operator">=</span> <span class="token variable">\$officialAccount</span><span class="token operator">-&gt;</span><span class="token property">account</span><span class="token punctuation">;</span>
<span class="token comment">// 代小程序实现业务</span>
<span class="token variable">\$account</span> <span class="token operator">=</span> <span class="token variable">\$miniProgram</span><span class="token operator">-&gt;</span><span class="token property">account</span><span class="token punctuation">;</span>

<span class="token comment">// 创建开放平台账号</span>
<span class="token comment">// 并绑定公众号或小程序</span>
<span class="token variable">\$result</span> <span class="token operator">=</span> <span class="token variable">\$account</span><span class="token operator">-&gt;</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 将公众号或小程序绑定到指定开放平台帐号下</span>
<span class="token variable">\$result</span> <span class="token operator">=</span> <span class="token variable">\$account</span><span class="token operator">-&gt;</span><span class="token function">bindTo</span><span class="token punctuation">(</span><span class="token variable">\$openAppId</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 将公众号/小程序从开放平台帐号下解绑</span>
<span class="token variable">\$result</span> <span class="token operator">=</span> <span class="token variable">\$account</span><span class="token operator">-&gt;</span><span class="token function">unbindFrom</span><span class="token punctuation">(</span><span class="token variable">\$openAppid</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 获取公众号/小程序所绑定的开放平台帐号</span>
<span class="token variable">\$result</span> <span class="token operator">=</span> <span class="token variable">\$account</span><span class="token operator">-&gt;</span><span class="token function">getBinding</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><blockquote><p>授权第三方平台注册的开放平台帐号只可用于获取用户 unionid 实现用户身份打通。</p><p>第三方平台不可操作（包括绑定/解绑）通过 open.weixin.qq.com 线上流程注册的开放平台帐号。</p><p>公众号只可将此权限集授权给一个第三方平台，授权互斥。</p></blockquote><p>接下来的 API 调用等操作和公众号、小程序的开发一致，请移步到<a href="https://www.easywechat.com/docs/master/official-account/index" target="_blank" rel="noopener noreferrer">公众号`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>或<a href="https://www.easywechat.com/docs/master/mini-program/index" target="_blank" rel="noopener noreferrer">小程序`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>开发章节继续进行开发吧。</p><h3 id="代码示例" tabindex="-1"><a class="header-anchor" href="#代码示例" aria-hidden="true">#</a> 代码示例</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token comment">// 假设你的公众号消息与事件接收 URL 为：https://easywechat.com/\$APPID\$/callback ...</span>

<span class="token class-name static-context">Route</span><span class="token operator">::</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;{appId}/callback&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token variable">\$appId</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
    <span class="token variable">\$officialAccount</span> <span class="token operator">=</span> <span class="token variable">\$openPlatform</span><span class="token operator">-&gt;</span><span class="token function">officialAccount</span><span class="token punctuation">(</span><span class="token variable">\$appId</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token variable">\$server</span> <span class="token operator">=</span> <span class="token variable">\$officialAccount</span><span class="token operator">-&gt;</span><span class="token property">server</span><span class="token punctuation">;</span> <span class="token comment">// ❗️❗️  这里的 server 为授权方的 server，而不是开放平台的 server，请注意！！！</span>

    <span class="token variable">\$server</span><span class="token operator">-&gt;</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string single-quoted-string">&#39;Welcome!&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token variable">\$server</span><span class="token operator">-&gt;</span><span class="token function">serve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 调用授权方业务例子</span>
<span class="token class-name static-context">Route</span><span class="token operator">::</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;how-to-use&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token variable">\$officialAccount</span> <span class="token operator">=</span> <span class="token variable">\$openPlatform</span><span class="token operator">-&gt;</span><span class="token function">officialAccount</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;已授权的公众号 APPID&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;Refresh-token&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 获取用户列表：</span>
    <span class="token variable">\$officialAccount</span><span class="token operator">-&gt;</span><span class="token property">user</span><span class="token operator">-&gt;</span><span class="token function">list</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token variable">\$miniProgram</span> <span class="token operator">=</span> <span class="token variable">\$openPlatform</span><span class="token operator">-&gt;</span><span class="token function">miniProgram</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;已授权的小程序 APPID&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;Refresh-token&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 根据 code 获取 session</span>
    <span class="token variable">\$miniProgram</span><span class="token operator">-&gt;</span><span class="token property">auth</span><span class="token operator">-&gt;</span><span class="token function">session</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;js-code&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 其他同理</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><!--]-->`)
}
;// CONCATENATED MODULE: ./.vuepress/.temp/pages/5.x/open-platform/authorizer-delegate.html.vue?vue&type=template&id=7e2764af

;// CONCATENATED MODULE: ./.vuepress/.temp/pages/5.x/open-platform/authorizer-delegate.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("/home/runner/work/easywechat/easywechat/docs/node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!/home/runner/work/easywechat/easywechat/docs/node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!/home/runner/work/easywechat/easywechat/docs/.vuepress/.temp/pages/5.x/open-platform/authorizer-delegate.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const authorizer_delegate_html = (script);

/***/ })

};
;
//# sourceMappingURL=7028.app.js.map