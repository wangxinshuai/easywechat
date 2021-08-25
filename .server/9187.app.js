"use strict";
exports.id = 9187;
exports.ids = [9187];
exports.modules = {

/***/ 50734:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-2c178796",
  "path": "/6.x/common/logging.html",
  "title": "日志",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "日志配置",
      "slug": "日志配置",
      "children": [
        {
          "level": 3,
          "title": "自定义日志驱动",
          "slug": "自定义日志驱动",
          "children": []
        }
      ]
    }
  ],
  "filePathRelative": "6.x/common/logging.md",
  "git": {
    "updatedTime": 1629906046000,
    "contributors": []
  }
}


/***/ }),

/***/ 19719:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ logging_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(84103);
// EXTERNAL MODULE: external "@vue/server-renderer"
var server_renderer_ = __webpack_require__(32745);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.vuepress/.temp/pages/6.x/common/logging.html.vue?vue&type=template&id=57dc3982



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_RouterLink = (0,external_vue_.resolveComponent)("RouterLink")
  const _component_OutboundLink = (0,external_vue_.resolveComponent)("OutboundLink")

  _push(`<!--[--><h1 id="日志" tabindex="-1"><a class="header-anchor" href="#日志" aria-hidden="true">#</a> 日志</h1><p>如果没有在配置中指定日志选项，将不会记录任何日志。仅在配置了相关日志策略时启用，配置详细请参考：`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_RouterLink, { to: "/6.x/common/config.html" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`配置`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("配置")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</p><h2 id="日志配置" tabindex="-1"><a class="header-anchor" href="#日志配置" aria-hidden="true">#</a> 日志配置</h2><p>你可以配置多个日志的 <code>channel</code>，每个 <code>channel</code> 里的 <code>driver</code> 对应不同的日志驱动，内置可用的 <code>driver</code> 如下表：</p><table><thead><tr><th>名称</th><th>描述</th></tr></thead><tbody><tr><td><code>stack</code></td><td>复合型，可以包含下面多种驱动的混合模式</td></tr><tr><td><code>single</code></td><td>基于 <code>StreamHandler</code> 的单一文件日志，参数有 <code>path</code>，<code>level</code></td></tr><tr><td><code>daily</code></td><td>基于 <code>RotatingFileHandler</code> 按日期生成日志文件，参数有 <code>path</code>，<code>level</code>，<code>days</code>(默认 7 天)</td></tr><tr><td><code>slack</code></td><td>基于 <code>SlackWebhookHandler</code> 的 Slack 组件，参数请参考源码：<a href="https://github.com/w7corp/wechat/blob/master/src/Kernel/Log/LogManager.php#L247" target="_blank" rel="noopener noreferrer">LogManager.php`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></td></tr><tr><td><code>syslog</code></td><td>基于 <code>SyslogHandler</code> Monolog 驱动，参数有 <code>facility</code> 默认为 <code>LOG_USER</code>，<code>level</code></td></tr><tr><td><code>errorlog</code></td><td>记录日志到系统错误日志，基于 <code>ErrorLogHandler</code>，参数有 <code>type</code>，默认为 <code>ErrorLogHandler::OPERATING_SYSTEM</code></td></tr></tbody></table><h3 id="自定义日志驱动" tabindex="-1"><a class="header-anchor" href="#自定义日志驱动" aria-hidden="true">#</a> 自定义日志驱动</h3><p>由于日志使用的是 <a href="https://github.com/Seldaek/monolog" target="_blank" rel="noopener noreferrer">Monolog`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>，所以，除了默认的文件式日志外，你可以自定义日志处理器：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">Monolog<span class="token punctuation">\\</span>Logger</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Monolog<span class="token punctuation">\\</span>Handler<span class="token punctuation">\\</span>RotatingFileHandler</span><span class="token punctuation">;</span>


<span class="token comment">// 注册自定义日志</span>
<span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token function">getLogger</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">extend</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;mylog&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token variable">\$app</span><span class="token punctuation">,</span> <span class="token variable">\$config</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Logger</span><span class="token punctuation">(</span><span class="token variable">\$this</span><span class="token operator">-&gt;</span><span class="token function">parseChannel</span><span class="token punctuation">(</span><span class="token variable">\$config</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>
        <span class="token variable">\$this</span><span class="token operator">-&gt;</span><span class="token function">prepareHandler</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">RotatingFileHandler</span><span class="token punctuation">(</span>
            <span class="token variable">\$config</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;path&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token variable">\$config</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;days&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token variable">\$this</span><span class="token operator">-&gt;</span><span class="token function">level</span><span class="token punctuation">(</span><span class="token variable">\$config</span><span class="token punctuation">)</span>
        <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><blockquote><p>{info} 在你自定义的闭包函数中，可以使用 <code>EasyWeChat\\Kernel\\Log\\LogManager</code> 中的方法，具体请查看 SDK 源代码。</p></blockquote><p>配置文件中在 <code>driver</code> 部分即可使用你自定义的驱动了：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token string single-quoted-string">&#39;logging&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
    <span class="token string single-quoted-string">&#39;default&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;dev&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 默认使用的 channel，生产环境可以改为下面的 prod</span>
    <span class="token string single-quoted-string">&#39;channels&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
        <span class="token comment">// 测试环境</span>
        <span class="token string single-quoted-string">&#39;dev&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
            <span class="token string single-quoted-string">&#39;driver&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;mylog&#39;</span><span class="token punctuation">,</span>
            <span class="token string single-quoted-string">&#39;path&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;/tmp/easywechat.log&#39;</span><span class="token punctuation">,</span>
            <span class="token string single-quoted-string">&#39;level&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;debug&#39;</span><span class="token punctuation">,</span>
            <span class="token string single-quoted-string">&#39;days&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">5</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>

        <span class="token comment">//...</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><!--]-->`)
}
;// CONCATENATED MODULE: ./.vuepress/.temp/pages/6.x/common/logging.html.vue?vue&type=template&id=57dc3982

;// CONCATENATED MODULE: ./.vuepress/.temp/pages/6.x/common/logging.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("/home/runner/work/easywechat/easywechat/docs/node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!/home/runner/work/easywechat/easywechat/docs/node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!/home/runner/work/easywechat/easywechat/docs/.vuepress/.temp/pages/6.x/common/logging.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const logging_html = (script);

/***/ })

};
;
//# sourceMappingURL=9187.app.js.map