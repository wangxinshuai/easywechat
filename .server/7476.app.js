"use strict";
exports.id = 7476;
exports.ids = [7476];
exports.modules = {

/***/ 42352:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-3708ca69",
  "path": "/4.x/open-work/service.html",
  "title": "第三方应用接口",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "获取预授权码",
      "slug": "获取预授权码",
      "children": []
    },
    {
      "level": 2,
      "title": "设置授权配置",
      "slug": "设置授权配置",
      "children": []
    },
    {
      "level": 2,
      "title": "获取企业永久授权码",
      "slug": "获取企业永久授权码",
      "children": []
    },
    {
      "level": 2,
      "title": "获取企业授权信息",
      "slug": "获取企业授权信息",
      "children": []
    },
    {
      "level": 2,
      "title": "获取应用的管理员列表",
      "slug": "获取应用的管理员列表",
      "children": []
    },
    {
      "level": 2,
      "title": "网页授权登录第三方",
      "slug": "网页授权登录第三方",
      "children": [
        {
          "level": 3,
          "title": "构造第三方oauth2链接",
          "slug": "构造第三方oauth2链接",
          "children": []
        },
        {
          "level": 3,
          "title": "第三方根据code获取企业成员信息",
          "slug": "第三方根据code获取企业成员信息",
          "children": []
        },
        {
          "level": 3,
          "title": "第三方使用user_ticket获取成员详情",
          "slug": "第三方使用user-ticket获取成员详情",
          "children": []
        }
      ]
    }
  ],
  "filePathRelative": "4.x/open-work/service.md",
  "git": {
    "updatedTime": 1629906046000,
    "contributors": []
  }
}


/***/ }),

/***/ 43788:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ service_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.vuepress/.temp/pages/4.x/open-work/service.html.vue?vue&type=template&id=def85b6a

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="第三方应用接口" tabindex="-1"><a class="header-anchor" href="#第三方应用接口" aria-hidden="true">#</a> 第三方应用接口</h1><h2 id="获取预授权码" tabindex="-1"><a class="header-anchor" href="#获取预授权码" aria-hidden="true">#</a> 获取预授权码</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">corp</span><span class="token operator">-&gt;</span><span class="token function">getPreAuthCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="设置授权配置" tabindex="-1"><a class="header-anchor" href="#设置授权配置" aria-hidden="true">#</a> 设置授权配置</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">corp</span><span class="token operator">-&gt;</span><span class="token function">setSession</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">\$preAuthCode</span><span class="token punctuation">,</span> <span class="token keyword type-hint">array</span> <span class="token variable">\$sessionInfo</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="获取企业永久授权码" tabindex="-1"><a class="header-anchor" href="#获取企业永久授权码" aria-hidden="true">#</a> 获取企业永久授权码</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">corp</span><span class="token operator">-&gt;</span><span class="token function">getPermanentByCode</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">\$preAuthCode</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//传入临时授权码</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="获取企业授权信息" tabindex="-1"><a class="header-anchor" href="#获取企业授权信息" aria-hidden="true">#</a> 获取企业授权信息</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">corp</span><span class="token operator">-&gt;</span><span class="token function">getAuthorization</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">\$authCorpId</span><span class="token punctuation">,</span> <span class="token keyword type-hint">string</span> <span class="token variable">\$permanentCode</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\$authCorpId 授权的企业corp_id \$permanentCode 授权的永久授权码</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="获取应用的管理员列表" tabindex="-1"><a class="header-anchor" href="#获取应用的管理员列表" aria-hidden="true">#</a> 获取应用的管理员列表</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">corp</span><span class="token operator">-&gt;</span><span class="token function">getManagers</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">\$authCorpId</span><span class="token punctuation">,</span> <span class="token keyword type-hint">string</span> <span class="token variable">\$agentId</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\$authCorpId 授权的企业corp_id  \$agentId 授权方安装的应用agentid</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="网页授权登录第三方" tabindex="-1"><a class="header-anchor" href="#网页授权登录第三方" aria-hidden="true">#</a> 网页授权登录第三方</h2><h3 id="构造第三方oauth2链接" tabindex="-1"><a class="header-anchor" href="#构造第三方oauth2链接" aria-hidden="true">#</a> 构造第三方oauth2链接</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token comment">//\$redirectUri 回调uri 这里可以覆盖 默认读取配置文件</span>
<span class="token comment">//\$scope 应用授权作用域。</span>
<span class="token comment">//\$state 自定义安全值</span>
<span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">corp</span><span class="token operator">-&gt;</span><span class="token function">getOAuthRedirectUrl</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">\$redirectUri</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token keyword type-hint">string</span> <span class="token variable">\$scope</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;snsapi_userinfo&#39;</span><span class="token punctuation">,</span> <span class="token keyword type-hint">string</span> <span class="token variable">\$state</span> <span class="token operator">=</span> <span class="token constant">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="第三方根据code获取企业成员信息" tabindex="-1"><a class="header-anchor" href="#第三方根据code获取企业成员信息" aria-hidden="true">#</a> 第三方根据code获取企业成员信息</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">corp</span><span class="token operator">-&gt;</span><span class="token function">getUserByCode</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">\$code</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="第三方使用user-ticket获取成员详情" tabindex="-1"><a class="header-anchor" href="#第三方使用user-ticket获取成员详情" aria-hidden="true">#</a> 第三方使用user_ticket获取成员详情</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">corp</span><span class="token operator">-&gt;</span><span class="token function">getUserByTicket</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">\$userTicket</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><!--]-->`)
}
// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(84103);
;// CONCATENATED MODULE: ./.vuepress/.temp/pages/4.x/open-work/service.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("/home/runner/work/easywechat/easywechat/docs/node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!/home/runner/work/easywechat/easywechat/docs/node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!/home/runner/work/easywechat/easywechat/docs/.vuepress/.temp/pages/4.x/open-work/service.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const service_html = (script);

/***/ })

};
;
//# sourceMappingURL=7476.app.js.map