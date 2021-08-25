"use strict";
exports.id = 2423;
exports.ids = [2423];
exports.modules = {

/***/ 89367:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-6d7e7b60",
  "path": "/6.x/work/server.html",
  "title": "服务端",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "第三方平台推送事件",
      "slug": "第三方平台推送事件",
      "children": []
    },
    {
      "level": 2,
      "title": "自定义消息处理器",
      "slug": "自定义消息处理器",
      "children": []
    }
  ],
  "filePathRelative": "6.x/work/server.md",
  "git": {
    "updatedTime": 1629906046000,
    "contributors": []
  }
}


/***/ }),

/***/ 12612:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ server_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(84103);
// EXTERNAL MODULE: external "@vue/server-renderer"
var server_renderer_ = __webpack_require__(32745);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.vuepress/.temp/pages/6.x/work/server.html.vue?vue&type=template&id=22f92df2



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_RouterLink = (0,external_vue_.resolveComponent)("RouterLink")

  _push(`<!--[--><h1 id="服务端" tabindex="-1"><a class="header-anchor" href="#服务端" aria-hidden="true">#</a> 服务端</h1><p>企业微信服务端推送和公众号一样，请参考：`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_RouterLink, { to: "/docs/%7B%7Bversion%7D%7D/official-account/server.html" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`公众号：服务端`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("公众号：服务端")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</p><h2 id="第三方平台推送事件" tabindex="-1"><a class="header-anchor" href="#第三方平台推送事件" aria-hidden="true">#</a> 第三方平台推送事件</h2><p>企业微信数据推送的有以下事件：</p><ul><li>通讯录变更（Event） <code>change_contact</code><ul><li>ChangeType <ul><li>成员变更 <ul><li>新增成员 <code>create_user</code></li><li>更新成员 <code>update_user</code></li><li>删除成员 <code>delete_user</code></li></ul></li><li>部门变更 <ul><li>新增部门 <code>create_party</code></li><li>更新部门 <code>update_party</code></li><li>删除部门 <code>delete_party</code></li></ul></li><li>标签变更 <ul><li>成员标签变更 <code>update_tag</code></li></ul></li></ul></li></ul></li><li>批量任务执行完成 <code>batch_job_result</code></li></ul><h2 id="自定义消息处理器" tabindex="-1"><a class="header-anchor" href="#自定义消息处理器" aria-hidden="true">#</a> 自定义消息处理器</h2><blockquote><p><em>消息处理器详细说明见：公众号开发 - 服务端一节</em></p></blockquote><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token comment">// 处理通讯录变更事件（包括成员变更、部门变更、成员标签变更）</span>
<span class="token variable">\$server</span><span class="token operator">-&gt;</span><span class="token function">handleContactChanged</span><span class="token punctuation">(</span><span class="token keyword">callable</span> <span class="token operator">|</span> <span class="token keyword type-declaration">string</span> <span class="token variable">\$handler</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 处理任务执行完成事件</span>
<span class="token variable">\$server</span><span class="token operator">-&gt;</span><span class="token function">handleBatchJobsFinished</span><span class="token punctuation">(</span><span class="token keyword">callable</span> <span class="token operator">|</span> <span class="token keyword type-declaration">string</span> <span class="token variable">\$handler</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 成员变更事件</span>
<span class="token variable">\$server</span><span class="token operator">-&gt;</span><span class="token function">handleUserCreated</span><span class="token punctuation">(</span><span class="token keyword">callable</span> <span class="token operator">|</span> <span class="token keyword type-declaration">string</span> <span class="token variable">\$handler</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">\$server</span><span class="token operator">-&gt;</span><span class="token function">handleUserUpdated</span><span class="token punctuation">(</span><span class="token keyword">callable</span> <span class="token operator">|</span> <span class="token keyword type-declaration">string</span> <span class="token variable">\$handler</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">\$server</span><span class="token operator">-&gt;</span><span class="token function">handleUserDeleted</span><span class="token punctuation">(</span><span class="token keyword">callable</span> <span class="token operator">|</span> <span class="token keyword type-declaration">string</span> <span class="token variable">\$handler</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 部门变更事件</span>
<span class="token variable">\$server</span><span class="token operator">-&gt;</span><span class="token function">handlePartyCreated</span><span class="token punctuation">(</span><span class="token keyword">callable</span> <span class="token operator">|</span> <span class="token keyword type-declaration">string</span> <span class="token variable">\$handler</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">\$server</span><span class="token operator">-&gt;</span><span class="token function">handlePartyUpdated</span><span class="token punctuation">(</span><span class="token keyword">callable</span> <span class="token operator">|</span> <span class="token keyword type-declaration">string</span> <span class="token variable">\$handler</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">\$server</span><span class="token operator">-&gt;</span><span class="token function">handlePartyDeleted</span><span class="token punctuation">(</span><span class="token keyword">callable</span> <span class="token operator">|</span> <span class="token keyword type-declaration">string</span> <span class="token variable">\$handler</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 成员标签变更事件</span>
<span class="token variable">\$server</span><span class="token operator">-&gt;</span><span class="token function">handleUserTagUpdated</span><span class="token punctuation">(</span><span class="token keyword">callable</span> <span class="token operator">|</span> <span class="token keyword type-declaration">string</span> <span class="token variable">\$handler</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><!--]-->`)
}
;// CONCATENATED MODULE: ./.vuepress/.temp/pages/6.x/work/server.html.vue?vue&type=template&id=22f92df2

;// CONCATENATED MODULE: ./.vuepress/.temp/pages/6.x/work/server.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("/home/runner/work/easywechat/easywechat/docs/node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!/home/runner/work/easywechat/easywechat/docs/node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!/home/runner/work/easywechat/easywechat/docs/.vuepress/.temp/pages/6.x/work/server.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const server_html = (script);

/***/ })

};
;
//# sourceMappingURL=2423.app.js.map