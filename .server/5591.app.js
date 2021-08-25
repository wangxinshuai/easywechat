"use strict";
exports.id = 5591;
exports.ids = [5591];
exports.modules = {

/***/ 88228:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-7e33c9e3",
  "path": "/6.x/open-work/",
  "title": "企业微信服务商",
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
          "title": "ProviderAccessToken",
          "slug": "provideraccesstoken",
          "children": []
        },
        {
          "level": 3,
          "title": "SuiteTicket",
          "slug": "suiteticket",
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
      "title": "第三方应用需要在打开的网页里面携带用户的身份信息",
      "slug": "第三方应用需要在打开的网页里面携带用户的身份信息",
      "children": []
    },
    {
      "level": 2,
      "title": "企业网页授权",
      "slug": "企业网页授权",
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
      "title": "获取企业凭证",
      "slug": "获取企业凭证",
      "children": []
    }
  ],
  "filePathRelative": "6.x/open-work/index.md",
  "git": {
    "updatedTime": 1629906046000,
    "contributors": []
  }
}


/***/ }),

/***/ 78243:
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
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.vuepress/.temp/pages/6.x/open-work/index.html.vue?vue&type=template&id=519c08cb



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_OutboundLink = (0,external_vue_.resolveComponent)("OutboundLink")
  const _component_RouterLink = (0,external_vue_.resolveComponent)("RouterLink")

  _push(`<!--[--><h1 id="企业微信服务商" tabindex="-1"><a class="header-anchor" href="#企业微信服务商" aria-hidden="true">#</a> 企业微信服务商</h1><p>请仔细阅读并理解：<a href="https://open.work.weixin.qq.com/api/doc/90001/90142/90594" target="_blank" rel="noopener noreferrer">企业微信 API - 第三方应用开发`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></p><h2 id="实例化" tabindex="-1"><a class="header-anchor" href="#实例化" aria-hidden="true">#</a> 实例化</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token keyword">use</span> <span class="token package">EasyWeChat<span class="token punctuation">\\</span>OpenWork<span class="token punctuation">\\</span>Application</span><span class="token punctuation">;</span>

<span class="token variable">\$config</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token string single-quoted-string">&#39;corp_id&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;wx3cf0f39249eb0exx&#39;</span><span class="token punctuation">,</span>
  <span class="token string single-quoted-string">&#39;provider_secret&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;f1c242f4f28f735d4687abb469072axx&#39;</span><span class="token punctuation">,</span>
  <span class="token string single-quoted-string">&#39;token&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;easywechat&#39;</span><span class="token punctuation">,</span>
  <span class="token string single-quoted-string">&#39;aes_key&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;......&#39;</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token variable">\$app</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Application</span><span class="token punctuation">(</span><span class="token variable">\$config</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2><p>Application 就是一个工厂类，所有的模块都是从 <code>\$app</code> 中访问，并且几乎都提供了协议和 setter 可自定义修改。</p><h3 id="服务端" tabindex="-1"><a class="header-anchor" href="#服务端" aria-hidden="true">#</a> 服务端</h3><p>服务端模块封装了服务端相关的便捷操作，隐藏了部分复杂的细节，基于中间件模式可以更方便的处理消息推送和服务端验证。</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token function">getServer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>📖 更多说明请参阅：`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_RouterLink, { to: "/6.x/open-work/server.html" }, {
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
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>你可以轻松使用 <code>\$config-&gt;get(\$key, \$default)</code> 读取配置，或使用 <code>\$config-&gt;set(\$key, \$value)</code> 在调用前修改配置项。</p><h3 id="provideraccesstoken" tabindex="-1"><a class="header-anchor" href="#provideraccesstoken" aria-hidden="true">#</a> ProviderAccessToken</h3><p>provider_access_token 是开放平台 API 调用的必备条件，如果你想获取它的值，你可以通过以下方式拿到当前的 provider_access_token：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$providerAccessToken</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token function">getProviderAccessToken</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">\$providerAccessToken</span><span class="token operator">-&gt;</span><span class="token function">getToken</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// string</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>当然你也可以使用自己的 ProviderAccessToken 类：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$providerAccessToken</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyCustomProviderAccessToken</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token function">setProviderAccessToken</span><span class="token punctuation">(</span><span class="token variable">\$providerAccessToken</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="suiteticket" tabindex="-1"><a class="header-anchor" href="#suiteticket" aria-hidden="true">#</a> SuiteTicket</h3><p>你可以通过以下方式拿到当前 suite_ticket 类：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$suiteTicket</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token function">getSuiteTicket</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">\$suiteTicket</span><span class="token operator">-&gt;</span><span class="token function">getTicket</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// string</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="开放平台账户" tabindex="-1"><a class="header-anchor" href="#开放平台账户" aria-hidden="true">#</a> 开放平台账户</h3><p>开放平台账号类，提供一系列 API 获取开放平台的基本信息：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$account</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token function">getAccount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">\$account</span><span class="token operator">-&gt;</span><span class="token function">getCorpId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">\$account</span><span class="token operator">-&gt;</span><span class="token function">getProviderSecret</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">\$account</span><span class="token operator">-&gt;</span><span class="token function">getToken</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">\$account</span><span class="token operator">-&gt;</span><span class="token function">getAesKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="第三方应用需要在打开的网页里面携带用户的身份信息" tabindex="-1"><a class="header-anchor" href="#第三方应用需要在打开的网页里面携带用户的身份信息" aria-hidden="true">#</a> 第三方应用需要在打开的网页里面携带用户的身份信息</h2><blockquote><p><a href="https://open.work.weixin.qq.com/api/doc/90001/90143/91120#%E6%9E%84%E9%80%A0%E7%AC%AC%E4%B8%89%E6%96%B9%E5%BA%94%E7%94%A8oauth2%E9%93%BE%E6%8E%A5" target="_blank" rel="noopener noreferrer">点此查看官方文档`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></p></blockquote><p>第三方应用或者网站网页授权的逻辑和公众号的网页授权基本一样：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$oauth</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token function">getOAuth</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">\$suiteId</span><span class="token punctuation">,</span> <span class="token class-name type-declaration">AccessTokenInterface</span> <span class="token variable">\$suiteAccessToken</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>📖 详情请参考：`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_RouterLink, { to: "/6.x/open-work/oauth.html" }, {
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
  _push(`</p><h2 id="企业网页授权" tabindex="-1"><a class="header-anchor" href="#企业网页授权" aria-hidden="true">#</a> 企业网页授权</h2><blockquote><p><a href="https://open.work.weixin.qq.com/api/doc/90001/90143/91120#%E6%9E%84%E9%80%A0%E4%BC%81%E4%B8%9Aoauth2%E9%93%BE%E6%8E%A5" target="_blank" rel="noopener noreferrer">点此查看官方文档`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></p></blockquote><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$oauth</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token function">getCorpOAuth</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">\$corpId</span><span class="token punctuation">,</span> <span class="token keyword type-hint">int</span> <span class="token variable">\$agentId</span><span class="token punctuation">,</span> <span class="token class-name type-declaration">AccessTokenInterface</span> <span class="token variable">\$suiteAccessToken</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>📖 详情请参考：`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_RouterLink, { to: "/6.x/open-work/oauth.html" }, {
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
  _push(`</p><h2 id="使用授权码获取授权信息" tabindex="-1"><a class="header-anchor" href="#使用授权码获取授权信息" aria-hidden="true">#</a> 使用授权码获取授权信息</h2><p>在用户在授权页授权流程完成后，授权页会自动跳转进入回调URI，并在URL参数中返回授权码和过期时间，如：(<code>https://easywechat.com/callback?auth_code=xxx&amp;expires_in=600</code>)</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$permanentCode</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;企业永久授权码&#39;</span><span class="token punctuation">;</span>
<span class="token variable">\$suiteAccessToken</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SuiteAccessToken</span><span class="token punctuation">(</span><span class="token variable">\$suiteId</span><span class="token punctuation">,</span> <span class="token variable">\$suiteSecret</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">\$authorization</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token function">getAuthorization</span><span class="token punctuation">(</span><span class="token variable">\$corpId</span><span class="token punctuation">,</span> <span class="token variable">\$authorizatpermanentCodeionCode</span><span class="token punctuation">,</span> <span class="token variable">\$suiteAccessToken</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">\$authorization</span><span class="token operator">-&gt;</span><span class="token function">getCorpId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// auth_corp_info.corpid</span>
<span class="token variable">\$authorization</span><span class="token operator">-&gt;</span><span class="token function">toArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">\$authorization</span><span class="token operator">-&gt;</span><span class="token function">toJson</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// {</span>
<span class="token comment">//     &quot;errcode&quot;:0 ,</span>
<span class="token comment">//     &quot;errmsg&quot;:&quot;ok&quot; ,</span>
<span class="token comment">//     &quot;dealer_corp_info&quot;:</span>
<span class="token comment">//     {</span>
<span class="token comment">//         &quot;corpid&quot;: &quot;xxxx&quot;,</span>
<span class="token comment">//         &quot;corp_name&quot;: &quot;name&quot;</span>
<span class="token comment">//     },</span>
<span class="token comment">//     &quot;auth_corp_info&quot;:</span>
<span class="token comment">//     {</span>
<span class="token comment">//         &quot;corpid&quot;: &quot;xxxx&quot;,</span>
<span class="token comment">//         &quot;corp_name&quot;: &quot;name&quot;,</span>
<span class="token comment">//         &quot;corp_type&quot;: &quot;verified&quot;,</span>
<span class="token comment">//         &quot;corp_square_logo_url&quot;: &quot;yyyyy&quot;,</span>
<span class="token comment">//         &quot;corp_user_max&quot;: 50,</span>
<span class="token comment">//         &quot;corp_agent_max&quot;: 30,</span>
<span class="token comment">//         &quot;corp_full_name&quot;:&quot;full_name&quot;,</span>
<span class="token comment">//         &quot;verified_end_time&quot;:1431775834,</span>
<span class="token comment">//         &quot;subject_type&quot;: 1,</span>
<span class="token comment">//         &quot;corp_wxqrcode&quot;: &quot;zzzzz&quot;,</span>
<span class="token comment">//         &quot;corp_scale&quot;: &quot;1-50人&quot;,</span>
<span class="token comment">//         &quot;corp_industry&quot;: &quot;IT服务&quot;,</span>
<span class="token comment">//         &quot;corp_sub_industry&quot;: &quot;计算机软件/硬件/信息服务&quot;,</span>
<span class="token comment">//         &quot;location&quot;:&quot;广东省广州市&quot;</span>
<span class="token comment">//     },</span>
<span class="token comment">//     &quot;auth_info&quot;:</span>
<span class="token comment">//     {</span>
<span class="token comment">//         &quot;agent&quot; :</span>
<span class="token comment">//         [</span>
<span class="token comment">//             {</span>
<span class="token comment">//                 &quot;agentid&quot;:1,</span>
<span class="token comment">//                 &quot;name&quot;:&quot;NAME&quot;,</span>
<span class="token comment">//                 &quot;round_logo_url&quot;:&quot;xxxxxx&quot;,</span>
<span class="token comment">//                 &quot;square_logo_url&quot;:&quot;yyyyyy&quot;,</span>
<span class="token comment">//                 &quot;appid&quot;:1,</span>
<span class="token comment">//                 &quot;auth_mode&quot;:1,</span>
<span class="token comment">//                 &quot;privilege&quot;:</span>
<span class="token comment">//                 {</span>
<span class="token comment">//                     &quot;level&quot;:1,</span>
<span class="token comment">//                     &quot;allow_party&quot;:[1,2,3],</span>
<span class="token comment">//                     &quot;allow_user&quot;:[&quot;zhansan&quot;,&quot;lisi&quot;],</span>
<span class="token comment">//                     &quot;allow_tag&quot;:[1,2,3],</span>
<span class="token comment">//                     &quot;extra_party&quot;:[4,5,6],</span>
<span class="token comment">//                     &quot;extra_user&quot;:[&quot;wangwu&quot;],</span>
<span class="token comment">//                     &quot;extra_tag&quot;:[4,5,6]</span>
<span class="token comment">//                 },</span>
<span class="token comment">//                 &quot;shared_from&quot;:</span>
<span class="token comment">//                 {</span>
<span class="token comment">//                     &quot;corpid&quot;:&quot;wwyyyyy&quot;</span>
<span class="token comment">//                 }</span>
<span class="token comment">//             },</span>
<span class="token comment">//             {</span>
<span class="token comment">//                 &quot;agentid&quot;:2,</span>
<span class="token comment">//                 &quot;name&quot;:&quot;NAME2&quot;,</span>
<span class="token comment">//                 &quot;round_logo_url&quot;:&quot;xxxxxx&quot;,</span>
<span class="token comment">//                 &quot;square_logo_url&quot;:&quot;yyyyyy&quot;,</span>
<span class="token comment">//                 &quot;appid&quot;:5,</span>
<span class="token comment">//                 &quot;shared_from&quot;:</span>
<span class="token comment">//                 {</span>
<span class="token comment">//                     &quot;corpid&quot;:&quot;wwyyyyy&quot;</span>
<span class="token comment">//                 }</span>
<span class="token comment">//             }</span>
<span class="token comment">//         ]</span>
<span class="token comment">//     }</span>
<span class="token comment">// }</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br></div></div><h2 id="获取企业凭证" tabindex="-1"><a class="header-anchor" href="#获取企业凭证" aria-hidden="true">#</a> 获取企业凭证</h2><p>在公众号/小程序接口调用令牌（<code>authorizer_access_token</code>）失效时，可以使用刷新令牌（authorizer_refresh_token）获取新的接口调用令牌。</p><blockquote><p>{warning} 注意： <code>authorizer_access_token</code> 有效期为 2 小时，开发者需要缓存 <code>authorizer_access_token</code>，避免获取/刷新接口调用令牌的 API 调用触发每日限额。缓存方法可以参考：https://developers.weixin.qq.com/doc/offiaccount/Basic_Information/Get_access_token.html</p></blockquote><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$permanentCode</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;企业永久授权码&#39;</span><span class="token punctuation">;</span>
<span class="token variable">\$suiteAccessToken</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SuiteAccessToken</span><span class="token punctuation">(</span><span class="token variable">\$suiteId</span><span class="token punctuation">,</span> <span class="token variable">\$suiteSecret</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">\$authorizerAccessToken</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token function">getAuthorizerAccessToken</span><span class="token punctuation">(</span><span class="token variable">\$corpId</span><span class="token punctuation">,</span> <span class="token variable">\$permanentCode</span><span class="token punctuation">,</span> <span class="token variable">\$suiteAccessToken</span><span class="token punctuation">)</span>

<span class="token comment">// {</span>
<span class="token comment">//     &quot;errcode&quot;:0 ,</span>
<span class="token comment">//     &quot;errmsg&quot;:&quot;ok&quot; ,</span>
<span class="token comment">//     &quot;access_token&quot;: &quot;xxxxxx&quot;,</span>
<span class="token comment">//     &quot;expires_in&quot;: 7200</span>
<span class="token comment">// }</span>


<span class="token variable">\$authorizerAccessToken</span><span class="token operator">-&gt;</span><span class="token function">getToken</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// string</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><hr><p>todo: 调用企业 API</p><!--]-->`)
}
;// CONCATENATED MODULE: ./.vuepress/.temp/pages/6.x/open-work/index.html.vue?vue&type=template&id=519c08cb

;// CONCATENATED MODULE: ./.vuepress/.temp/pages/6.x/open-work/index.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("/home/runner/work/easywechat/easywechat/docs/node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!/home/runner/work/easywechat/easywechat/docs/node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!/home/runner/work/easywechat/easywechat/docs/.vuepress/.temp/pages/6.x/open-work/index.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const index_html = (script);

/***/ })

};
;
//# sourceMappingURL=5591.app.js.map