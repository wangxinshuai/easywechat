"use strict";
exports.id = 4184;
exports.ids = [4184];
exports.modules = {

/***/ 4639:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-1ebc10fa",
  "path": "/3.x/user.html",
  "title": "用户",
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
      "title": "API 列表",
      "slug": "api-列表",
      "children": [
        {
          "level": 3,
          "title": "获取用户信息",
          "slug": "获取用户信息",
          "children": []
        },
        {
          "level": 3,
          "title": "获取用户列表",
          "slug": "获取用户列表",
          "children": []
        },
        {
          "level": 3,
          "title": "修改用户备注",
          "slug": "修改用户备注",
          "children": []
        },
        {
          "level": 3,
          "title": "获取用户所属用户组ID",
          "slug": "获取用户所属用户组id",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "其它",
      "slug": "其它",
      "children": []
    }
  ],
  "filePathRelative": "3.x/user.md",
  "git": {
    "updatedTime": 1629906046000,
    "contributors": []
  }
}


/***/ }),

/***/ 96644:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ user_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(84103);
// EXTERNAL MODULE: external "@vue/server-renderer"
var server_renderer_ = __webpack_require__(32745);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.vuepress/.temp/pages/3.x/user.html.vue?vue&type=template&id=a0562654



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_RouterLink = (0,external_vue_.resolveComponent)("RouterLink")

  _push(`<!--[--><h1 id="用户" tabindex="-1"><a class="header-anchor" href="#用户" aria-hidden="true">#</a> 用户</h1><p>用户信息的获取是微信开发中比较常用的一个功能了，以下所有的用户信息的获取与更新，都是<strong>基于微信的 <code>openid</code> 的，并且是已关注当前账号的</strong>，其它情况可能无法正常使用。</p><h2 id="获取实例" tabindex="-1"><a class="header-anchor" href="#获取实例" aria-hidden="true">#</a> 获取实例</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token keyword">use</span> <span class="token package">EasyWeChat<span class="token punctuation">\\</span>Foundation<span class="token punctuation">\\</span>Application</span><span class="token punctuation">;</span>

<span class="token comment">// ...</span>

<span class="token variable">\$app</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Application</span><span class="token punctuation">(</span><span class="token variable">\$options</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">\$userService</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">user</span><span class="token punctuation">;</span>
</span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="api-列表" tabindex="-1"><a class="header-anchor" href="#api-列表" aria-hidden="true">#</a> API 列表</h2><h3 id="获取用户信息" tabindex="-1"><a class="header-anchor" href="#获取用户信息" aria-hidden="true">#</a> 获取用户信息</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$userService</span><span class="token operator">-&gt;</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token variable">\$openId</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">\$userService</span><span class="token operator">-&gt;</span><span class="token function">batchGet</span><span class="token punctuation">(</span><span class="token variable">\$openIds</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>获取单个：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$user</span> <span class="token operator">=</span> <span class="token variable">\$userService</span><span class="token operator">-&gt;</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token variable">\$openId</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">echo</span> <span class="token variable">\$user</span><span class="token operator">-&gt;</span><span class="token property">nickname</span><span class="token punctuation">;</span> <span class="token comment">// or \$user[&#39;nickname&#39;]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>获取多个：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$users</span> <span class="token operator">=</span> <span class="token variable">\$userService</span><span class="token operator">-&gt;</span><span class="token function">batchGet</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token variable">\$openId1</span><span class="token punctuation">,</span> <span class="token variable">\$openId2</span><span class="token punctuation">,</span> <span class="token operator">...</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="获取用户列表" tabindex="-1"><a class="header-anchor" href="#获取用户列表" aria-hidden="true">#</a> 获取用户列表</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$userService</span><span class="token operator">-&gt;</span><span class="token function">lists</span><span class="token punctuation">(</span><span class="token variable">\$nextOpenId</span> <span class="token operator">=</span> <span class="token constant">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// \$nextOpenId 可选</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>example:</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$users</span> <span class="token operator">=</span> <span class="token variable">\$userService</span><span class="token operator">-&gt;</span><span class="token function">lists</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// result</span>
<span class="token punctuation">{</span>
 <span class="token string double-quoted-string">&quot;total&quot;</span><span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
 <span class="token string double-quoted-string">&quot;count&quot;</span><span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
 <span class="token string double-quoted-string">&quot;data&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
   <span class="token string double-quoted-string">&quot;openid&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
     <span class="token string double-quoted-string">&quot;&quot;</span><span class="token punctuation">,</span>
     <span class="token string double-quoted-string">&quot;OPENID1&quot;</span><span class="token punctuation">,</span>
     <span class="token string double-quoted-string">&quot;OPENID2&quot;</span>
   <span class="token punctuation">]</span>
 <span class="token punctuation">}</span><span class="token punctuation">,</span>
 <span class="token string double-quoted-string">&quot;next_openid&quot;</span><span class="token punctuation">:</span> <span class="token string double-quoted-string">&quot;NEXT_OPENID&quot;</span>
<span class="token punctuation">}</span>

<span class="token variable">\$users</span><span class="token operator">-&gt;</span><span class="token property">total</span><span class="token punctuation">;</span> <span class="token comment">// 2</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h3 id="修改用户备注" tabindex="-1"><a class="header-anchor" href="#修改用户备注" aria-hidden="true">#</a> 修改用户备注</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$userService</span><span class="token operator">-&gt;</span><span class="token function">remark</span><span class="token punctuation">(</span><span class="token variable">\$openId</span><span class="token punctuation">,</span> <span class="token variable">\$remark</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 成功返回boolean</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>example:</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$userService</span><span class="token operator">-&gt;</span><span class="token function">remark</span><span class="token punctuation">(</span><span class="token variable">\$openId</span><span class="token punctuation">,</span> <span class="token string double-quoted-string">&quot;僵尸粉&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="获取用户所属用户组id" tabindex="-1"><a class="header-anchor" href="#获取用户所属用户组id" aria-hidden="true">#</a> 获取用户所属用户组ID</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$userService</span><span class="token operator">-&gt;</span><span class="token function">group</span><span class="token punctuation">(</span><span class="token variable">\$openId</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>example:</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$userGroupId</span> <span class="token operator">=</span> <span class="token variable">\$userService</span><span class="token operator">-&gt;</span><span class="token function">group</span><span class="token punctuation">(</span><span class="token variable">\$openId</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="其它" tabindex="-1"><a class="header-anchor" href="#其它" aria-hidden="true">#</a> 其它</h2><ul><li>`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_RouterLink, { to: "/3.x/user-tag.html" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`用户标签`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("用户标签")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li><li>`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_RouterLink, { to: "/3.x/user-group.html" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`用户分组`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("用户分组")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li></ul><p>关于用户管理请参考微信官方文档：http://mp.weixin.qq.com/wiki/ <code>用户管理</code> 章节。</p><!--]-->`)
}
;// CONCATENATED MODULE: ./.vuepress/.temp/pages/3.x/user.html.vue?vue&type=template&id=a0562654

;// CONCATENATED MODULE: ./.vuepress/.temp/pages/3.x/user.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("/home/runner/work/easywechat/easywechat/docs/node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!/home/runner/work/easywechat/easywechat/docs/node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!/home/runner/work/easywechat/easywechat/docs/.vuepress/.temp/pages/3.x/user.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const user_html = (script);

/***/ })

};
;
//# sourceMappingURL=4184.app.js.map