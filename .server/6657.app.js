"use strict";
exports.id = 6657;
exports.ids = [6657];
exports.modules = {

/***/ 3612:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-1be50e58",
  "path": "/4.x/official-account/user.html",
  "title": "用户",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "获取用户信息",
      "slug": "获取用户信息",
      "children": []
    },
    {
      "level": 2,
      "title": "获取用户列表",
      "slug": "获取用户列表",
      "children": []
    },
    {
      "level": 2,
      "title": "修改用户备注",
      "slug": "修改用户备注",
      "children": []
    },
    {
      "level": 2,
      "title": "拉黑用户",
      "slug": "拉黑用户",
      "children": []
    },
    {
      "level": 2,
      "title": "取消拉黑用户",
      "slug": "取消拉黑用户",
      "children": []
    },
    {
      "level": 2,
      "title": "获取黑名单",
      "slug": "获取黑名单",
      "children": []
    },
    {
      "level": 2,
      "title": "账号迁移 openid 转换",
      "slug": "账号迁移-openid-转换",
      "children": []
    }
  ],
  "filePathRelative": "4.x/official-account/user.md",
  "git": {
    "updatedTime": 1629906046000,
    "contributors": []
  }
}


/***/ }),

/***/ 74605:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ user_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.vuepress/.temp/pages/4.x/official-account/user.html.vue?vue&type=template&id=28484969

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="用户" tabindex="-1"><a class="header-anchor" href="#用户" aria-hidden="true">#</a> 用户</h1><p>用户信息的获取是微信开发中比较常用的一个功能了，以下所有的用户信息的获取与更新，都是<strong>基于微信的 <code>openid</code> 的，并且是已关注当前账号的</strong>，其它情况可能无法正常使用。</p><h2 id="获取用户信息" tabindex="-1"><a class="header-anchor" href="#获取用户信息" aria-hidden="true">#</a> 获取用户信息</h2><p>获取单个：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$user</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">user</span><span class="token operator">-&gt;</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token variable">\$openId</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>获取多个：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$users</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">user</span><span class="token operator">-&gt;</span><span class="token function">select</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token variable">\$openId1</span><span class="token punctuation">,</span> <span class="token variable">\$openId2</span><span class="token punctuation">,</span> <span class="token operator">...</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="获取用户列表" tabindex="-1"><a class="header-anchor" href="#获取用户列表" aria-hidden="true">#</a> 获取用户列表</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">user</span><span class="token operator">-&gt;</span><span class="token function">list</span><span class="token punctuation">(</span><span class="token variable">\$nextOpenId</span> <span class="token operator">=</span> <span class="token constant">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// \$nextOpenId 可选</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>示例：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code> <span class="token variable">\$users</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">user</span><span class="token operator">-&gt;</span><span class="token function">list</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// result</span>
 <span class="token punctuation">{</span>
  <span class="token string double-quoted-string">&quot;total&quot;</span><span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
  <span class="token string double-quoted-string">&quot;count&quot;</span><span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
  <span class="token string double-quoted-string">&quot;data&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
    <span class="token string double-quoted-string">&quot;openid&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
      <span class="token string double-quoted-string">&quot;OPENID1&quot;</span><span class="token punctuation">,</span>
      <span class="token string double-quoted-string">&quot;OPENID2&quot;</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string double-quoted-string">&quot;next_openid&quot;</span><span class="token punctuation">:</span> <span class="token string double-quoted-string">&quot;NEXT_OPENID&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="修改用户备注" tabindex="-1"><a class="header-anchor" href="#修改用户备注" aria-hidden="true">#</a> 修改用户备注</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">user</span><span class="token operator">-&gt;</span><span class="token function">remark</span><span class="token punctuation">(</span><span class="token variable">\$openId</span><span class="token punctuation">,</span> <span class="token variable">\$remark</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 成功返回boolean</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>示例：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">user</span><span class="token operator">-&gt;</span><span class="token function">remark</span><span class="token punctuation">(</span><span class="token variable">\$openId</span><span class="token punctuation">,</span> <span class="token string double-quoted-string">&quot;僵尸粉&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="拉黑用户" tabindex="-1"><a class="header-anchor" href="#拉黑用户" aria-hidden="true">#</a> 拉黑用户</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">user</span><span class="token operator">-&gt;</span><span class="token function">block</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;openidxxxxx&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 或者多个用户</span>
<span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">user</span><span class="token operator">-&gt;</span><span class="token function">block</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;openid1&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;openid2&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;openid3&#39;</span><span class="token punctuation">,</span> <span class="token operator">...</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="取消拉黑用户" tabindex="-1"><a class="header-anchor" href="#取消拉黑用户" aria-hidden="true">#</a> 取消拉黑用户</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">user</span><span class="token operator">-&gt;</span><span class="token function">unblock</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;openidxxxxx&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 或者多个用户</span>
<span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">user</span><span class="token operator">-&gt;</span><span class="token function">unblock</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;openid1&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;openid2&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;openid3&#39;</span><span class="token punctuation">,</span> <span class="token operator">...</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="获取黑名单" tabindex="-1"><a class="header-anchor" href="#获取黑名单" aria-hidden="true">#</a> 获取黑名单</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">user</span><span class="token operator">-&gt;</span><span class="token function">blacklist</span><span class="token punctuation">(</span><span class="token variable">\$beginOpenid</span> <span class="token operator">=</span> <span class="token constant">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \$beginOpenid 可选</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="账号迁移-openid-转换" tabindex="-1"><a class="header-anchor" href="#账号迁移-openid-转换" aria-hidden="true">#</a> 账号迁移 openid 转换</h2><p>账号迁移请从这里了解：https://kf.qq.com/product/weixinmp.html#hid=2488</p><p>微信用户关注不同的公众号，对应的 OpenID 是不一样的，迁移成功后，粉丝的 OpenID 以目标帐号（即新公众号）对应的 OpenID 为准。但开发者可以通过开发接口转换 OpenID，开发文档可以参考： 提供一个 openid 转换的 API 接口，当帐号迁移后，可以通过该接口：</p><ol><li>将原帐号粉丝的 openid 转换为新帐号的 openid。</li><li>将有授权关系用户的 openid 转换为新帐号的 openid。</li><li>将卡券关联用户的 openid 转换为新帐号的 openid。</li></ol><blockquote><ul><li>◆ 原帐号：准备要迁移的帐号，当审核完成且管理员确认后即被回收。</li><li>◆ 新帐号：用来接纳粉丝的帐号。新帐号在整个流程中均能正常使用。</li></ul></blockquote><p>一定要按照下面的步骤来操作。</p><ol><li>一定要在原帐号被冻结之前，最好是准备提交审核前，获取原帐号的用户列表。如果没有原帐号的用户列表，用不了转换工具。如果原账号被回收，这时候也没办法调用接口获取用户列表。</li></ol><p>{info} 如何获取用户列表见这里：https://mp.weixin.qq.com/wiki?t=resource/res_main&amp;id=mp1421140840</p><ol start="2"><li>转换 openid 的 API 接口如下，可在帐号迁移审核完成后开始调用，并最多保留15天。若帐号迁移没完成，调用时无返回结果或报错。帐号迁移15天后，该转换接口将会失效、无法拉取到数据。</li></ol><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">user</span><span class="token operator">-&gt;</span><span class="token function">changeOpenid</span><span class="token punctuation">(</span><span class="token variable">\$oldAppId</span><span class="token punctuation">,</span> <span class="token variable">\$openidList</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>返回值样例：</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
   <span class="token property">&quot;errcode&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span>
   <span class="token property">&quot;errmsg&quot;</span><span class="token operator">:</span><span class="token string">&quot;ok&quot;</span><span class="token punctuation">,</span>
   <span class="token property">&quot;result_list&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
         <span class="token property">&quot;ori_openid&quot;</span><span class="token operator">:</span><span class="token string">&quot;oEmYbwN-n24jxvk4Sox81qedINkQ&quot;</span><span class="token punctuation">,</span>
         <span class="token property">&quot;new_openid&quot;</span><span class="token operator">:</span><span class="token string">&quot;o2FwqwI9xCsVadFah_HtpPfaR-X4&quot;</span><span class="token punctuation">,</span>
         <span class="token property">&quot;err_msg&quot;</span><span class="token operator">:</span><span class="token string">&quot;ok&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
         <span class="token property">&quot;ori_openid&quot;</span><span class="token operator">:</span><span class="token string">&quot;oEmYbwH9uVd4RKJk7ZZg6SzL6tTo&quot;</span><span class="token punctuation">,</span>
         <span class="token property">&quot;err_msg&quot;</span><span class="token operator">:</span><span class="token string">&quot;ori_openid error&quot;</span>
      <span class="token punctuation">}</span>
   <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><!--]-->`)
}
// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(84103);
;// CONCATENATED MODULE: ./.vuepress/.temp/pages/4.x/official-account/user.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("/home/runner/work/easywechat/easywechat/docs/node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!/home/runner/work/easywechat/easywechat/docs/node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!/home/runner/work/easywechat/easywechat/docs/.vuepress/.temp/pages/4.x/official-account/user.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const user_html = (script);

/***/ })

};
;
//# sourceMappingURL=6657.app.js.map