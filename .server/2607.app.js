"use strict";
exports.id = 2607;
exports.ids = [2607];
exports.modules = {

/***/ 26383:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-d91f0b7e",
  "path": "/6.x/open-platform/",
  "title": "微信开放平台第三方平台",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "实例化",
      "slug": "实例化",
      "children": []
    },
    {
      "level": 2,
      "title": "API",
      "slug": "api",
      "children": [
        {
          "level": 3,
          "title": "服务端",
          "slug": "服务端",
          "children": []
        },
        {
          "level": 3,
          "title": "API Client",
          "slug": "api-client",
          "children": []
        },
        {
          "level": 3,
          "title": "配置",
          "slug": "配置",
          "children": []
        },
        {
          "level": 3,
          "title": "ComponentAccessToken",
          "slug": "componentaccesstoken",
          "children": []
        },
        {
          "level": 3,
          "title": "VerifyTicket",
          "slug": "verifyticket",
          "children": []
        },
        {
          "level": 3,
          "title": "开放平台账户",
          "slug": "开放平台账户",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "第三方应用或网站网页授权",
      "slug": "第三方应用或网站网页授权",
      "children": []
    },
    {
      "level": 2,
      "title": "使用授权码获取授权信息",
      "slug": "使用授权码获取授权信息",
      "children": []
    },
    {
      "level": 2,
      "title": "获取/刷新接口调用令牌",
      "slug": "获取-刷新接口调用令牌",
      "children": []
    },
    {
      "level": 2,
      "title": "代替公众号/小程序请求公众平台 API",
      "slug": "代替公众号-小程序请求公众平台-api",
      "children": []
    }
  ],
  "filePathRelative": "6.x/open-platform/index.md",
  "git": {
    "updatedTime": 1629906046000,
    "contributors": []
  }
}


/***/ }),

