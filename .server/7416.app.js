"use strict";
exports.id = 7416;
exports.ids = [7416];
exports.modules = {

/***/ 73718:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-1157c104",
  "path": "/3.x/staff.html",
  "title": "客服",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "客服管理",
      "slug": "客服管理",
      "children": []
    },
    {
      "level": 2,
      "title": "API",
      "slug": "api",
      "children": [
        {
          "level": 3,
          "title": "获取所有客服账号列表",
          "slug": "获取所有客服账号列表",
          "children": []
        },
        {
          "level": 3,
          "title": "获取所有在线的客服账号列表",
          "slug": "获取所有在线的客服账号列表",
          "children": []
        },
        {
          "level": 3,
          "title": "添加客服帐号",
          "slug": "添加客服帐号",
          "children": []
        },
        {
          "level": 3,
          "title": "修改客服帐号",
          "slug": "修改客服帐号",
          "children": []
        },
        {
          "level": 3,
          "title": "删除客服帐号",
          "slug": "删除客服帐号",
          "children": []
        },
        {
          "level": 3,
          "title": "设置客服帐号的头像",
          "slug": "设置客服帐号的头像",
          "children": []
        },
        {
          "level": 3,
          "title": "获取客服聊天记录 NEW",
          "slug": "获取客服聊天记录-new",
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
  "filePathRelative": "3.x/staff.md",
  "git": {
    "updatedTime": 1629906046000,
    "contributors": []
  }
}


/***/ }),

