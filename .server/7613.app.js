"use strict";
exports.id = 7613;
exports.ids = [7613];
exports.modules = {

/***/ 32572:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-038669a2",
  "path": "/3.x/cache.html",
  "title": "缓存",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 3,
      "title": "Laravel 中使用",
      "slug": "laravel-中使用",
      "children": []
    },
    {
      "level": 2,
      "title": "使用自定义的缓存方式",
      "slug": "使用自定义的缓存方式",
      "children": []
    }
  ],
  "filePathRelative": "3.x/cache.md",
  "git": {
    "updatedTime": 1629906046000,
    "contributors": []
  }
}


/***/ }),

/***/ 40967:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ cache_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(84103);
// EXTERNAL MODULE: external "@vue/server-renderer"
var server_renderer_ = __webpack_require__(32745);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.vuepress/.temp/pages/3.x/cache.html.vue?vue&type=template&id=50f122a0



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_OutboundLink = (0,external_vue_.resolveComponent)("OutboundLink")

  _push(`<!--[--><h1 id="缓存" tabindex="-1"><a class="header-anchor" href="#缓存" aria-hidden="true">#</a> 缓存</h1><p>本项目使用 <a href="https://github.com/doctrine/cache" target="_blank" rel="noopener noreferrer">doctrine/cache`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> 来完成缓存工作，它支持基本目前所有的缓存引擎。</p><p>在我们的 SDK 中的所有缓存默认使用文件缓存，缓存路径取决于 PHP 的临时目录，如果你需要自定义缓存，那么你需要做如下的事情：</p><p>你可以参考<a href="http://doctrine-orm.readthedocs.org/projects/doctrine-orm/en/latest/reference/caching.html" target="_blank" rel="noopener noreferrer">doctrine/cache官方文档`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>来替换掉应用中默认的缓存配置：</p><blockquote><p>以 redis 为例 请先安装 redis 拓展：https://github.com/phpredis/phpredis</p></blockquote><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code>
<span class="token keyword">use</span> <span class="token package">Doctrine<span class="token punctuation">\\</span>Common<span class="token punctuation">\\</span>Cache<span class="token punctuation">\\</span>RedisCache</span><span class="token punctuation">;</span>

<span class="token variable">\$cacheDriver</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RedisCache</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 创建 redis 实例</span>
<span class="token variable">\$redis</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Redis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">\$redis</span><span class="token operator">-&gt;</span><span class="token function">connect</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;redis_host&#39;</span><span class="token punctuation">,</span> <span class="token number">6379</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">\$cacheDriver</span><span class="token operator">-&gt;</span><span class="token function">setRedis</span><span class="token punctuation">(</span><span class="token variable">\$redis</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">\$options</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token string single-quoted-string">&#39;debug&#39;</span>  <span class="token operator">=&gt;</span> <span class="token constant boolean">false</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;app_id&#39;</span> <span class="token operator">=&gt;</span> <span class="token variable">\$wechatInfo</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;app_id&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;secret&#39;</span> <span class="token operator">=&gt;</span> <span class="token variable">\$wechatInfo</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;app_secret&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;token&#39;</span>  <span class="token operator">=&gt;</span> <span class="token variable">\$wechatInfo</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;token&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;aes_key&#39;</span> <span class="token operator">=&gt;</span> <span class="token variable">\$wechatInfo</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;aes_key&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 可选</span>
    <span class="token string single-quoted-string">&#39;cache&#39;</span>   <span class="token operator">=&gt;</span> <span class="token variable">\$cacheDriver</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token variable">\$wechatApp</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Application</span><span class="token punctuation">(</span><span class="token variable">\$options</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h3 id="laravel-中使用" tabindex="-1"><a class="header-anchor" href="#laravel-中使用" aria-hidden="true">#</a> Laravel 中使用</h3><p>在 Laravel 中框架使用 <a href="https://github.com/nrk/predis" target="_blank" rel="noopener noreferrer">predis/predis`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>，那么我们就得使用 <code>Doctrine\\Common\\Cache\\PredisCache</code>：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code>
<span class="token keyword">use</span> <span class="token package">Doctrine<span class="token punctuation">\\</span>Common<span class="token punctuation">\\</span>Cache<span class="token punctuation">\\</span>PredisCache</span><span class="token punctuation">;</span>

<span class="token variable">\$predis</span> <span class="token operator">=</span> <span class="token function">app</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;redis&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">connection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// connection(\$name), \$name 默认为 \`default\`</span>
<span class="token variable">\$cacheDriver</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PredisCache</span><span class="token punctuation">(</span><span class="token variable">\$predis</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">cache</span> <span class="token operator">=</span> <span class="token variable">\$cacheDriver</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><blockquote><p>上面提到的 <code>app(&#39;redis&#39;)-&gt;connection(\$name)</code>, 这里的 <code>\$name</code> 是 laravel 项目中配置文件 <code>database.php</code> 中 <code>redis</code> 配置名 <code>default</code>：https://github.com/laravel/laravel/blob/master/config/database.php#L118 如果你使用的其它连接，对应传名称就好了。 如果你在使用Laravel 5.4，应将<code>\$predis = app(&#39;redis&#39;)-&gt;connection();</code>修改为：<code>\$predis = app(&#39;redis&#39;)-&gt;connection()-&gt;client();</code></p></blockquote><h2 id="使用自定义的缓存方式" tabindex="-1"><a class="header-anchor" href="#使用自定义的缓存方式" aria-hidden="true">#</a> 使用自定义的缓存方式</h2><p>如果你发现 doctrine 提供的几十种缓存方式都满足不了你的需求的话，那么你可以自己建立一个类来完成缓存操作，前提这个类得实现接口：<a href="https://github.com/doctrine/cache/blob/master/lib/Doctrine/Common/Cache/Cache.php" target="_blank" rel="noopener noreferrer">Doctrine\\Common\\Cache\\Cache`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></p><p>该接口有以下方法需要实现：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code>   <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">fetch</span><span class="token punctuation">(</span><span class="token variable">\$id</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">// 读取缓存</span>
   <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">contains</span><span class="token punctuation">(</span><span class="token variable">\$id</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 检查是否存在缓存</span>
   <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">save</span><span class="token punctuation">(</span><span class="token variable">\$id</span><span class="token punctuation">,</span> <span class="token variable">\$data</span><span class="token punctuation">,</span> <span class="token variable">\$lifeTime</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// 设置缓存</span>
   <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">delete</span><span class="token punctuation">(</span><span class="token variable">\$id</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 删除缓存</span>
   <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">getStats</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 获取状态</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>下面为一个示例：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">use</span> <span class="token package">Doctrine<span class="token punctuation">\\</span>Common<span class="token punctuation">\\</span>Cache<span class="token punctuation">\\</span>Cache</span> <span class="token keyword">as</span> CacheInterface<span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">MyCacheDriver</span> <span class="token keyword">implements</span> <span class="token class-name">CacheInterface</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">fetch</span><span class="token punctuation">(</span><span class="token variable">\$id</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 你自己从你想实现的存储方式读取并返回</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">contains</span><span class="token punctuation">(</span><span class="token variable">\$id</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 同理 返回存在与否 bool 值</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">save</span><span class="token punctuation">(</span><span class="token variable">\$id</span><span class="token punctuation">,</span> <span class="token variable">\$data</span><span class="token punctuation">,</span> <span class="token variable">\$lifeTime</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 用你的方式存储该缓存内容即可</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">delete</span><span class="token punctuation">(</span><span class="token variable">\$id</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 删除并返回 bool 值</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">getStats</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 这个你可以不用实现，返回 null 即可</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><p>然后实例化你的缓存类并在 EasyWeChat 里使用它：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$myCacheDriver</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyCacheDriver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">\$config</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token comment">//...</span>
    <span class="token string single-quoted-string">&#39;cache&#39;</span>   <span class="token operator">=&gt;</span> <span class="token variable">\$myCacheDriver</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token variable">\$wechatApp</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Application</span><span class="token punctuation">(</span><span class="token variable">\$options</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>OK，这样就完成了自定义缓存的操作。</p><!--]-->`)
}
;// CONCATENATED MODULE: ./.vuepress/.temp/pages/3.x/cache.html.vue?vue&type=template&id=50f122a0

;// CONCATENATED MODULE: ./.vuepress/.temp/pages/3.x/cache.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("/home/runner/work/easywechat/easywechat/docs/node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!/home/runner/work/easywechat/easywechat/docs/node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!/home/runner/work/easywechat/easywechat/docs/.vuepress/.temp/pages/3.x/cache.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const cache_html = (script);

/***/ })

};
;
//# sourceMappingURL=7613.app.js.map