/***/ 38856:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ index_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(84103);
// EXTERNAL MODULE: external "@vue/server-renderer"
var server_renderer_ = __webpack_require__(32745);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.vuepress/.temp/pages/6.x/open-platform/index.html.vue?vue&type=template&id=339383c3



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_OutboundLink = (0,external_vue_.resolveComponent)("OutboundLink")
  const _component_RouterLink = (0,external_vue_.resolveComponent)("RouterLink")

  _push(`<!--[--><h1 id="微信开放平台第三方平台" tabindex="-1"><a class="header-anchor" href="#微信开放平台第三方平台" aria-hidden="true">#</a> 微信开放平台第三方平台</h1><p>请仔细阅读并理解：<a href="https://developers.weixin.qq.com/doc/oplatform/Third-party_Platforms/2.0/product/Third_party_platform_appid.html" target="_blank" rel="noopener noreferrer">微信官方文档 - 开放平台 - 第三方平台`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></p><h2 id="实例化" tabindex="-1"><a class="header-anchor" href="#实例化" aria-hidden="true">#</a> 实例化</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token keyword">use</span> <span class="token package">EasyWeChat<span class="token punctuation">\\</span>OpenPlatform<span class="token punctuation">\\</span>Application</span><span class="token punctuation">;</span>

<span class="token variable">\$config</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token string single-quoted-string">&#39;app_id&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;wx3cf0f39249eb0exx&#39;</span><span class="token punctuation">,</span>
  <span class="token string single-quoted-string">&#39;secret&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;f1c242f4f28f735d4687abb469072axx&#39;</span><span class="token punctuation">,</span>
  <span class="token string single-quoted-string">&#39;token&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;easywechat&#39;</span><span class="token punctuation">,</span>
  <span class="token string single-quoted-string">&#39;aes_key&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;......&#39;</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token variable">\$app</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Application</span><span class="token punctuation">(</span><span class="token variable">\$config</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2><p>Application 就是一个工厂类，所有的模块都是从 <code>\$app</code> 中访问，并且几乎都提供了协议和 setter 可自定义修改。</p><h3 id="服务端" tabindex="-1"><a class="header-anchor" href="#服务端" aria-hidden="true">#</a> 服务端</h3><p>服务端模块封装了服务端相关的便捷操作，隐藏了部分复杂的细节，基于中间件模式可以更方便的处理消息推送和服务端验证。</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token function">getServer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>📖 更多说明请参阅：`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_RouterLink, { to: "/6.x/open-platform/server.html" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`服务端使用文档`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("服务端使用文档")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</p><h3 id="api-client" tabindex="-1"><a class="header-anchor" href="#api-client" aria-hidden="true">#</a> API Client</h3><p>封装了多种模式的 API 调用类，你可以选择自己喜欢的方式调用开放平台任意 API，默认自动处理了 access_token 相关的逻辑。</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token function">getClient</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>📖 更多说明请参阅：`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_RouterLink, { to: "/docs/%7B%7Bversion%7D%7D/common/client.html" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`API调用`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("API调用")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</p><h3 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$config</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token function">getConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>你可以轻松使用 <code>\$config-&gt;get(\$key, \$default)</code> 读取配置，或使用 <code>\$config-&gt;set(\$key, \$value)</code> 在调用前修改配置项。</p><h3 id="componentaccesstoken" tabindex="-1"><a class="header-anchor" href="#componentaccesstoken" aria-hidden="true">#</a> ComponentAccessToken</h3><p>access_token 是开放平台 API 调用的必备条件，如果你想获取它的值，你可以通过以下方式拿到当前的 access_token：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$componentAccessToken</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token function">getComponentAccessToken</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">\$componentAccessToken</span><span class="token operator">-&gt;</span><span class="token function">getToken</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// string</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>当然你也可以使用自己的 ComponentAccessToken 类：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$componentAccessToken</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyCustomComponentAccessToken</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token function">setComponentAccessToken</span><span class="token punctuation">(</span><span class="token variable">\$componentAccessToken</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="verifyticket" tabindex="-1"><a class="header-anchor" href="#verifyticket" aria-hidden="true">#</a> VerifyTicket</h3><p>你可以通过以下方式拿到当前 verify_ticket 类：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$verifyTicket</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token function">getVerfiyTicket</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">\$verifyTicket</span><span class="token operator">-&gt;</span><span class="token function">getTicket</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// strval</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="开放平台账户" tabindex="-1"><a class="header-anchor" href="#开放平台账户" aria-hidden="true">#</a> 开放平台账户</h3><p>开放平台账号类，提供一系列 API 获取开放平台的基本信息：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$account</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token function">getAccount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">\$account</span><span class="token operator">-&gt;</span><span class="token function">getAppId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">\$account</span><span class="token operator">-&gt;</span><span class="token function">getSecret</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">\$account</span><span class="token operator">-&gt;</span><span class="token function">getToken</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">\$account</span><span class="token operator">-&gt;</span><span class="token function">getAesKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="第三方应用或网站网页授权" tabindex="-1"><a class="header-anchor" href="#第三方应用或网站网页授权" aria-hidden="true">#</a> 第三方应用或网站网页授权</h2><blockquote><p>{warning} 注意：不是代公众号/小程序授权。</p></blockquote><p>第三方应用或者网站网页授权的逻辑和公众号的网页授权基本一样：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$oauth</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token function">getOAuth</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>📖 详情请参考：`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_RouterLink, { to: "/6.x/common/oauth.html" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`网页授权`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("网页授权")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</p><h2 id="使用授权码获取授权信息" tabindex="-1"><a class="header-anchor" href="#使用授权码获取授权信息" aria-hidden="true">#</a> 使用授权码获取授权信息</h2><p>在用户在授权页授权流程完成后，授权页会自动跳转进入回调URI，并在URL参数中返回授权码和过期时间，如：(<code>https://easywechat.com/callback?auth_code=xxx&amp;expires_in=600</code>)</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$authorizationCode</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;授权成功时返回给第三方平台的授权码&#39;</span><span class="token punctuation">;</span>

<span class="token variable">\$authorization</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token function">getAuthorization</span><span class="token punctuation">(</span><span class="token variable">\$authorizationCode</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">\$authorization</span><span class="token operator">-&gt;</span><span class="token function">getAppId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// authorizer_appid</span>
<span class="token variable">\$authorization</span><span class="token operator">-&gt;</span><span class="token function">getAccessToken</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// EasyWeChat\\OpenPlatform\\AuthorizerAccessToken</span>
<span class="token variable">\$authorization</span><span class="token operator">-&gt;</span><span class="token function">getRefreshToken</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// authorizer_access_token</span>
<span class="token variable">\$authorization</span><span class="token operator">-&gt;</span><span class="token function">toArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">\$authorization</span><span class="token operator">-&gt;</span><span class="token function">toJson</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// {</span>
<span class="token comment">//   &quot;authorization_info&quot;: {</span>
<span class="token comment">//     &quot;authorizer_appid&quot;: &quot;wxf8b4f85f3a79...&quot;,</span>
<span class="token comment">//     &quot;authorizer_access_token&quot;: &quot;QXjUqNqfYVH0yBE1iI_7vuN_9gQbpjfK7M...&quot;,</span>
<span class="token comment">//     &quot;expires_in&quot;: 7200,</span>
<span class="token comment">//     &quot;authorizer_refresh_token&quot;: &quot;dTo-YCXPL4llX-u1W1pPpnp8Hgm4wpJt...&quot;,</span>
<span class="token comment">//     &quot;func_info&quot;: [</span>
<span class="token comment">//       {</span>
<span class="token comment">//         &quot;funcscope_category&quot;: {</span>
<span class="token comment">//           &quot;id&quot;: 1</span>
<span class="token comment">//         }</span>
<span class="token comment">//       },</span>
<span class="token comment">//       //...</span>
<span class="token comment">//     ]</span>
<span class="token comment">//   }</span>
<span class="token comment">// }</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><h2 id="获取-刷新接口调用令牌" tabindex="-1"><a class="header-anchor" href="#获取-刷新接口调用令牌" aria-hidden="true">#</a> 获取/刷新接口调用令牌</h2><p>在公众号/小程序接口调用令牌（<code>authorizer_access_token</code>）失效时，可以使用刷新令牌（authorizer_refresh_token）获取新的接口调用令牌。</p><blockquote><p>{warning} 注意： <code>authorizer_access_token</code> 有效期为 2 小时，开发者需要缓存 <code>authorizer_access_token</code>，避免获取/刷新接口调用令牌的 API 调用触发每日限额。缓存方法可以参考：https://developers.weixin.qq.com/doc/offiaccount/Basic_Information/Get_access_token.html</p></blockquote><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$authorizerAppId</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;授权方 appid&#39;</span><span class="token punctuation">;</span>
<span class="token variable">\$authorizerRefreshToken</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;刷新令牌，上一步得到的 authorizer_refresh_token&#39;</span><span class="token punctuation">;</span>

<span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token function">refreshAuthorizerToken</span><span class="token punctuation">(</span><span class="token variable">\$authorizerAppId</span><span class="token punctuation">,</span> <span class="token variable">\$authorizerRefreshToken</span><span class="token punctuation">)</span>

<span class="token comment">// {</span>
<span class="token comment">//   &quot;authorizer_access_token&quot;: &quot;some-access-token&quot;,</span>
<span class="token comment">//   &quot;expires_in&quot;: 7200,</span>
<span class="token comment">//   &quot;authorizer_refresh_token&quot;: &quot;refresh_token_value&quot;</span>
<span class="token comment">// }</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><hr><h2 id="代替公众号-小程序请求公众平台-api" tabindex="-1"><a class="header-anchor" href="#代替公众号-小程序请求公众平台-api" aria-hidden="true">#</a> 代替公众号/小程序请求公众平台 API</h2><p>代替公众号/小程序请求，需要首先拿到 <code>EasyWeChat\\OpenPlatform\\AuthorizerAccessToken</code>。</p><p><strong>获取 AuthorizerAccessToken</strong></p><p>第一种方式：开放平台永久授权码换取授权者信息</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$authorizationCode</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;授权成功时返回给第三方平台的授权码&#39;</span><span class="token punctuation">;</span>
<span class="token variable">\$authorization</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token function">getAuthorization</span><span class="token punctuation">(</span><span class="token variable">\$authorizationCode</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">\$authorizerAccessToken</span> <span class="token operator">=</span> <span class="token variable">\$authorization</span><span class="token operator">-&gt;</span><span class="token function">getAccessToken</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>第二种方式：从数据库提取出来的授权码</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$authorizerAccessToken</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AuthorizerAccessToken</span><span class="token punctuation">(</span><span class="token variable">\$authorizerAppId</span><span class="token punctuation">,</span> <span class="token variable">\$token</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>获取公众号实例</strong></p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token comment">// \$officialAccount 为 EasyWeChat\\OfficialAccount\\Application 实例</span>
<span class="token variable">\$officialAccount</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token function">getOfficialAccount</span><span class="token punctuation">(</span><span class="token variable">\$authorizerAccessToken</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 调用公众号接口</span>
<span class="token variable">\$users</span> <span class="token operator">=</span> <span class="token variable">\$officialAccount</span><span class="token operator">-&gt;</span><span class="token function">getClient</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token property">cgiBin</span><span class="token operator">-&gt;</span><span class="token property">users</span><span class="token operator">-&gt;</span><span class="token property">list</span><span class="token operator">-&gt;</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">toArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>📖 更多公众号用法请参考：`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_RouterLink, { to: "/docs/%7B%7Bversion%7D%7D/official-account/" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`公众号`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("公众号")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</p><p><strong>获取小程序实例</strong></p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token comment">// \$miniApp 为 EasyWeChat\\MiniApp\\Application 实例</span>
<span class="token variable">\$miniApp</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token function">getMiniApp</span><span class="token punctuation">(</span><span class="token variable">\$authorizerAccessToken</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 调用小程序接口</span>
<span class="token variable">\$users</span> <span class="token operator">=</span> <span class="token variable">\$miniApp</span><span class="token operator">-&gt;</span><span class="token function">getClient</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token property">cgiBin</span><span class="token operator">-&gt;</span><span class="token property">users</span><span class="token operator">-&gt;</span><span class="token property">list</span><span class="token operator">-&gt;</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">toArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>📖 更多小程序用法请参考：`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_RouterLink, { to: "/docs/%7B%7Bversion%7D%7D/mini-app/" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`小程序`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("小程序")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</p><!--]-->`)
}
;// CONCATENATED MODULE: ./.vuepress/.temp/pages/6.x/open-platform/index.html.vue?vue&type=template&id=339383c3

;// CONCATENATED MODULE: ./.vuepress/.temp/pages/6.x/open-platform/index.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("/home/runner/work/easywechat/easywechat/docs/node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!/home/runner/work/easywechat/easywechat/docs/node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!/home/runner/work/easywechat/easywechat/docs/.vuepress/.temp/pages/6.x/open-platform/index.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const index_html = (script);

/***/ })

};
;
//# sourceMappingURL=2607.app.js.map