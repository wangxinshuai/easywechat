"use strict";
exports.id = 7444;
exports.ids = [7444];
exports.modules = {

/***/ 20641:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-57f30734",
  "path": "/4.x/official-account/comment.html",
  "title": "评论数据管理",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "打开已群发文章评论",
      "slug": "打开已群发文章评论",
      "children": []
    },
    {
      "level": 2,
      "title": "关闭已群发文章评论",
      "slug": "关闭已群发文章评论",
      "children": []
    },
    {
      "level": 2,
      "title": "查看指定文章的评论数据",
      "slug": "查看指定文章的评论数据",
      "children": []
    },
    {
      "level": 2,
      "title": "将评论标记精选",
      "slug": "将评论标记精选",
      "children": []
    },
    {
      "level": 2,
      "title": "将评论取消精选",
      "slug": "将评论取消精选",
      "children": []
    },
    {
      "level": 2,
      "title": "删除评论",
      "slug": "删除评论",
      "children": []
    },
    {
      "level": 2,
      "title": "回复评论",
      "slug": "回复评论",
      "children": []
    },
    {
      "level": 2,
      "title": "删除回复",
      "slug": "删除回复",
      "children": []
    }
  ],
  "filePathRelative": "4.x/official-account/comment.md",
  "git": {
    "updatedTime": 1629906046000,
    "contributors": []
  }
}


/***/ }),

/***/ 81339:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ comment_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.vuepress/.temp/pages/4.x/official-account/comment.html.vue?vue&type=template&id=7b144e63

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="评论数据管理" tabindex="-1"><a class="header-anchor" href="#评论数据管理" aria-hidden="true">#</a> 评论数据管理</h1><h2 id="打开已群发文章评论" tabindex="-1"><a class="header-anchor" href="#打开已群发文章评论" aria-hidden="true">#</a> 打开已群发文章评论</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">comment</span><span class="token operator">-&gt;</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token variable">\$msgId</span><span class="token punctuation">,</span> <span class="token variable">\$index</span> <span class="token operator">=</span> <span class="token constant">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="关闭已群发文章评论" tabindex="-1"><a class="header-anchor" href="#关闭已群发文章评论" aria-hidden="true">#</a> 关闭已群发文章评论</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">comment</span><span class="token operator">-&gt;</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token variable">\$msgId</span><span class="token punctuation">,</span> <span class="token variable">\$index</span> <span class="token operator">=</span> <span class="token constant">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="查看指定文章的评论数据" tabindex="-1"><a class="header-anchor" href="#查看指定文章的评论数据" aria-hidden="true">#</a> 查看指定文章的评论数据</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">comment</span><span class="token operator">-&gt;</span><span class="token function">list</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">\$msgId</span><span class="token punctuation">,</span> <span class="token keyword type-hint">int</span> <span class="token variable">\$index</span><span class="token punctuation">,</span> <span class="token keyword type-hint">int</span> <span class="token variable">\$begin</span><span class="token punctuation">,</span> <span class="token keyword type-hint">int</span> <span class="token variable">\$count</span><span class="token punctuation">,</span> <span class="token keyword type-hint">int</span> <span class="token variable">\$type</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="将评论标记精选" tabindex="-1"><a class="header-anchor" href="#将评论标记精选" aria-hidden="true">#</a> 将评论标记精选</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">comment</span><span class="token operator">-&gt;</span><span class="token function">markElect</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">\$msgId</span><span class="token punctuation">,</span> <span class="token keyword type-hint">int</span> <span class="token variable">\$index</span><span class="token punctuation">,</span> <span class="token keyword type-hint">int</span> <span class="token variable">\$commentId</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="将评论取消精选" tabindex="-1"><a class="header-anchor" href="#将评论取消精选" aria-hidden="true">#</a> 将评论取消精选</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">comment</span><span class="token operator">-&gt;</span><span class="token function">unmarkElect</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">\$msgId</span><span class="token punctuation">,</span> <span class="token keyword type-hint">int</span> <span class="token variable">\$index</span><span class="token punctuation">,</span> <span class="token keyword type-hint">int</span> <span class="token variable">\$commentId</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="删除评论" tabindex="-1"><a class="header-anchor" href="#删除评论" aria-hidden="true">#</a> 删除评论</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">comment</span><span class="token operator">-&gt;</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">\$msgId</span><span class="token punctuation">,</span> <span class="token keyword type-hint">int</span> <span class="token variable">\$index</span><span class="token punctuation">,</span> <span class="token keyword type-hint">int</span> <span class="token variable">\$commentId</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="回复评论" tabindex="-1"><a class="header-anchor" href="#回复评论" aria-hidden="true">#</a> 回复评论</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">comment</span><span class="token operator">-&gt;</span><span class="token function">reply</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">\$msgId</span><span class="token punctuation">,</span> <span class="token keyword type-hint">int</span> <span class="token variable">\$index</span><span class="token punctuation">,</span> <span class="token keyword type-hint">int</span> <span class="token variable">\$commentId</span><span class="token punctuation">,</span> <span class="token keyword type-hint">string</span> <span class="token variable">\$content</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="删除回复" tabindex="-1"><a class="header-anchor" href="#删除回复" aria-hidden="true">#</a> 删除回复</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">comment</span><span class="token operator">-&gt;</span><span class="token function">deleteReply</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">\$msgId</span><span class="token punctuation">,</span> <span class="token keyword type-hint">int</span> <span class="token variable">\$index</span><span class="token punctuation">,</span> <span class="token keyword type-hint">int</span> <span class="token variable">\$commentId</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><!--]-->`)
}
// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(84103);
;// CONCATENATED MODULE: ./.vuepress/.temp/pages/4.x/official-account/comment.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("/home/runner/work/easywechat/easywechat/docs/node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!/home/runner/work/easywechat/easywechat/docs/node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!/home/runner/work/easywechat/easywechat/docs/.vuepress/.temp/pages/4.x/official-account/comment.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const comment_html = (script);

/***/ })

};
;
//# sourceMappingURL=7444.app.js.map