"use strict";
exports.id = 657;
exports.ids = [657];
exports.modules = {

/***/ 60397:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-2cc44c2a",
  "path": "/4.x/official-account/customer_service.html",
  "title": "客服",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "客服管理",
      "slug": "客服管理",
      "children": [
        {
          "level": 3,
          "title": "获取所有客服",
          "slug": "获取所有客服",
          "children": []
        },
        {
          "level": 3,
          "title": "获取所有在线的客服",
          "slug": "获取所有在线的客服",
          "children": []
        },
        {
          "level": 3,
          "title": "添加客服",
          "slug": "添加客服",
          "children": []
        },
        {
          "level": 3,
          "title": "修改客服",
          "slug": "修改客服",
          "children": []
        },
        {
          "level": 3,
          "title": "删除账号",
          "slug": "删除账号",
          "children": []
        },
        {
          "level": 3,
          "title": "设置客服头像",
          "slug": "设置客服头像",
          "children": []
        },
        {
          "level": 3,
          "title": "获取客服与客户聊天记录",
          "slug": "获取客服与客户聊天记录",
          "children": []
        },
        {
          "level": 3,
          "title": "主动发送消息给用户",
          "slug": "主动发送消息给用户",
          "children": []
        },
        {
          "level": 3,
          "title": "指定客服发送消息",
          "slug": "指定客服发送消息",
          "children": []
        },
        {
          "level": 3,
          "title": "邀请微信用户加入客服",
          "slug": "邀请微信用户加入客服",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "客服会话控制",
      "slug": "客服会话控制",
      "children": []
    },
    {
      "level": 2,
      "title": "创建会话",
      "slug": "创建会话",
      "children": [
        {
          "level": 3,
          "title": "关闭会话",
          "slug": "关闭会话",
          "children": []
        },
        {
          "level": 3,
          "title": "获取客户会话状态",
          "slug": "获取客户会话状态",
          "children": []
        },
        {
          "level": 3,
          "title": "获取客服会话列表",
          "slug": "获取客服会话列表",
          "children": []
        },
        {
          "level": 3,
          "title": "获取未接入会话列表",
          "slug": "获取未接入会话列表",
          "children": []
        }
      ]
    }
  ],
  "filePathRelative": "4.x/official-account/customer_service.md",
  "git": {
    "updatedTime": 1629906046000,
    "contributors": []
  }
}


/***/ }),

