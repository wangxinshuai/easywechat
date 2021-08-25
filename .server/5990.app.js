"use strict";
exports.id = 5990;
exports.ids = [5990];
exports.modules = {

/***/ 70905:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-b5e017e6",
  "path": "/4.x/customize/cache.html",
  "title": "缓存",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "以 redis 为例",
      "slug": "以-redis-为例",
      "children": [
        {
          "level": 3,
          "title": "Symfony 4.3 +",
          "slug": "symfony-4-3",
          "children": []
        },
        {
          "level": 3,
          "title": "Symfony 3.4 +",
          "slug": "symfony-3-4",
          "children": []
        },
        {
          "level": 3,
          "title": "Laravel 中使用",
          "slug": "laravel-中使用",
          "children": []
        },
        {
          "level": 3,
          "title": "Symfony 4.3 +",
          "slug": "symfony-4-3-1",
          "children": []
        },
        {
          "level": 3,
          "title": "Symfony 3.4 +",
          "slug": "symfony-3-4-1",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "使用自定义的缓存方式",
      "slug": "使用自定义的缓存方式",
      "children": []
    }
  ],
  "filePathRelative": "4.x/customize/cache.md",
  "git": {
    "updatedTime": 1629906046000,
    "contributors": []
  }
}


/***/ }),

