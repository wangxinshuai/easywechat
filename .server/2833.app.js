"use strict";
exports.id = 2833;
exports.ids = [2833];
exports.modules = {

/***/ 72604:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-44c6afef",
  "path": "/5.x/wework/jssdk.html",
  "title": "JSSDK",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "API",
      "slug": "api",
      "children": [
        {
          "level": 3,
          "title": "获取config接口配置",
          "slug": "获取config接口配置",
          "children": []
        },
        {
          "level": 3,
          "title": "获取agentConfig接口配置",
          "slug": "获取agentconfig接口配置",
          "children": []
        }
      ]
    }
  ],
  "filePathRelative": "5.x/wework/jssdk.md",
  "git": {
    "updatedTime": 1629906046000,
    "contributors": []
  }
}


/***/ }),

/***/ 60195:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ jssdk_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.vuepress/.temp/pages/5.x/wework/jssdk.html.vue?vue&type=template&id=41d688cc

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="jssdk" tabindex="-1"><a class="header-anchor" href="#jssdk" aria-hidden="true">#</a> JSSDK</h1><p>企业微信 JSSDK 官方文档：https://open.work.weixin.qq.com/api/doc/90000/90136/90514</p><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2><h3 id="获取config接口配置" tabindex="-1"><a class="header-anchor" href="#获取config接口配置" aria-hidden="true">#</a> 获取config接口配置</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">jssdk</span><span class="token operator">-&gt;</span><span class="token function">buildConfig</span><span class="token punctuation">(</span><span class="token keyword type-hint">array</span> <span class="token variable">\$APIs</span><span class="token punctuation">,</span> <span class="token variable">\$debug</span> <span class="token operator">=</span> <span class="token constant boolean">false</span><span class="token punctuation">,</span> <span class="token variable">\$beta</span> <span class="token operator">=</span> <span class="token constant boolean">false</span><span class="token punctuation">,</span> <span class="token variable">\$json</span> <span class="token operator">=</span> <span class="token constant boolean">true</span><span class="token punctuation">,</span> <span class="token keyword type-hint">array</span> <span class="token variable">\$openTagList</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>默认返回 JSON 字符串，当 <code>\$json</code> 为 <code>false</code> 时返回数组，你可以直接使用到网页中。</p><ul><li>设置当前URL</li></ul><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">jssdk</span><span class="token operator">-&gt;</span><span class="token function">setUrl</span><span class="token punctuation">(</span><span class="token variable">\$url</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">jssdk</span><span class="token operator">-&gt;</span><span class="token function">buildConfig</span><span class="token punctuation">(</span><span class="token keyword type-hint">array</span> <span class="token variable">\$APIs</span><span class="token punctuation">,</span> <span class="token variable">\$debug</span> <span class="token operator">=</span> <span class="token constant boolean">false</span><span class="token punctuation">,</span> <span class="token variable">\$beta</span> <span class="token operator">=</span> <span class="token constant boolean">false</span><span class="token punctuation">,</span> <span class="token variable">\$json</span> <span class="token operator">=</span> <span class="token constant boolean">true</span><span class="token punctuation">,</span> <span class="token keyword type-hint">array</span> <span class="token variable">\$openTagList</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>如果不想用默认读取的URL，可以使用此方法手动设置，通常不需要。</p><ul><li>示例</li></ul><p>我们可以生成js配置文件：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">&quot;https://res.wx.qq.com/open/js/jweixin-1.4.0.js&quot;</span> type<span class="token operator">=</span><span class="token string">&quot;text/javascript&quot;</span> charset<span class="token operator">=</span><span class="token string">&quot;utf-8&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>script type<span class="token operator">=</span><span class="token string">&quot;text/javascript&quot;</span> charset<span class="token operator">=</span><span class="token string">&quot;utf-8&quot;</span><span class="token operator">&gt;</span>
    wx<span class="token punctuation">.</span><span class="token function">config</span><span class="token punctuation">(</span><span class="token operator">&lt;</span><span class="token operator">?</span>php echo \$app<span class="token operator">-</span><span class="token operator">&gt;</span>jssdk<span class="token operator">-</span><span class="token operator">&gt;</span><span class="token function">buildConfig</span><span class="token punctuation">(</span><span class="token function">array</span><span class="token punctuation">(</span><span class="token string">&#39;updateAppMessageShareData&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;updateTimelineShareData&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token operator">?</span><span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>结果如下：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">&quot;https://res.wx.qq.com/open/js/jweixin-1.4.0.js&quot;</span> type<span class="token operator">=</span><span class="token string">&quot;text/javascript&quot;</span> charset<span class="token operator">=</span><span class="token string">&quot;utf-8&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>script type<span class="token operator">=</span><span class="token string">&quot;text/javascript&quot;</span> charset<span class="token operator">=</span><span class="token string">&quot;utf-8&quot;</span><span class="token operator">&gt;</span>
wx<span class="token punctuation">.</span><span class="token function">config</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    debug<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 请在上线前删除它</span>
    appId<span class="token operator">:</span> <span class="token string">&#39;wx3cf0f39249eb0e60&#39;</span><span class="token punctuation">,</span>
    timestamp<span class="token operator">:</span> <span class="token number">1430009304</span><span class="token punctuation">,</span>
    nonceStr<span class="token operator">:</span> <span class="token string">&#39;qey94m021ik&#39;</span><span class="token punctuation">,</span>
    signature<span class="token operator">:</span> <span class="token string">&#39;4F76593A4245644FAE4E1BC940F6422A0C3EC03E&#39;</span><span class="token punctuation">,</span>
    jsApiList<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;updateAppMessageShareData&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;updateTimelineShareData&#39;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="获取agentconfig接口配置" tabindex="-1"><a class="header-anchor" href="#获取agentconfig接口配置" aria-hidden="true">#</a> 获取agentConfig接口配置</h3><p>调用wx.agentConfig之前，必须确保先成功调用wx.config. 注意：从企业微信3.0.24及以后版本（可通过企业微信UA判断版本号），无须先调用wx.config，可直接wx.agentConfig.</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">jssdk</span><span class="token operator">-&gt;</span><span class="token function">buildAgentConfig</span><span class="token punctuation">(</span>
        <span class="token keyword type-hint">array</span> <span class="token variable">\$jsApiList</span><span class="token punctuation">,</span> <span class="token comment">// 需要检测的JS接口列表</span>
        <span class="token variable">\$agentId</span><span class="token punctuation">,</span> <span class="token comment">//应用id</span>
        <span class="token keyword type-declaration">bool</span> <span class="token variable">\$debug</span> <span class="token operator">=</span> <span class="token constant boolean">false</span><span class="token punctuation">,</span>
        <span class="token keyword type-hint">bool</span> <span class="token variable">\$beta</span> <span class="token operator">=</span> <span class="token constant boolean">false</span><span class="token punctuation">,</span>
        <span class="token keyword type-hint">bool</span> <span class="token variable">\$json</span> <span class="token operator">=</span> <span class="token constant boolean">true</span><span class="token punctuation">,</span>
        <span class="token keyword type-hint">array</span> <span class="token variable">\$openTagList</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token keyword type-hint">string</span> <span class="token variable">\$url</span> <span class="token operator">=</span> <span class="token constant">null</span> <span class="token comment">//设置当前URL</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><ul><li>前端示例</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">&quot;https://res.wx.qq.com/open/js/jweixin-1.4.0.js&quot;</span> type<span class="token operator">=</span><span class="token string">&quot;text/javascript&quot;</span> charset<span class="token operator">=</span><span class="token string">&quot;utf-8&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">&quot;https://open.work.weixin.qq.com/wwopen/js/jwxwork-1.0.0.js&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>script type<span class="token operator">=</span><span class="token string">&quot;text/javascript&quot;</span> charset<span class="token operator">=</span><span class="token string">&quot;utf-8&quot;</span><span class="token operator">&gt;</span>
wx<span class="token punctuation">.</span><span class="token function">config</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    debug<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 请在上线前删除它</span>
    appId<span class="token operator">:</span> <span class="token string">&#39;wx3cf0f39249eb0e60&#39;</span><span class="token punctuation">,</span>
    timestamp<span class="token operator">:</span> <span class="token number">1430009304</span><span class="token punctuation">,</span>
    nonceStr<span class="token operator">:</span> <span class="token string">&#39;qey94m021ik&#39;</span><span class="token punctuation">,</span>
    signature<span class="token operator">:</span> <span class="token string">&#39;4F76593A4245644FAE4E1BC940F6422A0C3EC03E&#39;</span><span class="token punctuation">,</span>
    jsApiList<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;updateAppMessageShareData&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;updateTimelineShareData&#39;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
wx<span class="token punctuation">.</span><span class="token function">ready</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    wx<span class="token punctuation">.</span><span class="token function">agentConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token comment">//调用agentConfig</span>
        corpid<span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> 
        agentid<span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> 
        timestamp<span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> 
        nonceStr<span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> 
        signature<span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
        jsApiList<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;selectExternalContact&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 回调</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function-variable function">fail</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>errMsg<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">&#39;function not exist&#39;</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;版本过低请升级&#39;</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
wx<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;失败&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><!--]-->`)
}
// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(84103);
;// CONCATENATED MODULE: ./.vuepress/.temp/pages/5.x/wework/jssdk.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("/home/runner/work/easywechat/easywechat/docs/node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!/home/runner/work/easywechat/easywechat/docs/node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!/home/runner/work/easywechat/easywechat/docs/.vuepress/.temp/pages/5.x/wework/jssdk.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const jssdk_html = (script);

/***/ })

};
;
//# sourceMappingURL=2833.app.js.map