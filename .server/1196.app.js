"use strict";
exports.id = 1196;
exports.ids = [1196];
exports.modules = {

/***/ 61587:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-53d57338",
  "path": "/troubleshooting.html",
  "title": "疑难解答",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "时区不对",
      "slug": "时区不对",
      "children": []
    },
    {
      "level": 2,
      "title": "curl: (60) SSL certificate problem: unable to get local issuer certificate",
      "slug": "curl-60-ssl-certificate-problem-unable-to-get-local-issuer-certificate",
      "children": []
    },
    {
      "level": 2,
      "title": "cURL error 56: SSLRead() return error -9806",
      "slug": "curl-error-56-sslread-return-error-9806",
      "children": []
    },
    {
      "level": 2,
      "title": "支付失败！当前页面的 URL 未注册",
      "slug": "支付失败-当前页面的-url-未注册",
      "children": []
    },
    {
      "level": 2,
      "title": "redirect_url 参数错误",
      "slug": "redirect-url-参数错误",
      "children": []
    },
    {
      "level": 2,
      "title": "[JSAPI] config: invalid url domain",
      "slug": "jsapi-config-invalid-url-domain",
      "children": []
    },
    {
      "level": 2,
      "title": "token验证失败、向公众号发送消息无任何反应",
      "slug": "token验证失败、向公众号发送消息无任何反应",
      "children": []
    },
    {
      "level": 2,
      "title": "Maximum function nesting level of '100' reached, aborting!",
      "slug": "maximum-function-nesting-level-of-100-reached-aborting",
      "children": []
    },
    {
      "level": 2,
      "title": "扫码支付 获取商户订单信息超时或商户返回httpcode非200!",
      "slug": "扫码支付-获取商户订单信息超时或商户返回httpcode非200",
      "children": []
    },
    {
      "level": 2,
      "title": "Request access_token fail:{\"errcode\":61023,\"errmsg\":\"refresh_token is invalid hint: [zDNUIA07582974]\"}！",
      "slug": "request-access-token-fail-errcode-61023-errmsg-refresh-token-is-invalid-hint-zdnuia07582974",
      "children": []
    },
    {
      "level": 2,
      "title": "替换Handler，让easywechat支持协程",
      "slug": "替换handler-让easywechat支持协程",
      "children": []
    }
  ],
  "filePathRelative": "troubleshooting.md",
  "git": {
    "updatedTime": 1629906046000,
    "contributors": []
  }
}


/***/ }),