/***/ 9214:
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
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.vuepress/.temp/pages/4.x/customize/cache.html.vue?vue&type=template&id=3d269341



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_OutboundLink = (0,external_vue_.resolveComponent)("OutboundLink")

  _push(`<!--[--><h1 id="缓存" tabindex="-1"><a class="header-anchor" href="#缓存" aria-hidden="true">#</a> 缓存</h1><p>本项目使用 <a href="https://github.com/symfony/cache" target="_blank" rel="noopener noreferrer">symfony/cache`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> 来完成缓存工作，它支持基本目前所有的缓存引擎。</p><p>在我们的 SDK 中的所有缓存默认使用文件缓存，缓存路径取决于 PHP 的临时目录，如果你需要自定义缓存，那么你需要做如下的事情：</p><p>你可以参考<a href="https://symfony.com/doc/current/components/cache.html" target="_blank" rel="noopener noreferrer">symfony/cache官方文档`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> 来替换掉应用中默认的缓存配置：</p><h2 id="以-redis-为例" tabindex="-1"><a class="header-anchor" href="#以-redis-为例" aria-hidden="true">#</a> 以 redis 为例</h2><h3 id="symfony-4-3" tabindex="-1"><a class="header-anchor" href="#symfony-4-3" aria-hidden="true">#</a> Symfony 4.3 +</h3><blockquote><p>请先安装 redis 拓展：<code>composer require predis/predis</code></p></blockquote><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code>
<span class="token keyword">use</span> <span class="token package">Symfony<span class="token punctuation">\\</span>Component<span class="token punctuation">\\</span>Cache<span class="token punctuation">\\</span>Adapter<span class="token punctuation">\\</span>RedisAdapter</span><span class="token punctuation">;</span>

<span class="token comment">// 创建 redis 实例</span>
<span class="token variable">\$client</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name class-name-fully-qualified"><span class="token punctuation">\\</span>Predis<span class="token punctuation">\\</span>Client</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;tcp://10.0.0.1:6379&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 创建缓存实例</span>
<span class="token variable">\$cache</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RedisAdapter</span><span class="token punctuation">(</span><span class="token variable">\$client</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 替换应用中的缓存</span>
<span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token function">rebind</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;cache&#39;</span><span class="token punctuation">,</span> <span class="token variable">\$cache</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="symfony-3-4" tabindex="-1"><a class="header-anchor" href="#symfony-3-4" aria-hidden="true">#</a> Symfony 3.4 +</h3><blockquote><p>请先安装 redis 拓展：https://github.com/phpredis/phpredis</p></blockquote><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code>
<span class="token keyword">use</span> <span class="token package">Symfony<span class="token punctuation">\\</span>Component<span class="token punctuation">\\</span>Cache<span class="token punctuation">\\</span>Simple<span class="token punctuation">\\</span>RedisCache</span><span class="token punctuation">;</span>

<span class="token comment">// 创建 redis 实例</span>
<span class="token variable">\$redis</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Redis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">\$redis</span><span class="token operator">-&gt;</span><span class="token function">connect</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;redis_host&#39;</span><span class="token punctuation">,</span> <span class="token number">6379</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 创建缓存实例</span>
<span class="token variable">\$cache</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RedisCache</span><span class="token punctuation">(</span><span class="token variable">\$redis</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 替换应用中的缓存</span>
<span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token function">rebind</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;cache&#39;</span><span class="token punctuation">,</span> <span class="token variable">\$cache</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h3 id="laravel-中使用" tabindex="-1"><a class="header-anchor" href="#laravel-中使用" aria-hidden="true">#</a> Laravel 中使用</h3><p>在 Laravel 中框架使用 <a href="https://github.com/nrk/predis" target="_blank" rel="noopener noreferrer">predis/predis`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>：</p><h3 id="symfony-4-3-1" tabindex="-1"><a class="header-anchor" href="#symfony-4-3-1" aria-hidden="true">#</a> Symfony 4.3 +</h3><blockquote><p>请先安装 redis 拓展：<code>composer require predis/predis</code></p></blockquote><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code>
<span class="token keyword">use</span> <span class="token package">Symfony<span class="token punctuation">\\</span>Component<span class="token punctuation">\\</span>Cache<span class="token punctuation">\\</span>Adapter<span class="token punctuation">\\</span>RedisAdapter</span><span class="token punctuation">;</span>

<span class="token comment">// 创建缓存实例</span>
<span class="token variable">\$cache</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RedisAdapter</span><span class="token punctuation">(</span><span class="token function">app</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;redis&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">connection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">client</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token function">rebind</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;cache&#39;</span><span class="token punctuation">,</span> <span class="token variable">\$cache</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="symfony-3-4-1" tabindex="-1"><a class="header-anchor" href="#symfony-3-4-1" aria-hidden="true">#</a> Symfony 3.4 +</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code>
<span class="token keyword">use</span> <span class="token package">Symfony<span class="token punctuation">\\</span>Component<span class="token punctuation">\\</span>Cache<span class="token punctuation">\\</span>Simple<span class="token punctuation">\\</span>RedisCache</span><span class="token punctuation">;</span>

<span class="token variable">\$predis</span> <span class="token operator">=</span> <span class="token function">app</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;redis&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">connection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">client</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// connection(\$name), \$name 默认为 \`default\`</span>
<span class="token variable">\$cache</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RedisCache</span><span class="token punctuation">(</span><span class="token variable">\$predis</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token function">rebind</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;cache&#39;</span><span class="token punctuation">,</span> <span class="token variable">\$cache</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><blockquote><p>上面提到的 <code>app(&#39;redis&#39;)-&gt;connection(\$name)</code>, 这里的 <code>\$name</code> 是 laravel 项目中配置文件 <code>database.php</code> 中 <code>redis</code> 配置名 <code>default</code>：https://github.com/laravel/laravel/blob/master/config/database.php#L118 如果你使用的其它连接，对应传名称就好了。</p></blockquote><h2 id="使用自定义的缓存方式" tabindex="-1"><a class="header-anchor" href="#使用自定义的缓存方式" aria-hidden="true">#</a> 使用自定义的缓存方式</h2><p>如果你发现 symfony 提供的十几种缓存方式都满足不了你的需求的话，那么你可以自己建立一个类来完成缓存操作，前提这个类得实现接口：<a href="http://www.php-fig.org/psr/psr-16/" target="_blank" rel="noopener noreferrer">PSR-16`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></p><p>该接口有以下方法需要实现：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code>   <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">get</span><span class="token punctuation">(</span><span class="token variable">\$key</span><span class="token punctuation">,</span> <span class="token variable">\$default</span> <span class="token operator">=</span> <span class="token constant">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">set</span><span class="token punctuation">(</span><span class="token variable">\$key</span><span class="token punctuation">,</span> <span class="token variable">\$value</span><span class="token punctuation">,</span> <span class="token variable">\$ttl</span> <span class="token operator">=</span> <span class="token constant">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">delete</span><span class="token punctuation">(</span><span class="token variable">\$key</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">getMultiple</span><span class="token punctuation">(</span><span class="token variable">\$keys</span><span class="token punctuation">,</span> <span class="token variable">\$default</span> <span class="token operator">=</span> <span class="token constant">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">setMultiple</span><span class="token punctuation">(</span><span class="token variable">\$values</span><span class="token punctuation">,</span> <span class="token variable">\$ttl</span> <span class="token operator">=</span> <span class="token constant">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">deleteMultiple</span><span class="token punctuation">(</span><span class="token variable">\$keys</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">has</span><span class="token punctuation">(</span><span class="token variable">\$key</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>下面为一个示例：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">use</span> <span class="token package">Psr<span class="token punctuation">\\</span>SimpleCache<span class="token punctuation">\\</span>CacheInterface</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">MyCustomCache</span> <span class="token keyword">implements</span> <span class="token class-name">CacheInterface</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">get</span><span class="token punctuation">(</span><span class="token variable">\$key</span><span class="token punctuation">,</span> <span class="token variable">\$default</span> <span class="token operator">=</span> <span class="token constant">null</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// your code</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">set</span><span class="token punctuation">(</span><span class="token variable">\$key</span><span class="token punctuation">,</span> <span class="token variable">\$value</span><span class="token punctuation">,</span> <span class="token variable">\$ttl</span> <span class="token operator">=</span> <span class="token constant">null</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// your code</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">delete</span><span class="token punctuation">(</span><span class="token variable">\$key</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// your code</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// your code</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">getMultiple</span><span class="token punctuation">(</span><span class="token variable">\$keys</span><span class="token punctuation">,</span> <span class="token variable">\$default</span> <span class="token operator">=</span> <span class="token constant">null</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// your code</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">setMultiple</span><span class="token punctuation">(</span><span class="token variable">\$values</span><span class="token punctuation">,</span> <span class="token variable">\$ttl</span> <span class="token operator">=</span> <span class="token constant">null</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// your code</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">deleteMultiple</span><span class="token punctuation">(</span><span class="token variable">\$keys</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// your code</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">has</span><span class="token punctuation">(</span><span class="token variable">\$key</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// your code</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br></div></div><p>然后实例化你的缓存类并在 EasyWeChat 里使用它：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token function">rebind</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;cache&#39;</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">MyCustomCache</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>OK，这样就完成了自定义缓存的操作。</p><!--]-->`)
}
;// CONCATENATED MODULE: ./.vuepress/.temp/pages/4.x/customize/cache.html.vue?vue&type=template&id=3d269341

;// CONCATENATED MODULE: ./.vuepress/.temp/pages/4.x/customize/cache.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("/home/runner/work/easywechat/easywechat/docs/node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!/home/runner/work/easywechat/easywechat/docs/node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!/home/runner/work/easywechat/easywechat/docs/.vuepress/.temp/pages/4.x/customize/cache.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const cache_html = (script);

/***/ })

};
;
//# sourceMappingURL=5990.app.js.map