/***/ 74629:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ customer_service_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(84103);
// EXTERNAL MODULE: external "@vue/server-renderer"
var server_renderer_ = __webpack_require__(32745);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.vuepress/.temp/pages/4.x/official-account/customer_service.html.vue?vue&type=template&id=179b1a7e



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_RouterLink = (0,external_vue_.resolveComponent)("RouterLink")

  _push(`<!--[--><h1 id="客服" tabindex="-1"><a class="header-anchor" href="#客服" aria-hidden="true">#</a> 客服</h1><p>使用客服系统可以向用户发送消息以及群发消息，客服的管理等功能。</p><h2 id="客服管理" tabindex="-1"><a class="header-anchor" href="#客服管理" aria-hidden="true">#</a> 客服管理</h2><h3 id="获取所有客服" tabindex="-1"><a class="header-anchor" href="#获取所有客服" aria-hidden="true">#</a> 获取所有客服</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">customer_service</span><span class="token operator">-&gt;</span><span class="token function">list</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="获取所有在线的客服" tabindex="-1"><a class="header-anchor" href="#获取所有在线的客服" aria-hidden="true">#</a> 获取所有在线的客服</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">customer_service</span><span class="token operator">-&gt;</span><span class="token function">online</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="添加客服" tabindex="-1"><a class="header-anchor" href="#添加客服" aria-hidden="true">#</a> 添加客服</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">customer_service</span><span class="token operator">-&gt;</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;foo@test&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;客服1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="修改客服" tabindex="-1"><a class="header-anchor" href="#修改客服" aria-hidden="true">#</a> 修改客服</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">customer_service</span><span class="token operator">-&gt;</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;foo@test&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;客服1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="删除账号" tabindex="-1"><a class="header-anchor" href="#删除账号" aria-hidden="true">#</a> 删除账号</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">customer_service</span><span class="token operator">-&gt;</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;foo@test&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="设置客服头像" tabindex="-1"><a class="header-anchor" href="#设置客服头像" aria-hidden="true">#</a> 设置客服头像</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">customer_service</span><span class="token operator">-&gt;</span><span class="token function">setAvatar</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;foo@test&#39;</span><span class="token punctuation">,</span> <span class="token variable">\$avatarPath</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \$avatarPath 为本地图片路径，非 URL</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="获取客服与客户聊天记录" tabindex="-1"><a class="header-anchor" href="#获取客服与客户聊天记录" aria-hidden="true">#</a> 获取客服与客户聊天记录</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">customer_service</span><span class="token operator">-&gt;</span><span class="token function">messages</span><span class="token punctuation">(</span><span class="token variable">\$startTime</span><span class="token punctuation">,</span> <span class="token variable">\$endTime</span><span class="token punctuation">,</span> <span class="token variable">\$msgId</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token variable">\$number</span> <span class="token operator">=</span> <span class="token number">10000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>示例:</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$records</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">customer_service</span><span class="token operator">-&gt;</span><span class="token function">messages</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;2015-06-07&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;2015-06-21&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">20000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="主动发送消息给用户" tabindex="-1"><a class="header-anchor" href="#主动发送消息给用户" aria-hidden="true">#</a> 主动发送消息给用户</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">customer_service</span><span class="token operator">-&gt;</span><span class="token function">message</span><span class="token punctuation">(</span><span class="token variable">\$message</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">to</span><span class="token punctuation">(</span><span class="token variable">\$openId</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><blockquote><p><code>\$message</code> 为消息对象或文本，请参考：<a href="messages">消息</a></p></blockquote><p>示例：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">customer_service</span><span class="token operator">-&gt;</span><span class="token function">message</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;hello&#39;</span><span class="token punctuation">)</span>
                  <span class="token operator">&gt;</span>  <span class="token operator">-&gt;</span><span class="token function">to</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;oV-gpwdOIwSI958m9osAhGBFxxxx&#39;</span><span class="token punctuation">)</span>
                  <span class="token operator">&gt;</span>  <span class="token operator">-&gt;</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="指定客服发送消息" tabindex="-1"><a class="header-anchor" href="#指定客服发送消息" aria-hidden="true">#</a> 指定客服发送消息</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">customer_service</span><span class="token operator">-&gt;</span><span class="token function">message</span><span class="token punctuation">(</span><span class="token variable">\$message</span><span class="token punctuation">)</span>
                      <span class="token operator">&gt;</span>  <span class="token operator">-&gt;</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;account@test&#39;</span><span class="token punctuation">)</span>
                      <span class="token operator">&gt;</span>  <span class="token operator">-&gt;</span><span class="token function">to</span><span class="token punctuation">(</span><span class="token variable">\$openId</span><span class="token punctuation">)</span>
                      <span class="token operator">&gt;</span>  <span class="token operator">-&gt;</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><blockquote><p><code>\$message</code> 为消息对象或文本，请参考：`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_RouterLink, { to: "/4.x/official-account/messages.html" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`消息`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("消息")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</p></blockquote><p>示例：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">customer_service</span><span class="token operator">-&gt;</span><span class="token function">message</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;hello&#39;</span><span class="token punctuation">)</span>
                  <span class="token operator">&gt;</span>  <span class="token operator">-&gt;</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;kf2001@gh_176331xxxx&#39;</span><span class="token punctuation">)</span>
                  <span class="token operator">&gt;</span>  <span class="token operator">-&gt;</span><span class="token function">to</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;oV-gpwdOIwSI958m9osAhGBFxxxx&#39;</span><span class="token punctuation">)</span>
                  <span class="token operator">&gt;</span>  <span class="token operator">-&gt;</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="邀请微信用户加入客服" tabindex="-1"><a class="header-anchor" href="#邀请微信用户加入客服" aria-hidden="true">#</a> 邀请微信用户加入客服</h3><p>以账号 <code>foo@test</code> 邀请 微信号 为 <code>xxxx</code> 的微信用户加入客服。</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">customer_service</span><span class="token operator">-&gt;</span><span class="token function">invite</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;foo@test&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;xxxx&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="客服会话控制" tabindex="-1"><a class="header-anchor" href="#客服会话控制" aria-hidden="true">#</a> 客服会话控制</h2><h2 id="创建会话" tabindex="-1"><a class="header-anchor" href="#创建会话" aria-hidden="true">#</a> 创建会话</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">customer_service_session</span><span class="token operator">-&gt;</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;test1@test&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;OPENID&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="关闭会话" tabindex="-1"><a class="header-anchor" href="#关闭会话" aria-hidden="true">#</a> 关闭会话</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">customer_service_session</span><span class="token operator">-&gt;</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;test1@test&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;OPENID&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="获取客户会话状态" tabindex="-1"><a class="header-anchor" href="#获取客户会话状态" aria-hidden="true">#</a> 获取客户会话状态</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">customer_service_session</span><span class="token operator">-&gt;</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;OPENID&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="获取客服会话列表" tabindex="-1"><a class="header-anchor" href="#获取客服会话列表" aria-hidden="true">#</a> 获取客服会话列表</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">customer_service_session</span><span class="token operator">-&gt;</span><span class="token function">list</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;test1@test&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="获取未接入会话列表" tabindex="-1"><a class="header-anchor" href="#获取未接入会话列表" aria-hidden="true">#</a> 获取未接入会话列表</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">customer_service_session</span><span class="token operator">-&gt;</span><span class="token function">waiting</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><!--]-->`)
}
;// CONCATENATED MODULE: ./.vuepress/.temp/pages/4.x/official-account/customer_service.html.vue?vue&type=template&id=179b1a7e

;// CONCATENATED MODULE: ./.vuepress/.temp/pages/4.x/official-account/customer_service.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("/home/runner/work/easywechat/easywechat/docs/node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!/home/runner/work/easywechat/easywechat/docs/node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!/home/runner/work/easywechat/easywechat/docs/.vuepress/.temp/pages/4.x/official-account/customer_service.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const customer_service_html = (script);

/***/ })

};
;
//# sourceMappingURL=657.app.js.map