/***/ 37131:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ troubleshooting_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(84103);
// EXTERNAL MODULE: external "@vue/server-renderer"
var server_renderer_ = __webpack_require__(32745);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.vuepress/.temp/pages/troubleshooting.html.vue?vue&type=template&id=cc8d64b4



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_OutboundLink = (0,external_vue_.resolveComponent)("OutboundLink")

  _push(`<!--[--><h1 id="疑难解答" tabindex="-1"><a class="header-anchor" href="#疑难解答" aria-hidden="true">#</a> 疑难解答</h1><p>在微信公众平台开发的道路上，遍布着各种大大小小的坑，有的人掉坑里，几经折腾又爬出来了，然后拍拍屁股走人。然而坑还在那里，还会继续有后来人掉进去……</p><p>这，是我们不愿看到的。</p><p>所以在这里，我们将陆续将微信开发中可能遇到的各种疑难问题进行汇总，并给出对应的解决办法。一般情况下，这些问题都可以对号入座，轻松地解决。但也不排除特殊情况，这时候你遇到的问题与文中某一个症状一致，但文中所给的解决方案并不凑效，这种情况下就需要发挥你自己的智慧，去……折腾了……</p><p>我们期待这一版块为各位的开发带来便利，同时也希望各位本着开源、分享的精神对其进行补充和完善，将各种坑一一填小、填平，让微信开发变得不那么痛苦，甚至，变成一件快乐的事……</p><h2 id="时区不对" tabindex="-1"><a class="header-anchor" href="#时区不对" aria-hidden="true">#</a> 时区不对</h2><p>使用命令 <code>date</code> 可以在服务器上查看当前时间，如果发现时区不对则需要修改时区：<a href="https://www.liberiangeek.net/2013/02/setting-the-correct-timezone-in-centos-and-ubuntu-servers-with-ntp/" target="_blank" rel="noopener noreferrer">Setting The Correct Timezone In CentOS And Ubuntu Servers With NTP`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></p><h2 id="curl-60-ssl-certificate-problem-unable-to-get-local-issuer-certificate" tabindex="-1"><a class="header-anchor" href="#curl-60-ssl-certificate-problem-unable-to-get-local-issuer-certificate" aria-hidden="true">#</a> curl: (60) SSL certificate problem: unable to get local issuer certificate</h2><p>这是 SSL 证书问题所致，在使用 SDK 调用微信支付等相关的操作时可能会遇到报 “SSL certificate problem: unable to get local issuer certificate” 的错误。</p><p>微信公众平台提供的文档中建议对部分较敏感的操作接口使用 https 协议进行访问，例如微信支付和红包等接口中涉及到操作商户资金的一些操作。 wechat SDK 遵循了官方建议，所以在调用这些接口时，除了按照官方文档设置操作证书文件外，还需要保证服务器正确安装了 CA 证书。</p><ol><li>下载 CA 证书</li></ol><p>你可以从 http://curl.haxx.se/ca/cacert.pem 下载 或者 使用<a href="https://pay.weixin.qq.com/wiki/doc/api/app.php?chapter=4_3" target="_blank" rel="noopener noreferrer">微信官方提供的证书`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>中的 CA 证书 <code>rootca.pem</code> 也是同样的效果。</p><ol start="2"><li>在 <code>php.ini</code> 中配置 CA 证书</li></ol><p>只需要将上面下载好的 CA 证书放置到您的服务器上某个位置，然后修改 <code>php.ini</code> 的 <code>curl.cainfo</code> 为该路径（<strong>绝对路径！</strong>），重启 <code>php-fpm</code> 服务即可。</p><div class="language-ini ext-ini line-numbers-mode"><pre class="language-ini"><code><span class="token key attr-name">curl.cainfo</span> <span class="token punctuation">=</span> <span class="token value attr-value">/path/to/downloaded/cacert.pem</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><blockquote><p>{warning} 注意证书文件<strong>路径为绝对路径</strong>！以自己实际情况为准。</p></blockquote><p>其它修改 HTTP 类源文件的方式是不允许的。</p><h2 id="curl-error-56-sslread-return-error-9806" tabindex="-1"><a class="header-anchor" href="#curl-error-56-sslread-return-error-9806" aria-hidden="true">#</a> cURL error 56: SSLRead() return error -9806</h2><p>目前在 OSX 下，发现使用 HomeBrew 装的 PHP 7.0 有这个问题，解决方案是重新 brew 安装 PHP：</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>\$ brew <span class="token function">install</span> homebrew/php/php70 --with-homebrew-openssl --with-homebrew-curl --without-snmp -vvv
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>验证：</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>\$ php -i <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&#39;OpenSSL support&#39;</span>

OpenSSL support <span class="token operator">=</span><span class="token operator">&gt;</span> enabled
OpenSSL support <span class="token operator">=</span><span class="token operator">&gt;</span> enabled
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="支付失败-当前页面的-url-未注册" tabindex="-1"><a class="header-anchor" href="#支付失败-当前页面的-url-未注册" aria-hidden="true">#</a> 支付失败！当前页面的 URL 未注册</h2><p>这是由于微信支付授权目录未正确配置引起的。此时开发者应该登录微信公众平台，进入**【微信支付】-&gt;【开发设置】**进行设置。</p><ol><li><p>公众号可添加3个支付授权目录，满足不同应用使用同一个公众号进行支付的业务需求。</p></li><li><p>正确的**【支付授权目录】<strong>应以 <code>http://</code> 或 <code>https://</code> 开头，并以正斜杠 <code>/</code> 结尾，授权目录所包含的域名</strong>必须经过 ICP 备案**。</p></li><li><p>支付授权目录需<strong>细化至二级或三级目录</strong>。</p></li><li><p>所有<strong>实际调起微信支付请求的页面都必须要所配置的支付授权目录之下</strong>。</p></li><li><p>在开发过程中，也可以使用测试授权目录进行开发测试，此时还<strong>应该将参与测试的个人微信号添加到测试白名单中</strong>，否则将出现对应的错误提示……</p></li></ol><blockquote><p>{warning} 配置前请先理解<strong>页面</strong>、<strong>目录</strong>、<strong>URL <strong>以及</strong>域名</strong>等几个基本概念，并对自己所使用的框架的路由机制有一个大致了解。这样你才会知道自己正在配置的参数是个啥玩意儿，有什么卵用…… 😄</p></blockquote><h2 id="redirect-url-参数错误" tabindex="-1"><a class="header-anchor" href="#redirect-url-参数错误" aria-hidden="true">#</a> redirect_url 参数错误</h2><p>这是由于程序使用了<strong>网页授权</strong>而公众号没有正确配置**【网页授权域名】<strong>所致。此时你需要登录<a href="https://mp.weixin.qq.com/" target="_blank" rel="noopener noreferrer">微信公众平台`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>，在【开发】-&gt;【接口权限】页面找到</strong>网页授权获取用户基本信息**进行配置并保存。</p><ol><li><p>网页授权域名应该为通过 ICP 备案的有效域名，否则保存时无法通过安全监测。</p></li><li><p>网页授权域名即程序完成授权获得授权 code 后跳转到的页面的域名，一般情况下为你的业务域名。</p></li><li><p>网页授权域名配置成功后会立即生效。</p></li><li><p>公众号的网页授权域名只可配置一个，请合理规划你的业务，否则你会发现……授权域名不够用哈。</p></li></ol><h2 id="jsapi-config-invalid-url-domain" tabindex="-1"><a class="header-anchor" href="#jsapi-config-invalid-url-domain" aria-hidden="true">#</a> [JSAPI] config: invalid url domain</h2><p>在使用 JS-SDK 进行开发时，每个页面都需要调用 wx.config() 方法配置 JSPAI 参数。如果没有正确配置 <strong>JSAPI 安全域名</strong>并且开启了调试模式，此时就报此错误。遇到这个问题时，开发者需要登录微信公众平台，进入【公众号设置】-&gt;【功能设置】页面，将项目所使用的域名添加至 **【JSAPI 安全域名】**列表中。</p><ol><li><p>一个公众号同时最多可绑定<strong>三个</strong>安全域名，并且这些域名必须为通过 <strong>ICP 备案</strong>的<strong>一级或一级以上</strong>的有效域名。</p></li><li><p>JSAPI 安全域名每个月<strong>限修改三次</strong>，修改任何一个都算，所以，请谨慎操作。</p></li><li><p>如果需要使用 JSAPI 调起支付功能，则支付目录必须也在所配置的<strong>安全域名之下</strong>，并且需要将支付目录添加至<strong>支付授权目录</strong>。</p></li></ol><h2 id="token验证失败、向公众号发送消息无任何反应" tabindex="-1"><a class="header-anchor" href="#token验证失败、向公众号发送消息无任何反应" aria-hidden="true">#</a> token验证失败、向公众号发送消息无任何反应</h2><p>相信对接公众号一般是微信开发者进行开发过程中最先进行的工作，而在这看似简单的配置操作中，也可能会掉坑里。 最常见的两种情况就如下：</p><ol><li><p>确认你 “<strong>启用</strong>” 了开发模式， token 验证通过不代表启用，保存后也不代表启用。看到红色 “<strong>停用</strong>” 才真正的是启用了。</p></li><li><p>配置好URL(服务器地址)以及Token(令牌)后，点击保存时提示<strong>token验证失败</strong>，出现这种情况的原因有多种，其中之一便是网络不稳定，所以<strong>可尝试多次保存</strong>，若始终无法通过再排查其它可能因素。</p></li><li><p>配置保存成功之后，向公众号发送消息无任何反应，自己的消息处理程序也没有被调用的记录（无对应日志）。这种情况下如果你尝试<strong>反复停用和启用服务器配置</strong>，可能突然间惊奇地了现，问题莫名其妙的解决了。</p></li><li><p>使用在线调试工具的消息接口，http://mp.weixin.qq.com/debug/， 只要返回绿色的“<strong>请求成功</strong>”，就代表你的代码没有问题，请<strong>重复上面第3项</strong>再测试。</p></li><li><p><strong>如果你在用什么本地开发工具，或者什么 ngrok 代理到本机这样的开发方式，那么失败就很正常了，微信服务器到你机器的网络延迟太大（还是用服务器开发吧）。</strong></p></li></ol><blockquote><p>{warning} 请开发者理解服务器 TOKEN 验证原理（官方文档有说明）并谨记服务器验证时使用 GET 方式访问，而公众平台向你的服务器发送消息/数据则使用 POST 方式，所以服务器验证成功之后，在某些启用了 CSRF 验证的框架里，接收消息时可能还会遇到 CSRF 相关的问题，请根据自己项目实际情况进行排查。 另外有的朋友的 Laravel 里使用了 laravel-debugbar，这个组件的原理是在页面输出时在后面添加 HTML 来实现的，所以它会改变我们返回给微信的内容，此时要么卸载，要么禁用掉它。</p></blockquote><h2 id="maximum-function-nesting-level-of-100-reached-aborting" tabindex="-1"><a class="header-anchor" href="#maximum-function-nesting-level-of-100-reached-aborting" aria-hidden="true">#</a> Maximum function nesting level of &#39;100&#39; reached, aborting!</h2><p>在使用了 Xdebug 的环境下可能出现这个问题。这是由于 Xdebug 限制函数嵌套的最大层级数（默认为100），当嵌套次数达到该值便会触发 Xdebug 跳出嵌套并报此错误。</p><p>为避免这个问题，<strong>可以将 Xdebug 的 max_nesting_level 参数适当设置大一些</strong>，通常设置为200就可以了（当然可根据自己实际情况设置为更大的值）。</p><p>如下，修改 php.ini 配置文件后，重启 Apache 或 php-fpm 服务即可。</p><div class="language-ini ext-ini line-numbers-mode"><pre class="language-ini"><code><span class="token key attr-name">xdebug.max_nesting_level</span><span class="token punctuation">=</span><span class="token value attr-value">200</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="扫码支付-获取商户订单信息超时或商户返回httpcode非200" tabindex="-1"><a class="header-anchor" href="#扫码支付-获取商户订单信息超时或商户返回httpcode非200" aria-hidden="true">#</a> 扫码支付 获取商户订单信息超时或商户返回httpcode非200!</h2><p>1.确定签名正确,使用SDK基本上不会出什么问题 2.微信调用扫码支付回调链接,使用POST方式,确定服务器回调方法是否取消csrf验证</p><h2 id="request-access-token-fail-errcode-61023-errmsg-refresh-token-is-invalid-hint-zdnuia07582974" tabindex="-1"><a class="header-anchor" href="#request-access-token-fail-errcode-61023-errmsg-refresh-token-is-invalid-hint-zdnuia07582974" aria-hidden="true">#</a> Request access_token fail:{&quot;errcode&quot;:61023,&quot;errmsg&quot;:&quot;refresh_token is invalid hint: [zDNUIA07582974]&quot;}！</h2><p>在用户授权时会获得该authorizer_refresh_token刷新令牌，而当缓存或数据库存储的该authorizer_refresh_token刷新令牌丢失后，可能会出现该问题，微信文档中说明</p><p>1.接口调用凭据刷新令牌（在授权的公众号具备API权限时，才有此返回值），刷新令牌主要用于第三方平台获取和刷新已授权用户的access_token，只会在授权时刻提供，请妥善保存。</p><p>2.一旦丢失，只能让用户重新授权，才能再次拿到新的刷新令牌(https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&amp;t=resource/res_list&amp;verify=1&amp;id=open1453779503&amp;token=&amp;lang=)。</p><p>3.为避免该问题，请将存储该刷新令牌的缓存有效期设置为0(永久存储)，并尽量不要去将该缓存或数据库清空。</p><p>如下：以redis为例。</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token string single-quoted-string">&#39;expire&#39;</span>     <span class="token operator">=&gt;</span> <span class="token number">0</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="替换handler-让easywechat支持协程" tabindex="-1"><a class="header-anchor" href="#替换handler-让easywechat支持协程" aria-hidden="true">#</a> 替换Handler，让easywechat支持协程</h2><p>在Swoft、IMI等基于Swoole的协程框架中使用easywechat时，不免会有一个问题，就是guzzle客户端内置的handler不支持协程的问题。 这里，提供一个办法主动替换容器内的 guzzle_handler.</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span> <span class="token operator">=</span> <span class="token class-name static-context">Factory</span><span class="token operator">::</span><span class="token function">miniProgram</span><span class="token punctuation">(</span><span class="token variable">\$config</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">\$app</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;guzzle_handler&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token class-name static-context">CoroutineHandler</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>鉴于有些同学找不到可用的 <code>CoroutineHandler</code>，这里提供几个，供大家使用。</p><ul><li>hyperf/guzzle</li><li>yurunsoft/guzzle-swoole</li><li>mix/guzzle-hook</li></ul><!--]-->`)
}
;// CONCATENATED MODULE: ./.vuepress/.temp/pages/troubleshooting.html.vue?vue&type=template&id=cc8d64b4

;// CONCATENATED MODULE: ./.vuepress/.temp/pages/troubleshooting.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("/home/runner/work/easywechat/easywechat/docs/node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!/home/runner/work/easywechat/easywechat/docs/node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!/home/runner/work/easywechat/easywechat/docs/.vuepress/.temp/pages/troubleshooting.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const troubleshooting_html = (script);

/***/ })

};
;
//# sourceMappingURL=1196.app.js.map