/***/ 99076:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ staff_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(84103);
// EXTERNAL MODULE: external "@vue/server-renderer"
var server_renderer_ = __webpack_require__(32745);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.vuepress/.temp/pages/3.x/staff.html.vue?vue&type=template&id=7ada7237



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_RouterLink = (0,external_vue_.resolveComponent)("RouterLink")

  _push(`<!--[--><h1 id="客服" tabindex="-1"><a class="header-anchor" href="#客服" aria-hidden="true">#</a> 客服</h1><blockquote><p>2016.06.28 已经更新为新版多客服 API 请更新到 3.1 版本： composer require &quot;overtrue/wechat:~3.1&quot;</p></blockquote><p>微信的客服才能发送消息或者群发消息，而且还有时效限制，真恶心的说。。。</p><h2 id="客服管理" tabindex="-1"><a class="header-anchor" href="#客服管理" aria-hidden="true">#</a> 客服管理</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token keyword">use</span> <span class="token package">EasyWeChat<span class="token punctuation">\\</span>Foundation<span class="token punctuation">\\</span>Application</span><span class="token punctuation">;</span>
<span class="token comment">// ...</span>
<span class="token variable">\$app</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Application</span><span class="token punctuation">(</span><span class="token variable">\$options</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">\$staff</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">staff</span><span class="token punctuation">;</span> <span class="token comment">// 客服管理</span>
</span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2><h3 id="获取所有客服账号列表" tabindex="-1"><a class="header-anchor" href="#获取所有客服账号列表" aria-hidden="true">#</a> 获取所有客服账号列表</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$staff</span><span class="token operator">-&gt;</span><span class="token function">lists</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="获取所有在线的客服账号列表" tabindex="-1"><a class="header-anchor" href="#获取所有在线的客服账号列表" aria-hidden="true">#</a> 获取所有在线的客服账号列表</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$staff</span><span class="token operator">-&gt;</span><span class="token function">onlines</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="添加客服帐号" tabindex="-1"><a class="header-anchor" href="#添加客服帐号" aria-hidden="true">#</a> 添加客服帐号</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$staff</span><span class="token operator">-&gt;</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;foo@test&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;客服1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="修改客服帐号" tabindex="-1"><a class="header-anchor" href="#修改客服帐号" aria-hidden="true">#</a> 修改客服帐号</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$staff</span><span class="token operator">-&gt;</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;foo@test&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;客服1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="删除客服帐号" tabindex="-1"><a class="header-anchor" href="#删除客服帐号" aria-hidden="true">#</a> 删除客服帐号</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$staff</span><span class="token operator">-&gt;</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;foo@test&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="设置客服帐号的头像" tabindex="-1"><a class="header-anchor" href="#设置客服帐号的头像" aria-hidden="true">#</a> 设置客服帐号的头像</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$staff</span><span class="token operator">-&gt;</span><span class="token function">avatar</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;foo@test&#39;</span><span class="token punctuation">,</span> <span class="token variable">\$avatarPath</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \$avatarPath 为本地图片路径，非 URL</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="获取客服聊天记录-new" tabindex="-1"><a class="header-anchor" href="#获取客服聊天记录-new" aria-hidden="true">#</a> 获取客服聊天记录 <code>NEW</code></h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$staff</span><span class="token operator">-&gt;</span><span class="token function">records</span><span class="token punctuation">(</span><span class="token variable">\$startTime</span><span class="token punctuation">,</span> <span class="token variable">\$endTime</span><span class="token punctuation">,</span> <span class="token variable">\$pageIndex</span><span class="token punctuation">,</span> <span class="token variable">\$pageSize</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// example: \$records = \$staff-&gt;records(&#39;2015-06-07&#39;, &#39;2015-06-21&#39;, 1, 20);</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="主动发送消息给用户" tabindex="-1"><a class="header-anchor" href="#主动发送消息给用户" aria-hidden="true">#</a> 主动发送消息给用户</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$staff</span><span class="token operator">-&gt;</span><span class="token function">message</span><span class="token punctuation">(</span><span class="token variable">\$message</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">to</span><span class="token punctuation">(</span><span class="token variable">\$openId</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><blockquote><p><code>\$message</code> 为消息对象，请参考：`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_RouterLink, { to: "/3.x/messages.html" }, {
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
  _push(`</p></blockquote><h3 id="指定客服发送消息" tabindex="-1"><a class="header-anchor" href="#指定客服发送消息" aria-hidden="true">#</a> 指定客服发送消息</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$staff</span><span class="token operator">-&gt;</span><span class="token function">message</span><span class="token punctuation">(</span><span class="token variable">\$message</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">by</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;account@test&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">to</span><span class="token punctuation">(</span><span class="token variable">\$openId</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><blockquote><p><code>\$message</code> 为消息对象，请参考：`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_RouterLink, { to: "/3.x/messages.html" }, {
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
  _push(`</p></blockquote><h2 id="客服会话控制" tabindex="-1"><a class="header-anchor" href="#客服会话控制" aria-hidden="true">#</a> 客服会话控制</h2><blockquote><p>客服会话为新版 API 功能</p></blockquote><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token keyword">use</span> <span class="token package">EasyWeChat<span class="token punctuation">\\</span>Foundation<span class="token punctuation">\\</span>Application</span><span class="token punctuation">;</span>
<span class="token comment">// ...</span>
<span class="token variable">\$app</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Application</span><span class="token punctuation">(</span><span class="token variable">\$options</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">\$session</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">staff_session</span><span class="token punctuation">;</span> <span class="token comment">// 客服会话管理</span>
</span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="创建会话" tabindex="-1"><a class="header-anchor" href="#创建会话" aria-hidden="true">#</a> 创建会话</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$session</span><span class="token operator">-&gt;</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;test1@test&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;OPENID&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="关闭会话" tabindex="-1"><a class="header-anchor" href="#关闭会话" aria-hidden="true">#</a> 关闭会话</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$session</span><span class="token operator">-&gt;</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;test1@test&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;OPENID&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="获取客户会话状态" tabindex="-1"><a class="header-anchor" href="#获取客户会话状态" aria-hidden="true">#</a> 获取客户会话状态</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$session</span><span class="token operator">-&gt;</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;OPENID&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="获取客服会话列表" tabindex="-1"><a class="header-anchor" href="#获取客服会话列表" aria-hidden="true">#</a> 获取客服会话列表</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$session</span><span class="token operator">-&gt;</span><span class="token function">lists</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;test1@test&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="获取未接入会话列表" tabindex="-1"><a class="header-anchor" href="#获取未接入会话列表" aria-hidden="true">#</a> 获取未接入会话列表</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$session</span><span class="token operator">-&gt;</span><span class="token function">waiters</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>关于更多客服接口信息请参考微信官方文档：http://mp.weixin.qq.com/wiki</p><!--]-->`)
}
;// CONCATENATED MODULE: ./.vuepress/.temp/pages/3.x/staff.html.vue?vue&type=template&id=7ada7237

;// CONCATENATED MODULE: ./.vuepress/.temp/pages/3.x/staff.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("/home/runner/work/easywechat/easywechat/docs/node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!/home/runner/work/easywechat/easywechat/docs/node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!/home/runner/work/easywechat/easywechat/docs/.vuepress/.temp/pages/3.x/staff.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const staff_html = (script);

/***/ })

};
;
//# sourceMappingURL=7416.app.js.map