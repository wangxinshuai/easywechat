"use strict";
exports.id = 6211;
exports.ids = [6211];
exports.modules = {

/***/ 76844:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-571a3b46",
  "path": "/5.x/official-account/user-tag.html",
  "title": "用户标签",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "获取所有标签",
      "slug": "获取所有标签",
      "children": []
    },
    {
      "level": 2,
      "title": "创建标签",
      "slug": "创建标签",
      "children": []
    },
    {
      "level": 2,
      "title": "修改标签信息",
      "slug": "修改标签信息",
      "children": []
    },
    {
      "level": 2,
      "title": "删除标签",
      "slug": "删除标签",
      "children": []
    },
    {
      "level": 2,
      "title": "获取指定 openid 用户所属的标签",
      "slug": "获取指定-openid-用户所属的标签",
      "children": []
    },
    {
      "level": 2,
      "title": "获取标签下用户列表",
      "slug": "获取标签下用户列表",
      "children": []
    },
    {
      "level": 2,
      "title": "批量为用户添加标签",
      "slug": "批量为用户添加标签",
      "children": []
    },
    {
      "level": 2,
      "title": "批量为用户移除标签",
      "slug": "批量为用户移除标签",
      "children": []
    }
  ],
  "filePathRelative": "5.x/official-account/user-tag.md",
  "git": {
    "updatedTime": 1629906046000,
    "contributors": []
  }
}


/***/ }),

/***/ 10294:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ user_tag_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.vuepress/.temp/pages/5.x/official-account/user-tag.html.vue?vue&type=template&id=6f3b9a26

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="用户标签" tabindex="-1"><a class="header-anchor" href="#用户标签" aria-hidden="true">#</a> 用户标签</h1><h2 id="获取所有标签" tabindex="-1"><a class="header-anchor" href="#获取所有标签" aria-hidden="true">#</a> 获取所有标签</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">user_tag</span><span class="token operator">-&gt;</span><span class="token function">list</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>示例：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$tags</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">user_tag</span><span class="token operator">-&gt;</span><span class="token function">list</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// {</span>
<span class="token comment">//     &quot;tags&quot;: [</span>
<span class="token comment">//         {</span>
<span class="token comment">//             &quot;id&quot;: 0,</span>
<span class="token comment">//             &quot;name&quot;: &quot;标签1&quot;,</span>
<span class="token comment">//             &quot;count&quot;: 72596</span>
<span class="token comment">//         },</span>
<span class="token comment">//         {</span>
<span class="token comment">//             &quot;id&quot;: 1,</span>
<span class="token comment">//             &quot;name&quot;: &quot;标签2&quot;,</span>
<span class="token comment">//             &quot;count&quot;: 36</span>
<span class="token comment">//         },</span>
<span class="token comment">//         ...</span>
<span class="token comment">//     ]</span>
<span class="token comment">// }</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h2 id="创建标签" tabindex="-1"><a class="header-anchor" href="#创建标签" aria-hidden="true">#</a> 创建标签</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">user_tag</span><span class="token operator">-&gt;</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token variable">\$name</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>示例：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">user_tag</span><span class="token operator">-&gt;</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;测试标签&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="修改标签信息" tabindex="-1"><a class="header-anchor" href="#修改标签信息" aria-hidden="true">#</a> 修改标签信息</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">user_tag</span><span class="token operator">-&gt;</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token variable">\$tagId</span><span class="token punctuation">,</span> <span class="token variable">\$name</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>示例：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">user_tag</span><span class="token operator">-&gt;</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token number">12</span><span class="token punctuation">,</span> <span class="token string double-quoted-string">&quot;新的名称&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="删除标签" tabindex="-1"><a class="header-anchor" href="#删除标签" aria-hidden="true">#</a> 删除标签</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">user_tag</span><span class="token operator">-&gt;</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token variable">\$tagId</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="获取指定-openid-用户所属的标签" tabindex="-1"><a class="header-anchor" href="#获取指定-openid-用户所属的标签" aria-hidden="true">#</a> 获取指定 openid 用户所属的标签</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$userTags</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">user_tag</span><span class="token operator">-&gt;</span><span class="token function">userTags</span><span class="token punctuation">(</span><span class="token variable">\$openId</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//</span>
<span class="token comment">// {</span>
<span class="token comment">//     &quot;tagid_list&quot;:[&quot;标签1&quot;,&quot;标签2&quot;]</span>
<span class="token comment">// }</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="获取标签下用户列表" tabindex="-1"><a class="header-anchor" href="#获取标签下用户列表" aria-hidden="true">#</a> 获取标签下用户列表</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">user_tag</span><span class="token operator">-&gt;</span><span class="token function">usersOfTag</span><span class="token punctuation">(</span><span class="token variable">\$tagId</span><span class="token punctuation">,</span> <span class="token variable">\$nextOpenId</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \$nextOpenId：第一个拉取的OPENID，不填默认从头开始拉取</span>

<span class="token comment">// {</span>
<span class="token comment">//   &quot;count&quot;:2, // 这次获取的粉丝数量</span>
<span class="token comment">//   &quot;data&quot;:{ // 粉丝列表</span>
<span class="token comment">//      &quot;openid&quot;:[</span>
<span class="token comment">//          &quot;ocYxcuAEy30bX0NXmGn4ypqx3tI0&quot;,</span>
<span class="token comment">//          &quot;ocYxcuBt0mRugKZ7tGAHPnUaOW7Y&quot;</span>
<span class="token comment">//      ]</span>
<span class="token comment">//   },</span>
<span class="token comment">//   &quot;next_openid&quot;:&quot;ocYxcuBt0mRugKZ7tGAHPnUaOW7Y&quot;//拉取列表最后一个用户的openid</span>
<span class="token comment">// }</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="批量为用户添加标签" tabindex="-1"><a class="header-anchor" href="#批量为用户添加标签" aria-hidden="true">#</a> 批量为用户添加标签</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$openIds</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token variable">\$openId1</span><span class="token punctuation">,</span> <span class="token variable">\$openId2</span><span class="token punctuation">,</span> <span class="token operator">...</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">user_tag</span><span class="token operator">-&gt;</span><span class="token function">tagUsers</span><span class="token punctuation">(</span><span class="token variable">\$openIds</span><span class="token punctuation">,</span> <span class="token variable">\$tagId</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="批量为用户移除标签" tabindex="-1"><a class="header-anchor" href="#批量为用户移除标签" aria-hidden="true">#</a> 批量为用户移除标签</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$openIds</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token variable">\$openId1</span><span class="token punctuation">,</span> <span class="token variable">\$openId2</span><span class="token punctuation">,</span> <span class="token operator">...</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">user_tag</span><span class="token operator">-&gt;</span><span class="token function">untagUsers</span><span class="token punctuation">(</span><span class="token variable">\$openIds</span><span class="token punctuation">,</span> <span class="token variable">\$tagId</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><!--]-->`)
}
// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(84103);
;// CONCATENATED MODULE: ./.vuepress/.temp/pages/5.x/official-account/user-tag.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("/home/runner/work/easywechat/easywechat/docs/node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!/home/runner/work/easywechat/easywechat/docs/node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!/home/runner/work/easywechat/easywechat/docs/.vuepress/.temp/pages/5.x/official-account/user-tag.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const user_tag_html = (script);

/***/ })

};
;
//# sourceMappingURL=6211.app.js.map