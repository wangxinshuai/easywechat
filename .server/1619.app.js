"use strict";
exports.id = 1619;
exports.ids = [1619];
exports.modules = {

/***/ 12705:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-d0cfd478",
  "path": "/3.x/contributing.html",
  "title": "贡献代码",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "开发",
      "slug": "开发",
      "children": [
        {
          "level": 3,
          "title": "开始之前",
          "slug": "开始之前",
          "children": []
        },
        {
          "level": 3,
          "title": "流程",
          "slug": "流程",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "更新文档",
      "slug": "更新文档",
      "children": [
        {
          "level": 3,
          "title": "流程",
          "slug": "流程-1",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "报告 Bug",
      "slug": "报告-bug",
      "children": []
    }
  ],
  "filePathRelative": "3.x/contributing.md",
  "git": {
    "updatedTime": 1629906046000,
    "contributors": []
  }
}


/***/ }),

/***/ 30841:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ contributing_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(84103);
// EXTERNAL MODULE: external "@vue/server-renderer"
var server_renderer_ = __webpack_require__(32745);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.vuepress/.temp/pages/3.x/contributing.html.vue?vue&type=template&id=844fc774



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_OutboundLink = (0,external_vue_.resolveComponent)("OutboundLink")
  const _component_RouterLink = (0,external_vue_.resolveComponent)("RouterLink")

  _push(`<!--[--><h1 id="贡献代码" tabindex="-1"><a class="header-anchor" href="#贡献代码" aria-hidden="true">#</a> 贡献代码</h1><h2 id="开发" tabindex="-1"><a class="header-anchor" href="#开发" aria-hidden="true">#</a> 开发</h2><p>我们欢迎广大开发者贡献大家的智慧，让我们共同让它变得更完美.</p><h3 id="开始之前" tabindex="-1"><a class="header-anchor" href="#开始之前" aria-hidden="true">#</a> 开始之前</h3><p>请严格遵循以下代码标准:</p><ul><li><a href="https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-2-coding-style-guide.md" target="_blank" rel="noopener noreferrer">PSR-2`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>.</li><li>使用 4 个空格作为缩进。</li></ul><h3 id="流程" tabindex="-1"><a class="header-anchor" href="#流程" aria-hidden="true">#</a> 流程</h3><ol><li><p>Fork <a href="https://github.com/overtrue/wechat" target="_blank" rel="noopener noreferrer">overtrue/wechat`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> 到本地.</p></li><li><p>创建新的分支：</p><p>{% code %} \$ git checkout -b new_feature {% endcode %}</p></li><li><p>编写代码。</p></li><li><p>Push 到你的分支:</p><p>{% code %} \$ git push origin new_feature {% endcode %}</p></li><li><p>创建 Pull Request 并描述你完成的功能或者做出的修改。</p></li></ol><blockquote><p>注意：注释请使用英文</p></blockquote><h2 id="更新文档" tabindex="-1"><a class="header-anchor" href="#更新文档" aria-hidden="true">#</a> 更新文档</h2><p>我们的文档也是开源的，源代码在 <a href="https://github.com/EasyWeChat/docs" target="_blank" rel="noopener noreferrer">EasyWeChat/docs`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>。</p><h3 id="流程-1" tabindex="-1"><a class="header-anchor" href="#流程-1" aria-hidden="true">#</a> 流程</h3><ol><li><p>Fork <a href="https://github.com/w7corp/EasyWeChat" target="_blank" rel="noopener noreferrer">EasyWeChat/docs`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></p></li><li><p>Clone 到你的电脑：</p><p>{% code %} \$ git clone https://github.com/[你的账号]/EasyWeChat \$ cd docs {% endcode %}</p></li><li><p>创建新的分支，编辑文档</p></li><li><p>Push 到你的分支。</p></li><li><p>创建 Pull Request 并描述你完成的功能或者做出的修改。</p></li></ol><h2 id="报告-bug" tabindex="-1"><a class="header-anchor" href="#报告-bug" aria-hidden="true">#</a> 报告 Bug</h2><p>当你在使用过程中遇到问题，请查阅 `)
  _push((0,server_renderer_.ssrRenderComponent)(_component_RouterLink, { to: "/3.x/troubleshooting.html" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`疑难解答`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("疑难解答")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(` 或者在这里提问 <a href="https://github.com/overtrue/wechat/issues" target="_blank" rel="noopener noreferrer">GitHub`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>. 如果还是不能解决你的问题，请到 GitHub 联系我们。</p><!--]-->`)
}
;// CONCATENATED MODULE: ./.vuepress/.temp/pages/3.x/contributing.html.vue?vue&type=template&id=844fc774

;// CONCATENATED MODULE: ./.vuepress/.temp/pages/3.x/contributing.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("/home/runner/work/easywechat/easywechat/docs/node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!/home/runner/work/easywechat/easywechat/docs/node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!/home/runner/work/easywechat/easywechat/docs/.vuepress/.temp/pages/3.x/contributing.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const contributing_html = (script);

/***/ })

};
;
//# sourceMappingURL=1619.app.js.map